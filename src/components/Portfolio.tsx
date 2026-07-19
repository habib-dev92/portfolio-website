"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "CostCalc AI",
    category: "AI & Agentic",
    description: "Logistics cost optimization platform comparing courier vs dedicated vehicle shipping with route optimization and slab-based pricing.",
    tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    gradient: "from-accent/20 via-accent/5 to-background",
    accent: "accent",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "SOP Expert AI",
    category: "AI & RAG",
    description: "Open-source RAG application for querying SOP documents with strict grounding, streaming SSE responses, and multi-LLM support via Ollama.",
    tech: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "Ollama", "SQLite"],
    gradient: "from-primary/20 via-primary/5 to-background",
    accent: "primary",
    repo: "https://github.com/habib-dev92/sop-expert-reader-",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "ProjectFlow",
    category: "SaaS",
    description: "Full-featured project management platform with Kanban boards, file sharing, internal messaging, time tracking, and role-based access.",
    tech: ["PHP", "MySQL", "JavaScript", "Chart.js", "HTML5/CSS3"],
    gradient: "from-accent/20 via-accent/5 to-background",
    accent: "accent",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Excel Flattener",
    category: "Data Engineering",
    description: "AI-powered Excel intelligence tool that un-merges cells, detects multi-row headers, and extracts clean structured data from messy spreadsheets.",
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "pandas", "openpyxl"],
    gradient: "from-primary/20 via-primary/5 to-background",
    accent: "primary",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, style, handleMouse, handleLeave } = useTilt(5);
  const isAccent = project.accent === "accent";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={style}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-500 ${isAccent ? "hover:shadow-accent/5" : "hover:shadow-primary/5"}`}
    >
      <div className={`absolute top-0 left-0 w-1 h-0 ${isAccent ? "bg-accent" : "bg-primary"} group-hover:h-full transition-all duration-500 ease-out`} />
      <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden relative`}>
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-4 left-4 w-16 h-16 border border-border rounded-lg rotate-12" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-border rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-border rounded-lg -rotate-6" />
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 border border-border rounded-full" />
        </div>
        <motion.div
          className="transition-all duration-500 group-hover:scale-110 relative z-10"
          whileHover={{ rotate: -3 }}
        >
          <div className={`${isAccent ? "text-accent/60 group-hover:text-accent" : "text-primary/60 group-hover:text-primary"} transition-colors duration-300`}>
            {project.icon}
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>
      <div className="p-5 sm:p-6 relative">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs ${isAccent ? "text-accent" : "text-primary"} font-medium tracking-wide`}>{project.category}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className={`text-xs px-2.5 py-1 rounded-full bg-background text-muted border border-border ${isAccent ? "group-hover:border-accent/20" : "group-hover:border-primary/20"} transition-colors duration-300`}>
              {t}
            </span>
          ))}
        </div>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-flex items-center gap-2 text-xs font-medium ${isAccent ? "text-accent hover:text-accent/80" : "text-primary hover:text-primary/80"} transition-colors duration-300`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View Source Code
          </a>
        ) : (
          <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-muted/30">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md border border-dashed border-border/50 bg-white/[0.01]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Under Construction
            </span>
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 overflow-hidden before:absolute before:top-0 before:left-4 sm:before:left-6 lg:before:left-8 before:right-4 sm:before:right-6 lg:before:right-8 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Featured Projects" title="What I've Built" highlight="Built" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
