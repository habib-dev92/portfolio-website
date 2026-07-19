# Habib Ul Haq — Portfolio Website

**Live:** [habibulhaq.vercel.app](https://habibulhaq.vercel.app)

Modern, responsive portfolio for **Habib Ul Haq** — a **Junior Manager Warehouse** with 15+ years in supply chain management who transitioned into **Full-Stack & Agentic AI Development**. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

| Category       | Technologies                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| Framework      | Next.js 16.2.9 (App Router)                                                 |
| UI Library     | React 19.2.4                                                                |
| Language       | TypeScript 5, ES2017+                                                        |
| Styling        | Tailwind CSS v4, CSS custom properties, custom keyframe animations           |
| Animation      | Framer Motion 12.40.0 (spring physics, layout animations, scroll-triggered)  |
| Database       | MongoDB Atlas via Mongoose 9.7.2                                             |
| AI / ML        | OpenRouter API (primary), Google Gemini API (fallback), LangChain, RAG       |
| Deployment     | Vercel (static generation + serverless functions)                            |
| Linting        | ESLint 9 (flat config)                                                       |

---

## Features

### Sections on Home Page

| Section          | Component            | Details |
| ---------------- | -------------------- | ------- |
| **Hero**         | `Hero.tsx`           | Full-screen animated headline (word-by-word blur reveal), floating orbs, grid background, profile image with 3D gradient border, CTA buttons (View Projects, Contact Me), scroll indicator |
| **Tech Marquee** | `TechMarquee.tsx`    | Infinite horizontal scroll of technology badges with mask fade edges |
| **About**        | `About.tsx`          | Animated stat counters (15+ Years, AI Developer, Supply Chain Expert, Full Stack), intro paragraph, career journey, 3 professional summary groups with checkmark lists |
| **Experience**   | `Experience.tsx`     | Two-column layout — left: vertical timeline of 5 work positions; right: career timeline with 7 milestone dots connected by gradient line |
| **Skills**       | `Skills.tsx`         | 4 category cards (Frontend, Backend, AI & Automation, Tools) with animated progress bars (scroll-triggered) |
| **Services**     | `Services.tsx`       | 4 service cards with 3D tilt effect, gradient hover, feature tags, "Get a Quote" CTA |
| **Portfolio**    | `Portfolio.tsx`      | 4 featured project cards with 3D tilt, category badges, tech stack tags, GitHub links, gradient backgrounds |
| **Certificates** | `Certificates.tsx`   | 4 certificate cards with embedded PDF preview on hover, download buttons |
| **Blog**         | `Blog.tsx`           | Blog preview section (latest 4 on home page), full listing page at `/blog` with search & category filters, and 16 individual article pages at `/blog/[slug]` with progress bar, TOC, share buttons, and related articles |
| **Contact**      | `Contact.tsx`        | Contact form (name, email, subject, message) with validation + 4 contact info cards (Location, LinkedIn, GitHub, WhatsApp) |
| **Footer**       | `Footer.tsx`         | Logo, name/title, LinkedIn/GitHub social buttons, back-to-top, dynamic copyright year |

### Global Features

| Feature                 | Details |
| ----------------------- | ------- |
| **Navbar**              | Sticky, scroll-aware (transparent → blurred), scroll progress bar, **hide/show on scroll direction**, active section highlighting with Framer Motion `layoutId`, dark/light toggle with localStorage persistence, mobile hamburger menu with animated hamburger icon, "Hire Me" CTA button |
| **Dark/Light Mode**      | Forced `dark` class default, toggleable via navbar button, persisted in localStorage |
| **AI Chatbot**          | Floating action button → chat window, OpenRouter primary / Gemini fallback, rate-limited (20 req/min per IP), markdown formatting (bold, code blocks, lists, links, headings), copy-to-clipboard, welcome message with Habib's context |
| **Cursor Glow**         | Mouse-following radial gradient (cyan accent) on fixed overlay |
| **Ambient Background**  | Canvas 2D particle system (50 particles) with mouse interaction |
| **Back to Top**         | Floating button, appears on scroll |
| **Toast Notifications** | Global toast system for copy/share confirmations, animated entry/exit |
| **Section Headings**    | Reusable animated heading component with decorative watermark, pulsing dot, and accent underline reveal |
| **Page Transitions**    | Framer Motion fade + slide between routes |
| **Visit Tracker**       | Increments MongoDB counter once per session (excludes admin) |
| **SEO**                 | Comprehensive metadata, Open Graph, Twitter cards, JSON-LD structured data (Person + WebSite), sitemap.xml, robots.txt |
| **Loading State**       | Animated loading spinner via `loading.tsx` |
| **Scrollbar**           | Custom thin scrollbar styling |
| **Noise Texture**       | SVG fractal noise overlay on body background |
| **Grid Background**     | 60px grid pattern on various sections |

---

## Skills (with proficiency levels)

| Category          | Skills                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Frontend**      | HTML/CSS (95%), JavaScript (90%), TypeScript (85%), React.js (88%), Next.js (85%), Tailwind CSS (92%) |
| **Backend**       | Python (85%), FastAPI (80%), Node.js (75%), PostgreSQL (78%), MySQL (75%)                            |
| **AI & Automation** | Agentic AI (82%), LangChain (80%), RAG Systems (85%), OpenAI APIs (88%), AI Chatbots (85%)          |
| **Tools**         | Git & GitHub (90%), Docker (75%), Vercel (88%), CI/CD (72%)                                         |

---

## Featured Projects

| Project              | Category         | Tech Stack                                                              | Description |
| -------------------- | ---------------- | ----------------------------------------------------------------------- | ----------- |
| **CostCalc AI**      | AI & Agentic     | Next.js, React, FastAPI, PostgreSQL, Docker, Redis                      | Logistics cost optimization platform comparing courier vs dedicated vehicle shipping with route optimization and slab-based pricing |
| **SOP Expert AI**    | AI & RAG         | Next.js, FastAPI, LangChain, ChromaDB, Ollama, SQLite                   | Open-source RAG application for querying SOP documents with strict grounding, streaming SSE responses, multi-LLM support via Ollama |
| **ProjectFlow**      | SaaS             | PHP, MySQL, JavaScript, Chart.js, HTML5/CSS3                            | Full-featured project management platform with Kanban boards, file sharing, internal messaging, time tracking, and role-based access |
| **Excel Flattener**  | Data Engineering | Next.js, TypeScript, Python, FastAPI, pandas, openpyxl                  | AI-powered Excel intelligence tool that un-merges cells, detects multi-row headers, and extracts clean structured data from messy spreadsheets |

---

## Services Offered

| Service                        | Features |
| ------------------------------ | -------- |
| **AI Chatbot Development**     | RAG Pipelines, AI Chatbots, Document Q&A, Multi-LLM Support |
| **Portfolio Website Development** | Next.js & React, TypeScript, Tailwind CSS, SEO Optimized |
| **Business Automation Solutions**  | Process Automation, Data Extraction, AI Agents, Excel Processing |
| **Custom SaaS Development**     | Full-Stack SaaS, Auth & Billing, Dashboards, API Development |

---

## Blog Articles (16 Published)

| Article | Category | Read Time |
| ------- | -------- | --------- |
| [How I Built My AI-Powered Portfolio with Next.js 16, React 19 & Agentic AI](#) | Web Development | 10 min |
| [From Warehouse Management to Agentic AI Development: My Journey of Reinvention](#) | Career Journey | 9 min |
| [Building an AI Chatbot with OpenRouter, Gemini & LangChain](#) | Artificial Intelligence | 12 min |
| [CostCalc AI: Logistics Cost Optimization Platform](#) | Case Study | 14 min |
| [SOP Expert AI: Hallucination-Resistant RAG System with LangChain & Ollama](#) | AI Case Study | 15 min |
| [Excel Flattener: AI-Powered Spreadsheet Intelligence Platform](#) | Case Study | 13 min |
| [The Complete Guide to Agentic AI](#) | Artificial Intelligence | 18 min |
| [Model Context Protocol (MCP): The Future Standard for AI Tool Integration](#) | AI Engineering | 16 min |
| [Context Engineering vs Prompt Engineering](#) | AI Engineering | 18 min |
| [OpenAI Agents SDK Handbook — Part 1: Foundations](#) | AI Engineering | 14 min |
| [OpenAI Agents SDK Handbook — Part 2: Handoffs, Guardrails, Tool Calling & MCP](#) | AI Engineering | 16 min |
| [OpenAI Agents SDK Handbook — Part 3: Multi-Agent Orchestration, Memory & Production Systems](#) | AI Engineering | 18 min |
| [OpenAI Agents SDK Handbook — Part 4: Production Patterns, Enterprise Architecture & Best Practices](#) | AI Engineering | 40 min |
| [10 Real-World AI Automation Ideas Every Business Can Implement in 2026](#) | Enterprise AI | 20 min |
| [AI for Warehouse Management: The Complete Guide to Building Intelligent Warehouses](#) | Supply Chain AI | 25 min |
| [How Agentic AI Can Transform Pharmaceutical Distribution](#) | Supply Chain AI | 28 min |

Blog articles are rendered with full **Markdown** syntax highlighting via `react-markdown`, with custom-styled prose components for headings, lists, code blocks, tables, and blockquotes. Each article page features a reading progress bar, table of contents sidebar (desktop), share buttons, and related article suggestions.

---

## Experience Timeline

### Work History (Muller & Phipps Pakistan, Karachi)
| Position                                | Period              |
| --------------------------------------- | ------------------- |
| Junior Manager Warehouse (Pharma)       | Jan 2022 — Present  |
| Warehouse Incharge (Pharma)             | Aug 2019 — Dec 2021 |
| Assistant Warehouse In-charge (Pharma)  | Sep 2014 — Jul 2019 |
| Data Processing Officer                 | Oct 2011 — Sep 2014 |

### Career Milestones
2011 — Data Processing Officer → 2014 — Asst. Warehouse In-charge → 2019 — Warehouse Incharge → 2022 — Junior Manager Warehouse → 2024 — Began AI & full-stack journey → 2025 — Built AI RAG apps & SaaS → 2026 — Learning Agentic AI

---

## Certifications

| Certificate           | Issuer      |
| --------------------- | ----------- |
| Freelancing           | DigiSkills  |
| Graphic Design        | DigiSkills  |
| WordPress             | DigiSkills  |
| Communication & Soft Skills | DigiSkills |

---

## Admin Dashboard

**Route:** `/admin`

Password-protected dashboard with:
- Login form (password stored in session storage)
- Message count & visit count display
- Expandable message list with time-ago timestamps and initials avatars
- Visit count auto-polls every 5 seconds
- Logout functionality

---

## API Routes

| Method | Route              | Auth Required  | Description |
| ------ | ------------------ | -------------- | ----------- |
| POST   | `/api/contact`     | No             | Submit contact form (name, email, subject, message) |
| GET    | `/api/contact`     | Bearer token   | Fetch all messages (admin only) |
| POST   | `/api/visits`      | No             | Increment global visit counter |
| GET    | `/api/visits`      | Bearer token   | Get current visit count (admin only) |
| POST   | `/api/chat`        | No             | Send message to AI chatbot (20 req/min rate limit) |

---

## Environment Variables

```env
MONGODB_URI=           # MongoDB Atlas connection string
ADMIN_PASSWORD=        # Password for /admin dashboard
OPENROUTER_API_KEY=    # OpenRouter API key (primary AI provider)
GEMINI_API_KEY=        # Google Gemini API key (fallback AI provider)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (metadata, fonts, navbar, globals)
│   ├── page.tsx            # Home page (composes all sections)
│   ├── globals.css         # Global styles + Tailwind + custom animations
│   ├── loading.tsx         # Root loading state
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── blog/               # Blog listing & articles
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx        # Article page (metadata, layout)
│   │       ├── content.tsx     # Markdown renderer (react-markdown)
│   │       ├── progress-bar.tsx # Reading progress indicator
│   │       ├── share-buttons.tsx # Copy link, X, LinkedIn share
│   │       └── toc.tsx          # Table of contents sidebar
│   ├── admin/page.tsx      # Password-protected message viewer
│   └── api/                # API route handlers
│       ├── contact/route.ts
│       ├── visits/route.ts
│       └── chat/route.ts
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechMarquee.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Certificates.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Chatbot.tsx
│   ├── VisitTracker.tsx
│   ├── PageTransition.tsx
│   ├── Loading.tsx
│   ├── CursorGlow.tsx
│   ├── AmbientBackground.tsx
│   ├── BackToTop.tsx
│   ├── Toast.tsx          # Global toast notification system
│   └── SectionHeading.tsx # Reusable animated section heading
├── data/
│   └── blog.ts             # All blog articles data (16 posts)
├── hooks/
│   └── useTilt.ts          # 3D mouse-driven tilt effect hook
├── lib/
│   └── mongodb.ts          # MongoDB connection singleton
└── models/
    ├── Visit.ts            # Visit counter model
    └── Message.ts          # Contact message model
```
