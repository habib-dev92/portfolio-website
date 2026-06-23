"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img src="/logo.jpg" alt="Logo" className="h-20 w-20 rounded-full object-cover ring-2 ring-accent/10" />
              <div className="absolute inset-0 rounded-full ring-1 ring-accent/20" />
              <motion.div
                className="absolute -inset-1 rounded-full border border-accent/10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">Habib Ul Haq</div>
              <div className="text-sm text-zinc-500 mt-1">Full-Stack &amp; Agentic AI Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/habib-ul-haq-975140221"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <div className="w-px h-8 bg-white/5 mx-2" />
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Habib Ul Haq. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Crafted with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
