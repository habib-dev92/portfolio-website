"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    color: "bg-primary",
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
    color: "bg-accent",
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
    color: "bg-primary",
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
    color: "bg-accent",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 88 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-border overflow-hidden">
        <motion.div
          className={`h-full rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className={`absolute inset-0 ${color}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden before:absolute before:top-0 before:left-4 sm:before:left-6 lg:before:left-8 before:right-4 sm:before:right-6 lg:before:right-8 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading label="Skills" title="My Expertise" highlight="Expertise" />

        <div className="grid sm:grid-cols-2 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-0.5 hover:bg-accent/[0.02] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg ${cat.color}/10 flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${cat.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} index={si} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
