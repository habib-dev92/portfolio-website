"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || !stored;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  const toggleDark = () => setDark(!dark);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        setScrolled(sy > 50);

        if (sy > 200 && sy > lastScrollY.current + 8) {
          setHidden(true);
        } else if (sy < lastScrollY.current - 4 || sy < 200) {
          setHidden(false);
        }
        lastScrollY.current = sy;

        const total = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(total > 0 ? sy / total : 0);

        if (pathname === "/") {
          const ids = navLinks.map((l) => l.href.replace("/#", ""));
          for (const id of ids.reverse()) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 200) {
              setActiveSection("/#" + id);
              break;
            }
          }
        }
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/blog") setActiveSection("/blog");
    else if (pathname === "/") setActiveSection("");
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-background max-md:border-b-2 max-md:border-border/60 md:bg-background/95 md:backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)] border-b border-border/50"
            : "bg-background max-md:border-b-2 max-md:border-border/40 md:bg-background/95 md:backdrop-blur-xl md:shadow-sm"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.015] to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent via-accent-dark to-transparent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-4">
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative shrink-0">
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-2 ring-border/60 group-hover:ring-accent/50 transition-all duration-500">
              <Image src="/logo.jpeg" alt="Habib Ul Haq" fill className="object-cover" />
            </div>
            <motion.div
              className="absolute -inset-0.5 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
              animate={{ opacity: [0, 0.08, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex flex-col gap-px">
            <span className="text-sm sm:text-base font-bold tracking-tight text-foreground leading-none">
              Habib.dev
            </span>
            <span className="text-[8px] sm:text-[9px] text-muted tracking-widest uppercase leading-tight">
              Full-Stack & Agentic AI Developer
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                activeSection === link.href
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-md bg-accent/[0.06] border border-accent/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="relative w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {mounted ? (dark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )) : <div className="w-4 h-4" />}
          </button>

          <Link
            href="/#contact"
            className="group relative px-5 py-2 text-sm font-medium rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary rounded-lg" />
            <span className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20 group-hover:ring-white/30 transition-all duration-500" />
            <span className="relative text-white flex items-center gap-1.5">
              Hire Me
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1.5">
          <button
            onClick={toggleDark}
            className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 active:scale-95 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {mounted ? (dark ? (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )) : <div className="w-[18px] h-[18px]" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 w-10 h-10 rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-1 hover:border-accent/30 active:scale-95 transition-all duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5.5, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              className="block h-[2px] bg-foreground rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block h-[2px] bg-foreground rounded-full"
              style={{ width: 14 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -5.5, width: 18 } : { rotate: 0, y: 0, width: 18 }}
              className="block h-[2px] bg-foreground rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/98" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 rounded-full bg-gradient-to-bl from-accent/[0.08] via-primary/[0.04] to-transparent blur-[120px] animate-aurora" />
              <div className="absolute -bottom-1/3 -left-1/3 w-2/3 h-2/3 rounded-full bg-gradient-to-tr from-primary/[0.06] via-accent/[0.04] to-transparent blur-[120px] animate-aurora" style={{ animationDelay: "-8s" }} />
              <div className="absolute top-1/4 left-1/2 w-1 h-1 rounded-full bg-accent/30 blur-[3px] animate-float-slow" />
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/25 blur-[3px] animate-float-slow" style={{ animationDelay: "-5s" }} />
            </div>

            <div className="relative z-10 flex flex-col h-full px-6 py-6">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="relative h-9 w-9 rounded-full overflow-hidden ring-1 ring-border">
                    <Image src="/logo.jpeg" alt="Habib Ul Haq" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold tracking-tight text-foreground leading-none">Habib Ul Haq</div>
                    <div className="text-[9px] text-muted tracking-widest uppercase leading-tight mt-0.5">Full-Stack & Agentic AI Developer</div>
                  </div>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent/30 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <nav className="flex-1 flex flex-col justify-center -mt-16">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`group relative flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                          activeSection === link.href
                            ? "bg-accent/[0.06] text-accent"
                            : "text-muted hover:text-foreground hover:bg-card/50"
                        }`}
                      >
                        <span className={`w-1 h-6 rounded-full transition-all duration-300 ${
                          activeSection === link.href
                            ? "bg-accent"
                            : "bg-border/0 group-hover:bg-border/50"
                        }`} />
                        <span className="text-lg font-medium">{link.label}</span>
                        <svg className={`w-4 h-4 ml-auto transition-all duration-300 ${
                          activeSection === link.href
                            ? "text-accent opacity-100 translate-x-0"
                            : "text-muted/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.08 + navLinks.length * 0.06 + 0.08, duration: 0.3 }}
                className="space-y-4"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="group relative block w-full px-6 py-3.5 text-center text-sm font-medium rounded-2xl overflow-hidden"
                >
                  <span className="absolute inset-0 bg-primary" />
                  <span className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                  <span className="relative text-white flex items-center justify-center gap-2">
                    Get in Touch
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href="https://linkedin.com/in/habib-ul-haq-975140221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://github.com/habib-dev92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
