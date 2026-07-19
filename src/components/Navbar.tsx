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
            ? "bg-background/70 backdrop-blur-2xl shadow-[0_0_40px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_-15px_rgba(0,0,0,0.6)] border-b border-border/40"
            : "bg-background/10 backdrop-blur-sm"
        }`}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />

      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent via-accent-dark to-transparent transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <a href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative shrink-0">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-1 ring-border group-hover:ring-accent/50 transition-all duration-500">
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

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted"
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
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex flex-col items-end gap-1.5 p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-background/95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`relative text-2xl sm:text-3xl font-medium transition-colors duration-300 py-2 px-4 -mx-4 ${
                      activeSection === link.href
                        ? "text-accent"
                        : "text-muted hover:text-foreground"
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
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  delay: navLinks.length * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-8 py-3.5 text-base font-medium rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 inline-block"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
