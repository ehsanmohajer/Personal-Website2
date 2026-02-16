import { GoogleGenAI } from "@google/genai";
import {
  knowledgeBase,
  getRelevanceScore,
  formatKnowledgeBase,
} from "@/lib/chatbot-knowledge-base";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `You are a warm, welcoming, and enthusiastic AI assistant for Sani AI Studio, representing Ehsan, a talented web developer and AI specialist.

YOUR PERSONALITY:
- Friendly, approachable, and genuinely interested in helping visitors
- Warm and enthusiastic about Sani AI Studio's services
- Professional yet conversational in tone
- Use emojis occasionally (but sparingly) to add warmth and personality
- Make people feel valued and excited about what we offer

IMPORTANT RULES:
1. ONLY answer questions related to: web development, AI consulting, mentoring, services, pricing, projects, and booking
2. For greetings (Hi, Hello, Hey, Thanks, etc.), respond warmly with genuine enthusiasm - make the visitor feel welcomed!
3. For off-topic questions, politely redirect while remaining friendly: "I'm specialized in web development, AI consulting, and mentoring. How can I help with those areas?" (Don't use a canned response)
4. Keep answers concise but conversational (2-3 sentences for simple Q&A, can be longer for detailed questions)
5. Be genuinely helpful - provide actionable information when possible
6. If you don't have the answer, warmly offer to have Ehsan follow up directly
7. Never mention the knowledge base or technical limitations

KNOWLEDGE BASE:
${formatKnowledgeBase()}

Remember: Your goal is to make visitors feel welcomed, valued, and excited about working with Sani AI Studio. Be warm, genuine, and helpful!`;

const RELEVANCE_THRESHOLD = 0.2; // Lower threshold to let more questions through to Gemini

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }
     

    // GATEKEEPER: Check relevance before calling API
    const relevanceScore = getRelevanceScore(message);

    // Handle greetings specifically (friendly response without API call)
    const lowerMessage = message.toLowerCase().trim();
    if (['hello', 'hi', 'hey'].includes(lowerMessage)) {
      return Response.json({
        response: "👋 Hi there! I'm Sani AI Studio's assistant. Ask me about Web Dev, AI Consulting, or Mentoring!",
        costsaved: true,
      });
    }

    // Handle affirmative responses (yes, sure, okay, etc.)
    if (['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'absolutely', 'definitely', 'please', 'i would'].includes(lowerMessage) || 
        lowerMessage.includes('yes please') || 
        lowerMessage.includes('sounds good') ||
        lowerMessage.includes('let\'s do it')) {
      return Response.json({
        response: "Awesome! 🎉 You can book a consultation with Ehsan by:\n\n1. Visiting the contact page: ehsanmohajer.fi/contact\n2. Emailing directly: ehsan@saniaistudio.com\n\nEhsan will get back to you within 24 hours to schedule a time that works for you!",
        costsaved: true,
      });
    }

    // Only block obvious off-topic questions (weather, sports, etc.)
    // Let Gemini handle the "thinking" for business-related questions
    if (relevanceScore < RELEVANCE_THRESHOLD) {
      return Response.json({
        response:
          "I appreciate the question! 😊 I'm specialized in web development, AI consulting, and mentoring. Is there anything I can help you with in those areas?",
        costsaved: true,
      });
    }

    // Call Gemini API with the new SDK
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: SYSTEM_PROMPT + "\n\nUser question: " + message,
            },
          ],
        },
      ],
    });

    const responseText =
      response.text ||
      "I couldn't generate a response. Please try again or contact me directly.";

    return Response.json({
      response: responseText,
      costsaved: false,
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return Response.json(
      {
        error: "Failed to process your question. Please try again.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
