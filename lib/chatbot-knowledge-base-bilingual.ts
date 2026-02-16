// Bilingual Knowledge base for the chatbot (English & Finnish)
// Kaksikielinen tietokanta chat-botille (englanti ja suomi)

export const knowledgeBaseBilingual = {
  company: {
    name: "Sani AI Studio",
    owner: "Ehsan Mohajer",
    mission: {
      en: "To bridge the gap between complex AI technologies and practical business solutions.",
      fi: "Yhdistää monimutkaiset tekoälyteknologiat käytännön liiketoimintaratkaisuihin.",
    },
    tone: {
      en: "Friendly, enthusiastic, professional, and encouraging. Use emojis occasionally to keep it light.",
      fi: "Ystävällinen, innostunut, ammattimainen ja rohkaiseva. Käytä emojeja silloin tällöin pitääksesi ilmapiirin kevyenä.",
    },
  },
  services: {
    en: [
      {
        id: "web-dev",
        name: "Web Development",
        description: "I build high-performance, beautiful websites that actually convert.",
        details: "Specializing in modern stacks like React, Next.js, and Tailwind CSS. I don't just write code; I build scalable digital products.",
        cta: "Would you like to see some examples of my recent work?",
      },
      {
        id: "ai-consulting",
        name: "AI Consulting",
        description: "I help businesses integrate AI agents and automation to save time and money.",
        details: "From strategy to implementation. I can help you deploy LLMs, build custom chatbots, or automate boring workflows.",
        cta: "Are you looking to automate a specific process in your business?",
      },
      {
        id: "mentoring",
        name: "1-on-1 Mentoring",
        description: "Personalized guidance to accelerate your tech career.",
        details: "I help students and junior developers master React, TypeScript, and AI engineering.",
        cta: "Are you currently studying or looking to switch careers?",
      },
    ],
    fi: [
      {
        id: "web-dev",
        name: "Web-kehitys",
        description: "Rakennan tehokkaita, kauniita verkkosivustoja jotka todella konvertoivat.",
        details: "Erikoistun moderneihin teknologioihin kuten React, Next.js ja Tailwind CSS. En vain kirjoita koodia; rakennan skaalautuvia digitaalisia tuotteita.",
        cta: "Haluaisitko nähdä esimerkkejä viimeisimmistä töistäni?",
      },
      {
        id: "ai-consulting",
        name: "AI-konsultointi",
        description: "Autan yrityksiä integroimaan tekoälyagentteja ja automaatiota säästääkseen aikaa ja rahaa.",
        details: "Strategiasta toteutukseen. Voin auttaa sinua ottamaan käyttöön LLM:iä, rakentamaan mukautettuja chatbotteja tai automatisoimaan tylsiä työnkulkuja.",
        cta: "Haluatko automatisoida tietyn prosessin yrityksessäsi?",
      },
      {
        id: "mentoring",
        name: "1-on-1 mentorointi",
        description: "Henkilökohtaista ohjausta teknologia-urasi nopeuttamiseksi.",
        details: "Autan opiskelijoita ja juniori-kehittäjiä hallitsemaan Reactin, TypeScriptin ja tekoälyinsinööritaidon.",
        cta: "Opiskeletko tällä hetkellä tai haluatko vaihtaa uraa?",
      },
    ],
  },
  contact: {
    email: "ehsanmohajer.fi@gmail.com",
    bookingLink: "https://ehsanmohajer.fi/contact",
  },
  faqs: {
    en: [
      {
        question: "How much does a website cost?",
        answer: "It really depends on the complexity! A simple landing page is different from a full AI platform. Generally, I offer project-based pricing. If you tell me a bit about what you need, I can give you a rough estimate!",
      },
      {
        question: "What is your tech stack?",
        answer: "I'm a big fan of the modern stack: React, Next.js, and TypeScript for the web. For styling, I use Tailwind CSS. On the AI side, I work with OpenAI, Anthropic, and Google Gemini APIs, along with Python for backend logic.",
      },
      {
        question: "Can you build an AI agent for me?",
        answer: "Absolutely! That's my specialty. Whether you need a customer support bot, a data processing agent, or a personalized assistant, I can design and build it for you.",
      },
      {
        question: "I am a beginner, can you mentor me?",
        answer: "I'd love to! I work with many beginners to help them skip the confusing parts of learning to code. We can focus on building real projects for your portfolio.",
      },
      {
        question: "How can I contact Ehsan?",
        answer: "You can reach Ehsan through the contact form on this website at ehsanmohajer.fi/contact, or email directly at ehsanmohajer.fi@gmail.com. He typically responds within 24 hours!",
      },
      {
        question: "How do I book a call with Ehsan?",
        answer: "Great question! You can book a discovery call by visiting the contact page at ehsanmohajer.fi/contact or by emailing ehsanmohajer.fi@gmail.com. Ehsan is happy to discuss your project or mentoring needs!",
      },
      {
        question: "Can you review my CV/resume?",
        answer: "Yes! Ehsan offers CV/resume review as part of his mentoring service. He can help optimize your CV for tech roles, highlight your projects, and make sure it stands out. Visit the Services page or contact him to get started!",
      },
    ],
    fi: [
      {
        question: "Paljonko verkkosivusto maksaa?",
        answer: "Se riippuu todella monimutkaisuudesta! Yksinkertainen aloitussivu on eri asia kuin täysi tekoälyalusta. Yleensä tarjoan projektipohjaista hinnoittelua. Jos kerrot vähän mitä tarvitset, voin antaa karkean arvion!",
      },
      {
        question: "Mikä on teknologiapinosi?",
        answer: "Olen suuri fani moderneista teknologioista: React, Next.js ja TypeScript webille. Tyylittelyyn käytän Tailwind CSS:ää. Tekoälypuolella työskentelen OpenAI:n, Anthropicin ja Google Geminin APIen kanssa sekä Pythonin kanssa backend-logiikkaan.",
      },
      {
        question: "Voitko rakentaa tekoälyagentin minulle?",
        answer: "Ehdottomasti! Se on erikoisalani. Tarvitsetpa asiakaspalvelubottia, datan käsittelyagenttia tai henkilökohtaista assistenttia, voin suunnitella ja rakentaa sen sinulle.",
      },
      {
        question: "Olen aloittelija, voitko mentoroida minua?",
        answer: "Mielelläni! Työskentelen monien aloittelijoiden kanssa auttaakseni heitä ohittamaan koodauksen oppimisen hämmentävät osat. Voimme keskittyä oikeiden projektien rakentamiseen portfolioosi.",
      },
      {
        question: "Miten voin ottaa yhteyttä Ehsaniin?",
        answer: "Voit tavoittaa Ehsanin tämän verkkosivuston yhteydenottolomakkeella osoitteessa ehsanmohajer.fi/contact, tai lähettää sähköpostia suoraan osoitteeseen ehsanmohajer.fi@gmail.com. Hän vastaa tyypillisesti 24 tunnin sisällä!",
      },
      {
        question: "Miten varaan puhelun Ehsanin kanssa?",
        answer: "Hyvä kysymys! Voit varata tutustumispuhelun vierailemalla yhteydenottosivulla osoitteessa ehsanmohajer.fi/contact tai lähettämällä sähköpostia osoitteeseen ehsanmohajer.fi@gmail.com. Ehsan keskustelee mielellään projektistasi tai mentorointitarpeistasi!",
      },
      {
        question: "Voitko tarkistaa CV:ni/ansioluetteloni?",
        answer: "Kyllä! Ehsan tarjoaa CV/ansioluettelon tarkistusta osana mentorointipalveluaan. Hän voi auttaa optimoimaan CV:si teknologia-asemiin, korostamaan projektejasi ja varmistamaan että se erottuu joukosta. Vieraile Palvelut-sivulla tai ota häneen yhteyttä aloittaaksesi!",
      },
    ],
  },
  businessRules: {
    en: [
      "Always be polite and helpful.",
      "If the user asks about pricing, explain that it depends on scope and ask for more details.",
      "If the user seems interested, gently guide them to book a call or use the contact form.",
      "NEVER answer questions about general topics like history, cooking, math homework, or politics.",
      "Keep responses under 3-4 sentences unless explaining a technical concept.",
    ],
    fi: [
      "Ole aina kohtelias ja avulias.",
      "Jos käyttäjä kysyy hinnoittelusta, selitä että se riippuu laajuudesta ja kysy lisätietoja.",
      "Jos käyttäjä vaikuttaa kiinnostuneelta, ohjaa häntä varovaisesti varaamaan puhelu tai käyttämään yhteydenottolomaketta.",
      "ÄLÄ KOSKAAN vastaa yleisiin kysymyksiin kuten historiasta, ruoanlaitosta, matematiikan läksyistä tai politiikasta.",
      "Pidä vastaukset alle 3-4 lauseen pituisina, ellei selitä teknistä konseptia.",
    ],
  },
  keywords: {
    // High value keywords that signal intent
    highValue: [
      "hiring",
      "hire",
      "project",
      "quote",
      "budget",
      "consulting",
      "mentor",
      "build",
      "develop",
      "react",
      "nextjs",
      "ai agent",
      "automation",
      "app",
      "cv",
      "resume",
      "review",
      "career",
      "job",
      "interview",
      // Finnish high-value keywords
      "palkkaako",
      "palkkaa",
      "projekti",
      "tarjous",
      "budjetti",
      "konsultointi",
      "mentori",
      "rakenna",
      "kehitä",
      "tekoäly",
      "automaatio",
      "sovellus",
      "ansioluettelo",
      "ura",
      "työ",
      "haastattelu",
    ],
    // Context keywords (must be combined with others usually)
    relevant: [
      "website",
      "web",
      "design",
      "code",
      "coding",
      "learn",
      "teach",
      "price",
      "cost",
      "how much",
      "startups",
      "business",
      "mobile",
      "stack",
      "technology",
      "python",
      "typescript",
      "schedule",
      "book",
      "services",
      "service",
      "offer",
      "provide",
      "help",
      "support",
      "about",
      "tell me",
      "explain",
      "portfolio",
      "experience",
      "work",
      "contact",
      "email",
      "call",
      "meeting",
      "available",
      "reach",
      "talk",
      "speak",
      "get in touch",
      "message",
      "connect",
      "find",
      "calendly",
      "guidance",
      "advice",
      "feedback",
      "skills",
      "learning",
      "student",
      // Finnish relevant keywords
      "verkkosivusto",
      "nettisivut",
      "suunnittelu",
      "koodi",
      "koodaus",
      "oppia",
      "opeta",
      "hinta",
      "kustannus",
      "paljonko",
      "startup",
      "yritys",
      "mobiili",
      "teknologia",
      "aikataulu",
      "varaa",
      "palvelut",
      "palvelu",
      "tarjoa",
      "apu",
      "tuki",
      "kerro",
      "selitä",
      "portfolio",
      "kokemus",
      "työ",
      "yhteydenpito",
      "sähköposti",
      "puhelu",
      "tapaaminen",
      "saatavilla",
      "tavoittaa",
      "puhua",
      "viesti",
      "yhteys",
      "ohjaus",
      "neuvoa",
      "palaute",
      "taidot",
      "oppiminen",
      "opiskelija",
    ],
    // Instant block keywords
    irrelevant: [
      "weather",
      "sports",
      "politics",
      "recipe",
      "homework",
      "poem",
      "joke",
      "movie",
      "song",
      "capital of",
      "president",
      "meaning of life",
      // Finnish irrelevant keywords
      "sää",
      "urheilu",
      "politiikka",
      "resepti",
      "läksy",
      "runo",
      "vitsi",
      "elokuva",
      "laulu",
      "pääkaupunki",
      "presidentti",
    ],
  },
};

