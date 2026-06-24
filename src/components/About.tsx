"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "HTML5/CSS3", "SQL"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui", "TanStack Query", "Recharts"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "LangChain", "SQLAlchemy", "Pydantic", "Celery"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "ChromaDB"],
  },
  {
    category: "AI & LLM",
    items: ["OpenAI", "Ollama", "OpenRouter", "Hugging Face", "RAG Pipelines", "Vector Embeddings", "Prompt Engineering"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Vercel", "Railway", "Render", "Git", "ESLint", "CI/CD"],
  },
];

const stats = [
  { value: "8", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Commitment" },
];

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl sm:text-4xl font-bold text-accent"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        {value}
      </motion.div>
      <div className="text-xs text-zinc-500 mt-1.5">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(74,222,128,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            About
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Who <span className="text-accent">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Full-Stack &amp; Agentic AI Developer with expertise spanning modern
            JavaScript/TypeScript frameworks (Next.js, React), Python backend
            development (FastAPI, LangChain), and PHP SaaS applications.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { text: "RAG-based document Q&A systems with strict grounding, streaming responses, and multi-LLM support", accent: true },
              { text: "Custom AI agent engines for logistics cost optimization with route planning and feasibility constraints", accent: false },
              { text: "Full-stack SaaS platforms with Kanban boards, file management, messaging, time tracking, and role-based access", accent: false },
              { text: "Data engineering tools that clean messy Excel files using heuristic header detection and automated extraction", accent: true },
              { text: "Financial modeling applications with real-time charts, EMI schedules, amortization, and IRR calculation", accent: false },
              { text: "Deployment across Docker, Vercel, Railway, and Render with multi-service orchestration", accent: false },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 group cursor-default"
              >
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className={`w-5 h-5 rounded-full border ${point.accent ? "bg-accent/20 border-accent/30" : "bg-white/5 border-white/10"} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${point.accent ? "bg-accent" : "bg-zinc-500"}`} />
                  </div>
                </div>
                <span className={`text-sm leading-relaxed ${point.accent ? "text-zinc-300" : "text-zinc-400"} group-hover:text-zinc-200 transition-colors duration-300`}>{point.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="relative p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/15 hover:bg-accent/[0.02] transition-all duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <Counter value={stat.value} label={stat.label} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-zinc-600 mt-6 leading-relaxed text-center sm:text-left"
          >
            Currently advancing skills at <span className="text-zinc-400">GIAIC</span> and <span className="text-zinc-400">PIAIC</span>, deepening expertise in Agentic AI, Cloud Computing, and modern software architecture.
          </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-sm font-medium text-zinc-400">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                      className="px-3.5 py-1.5 text-sm rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:bg-accent/10 hover:border-accent/25 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-6 border-t border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-medium text-zinc-400">
                  Currently Learning
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Multi-Agent Systems", "Cloud Architecture", "Advanced RAG Patterns", "System Design"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex px-3.5 py-1.5 text-sm rounded-lg bg-accent/5 border border-accent/15 text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
