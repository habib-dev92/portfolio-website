"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const projects = [
  {
    title: "CostCalc AI",
    category: "AI & Agentic",
    description:
      "Logistics cost optimization platform comparing courier vs dedicated vehicle shipping with route optimization, slab-based pricing, and interactive cost analytics.",
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    gradient: "from-emerald-500/20 via-emerald-500/5 to-zinc-950",
    glow: "shadow-emerald-500/5",
    icon: (
      <svg className="w-12 h-12 text-emerald-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "SOP Expert AI",
    category: "AI & RAG",
    description:
      "Open-source RAG application for querying SOP documents with strict grounding, streaming SSE responses, multi-LLM support, and fully local processing via Ollama.",
    tech: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "Ollama", "SQLite"],
    gradient: "from-purple-500/20 via-purple-500/5 to-zinc-950",
    glow: "shadow-purple-500/5",
    icon: (
      <svg className="w-12 h-12 text-purple-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "ProjectFlow",
    category: "SaaS",
    description:
      "Full-featured project management platform with Kanban boards, file sharing, internal messaging, time tracking, role-based access, and Chart.js analytics.",
    tech: ["PHP", "MySQL", "JavaScript", "Chart.js", "HTML5/CSS3"],
    gradient: "from-blue-500/20 via-blue-500/5 to-zinc-950",
    glow: "shadow-blue-500/5",
    icon: (
      <svg className="w-12 h-12 text-blue-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Excel Flattener",
    category: "Data Engineering",
    description:
      "AI-powered Excel intelligence tool that un-merges cells, detects multi-row headers, and extracts clean structured data from messy BI Publisher spreadsheets.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "pandas", "openpyxl"],
    gradient: "from-amber-500/20 via-amber-500/5 to-zinc-950",
    glow: "shadow-amber-500/5",
    icon: (
      <svg className="w-12 h-12 text-amber-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Investment Strategy Calculator",
    category: "Fintech",
    description:
      "Browser-based financial modeling tool comparing property vs equity investments in Dubai with real-time Canvas charts, EMI schedules, and IRR calculation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas 2D"],
    gradient: "from-cyan-500/20 via-cyan-500/5 to-zinc-950",
    glow: "shadow-cyan-500/5",
    icon: (
      <svg className="w-12 h-12 text-cyan-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "SOP Reader & AI Chatbot",
    category: "AI & Agentic",
    description:
      "Multi-provider AI chatbot for document Q&A with hybrid keyword + semantic search, auto-detected LLM fallbacks across OpenAI, Ollama, and Hugging Face.",
    tech: ["FastAPI", "Python", "JavaScript", "OpenAI", "Ollama", "Hugging Face"],
    gradient: "from-pink-500/20 via-pink-500/5 to-zinc-950",
    glow: "shadow-pink-500/5",
    icon: (
      <svg className="w-12 h-12 text-pink-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: "3D Portfolio Website",
    category: "Web Development",
    description:
      "Vanilla TypeScript single-page portfolio with typewriter effect, animated skill bars, scroll reveal, glassmorphism navbar, and purple-to-cyan gradient theme.",
    tech: ["TypeScript", "HTML5", "CSS3"],
    gradient: "from-violet-500/20 via-violet-500/5 to-zinc-950",
    glow: "shadow-violet-500/5",
    icon: (
      <svg className="w-12 h-12 text-violet-400/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "This website — dark-themed portfolio with AI chatbot assistant, 3D parallax effects, Canvas particle system, Framer Motion animations, and MongoDB contact form.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "MongoDB"],
    gradient: "from-accent/20 via-accent/5 to-zinc-950",
    glow: "shadow-accent/5",
    icon: (
      <svg className="w-12 h-12 text-accent/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - centerY) / rect.height) * -5);
    rotateY.set(((e.clientX - centerX) / rect.width) * 5);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:shadow-xl transition-all duration-500"
    >
      <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden relative`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-16 border border-white/5 rounded-lg rotate-12" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-white/5 rounded-lg -rotate-6" />
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border border-white/5 rounded-full" />
        </div>
        <motion.div
          className="transition-all duration-500 group-hover:scale-110 group-hover:opacity-80 relative z-10"
          whileHover={{ rotate: -3 }}
        >
          {project.icon}
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5 text-xs text-white bg-black/50 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            View Project
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
      <div className="p-6 relative">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-xs text-accent font-medium tracking-wide">{project.category}</span>
        <h3 className="text-lg font-semibold mt-1.5 mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/5 group-hover:bg-white/[0.04] transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(74,222,128,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(74,222,128,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            What I&apos;ve <span className="text-accent">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