/**
 * Detects the language of the user's message
 * Returns 'fi' for Finnish, 'en' for English
 */
export function detectLanguage(message: string): "en" | "fi" {
  const lowerMessage = message.toLowerCase();

  // Finnish-specific words/patterns
  const finnishIndicators = [
    "moi",
    "hei",
    "terve",
    "kiitos",
    "anteeksi",
    "ole hyvä",
    "kuinka",
    "mitä",
    "mikä",
    "missä",
    "milloin",
    "kuka",
    "voitko",
    "voiko",
    "haluan",
    "tarvitsen",
    "olen",
    "minä",
    "sinä",
    "hän",
    "meidän",
    "teidän",
    "paljonko",
    "miten",
    "voin",
    "olet",
    "ovat",
    "auttaa",
    "apua",
    "ymmärrän",
    "verkkosivusto",
    "kehitys",
    "ohjelmointi",
  ];

  // Check if message contains Finnish words
  const hasFinnishWord = finnishIndicators.some((word) =>
    lowerMessage.includes(word)
  );

  if (hasFinnishWord) {
    return "fi";
  }

  // Default to English
  return "en";
}

/**
 * Calculates how relevant a user question is to your business.
 * Returns a score between 0 and 1.
 * Threshold recommendation: > 0.3 allows the question through.
 */
