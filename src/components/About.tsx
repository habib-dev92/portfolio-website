"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const stats = [
  { id: "years", value: "15+", label: "Years Experience", desc: "Supply Chain & Warehouse", numeric: true, num: 15 },
  { id: "ai-dev", value: "AI", label: "Developer", desc: "Agentic AI & RAG Solutions", numeric: false, num: 0 },
  { id: "scm-expert", value: "Supply Chain", label: "Expertise", desc: "Distribution & Logistics", numeric: false, num: 0 },
  { id: "fs-dev", value: "Full Stack", label: "Development", desc: "Next.js, React, Python", numeric: false, num: 0 },
];

function Counter({ value, label, desc, numeric, num }: { value: string; label: string; desc: string; numeric: boolean; num: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !numeric || num === 0) return;
    const duration = 1500;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, numeric, num]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-2xl sm:text-4xl font-bold text-accent break-words leading-tight"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        {numeric && isInView ? `${count}+` : value}
      </motion.div>
      <div className="text-xs text-muted mt-1 font-medium">{label}</div>
      <div className="text-[10px] text-muted/60 mt-0.5 break-words leading-tight">{desc}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(37,99,235,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-dot-grid" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading label="About" title="Who I Am" highlight="I Am" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              I combine over <strong className="text-accent">15 years of supply chain and warehouse management</strong> experience with modern software engineering and Agentic AI technologies to build intelligent business solutions that solve real-world problems.
            </p>

            <p className="text-foreground/70 leading-relaxed mb-8">
              Starting in warehouse operations, I climbed the ranks to <strong className="text-foreground/90">Junior Manager Warehouse</strong> while teaching myself full-stack development and AI engineering. Today, I bridge the gap between operational logistics and cutting-edge AI — building RAG systems, AI agents, and SaaS platforms that make supply chains smarter.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="relative h-full p-4 sm:p-5 rounded-xl bg-card border border-border hover:border-accent/30 hover:bg-accent/[0.02] hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col items-center justify-center min-h-[5rem]">
                      <Counter value={stat.value} label={stat.label} desc={stat.desc} numeric={stat.numeric} num={stat.num} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>

            <div className="space-y-6">
              {[
                { title: "Supply Chain & Operations", items: ["15+ years in warehouse management and distribution planning", "Cost optimization and dispatch management", "Team leadership and operational excellence", "Pharmaceutical distribution expertise"] },
                { title: "AI Engineering", items: ["Agentic AI and RAG pipeline development", "LangChain, OpenAI, and vector database integration", "AI chatbot and document Q&A systems", "Multi-LLM architecture and orchestration"] },
                { title: "Full-Stack Development", items: ["Next.js, React, TypeScript, Tailwind CSS", "Python FastAPI backend development", "PostgreSQL, MongoDB, and Redis", "Docker deployment and CI/CD pipelines"] },
              ].map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.1 }}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:bg-accent/[0.02] hover:-translate-y-0.5 transition-all duration-500"
                >
                  <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, si) => (
                      <li key={si} className="flex items-start gap-3 text-sm text-foreground/70">
                        <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
