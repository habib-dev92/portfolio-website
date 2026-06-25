"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#certificates", label: "Certifications" },
  { href: "#work", label: "Work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);

      const sections = ["about", "services", "certificates", "work"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-zinc-950/70 backdrop-blur-2xl shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-zinc-950/30 backdrop-blur-md"
        }`}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent/80 via-accent/40 to-transparent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative shrink-0">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-1 ring-white/[0.08] group-hover:ring-accent/50 transition-all duration-500">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <motion.div
              className="absolute -inset-0.5 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
              animate={{ opacity: [0, 0.08, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex flex-col gap-px">
            <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground leading-none">
              Habib.dev
            </span>
            <span className="text-[8px] sm:text-[9px] text-zinc-500 tracking-widest uppercase leading-tight">
              Full-Stack & Agentic AI Developer
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-md bg-accent/[0.06] border border-accent/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative px-5 py-2 text-sm font-medium rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-accent rounded-lg" />
            <span className="absolute inset-0 bg-gradient-to-br from-accent to-emerald-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 group-hover:ring-white/30 transition-all duration-500" />
            <span className="relative text-black flex items-center gap-1.5">
              Hire Me
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 flex flex-col items-end gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
            className="block h-[1.5px] bg-foreground rounded-full origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="block h-[1.5px] bg-foreground rounded-full"
            style={{ width: 16 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
            className="block h-[1.5px] bg-foreground rounded-full origin-center"
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                  className={`relative text-2xl sm:text-3xl font-medium transition-colors duration-300 ${
                    activeSection === link.href
                      ? "text-accent"
                      : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="mobileActiveNav"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  delay: navLinks.length * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                }}
                className="mt-2 px-8 py-3.5 text-base font-medium rounded-xl bg-accent text-black hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/25"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