export function getRelevanceScore(question: string): number {
  const lowerQuestion = question.toLowerCase();
  let score = 0;

  // 1. Check for immediate "Kill" words (Cost Saving)
  const hasIrrelevant = knowledgeBaseBilingual.keywords.irrelevant.some((k) =>
    lowerQuestion.includes(k)
  );
  if (hasIrrelevant) return 0; // Block immediately

  // 2. High Value Keywords (Strong intent) -> Worth 3 points
  knowledgeBaseBilingual.keywords.highValue.forEach((keyword) => {
    if (lowerQuestion.includes(keyword)) score += 3;
  });

  // 3. Relevant Keywords -> Worth 1 point
  knowledgeBaseBilingual.keywords.relevant.forEach((keyword) => {
    if (lowerQuestion.includes(keyword)) score += 1;
  });

  // 4. Context check: prevent generic queries
  // If the score is low but the input is very short (e.g., "help"), it might be risky.
  if (lowerQuestion.length < 10 && score < 2) return 0.15;

  // Normalize: A score of 2 or higher is "Good". Max score doesn't matter much.
  // We return a normalized 0-1 based on a threshold of ~4
  // This allows more questions through to let Gemini's "brain" analyze them
  return Math.min(1, score / 3);
}

/**
 * Generates the System Instruction for the AI based on detected language.
 * This formats the data so the LLM understands its Persona and Constraints.
 */
