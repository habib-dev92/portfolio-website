"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    type: "work",
    title: "Junior Manager Warehouse (Pharma)",
    company: "Muller & Phipps Pakistan (Pvt.) Ltd, Karachi",
    period: "Jan 2022 — Present",
  },
  {
    type: "work",
    title: "Warehouse Incharge (Pharma)",
    company: "Muller & Phipps Pakistan (Pvt.) Ltd, Karachi",
    period: "Aug 2019 — Dec 2021",
  },
  {
    type: "work",
    title: "Assistant Warehouse In-charge (Pharma)",
    company: "Muller & Phipps Pakistan (Pvt.) Ltd, Karachi",
    period: "Sep 2014 — Jul 2019",
  },
  {
    type: "work",
    title: "Data Processing Officer",
    company: "Muller & Phipps Pakistan (Pvt.) Ltd, Karachi",
    period: "Oct 2011 — Sep 2014",
  },
  {
    type: "milestone",
    title: "AI & Full-Stack Development Journey",
    company: "Self-Taught | Exploring GIAIC & PIAIC Programs",
    period: "2024 — Present",
  },
];

const timelineEvents = [
  { year: "2011", event: "Started career as Data Processing Officer — Muller & Phipps" },
  { year: "2014", event: "Promoted to Assistant Warehouse In-charge" },
  { year: "2019", event: "Promoted to Warehouse Incharge" },
  { year: "2022", event: "Promoted to Junior Manager Warehouse" },
  { year: "2024", event: "Began AI & full-stack development journey" },
  { year: "2025", event: "Built AI RAG applications & SaaS products" },
  { year: "2026", event: "Learning Agentic AI development" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(6,182,212,0.03),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading label="Experience" title="My Journey" highlight="Journey" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-2 border-background" />
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-mono text-accent font-semibold">{exp.period}</span>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${exp.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                    {exp.type === "work" ? "Work" : "Education"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted mt-0.5">{exp.company}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-8 text-foreground/80">Career Timeline</h3>
            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent via-primary to-accent" />
              <div className="space-y-6">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-card border-2 border-accent/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <span className="text-xs font-mono font-bold text-accent">{event.year}</span>
                      <p className="text-sm text-foreground/70 mt-0.5">{event.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
