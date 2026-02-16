import { GoogleGenAI } from "@google/genai";
import {
  knowledgeBaseBilingual,
  getRelevanceScore,
  formatKnowledgeBase,
  detectLanguage,
} from "@/lib/chatbot-knowledge-base-bilingual";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

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

    // Detect language (Finnish or English)
    const language = detectLanguage(message);

    // Handle greetings specifically (friendly response without API call)
    const lowerMessage = message.toLowerCase().trim();
    if (['hello', 'hi', 'hey', 'hei', 'moi', 'terve'].includes(lowerMessage)) {
      const greeting = language === 'fi' 
        ? "👋 Hei! Olen Sani AI Studion assistentti. Kysy minulta web-kehityksestä, tekoälykonsultoinnista tai mentoroinnista!"
        : "👋 Hi there! I'm Sani AI Studio's assistant. Ask me about Web Dev, AI Consulting, or Mentoring!";
      
      return Response.json({
        response: greeting,
        costsaved: true,
      });
    }

    // Handle affirmative responses (yes, sure, okay, etc.)
    const affirmativeWords = ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'absolutely', 'definitely', 'please', 'i would', 'kyllä', 'joo', 'totta kai', 'selvä', 'ehdottomasti'];
    if (affirmativeWords.includes(lowerMessage) || 
        lowerMessage.includes('yes please') || 
        lowerMessage.includes('sounds good') ||
        lowerMessage.includes('let\'s do it') ||
        lowerMessage.includes('kuulostaa hyvältä')) {
      
      const bookingInfo = language === 'fi'
        ? "Mahtavaa! 🎉 Voit varata konsultaation Ehsanin kanssa:\n\n1. Vierailemalla yhteydenottosivulla: ehsanmohajer.fi/contact\n2. Lähettämällä sähköpostia: ehsanmohajer.fi@gmail.com\n\nEhsan vastaa sinulle 24 tunnin sisällä ja sopii sinulle sopivan ajan!"
        : "Awesome! 🎉 You can book a consultation with Ehsan by:\n\n1. Visiting the contact page: ehsanmohajer.fi/contact\n2. Emailing directly: ehsanmohajer.fi@gmail.com\n\nEhsan will get back to you within 24 hours to schedule a time that works for you!";
      
      return Response.json({
        response: bookingInfo,
        costsaved: true,
      });
    }

    // Only block obvious off-topic questions (weather, sports, etc.)
    // Let Gemini handle the "thinking" for business-related questions
    if (relevanceScore < RELEVANCE_THRESHOLD) {
      const redirectMessage = language === 'fi'
        ? "Arvostan kysymystä! 😊 Olen erikoistunut web-kehitykseen, tekoälykonsultointiin ja mentorointiin. Voinko auttaa sinua jossain näissä asioissa?"
        : "I appreciate the question! 😊 I'm specialized in web development, AI consulting, and mentoring. Is there anything I can help you with in those areas?";
      
      return Response.json({
        response: redirectMessage,
        costsaved: true,
      });
    }

    // Call Gemini API with the new SDK and detected language
    const systemPrompt = formatKnowledgeBase(language);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: systemPrompt + "\n\nUser question: " + message,
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
