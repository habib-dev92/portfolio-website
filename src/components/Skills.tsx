"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    accent: "accent",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    accent: "primary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: [
      { name: "Python", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "AI & Automation",
    accent: "accent",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    skills: [
      { name: "Agentic AI", level: 82 },
      { name: "LangChain", level: 80 },
      { name: "RAG Systems", level: 85 },
      { name: "OpenAI APIs", level: 88 },
      { name: "AI Chatbots", level: 85 },
    ],
  },
  {
    title: "Tools",
    accent: "primary",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M11.42 15.17l-4.17 4.17M18.5 9.83l-4.17 4.17M6.33 6.33l4.17 4.17M4.5 4.5l3 3M18.5 9.83l-3-3M11.42 15.17l3 3M15 12l-3 3M7.5 12l3-3" strokeLinecap="round" />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 88 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

function SkillCard({ name, level, accent, index }: { name: string; level: number; accent: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const useAccent = accent === "accent";

  return (
    <div ref={ref} className="group relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className={`text-xs font-mono font-semibold ${useAccent ? "text-accent" : "text-primary"}`}>
          {level}%
        </span>
      </div>
      <div className="relative h-2.5 rounded-full bg-border/60 overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${
            useAccent
              ? "bg-gradient-to-r from-accent via-accent/80 to-accent/60"
              : "bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          }`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={isInView ? { x: ["-100%", "200%"] } : { x: "-100%" }}
            transition={{ duration: 1.5, delay: 1.2 + index * 0.1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-dot-grid" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading label="Skills" title="My Expertise" highlight="Expertise" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  cat.accent === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                }`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} name={skill.name} level={skill.level} accent={cat.accent} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
