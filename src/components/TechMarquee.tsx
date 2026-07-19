"use client";

import { motion } from "framer-motion";

const techItems = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI",
  "LangChain", "PostgreSQL", "Docker", "Tailwind CSS",
  "Node.js", "MongoDB", "Redis", "Git", "OpenAI",
  "RAG", "Agentic AI", "Vercel", "CI/CD",
];

export default function TechMarquee() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.01] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted/50">
            Technologies I Work With
          </span>
        </motion.div>
        <div className="relative overflow-hidden mask-fade-edge">
          <motion.div
            className="flex gap-8 sm:gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techItems, ...techItems].map((tech, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-card/50 border border-border/40 text-xs sm:text-sm text-muted font-medium whitespace-nowrap hover:border-accent/20 hover:text-accent transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
