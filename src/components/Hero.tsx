"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 blur-[180px] animate-aurora" />
        <div className="absolute -bottom-1/3 -right-1/4 w-3/4 h-2/3 rounded-full bg-gradient-to-tr from-accent/10 via-primary/8 to-accent/5 blur-[180px] animate-aurora" style={{ animationDelay: "-8s" }} />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-primary/5 blur-[140px] animate-aurora" style={{ animationDelay: "-16s" }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-accent/40 blur-[3px] animate-float-slow" />
        <div className="absolute top-[35%] right-[10%] w-1.5 h-1.5 rounded-full bg-primary/30 blur-[3px] animate-float-slow" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-[30%] left-[12%] w-2.5 h-2.5 rounded-full bg-accent/30 blur-[3px] animate-float-slow" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-[20%] right-[5%] w-2 h-2 rounded-full bg-primary/35 blur-[3px] animate-float-slow" style={{ animationDelay: "-9s" }} />
        <div className="absolute top-[55%] left-[35%] w-1 h-1 rounded-full bg-accent/40 blur-[2px] animate-float-slow" style={{ animationDelay: "-12s" }} />
        <div className="absolute top-[15%] right-[25%] w-1.5 h-1.5 rounded-full bg-primary/25 blur-[3px] animate-float-slow" style={{ animationDelay: "-14s" }} />
      </div>

      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-8 pt-24 sm:pt-28 lg:pt-32">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-muted">
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

            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-[2.8rem] sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="block text-foreground"
              >
                Building AI-Powered
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="block text-accent"
              >
                Solutions
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="block text-muted/60"
              >
                for Businesses
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="block"
              >
                <span className="relative inline-block text-accent">
                  and Supply Chains
                  <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent/20 to-transparent rounded-full" />
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted text-sm sm:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed"
            >
              <span className="text-foreground/80 font-medium">Junior Manager Warehouse</span> with 15+ years supply chain expertise — now building AI-powered applications that make businesses smarter and operations leaner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 flex-wrap"
            >
              <a
                href="/#projects"
                className="group relative px-8 py-3.5 rounded-xl overflow-hidden shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow duration-500 text-center"
              >
                <span className="absolute inset-0 bg-accent" />
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15 group-hover:ring-white/25 transition-all duration-500" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative text-white font-medium text-sm flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/#contact"
                className="group px-8 py-3.5 rounded-xl border border-border text-muted text-sm font-medium hover:bg-card hover:text-foreground hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden text-center"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Contact Me
                  <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 blur-[100px] animate-glow-pulse" />
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-accent/10 via-primary/5 to-accent/10 blur-3xl" />

              <div className="relative group">
                <div className="absolute -inset-[2px] rounded-[17px] bg-gradient-to-br from-accent via-primary to-accent-dark opacity-40 blur-[2px] animate-mesh" />
                <div className="absolute -inset-[2px] rounded-[17px] bg-gradient-to-tr from-primary/60 via-accent/40 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-48 sm:w-52 md:w-72 lg:w-80 aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-accent/15">
                  <Image
                    src="/habib-picture.png"
                    alt="Habib Ul Haq"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 208px, 288px"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 z-20">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-background/80 backdrop-blur-sm border border-border/60 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 shadow-sm hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300">
                    <span className="relative flex w-1.5 h-1.5 sm:w-2 sm:h-2">
                      <span className="absolute inset-0 rounded-full bg-accent" />
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                    </span>
                    <span className="text-[8px] sm:text-[10px] font-medium text-muted tracking-wide">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] text-muted/50 tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-muted/30 to-accent/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
