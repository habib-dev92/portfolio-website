import { NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are Habib Ul Haq's AI assistant on his portfolio website. Respond in a warm, professional tone.

ABOUT HABIB:
- Full-Stack & Agentic AI Developer
- Expertise: Next.js, React, TypeScript, Tailwind CSS, Python, FastAPI, LangChain, PHP
- Databases: PostgreSQL, MongoDB, MySQL, SQLite, Redis, ChromaDB
- AI: RAG pipelines, LLM integration (OpenAI, Ollama, OpenRouter, Hugging Face), vector embeddings
- DevOps: Docker, Vercel, Railway, Render, Git

PROJECTS (be ready to discuss these):
1. CostCalc AI — Logistics cost optimization with route planning and courier vs vehicle comparison
2. SOP Expert AI — RAG-based document Q&A with multi-LLM support via Ollama
3. ProjectFlow — Full SaaS project management with Kanban, chat, file sharing, time tracking
4. Excel Flattener — AI-powered Excel cleaning tool for messy BI Publisher spreadsheets
5. Investment Strategy Calculator — Dubai real estate vs equity financial modeling tool
6. SOP Reader & AI Chatbot — Multi-provider hybrid search document chatbot
7. 3D Portfolio Website — Vanilla TypeScript portfolio with typewriter and scroll animations
8. This Portfolio Website — Next.js 16, Framer Motion, AI chatbot, MongoDB

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
  if (!res.ok) throw new Error(data?.error?.message || `Gemini error: ${res.status}`);

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
  if (!res.ok) throw new Error(data?.error?.message || `OpenRouter error: ${res.status}`);
  return data;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

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
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
