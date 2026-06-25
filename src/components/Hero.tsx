"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const headingLines = [
  { text: "Building", highlight: false },
  { text: "Intelligent", highlight: true },
  { text: "Full-Stack", highlight: false },
  { text: "& AI-Powered", highlight: true },
  { text: "Solutions", highlight: false },
];

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / rect.height) * -15;
      const rotateY = ((e.clientX - centerX) / rect.width) * 15;
      mouseX.set(rotateY);
      mouseY.set(rotateX);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      {/* Animated mesh gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-accent/20 blur-[120px] animate-mesh" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-emerald-500/15 blur-[120px] animate-mesh-2" />
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-accent/10 blur-[100px] animate-mesh" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-emerald-500/10 blur-[100px] animate-mesh-2" style={{ animationDelay: "-6s" }} />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-accent/30 blur-[1px] animate-float-slow" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-accent/20 blur-[1px] animate-float-slow" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-emerald-500/20 blur-[1px] animate-float-slow" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-[20%] right-[10%] w-2.5 h-2.5 rounded-full bg-accent/25 blur-[1px] animate-float-slow" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-[50%] left-[5%] w-1.5 h-1.5 rounded-full bg-accent/15 blur-[1px] animate-float-slow" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-[60%] right-[5%] w-3 h-3 rounded-full bg-emerald-500/15 blur-[1px] animate-float-slow" style={{ animationDelay: "-5s" }} />
      </div>

      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8">
          <div className="flex-1 max-w-2xl pt-24 sm:pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-zinc-500">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                </span>
                <span className="relative">
                  Full-Stack & Agentic AI Developer
                  <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                </span>
              </span>
            </motion.div>

            <h1 className="text-[2.2rem] sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6">
              {headingLines.map((line, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className={`block ${i === 0 ? "text-foreground" : i === 1 ? "text-accent" : "text-zinc-600"}`}
                >
                  {i === 4 ? (
                    <span className="relative inline-block">
                      {line.text}
                      <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent/20 to-transparent rounded-full" />
                    </span>
                  ) : i === 1 ? (
                    <span className="text-foreground">{line.text}</span>
                  ) : (
                    line.text
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-zinc-500 text-sm sm:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed"
            >
              Specializing in AI-powered full-stack applications — from RAG document Q&amp;A systems and logistics optimization engines to financial modeling tools and SaaS platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="#work"
                className="group relative px-8 py-3 rounded-xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-accent" />
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-black font-medium text-sm flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-3 rounded-xl border border-white/10 text-zinc-400 text-sm font-medium hover:bg-white/5 hover:text-foreground hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get in Touch</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 perspective-[800px] mt-36 sm:mt-28 md:mt-36"
          >
            <motion.div
              style={{ rotateX: springY, rotateY: springX }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-12 rounded-3xl bg-accent/10 blur-3xl"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -inset-6 rounded-2xl border border-accent/10 animate-pulse-glow" />
                <div className="absolute -inset-6 rounded-2xl border border-accent/5 animate-float-slow pointer-events-none" />
                <div className="relative h-36 w-36 sm:h-56 sm:w-56 md:h-72 md:w-72 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-accent/5">
                  <img
                    src="/logo.jpg"
                    alt="Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-accent/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