export function formatKnowledgeBase(language: "en" | "fi" = "en"): string {
  const services = knowledgeBaseBilingual.services[language];
  const faqs = knowledgeBaseBilingual.faqs[language];
  const businessRules = knowledgeBaseBilingual.businessRules[language];
  const mission = knowledgeBaseBilingual.company.mission[language];
  const tone = knowledgeBaseBilingual.company.tone[language];

  const servicesList = services
    .map((s) => `* **${s.name}**: ${s.description} (CTA Suggestion: "${s.cta}")`)
    .join("\n");

  const faqsList = faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");

  if (language === "fi") {
    return `
Olet tekoälyavustaja **${knowledgeBaseBilingual.company.name}**:lle, omistaja ${knowledgeBaseBilingual.company.owner}.

PERSOONASI:
${tone}
Olet avulias, ytimekäs ja keskittynyt kävijöiden muuttamiseen asiakkaiksi tai opiskelijoiksi.

TAVOITTEESI:
Vastaa kysymyksiin palveluistamme ja ohjaa käyttäjiä varovaisesti seuraavaan askeleeseen (puhelun varaaminen tai projektin aloittaminen).

TIETOKANTA (PALVELUT):
${servicesList}

USEIN KYSYTYT KYSYMYKSET (Käytä näitä tyylioppaana):
${faqsList}

TIUKAT OHJEET:
1. ${businessRules.join("\n2. ")}
3. Jos käyttäjä kysyy kysymyksen joka ei liity Web-kehitykseen, tekoälyyn tai mentorointiin, kieltäydy kohteliaasti: "Olen erikoistunut keskustelemaan vain Sani AI Studion palveluista ja teknologiaaiheista! Miten voin auttaa sinua niissä?"
4. Älä keksi hintoja. Viittaa "Palvelut"-sivulle tai ehdota konsultaatiota.
    `.trim();
  }

  return `
You are the AI Assistant for **${knowledgeBaseBilingual.company.name}**, owned by ${knowledgeBaseBilingual.company.owner}.

YOUR PERSONA:
${tone}
You are helpful, concise, and focused on converting visitors into clients or students.

YOUR GOAL:
Answer questions about our services and gently guide users to take the next step (booking a call or asking about a project).

KNOWLEDGE BASE (SERVICES):
${servicesList}

FREQUENTLY ASKED QUESTIONS (Use these as style guides):
${faqsList}

STRICT GUIDELINES:
1. ${businessRules.join("\n2. ")}
3. If a user asks a question unrelated to Web Dev, AI, or Mentoring, politely refuse: "I'm tuned to only discuss Sani AI Studio's services and tech topics! How can I help you with those?"
4. Do not make up prices. Refer to the "Services" page or suggest a consultation.
  `.trim();
}
