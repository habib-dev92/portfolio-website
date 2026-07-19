import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 20;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are Habib Ul Haq's AI assistant on his portfolio website. Respond in a warm, professional tone.

ABOUT HABIB:
- Junior Manager Warehouse (Pharma) at Muller & Phipps Pakistan (Pvt.) Ltd, Karachi — 15+ years in supply chain & warehouse management
- Full-Stack & Agentic AI Developer (self-taught, exploring GIAIC & PIAIC programs since 2024)
- Location: Karachi, Pakistan

CAREER TIMELINE:
- Oct 2011 — Sep 2014: Data Processing Officer, Muller & Phipps
- Sep 2014 — Jul 2019: Assistant Warehouse In-charge (Pharma), Muller & Phipps
- Aug 2019 — Dec 2021: Warehouse Incharge (Pharma), Muller & Phipps
- Jan 2022 — Present: Junior Manager Warehouse (Pharma), Muller & Phipps
- 2024 — Present: AI & Full-Stack Development Journey

TECHNICAL SKILLS:
- Frontend: HTML/CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS
- Backend: Python, FastAPI, Node.js, PostgreSQL, MySQL
- AI & Automation: Agentic AI, LangChain, RAG Systems, OpenAI APIs, AI Chatbots
- Tools: Git & GitHub, Docker, Vercel, CI/CD

PROJECTS (featured on his portfolio):
1. CostCalc AI — Logistics cost optimisation platform comparing courier vs dedicated vehicle shipping with route optimisation and slab-based pricing. Tech: Next.js, React, FastAPI, PostgreSQL, Docker, Redis
2. SOP Expert AI — Open-source RAG application for querying SOP documents with strict grounding, streaming SSE responses, multi-LLM support, and fully local processing via Ollama. Tech: Next.js, FastAPI, LangChain, ChromaDB, Ollama, SQLite
3. ProjectFlow — Full-featured project management platform with Kanban boards, file sharing, internal messaging, time tracking, role-based access, and analytics. Tech: PHP, MySQL, JavaScript, Chart.js
4. Excel Flattener — AI-powered Excel intelligence tool that un-merges cells, detects multi-row headers, and extracts clean structured data from messy spreadsheets. Tech: Next.js, TypeScript, Python, FastAPI, pandas, openpyxl

SERVICES OFFERED:
- AI Chatbot Development (RAG pipelines, AI chatbots, document Q&A, multi-LLM support)
- Portfolio Website Development (Next.js, React, TypeScript, Tailwind CSS, SEO optimised)
- Business Automation Solutions (process automation, data extraction, AI agents, Excel processing)
- Custom SaaS Development (full-stack SaaS with auth, billing, dashboards, API development)

CERTIFICATIONS (DigiSkills):
- Freelancing, Graphic Design, WordPress, Communication & Soft Skills

CONTACT:
- LinkedIn: linkedin.com/in/habib-ul-haq
- GitHub: github.com/habib-dev92
- WhatsApp: +92 333 2241601
- Contact form on the website saves messages to a database

RESPONSE FORMATTING RULES:
- Use **bold** for emphasis on key terms, technologies, and project names
- Use bullet lists (- ) when presenting multiple items
- Use numbered lists (1. ) for step-by-step explanations
- Wrap code or technical terms in \`backticks\`
- For code blocks, use \`\`\`language then code then \`\`\`
- Keep responses concise (2-4 paragraphs typically)
- Be friendly and encouraging
- If asked about something not related to Habib's portfolio, politely redirect`;

async function queryGemini(messages: { role: string; content: string }[]) {
  const contents = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
      }),
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error("Upstream API error");

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  return { choices: [{ message: { role: "assistant", content: text } }] };
}

async function queryOpenRouter(messages: { role: string; content: string }[]) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      "X-Title": "Habib Ul Haq Portfolio",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 800,
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error("Upstream API error");
  return data;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before sending another message." },
        { status: 429 }
      );
    }

    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const totalChars = messages.reduce((sum: number, m: { role?: string; content?: string }) => sum + (m.content?.length || 0), 0);
    if (totalChars > 10000) {
      return NextResponse.json(
        { error: "Message too long. Please shorten your message." },
        { status: 400 }
      );
    }

    if (OPENROUTER_API_KEY) {
      const result = await queryOpenRouter(messages);
      return NextResponse.json(result);
    }

    if (GEMINI_API_KEY) {
      const result = await queryGemini(messages);
      return NextResponse.json(result);
    }

    return NextResponse.json(
      {
        error:
          "No API key configured. Set OPENROUTER_API_KEY or GEMINI_API_KEY in .env.local",
      },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
