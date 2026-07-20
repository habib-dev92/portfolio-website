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
        <span className="relative">
          {label}
          <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-accent/40 to-transparent" />
        </span>
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
            <span className="text-gradient relative inline-block">
              {highlight}
            </span>
            {title.slice(title.indexOf(highlight) + highlight.length)}
          </>
        ) : (
          title
        )}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-accent via-accent/40 to-transparent rounded-full mt-4 origin-left"
      />

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
