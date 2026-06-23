# Portfolio Projects Summary — Habib Ul Haq

> **Full-Stack & Agentic AI Developer**

---

## Table of Contents

1. [CostCalc AI — Logistics Cost Optimization](#1-costcalc-ai--logistics-cost-optimization)
2. [Excel Flattener (Data-Flattener)](#2-excel-flattener-data-flattener)
3. [Investment Strategy Calculator](#3-investment-strategy-calculator)
4. [Personal Portfolio Website](#4-personal-portfolio-website)
5. [3D Portfolio Website (Project 14062026)](#5-3d-portfolio-website-project-14062026)
6. [ProjectFlow — Project Management SaaS](#6-projectflow--project-management-saas)
7. [SOP Expert AI — RAG Document Q&A](#7-sop-expert-ai--rag-document-qa)
8. [SOP Reader & AI Chatbot](#8-sop-reader--ai-chatbot)

---

## 1. CostCalc AI — Logistics Cost Optimization

### Description
A full-stack web app enabling logistics operators to upload transfer data via Excel and receive AI-driven cost optimization recommendations. Compares courier vs dedicated vehicle shipping modes and recommends the most cost-effective option using a custom rule-based agent engine with route optimization.

### Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, TanStack React Query, Axios, Recharts, Lucide Icons, React Hot Toast |
| **Backend** | Python 3.12, FastAPI, SQLAlchemy 2.0 (async), Pydantic v2, Alembic, Celery |
| **Database** | PostgreSQL 16, Redis 7 |
| **DevOps** | Docker & Docker Compose (multi-service orchestration), multi-stage Docker builds |
| **AI / APIs** | Custom cost-optimization agent engine (rule-based), Google Maps Directions API, Haversine route fallback |
| **Auth** | JWT (HS256), bcrypt password hashing |
| **Key Libraries** | pandas, openpyxl (Excel parsing), googlemaps, httpx, python-jose, passlib |

### Key Features
- Excel-driven data entry (product weights, courier rates, dedicated vehicle rates, transfers)
- Slab-based courier pricing and per-km dedicated vehicle pricing
- Destination clustering (max 5 stops per vehicle)
- Route optimization via Google Maps API or haversine nearest-neighbor fallback
- Feasibility constraints (weight, value, distance limits)
- Interactive charts (Recharts bar, pie) showing cost comparisons
- JWT-authenticated multi-user system

---

## 2. Excel Flattener (Data-Flattener)

### Description
A full-stack web application branded as "Agent v2.0 — Excel Intelligence" that takes messy Excel files with merged cells, wrapped text, and complex BI Publisher-style headers, and automatically extracts clean structured tabular data ready for pivot tables. Uses heuristic header detection and data-row classification.

### Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 14, React 18, TypeScript 5, Tailwind CSS 3.4 |
| **Backend** | Python 3, FastAPI, Uvicorn |
| **Database** | None (stateless, in-memory processing) |
| **Key Libraries** | openpyxl (Excel parsing), pandas, python-multipart |
| **Output** | 14 canonical columns (To, Item, Description, Batch, Carton Size, Transport, No, Date, Weight, Volume, Carton, Loose, Value, Principal) |

### Key Features
- Drag-and-drop .xlsx/.xls file upload
- 4 API endpoints: analyze, preview, flatten, health
- Un-merges merged cells, un-wraps wrapped text, removes empty rows
- Dynamic header detection via regex keyword patterns
- Oracle BI Publisher multi-row merged-header support (21-column format)
- Dark glassmorphism UI with animated processing states
- Download processed file as cleaned .xlsx

---

## 3. Investment Strategy Calculator

### Description
A self-contained, browser-based financial modeling tool for comparing property and equity investment strategies in the Dubai market. Features three detailed calculation scenarios with real-time interactivity, pure Canvas charts, and a dark glassmorphism UI. Zero external JavaScript dependencies.

### Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | HTML5, CSS3, JavaScript (ES6) |
| **Frameworks** | None (vanilla — no React, Vue, Angular, etc.) |
| **Charts** | Pure Canvas 2D API (bar, line, donut charts with HiDPI/Retina support) |
| **Fonts** | Google Fonts — Inter & JetBrains Mono |
| **Build Tools** | None (no Webpack, Vite, Babel) |

### Key Features
- **Model 1:** Property vs Stock Market investment comparison
- **Model 2:** Staggered Payment + Equity vs Full Upfront purchase
- **Model 3:** Builder's Perspective — Discount vs Standard Financing
- Pure Canvas charting (bar, line, donut with gradient fills)
- Financial engine: EMI, amortization schedules, CAGR, ROI, IRR (Newton-Raphson), future value
- Real-time slider controls with 150ms debounce
- Dark glassmorphism theme with responsive layout
- All monetary values in AED (UAE Dirham)

---

## 4. Personal Portfolio Website

### Description
A modern, dark-themed personal portfolio website showcasing skills, services, projects, and contact information, with a built-in AI chatbot assistant powered by OpenRouter. Built for **Habib Ul Haq — Full-Stack & Agentic AI Developer**.

### Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 16.2, React 19.2, TypeScript 5, Tailwind CSS 4, Framer Motion 12 |
| **Backend** | Next.js API Routes (serverless) |
| **Database** | MongoDB via Mongoose 9.7 |
| **AI / APIs** | OpenRouter API (multi-model gateway), configurable model |
| **Auth** | Bearer-token password protection for admin dashboard |
| **Fonts** | Vercel Geist (sans + mono) via next/font |
| **Animations** | Framer Motion (spring physics, 3D tilt, scroll-triggered), 18 custom CSS keyframes |
| **Other** | Canvas 2D particle system, Tailwind CSS v4, ESLint 9 flat config |

### Key Features
- Full-screen Hero with 3D parallax logo and floating orbs
- About section with skill groups, stats counters, "currently learning"
- 4 service cards (Web Dev, UI/UX, API & Backend, Consulting)
- 4 project cards with 3D mouse-driven tilt
- AI Chatbot widget (floating, OpenRouter-powered)
- Contact form with MongoDB persistence
- Password-protected admin dashboard for viewing messages
- Canvas particle system with mouse interaction
- Dark theme with green accent, mesh gradients, noise textures

---

## 5. 3D Portfolio Website (Project-14062026)

### Description
A single-page personal portfolio website for **Habib — Agentic AI Developer**, featuring a typewriter effect, animated skill bars, scroll reveal animations, and a dark gradient theme. Entirely vanilla with no frontend framework.

### Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | TypeScript 6, HTML5, CSS3 |
| **Build Tools** | TypeScript Compiler (tsc) — compiles `src/script.ts` to `js/script.js` |
| **Frameworks** | None (vanilla — no React, Three.js, GSAP, jQuery) |
| **Fonts** | Google Fonts — Inter |

### Key Features
- Typewriter effect for tagline ("Agentic AI Developer")
- Smooth scrolling with active nav link highlighting
- Animated skill bars (viewport-triggered)
- Scroll reveal with fade-in/slide-up animations
- Dark theme with purple-to-cyan accent gradients
- Glassmorphism navbar with backdrop blur
- Contact form with client-side validation
- Responsive mobile hamburger menu
- Back-to-top button

---

## 6. ProjectFlow — Project Management SaaS

### Description
A full-featured web-based Project Management SaaS application built with PHP and MySQL. Enables teams to collaborate, track tasks via Kanban boards, share files, communicate via internal messaging, and generate analytics reports with Chart.js visualizations.

### Tech Stack

| Category | Technologies |
|---|---|
| **Backend** | PHP 8.0+, MySQL/MariaDB, PDO (prepared statements) |
| **Frontend** | HTML5, CSS3 (custom design system, 1545 lines), Vanilla JavaScript |
| **Libraries** | Chart.js 4.4 (bar, doughnut, polar area), Font Awesome 6.5, Google Fonts (Inter) |
| **Database** | MySQL — 16 tables (users, projects, tasks, messages, files, notifications, activity_log, time_entries, etc.) |
| **Server** | Apache with mod_rewrite (.htaccess) |
| **Auth** | Session-based, bcrypt password hashing, CSRF protection |

### Key Features
- Kanban board with native HTML5 drag-and-drop, status persistence via AJAX
- Full CRUD for projects, tasks, teams, files
- Internal messaging system (1-on-1 conversations)
- File manager with folder structure, upload/download
- Reports & analytics dashboard with Chart.js visualizations
- Activity log tracking all user actions
- Notification system (task assignments, messages, project invites)
- Global search across projects, tasks, users
- Time tracking with billable hours
- Task dependencies (predecessor/successor relationships)
- Responsive CSS design system with dark sidebar theme
- Role-based access (admin, manager, member, viewer)

---

## 7. SOP Expert AI — RAG Document Q&A

### Description
A full-stack, open-source application for uploading Standard Operating Procedures (SOPs) and asking natural-language questions about them. The AI is strictly grounded in uploaded documents — no hallucination, no outside knowledge. All processing is local, private, and free using Ollama.

### Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js 16.2, React 19.2, TypeScript 5, Tailwind CSS 4, shadcn/ui (Radix primitives), Lucide Icons, React Dropzone, React Markdown |
| **Backend** | Python 3.11+, FastAPI, LangChain, SQLAlchemy 2.0, Pydantic v2 |
| **Vector DB** | ChromaDB (persistent, local) |
| **Relational DB** | SQLite (via aiosqlite) |
| **AI Models** | Ollama (local): llama3.2 (LLM), nomic-embed-text (embeddings), plus optional qwen3, mistral, deepseek-r1 |
| **DevOps** | Railway, Render, Vercel (multi-platform deployment), Ollama (local AI runner) |
| **Key Libraries** | PyMuPDF (PDF), python-docx (DOCX), LangChain, ChromaDB, Ollama Python SDK |

### Key Features
- Upload PDF, DOCX, TXT, MD documents (max 50MB)
- RAG pipeline: chunk → embed → store → semantic search → LLM answer
- Streaming chat via Server-Sent Events (SSE)
- Strict system prompt enforcement (no hallucination, cite sources)
- Multiple LLM model switching at runtime (llama3.2, qwen3, mistral, deepseek-r1)
- Document summarization, quiz generation, flowchart extraction
- Semantic search within documents
- Light/dark theme with system preference detection
- Response caching (LRU, 50 entries)
- Reference badges (file name, page number, confidence score)
- shadcn/ui component library with accessible primitives

---

## 8. SOP Reader & AI Chatbot

### Description
A full-stack application for uploading, parsing, and querying Standard Operating Procedure (SOP) documents using an AI-powered chatbot with hybrid (keyword + semantic) search. Supports three LLM providers with auto-detection and graceful fallbacks.

### Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES Modules) — zero framework dependencies |
| **Backend** | Python, FastAPI, Uvicorn, Pydantic |
| **AI Providers** | OpenAI (gpt-4o-mini, text-embedding-3-small), Ollama (llama3.2), Hugging Face Inference API (Phi-3-mini) |
| **Key Libraries** | PyPDF2, python-docx (document parsing), openai (API), httpx (async HTTP), NumPy (vector operations) |
| **Database** | None (in-memory storage) |

### Key Features
- Upload PDF, DOCX, TXT documents
- Agent-based reasoning pipeline: Thinker → Hybrid Search → Reasoner
- Hybrid search: keyword (TF-like scoring) + semantic (cosine similarity)
- Three auto-detected LLM providers with priority fallback (OpenAI → Ollama → Hugging Face)
- Graceful fallback to keyword-only search when no LLM is available
- Drag-and-drop file upload with visual feedback
- Responsive two-column layout (collapses to single-column on mobile)
- Settings panel with configurable backend URL and Hugging Face token
- In-memory document/chunk/embedding storage
- Toast notification system (pure CSS)

---

## Skills Summary

### Programming Languages
- **TypeScript / JavaScript** — Expert (Next.js, React, vanilla, Node.js)
- **Python** — Expert (FastAPI, LangChain, data processing)
- **PHP** — Proficient (full-stack SaaS applications)
- **HTML5 / CSS3** — Expert (Tailwind CSS, custom design systems, animations)
- **SQL** — Proficient (PostgreSQL, MySQL, SQLite)

### Frameworks & Libraries
- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion, shadcn/ui, TanStack Query, Recharts
- **Backend:** FastAPI, LangChain, SQLAlchemy, Celery, Pydantic
- **PHP:** Custom MVC pattern, PDO, Chart.js
- **CSS:** Tailwind CSS v3/v4, PostCSS, custom glassmorphism/animation systems

### Databases
- PostgreSQL, MySQL/MariaDB, MongoDB, SQLite, Redis, ChromaDB (vector)

### AI & LLM
- **Providers:** OpenAI, Ollama (local), OpenRouter, Hugging Face
- **Techniques:** RAG (Retrieval-Augmented Generation), hybrid search, semantic search, vector embeddings, document chunking, prompt engineering
- **Models:** GPT-4o-mini, Llama 3.2, Qwen3, Mistral, DeepSeek-R1, Nomic-Embed-Text
- **Tools:** LangChain, ChromaDB, custom agent engines

### DevOps & Tools
- Docker & Docker Compose, Railway, Render, Vercel
- Git, ESLint, TypeScript Compiler
- Excel/Data pipelines (pandas, openpyxl, PyMuPDF, python-docx)

### Architecture Patterns
- Full-stack SPA & SSR applications
- RESTful API design
- RAG-based document Q&A systems
- Rule-based AI agent engines
- Real-time streaming (SSE)
- JWT / session-based authentication
- Monolithic PHP SaaS applications
- Stateless microservices with Docker orchestration

---

## About Me

I am a **Full-Stack & Agentic AI Developer** with expertise spanning modern JavaScript/TypeScript frameworks (Next.js, React), Python backend development (FastAPI, LangChain), and PHP SaaS applications. I specialize in building intelligent, data-driven web applications that combine traditional full-stack development with AI-powered features — from RAG-based document Q&A systems and custom AI agent engines to logistics cost optimization tools and financial calculators.

My work emphasizes clean architecture, responsive design, and practical AI integration using both cloud-based (OpenAI, OpenRouter) and local (Ollama) models. I have experience deploying applications across multiple platforms (Docker, Railway, Render, Vercel) and working with various databases (PostgreSQL, MongoDB, MySQL, ChromaDB, Redis).
