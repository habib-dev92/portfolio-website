"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, highlight, subtitle }: SectionHeadingProps) {
  const hasHighlight = highlight && title.includes(highlight);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-14 sm:mb-20 relative"
    >
      <div className="absolute -top-4 -left-4 sm:-left-6 w-24 h-24 sm:w-36 sm:h-36 opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" className="text-accent" />
          <circle cx="50" cy="50" r="25" className="text-accent" />
          <circle cx="50" cy="50" r="10" className="text-accent" />
          <line x1="10" y1="50" x2="90" y2="50" className="text-accent" />
          <line x1="50" y1="10" x2="50" y2="90" className="text-accent" />
        </svg>
      </div>

      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-muted mb-4"
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-accent" />
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
        </span>
        {label}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight"
      >
        {hasHighlight ? (
          <>
            {title.slice(0, title.indexOf(highlight))}
            <span className="text-accent relative inline-block">
              {highlight}
              <motion.span
                className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent/20 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            {title.slice(title.indexOf(highlight) + highlight.length)}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-muted mt-4 max-w-2xl text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
