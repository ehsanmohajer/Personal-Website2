# AI Chatbot Guide - Sani AI Studio

> Complete documentation for the Google Gemini-powered AI chatbot

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Architecture](#architecture)
- [Customization](#customization)
- [Cost Optimization](#cost-optimization)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

---

## 🤖 Overview

The AI chatbot is a cost-optimized, intelligent assistant powered by **Google Gemini API** (gemini-2.0-flash model). It helps visitors learn about services, book consultations, and get answers to common questions.

**Key Benefits:**
- 🧠 Smart "thinking brain" powered by Gemini AI
- 💰 Cost-optimized with smart gatekeeper system
- 🎯 Business-focused with clear CTAs
- 🚀 Fast responses with pre-defined answers for common queries
- 📱 Mobile-friendly floating chat interface

---

## ✨ Features

### 1. **Smart Gatekeeper System**
Filters questions before sending to API to save costs:
- ✅ Blocks irrelevant questions (weather, sports, politics)
- ✅ Handles greetings locally ("Hi", "Hello")
- ✅ Recognizes affirmative responses ("Yes", "Sure", "Okay")
- ✅ Only sends business-related questions to Gemini API

### 2. **Intelligent Keyword Scoring**
Two-tier keyword system:
- **High-Value Keywords** (3 points): "hire", "project", "quote", "cv", "mentor"
- **Context Keywords** (1 point): "website", "code", "price", "contact", "help"
- Questions scoring > 0.2 pass through to Gemini

### 3. **Conversational FAQs**
Pre-written FAQs teach the AI to respond naturally:
- Services and pricing
- Tech stack and capabilities
- CV review and mentoring
- Contact and booking information

### 4. **Call-to-Action Prompts**
Each service has a CTA suggestion to guide conversations:
- Web Dev: "Would you like to see examples of my work?"
- AI Consulting: "Are you looking to automate a specific process?"
- Mentoring: "Are you currently studying or looking to switch careers?"

---

## 🚀 Setup

### Step 1: Get Google Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** → **"Create API key"**
4. Copy the API key

### Step 2: Add to Environment Variables

**For Local Development:**
Create/edit `.env.local`:
```env
GOOGLE_GEMINI_API_KEY=your_api_key_here
```

**For Production (Vercel):**
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add: `GOOGLE_GEMINI_API_KEY` = `your_api_key_here`
4. Click "Save"
5. Redeploy the project

### Step 3: Install Dependencies

```bash
npm install @google/genai --legacy-peer-deps
```

### Step 4: Test Locally

```bash
npm run dev
```

Open http://localhost:3000 and click the blue chat button in the bottom-right corner.

---

## 🏗️ Architecture

### File Structure

```
portfolio-vanilla/
├── app/api/chatbot/
│   └── route.ts              # API endpoint for chatbot
├── components/layout/
│   └── chat-assistant-new.tsx # UI component
└── lib/
    └── chatbot-knowledge-base.ts # Knowledge base & logic
```

### How It Works

```
User Message
    ↓
[Gatekeeper Check]
    ↓
Is it a greeting? → Return pre-defined response ✅
Is it affirmative? → Return booking info ✅
Is relevance score < 0.2? → Return redirect message ❌
    ↓
[Pass to Gemini API]
    ↓
Gemini analyzes with knowledge base
    ↓
Return intelligent response ✅
```

### Components

**1. Knowledge Base** (`lib/chatbot-knowledge-base.ts`)
```typescript
export const knowledgeBase = {
  company: { name, owner, mission, tone },
  services: [ { id, name, description, details, cta } ],
  contact: { email, bookingLink },
  faqs: [ { question, answer } ],
  businessRules: [ ... ],
  keywords: { highValue, relevant, irrelevant }
}
```

**2. Gatekeeper Function**
```typescript
getRelevanceScore(message: string): number
// Returns 0-1 score based on keywords
// < 0.2 = blocked, ≥ 0.2 = sent to Gemini
```

**3. API Route** (`app/api/chatbot/route.ts`)
- Validates input
- Checks gatekeeper
- Calls Gemini API if passed
- Returns JSON response

**4. Chat UI** (`components/layout/chat-assistant-new.tsx`)
- Floating chat button
- Animated modal window
- Message history with timestamps
- Typing indicator
- Auto-scroll

---

## 🎨 Customization

### Update Company Information

Edit `lib/chatbot-knowledge-base.ts`:

```typescript
company: {
  name: "Your Company Name",
  owner: "Your Name",
  mission: "Your mission statement",
  tone: "Your desired tone (friendly, professional, etc.)",
}
```

### Add New FAQ

```typescript
faqs: [
  // ... existing FAQs
  {
    question: "New question here?",
    answer: "Your answer here. Be conversational and helpful!",
  },
]
```

### Modify Services

```typescript
services: [
  {
    id: "custom-service",
    name: "Custom Service",
    description: "Short pitch (1 sentence)",
    details: "Detailed explanation",
    cta: "Your call-to-action question?",
  },
]
```

### Add Keywords

**High-Value Keywords** (strong buying intent):
```typescript
highValue: [
  "hire", "project", "quote", "budget",
  // Add your industry-specific terms
]
```

**Context Keywords** (general relevance):
```typescript
relevant: [
  "website", "code", "help", "price",
  // Add related terms
]
```

**Block Keywords** (save costs):
```typescript
irrelevant: [
  "weather", "sports", "recipe",
  // Add off-topic terms
]
```

### Adjust Gatekeeper Threshold

Edit `app/api/chatbot/route.ts`:

```typescript
const RELEVANCE_THRESHOLD = 0.2; // Lower = more permissive
// 0.1 = very permissive (more API calls)
// 0.3 = stricter filtering (fewer API calls)
// 0.2 = balanced (recommended)
```

### Change System Prompt

Edit `formatKnowledgeBase()` function to change how Gemini behaves.

---

## 💰 Cost Optimization

### Free Tier Limits

**Google Gemini API Free Tier:**
- ✅ 15 requests per minute
- ✅ 1500 requests per day
- ✅ gemini-2.0-flash model

**Estimated Usage:**
- Average portfolio: 50-200 requests/day
- Free tier is sufficient for most portfolios
- Enable billing only if you exceed limits

### How the Gatekeeper Saves Money

**Without Gatekeeper:**
- Every message = 1 API call
- "Hi" → API call ❌
- "What's the weather?" → API call ❌
- 100 random messages = $$$

**With Gatekeeper:**
- "Hi" → Pre-defined response ✅ (FREE)
- "What's the weather?" → Blocked ✅ (FREE)
- "How can you help me?" → Gemini API ✅ (PAID)
- ~60-70% cost reduction

### Cost Tracking

Monitor API usage:
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Go to "APIs & Services" → "Dashboard"
3. Select "Generative Language API"
4. View usage metrics

**Enable Billing Alerts:**
1. Go to "Billing" → "Budgets & alerts"
2. Set budget (e.g., $10/month)
3. Get email alerts at 50%, 90%, 100%

---

## 🧪 Testing

### Test via Chat UI

1. Open http://localhost:3000
2. Click blue chat button
3. Try these test cases:

**Greetings (Pre-defined):**
- "Hi"
- "Hello"
- "Hey"
→ Should get instant response without API call

**Affirmative Responses (Pre-defined):**
- "Yes"
- "Sure"
- "Okay"
→ Should get booking information

**Business Questions (Gemini AI):**
- "What services do you offer?"
- "Can you help with AI consulting?"
- "How much does a website cost?"
→ Should get intelligent, conversational responses

**Off-Topic (Blocked):**
- "What's the weather?"
- "Tell me a joke"
→ Should get polite redirect

### Test via API (Terminal)

```bash
# Test chatbot endpoint
curl -X POST http://localhost:3000/api/chatbot \
  -H "Content-Type: application/json" \
  -d '{"message":"What services do you offer?"}'
```

**Expected Response:**
```json
{
  "response": "I offer web development...",
  "costsaved": false
}
```

### Check Cost Savings

Look for `costsaved: true` in responses:
- `true` = Gatekeeper handled it (FREE)
- `false` = Gemini API was called (PAID)

---

## 🐛 Troubleshooting

### Issue: "API key not found"

**Solution:**
```bash
# Check .env.local file exists
cat .env.local

# Restart dev server
npm run dev
```

### Issue: "403 Permission Denied"

**Causes:**
- API key has website restrictions
- API key not enabled for Generative Language API

**Solution:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. APIs & Services → Credentials
3. Edit your API key
4. Application Restrictions → Set to "None"
5. API Restrictions → Select "Generative Language API"
6. Save

### Issue: "429 Quota Exceeded"

**Causes:**
- Free tier limit reached (1500 requests/day)

**Solutions:**
1. Wait 24 hours for quota reset
2. Enable billing for higher limits
3. Tighten gatekeeper threshold to reduce API calls

### Issue: Chatbot gives wrong answers

**Solutions:**
1. Update FAQs in `lib/chatbot-knowledge-base.ts`
2. Add more keywords for better detection
3. Adjust system prompt in `formatKnowledgeBase()`
4. Test with different phrasings

### Issue: Too many questions blocked

**Solution:**
Lower the relevance threshold:
```typescript
const RELEVANCE_THRESHOLD = 0.15; // Was 0.2
```

### Issue: Too many API calls (expensive)

**Solution:**
Raise the relevance threshold:
```typescript
const RELEVANCE_THRESHOLD = 0.3; // Was 0.2
```

---

## 📊 Monitoring

### Check Terminal Logs

```bash
# Development server shows:
POST /api/chatbot 200 in 1421ms  # Gemini API called
POST /api/chatbot 200 in 5ms     # Gatekeeper handled
```

Fast response (< 50ms) = Gatekeeper (FREE)  
Slow response (> 500ms) = Gemini API (PAID)

### Monitor Vercel Logs

1. Go to Vercel Dashboard → Your Project
2. Click "Logs" tab
3. Filter by `/api/chatbot`
4. Check response times and errors

---

## 🎯 Best Practices

### 1. Start Conservative
- Begin with threshold 0.2 or 0.3
- Monitor usage for 1-2 weeks
- Adjust based on blocked legitimate questions

### 2. Expand Keywords Gradually
- Add keywords as you notice patterns
- Don't over-optimize initially
- Let Gemini handle edge cases

### 3. Update FAQs Regularly
- Add FAQs for frequently asked questions
- Use conversational language
- Include clear CTAs

### 4. Test Before Deploying
- Test all conversation flows locally
- Verify gatekeeper blocks correctly
- Check API key works in production

### 5. Monitor Costs
- Set up billing alerts
- Review usage weekly
- Optimize if costs exceed expectations

---

## 🔒 Security Notes

### Never Commit API Keys

```bash
# .env.local is in .gitignore (safe)
# Never commit .env.local to git
git status # should NOT show .env.local
```

### Rotate API Keys

If exposed:
1. Delete old key in Google Cloud Console
2. Create new key
3. Update Vercel environment variables
4. Redeploy

### Rate Limiting

The chatbot doesn't have rate limiting. Consider adding:
```typescript
// Example: Limit to 10 messages per minute per IP
// Implement in app/api/chatbot/route.ts
```

---

## 📈 Future Enhancements

### Potential Improvements

1. **Conversation History**
   - Store last 5 messages for context
   - Improves multi-turn conversations

2. **User Feedback**
   - 👍 / 👎 buttons on responses
   - Collect data to improve answers

3. **Analytics Integration**
   - Track popular questions
   - Measure conversion from chat

4. **Multilingual Support**
   - Detect user language
   - Respond in same language

5. **File Upload**
   - Allow CV upload via chat
   - Instant CV review booking

---

## 📞 Support

For issues or questions:
- **Email:** ehsanmohajer.fi@gmail.com
- **Website:** https://ehsanmohajer.fi/contact

---

## 📄 License

This chatbot implementation is part of the proprietary Sani AI Studio portfolio.

**© 2026 Sani AI Studio. All rights reserved.**

---

**Built with ❤️ using Google Gemini API, Next.js, and TypeScript**
