"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const certificates = [
  {
    title: "WordPress",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-WordPress-DigiSkills.pdf",
    gradient: "from-blue-500/20 via-blue-500/5 to-zinc-950",
    accent: "blue",
    iconColor: "text-blue-400/60 group-hover:text-blue-300",
    borderGlow: "hover:border-blue-500/30",
    ringGlow: "rgba(59,130,246,0.25)",
  },
  {
    title: "Communication & Soft Skills",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Communication-and-Soft-Skills-DigiSkills.pdf",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-zinc-950",
    accent: "emerald",
    iconColor: "text-emerald-400/60 group-hover:text-emerald-300",
    borderGlow: "hover:border-emerald-500/30",
    ringGlow: "rgba(16,185,129,0.25)",
  },
  {
    title: "Freelancing",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Freelancing-DigiSkills.pdf",
    gradient: "from-purple-500/20 via-purple-500/5 to-zinc-950",
    accent: "purple",
    iconColor: "text-purple-400/60 group-hover:text-purple-300",
    borderGlow: "hover:border-purple-500/30",
    ringGlow: "rgba(168,85,247,0.25)",
  },
  {
    title: "Graphic Design",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Graphic-Design-DigiSkills.pdf",
    gradient: "from-amber-500/20 via-amber-500/5 to-zinc-950",
    accent: "amber",
    iconColor: "text-amber-400/60 group-hover:text-amber-300",
    borderGlow: "hover:border-amber-500/30",
    ringGlow: "rgba(245,158,11,0.25)",
  },
];

function CrestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="0.6" />
      <path d="M24 32 L30 38 L40 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function CertificateCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - centerY) / rect.height) * -4);
    rotateY.set(((e.clientX - centerX) / rect.width) * 4);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={cert.file}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] ${cert.borderGlow} hover:shadow-xl transition-all duration-500 cursor-pointer`}
    >
      {/* ===== HEADER ===== */}
      <div className={`aspect-[4/3] bg-gradient-to-br ${cert.gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
        {/* Parchment-style dot pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, white 0.6px, transparent 0.6px)", backgroundSize: "12px 12px" }} />

        {/* Outer decorative border ring */}
        <div className="absolute inset-4 rounded-xl border border-white/[0.04]" />
        <div className="absolute inset-5 rounded-xl border border-white/[0.02]" />

        {/* Ribbon banner — top */}
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 z-10">
          <svg width="160" height="32" viewBox="0 0 160 32" fill="none" className="opacity-80">
            <path d="M10 2 H150 L158 16 L150 30 H10 L2 16 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <path d="M10 2 H150 L158 16 L150 30 H10 L2 16 Z" fill="rgba(255,255,255,0.02)" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[9px] uppercase tracking-[0.25em] text-white/25 font-medium">
            Verified Credential
          </span>
        </div>

        {/* Animated shine overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.04) 42%, transparent 49%)" }}
        />

        {/* Crest medallion */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          {/* Outer glow */}
          <motion.div
            className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${cert.ringGlow}, transparent 70%)` }}
          />
          {/* Medal rings */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 rounded-full border border-white/[0.04] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/[0.015] flex items-center justify-center">
                  <CrestIcon className={`w-10 h-10 ${cert.iconColor} transition-colors duration-300`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner ornamental filigree */}
        <svg className="absolute top-3 left-3 w-12 h-12 text-white/[0.04]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M2 2 H46 M2 2 V46" />
          <path d="M12 2 C12 8 8 12 2 12" />
          <path d="M36 2 C36 8 40 12 46 12" />
          <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        </svg>
        <svg className="absolute top-3 right-3 w-12 h-12 text-white/[0.04]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M46 2 H2 M46 2 V46" />
          <path d="M36 2 C36 8 40 12 46 12" />
          <path d="M12 2 C12 8 8 12 2 12" />
          <circle cx="46" cy="2" r="1.5" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-3 left-3 w-12 h-12 text-white/[0.04]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M2 46 H46 M2 46 V2" />
          <path d="M12 46 C12 40 8 36 2 36" />
          <path d="M36 46 C36 40 40 36 46 36" />
          <circle cx="2" cy="46" r="1.5" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-3 right-3 w-12 h-12 text-white/[0.04]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M46 46 H2 M46 46 V2" />
          <path d="M36 46 C36 40 40 36 46 36" />
          <path d="M12 46 C12 40 8 36 2 36" />
          <circle cx="46" cy="46" r="1.5" fill="currentColor" />
        </svg>

        {/* Gold seal stamp at bottom-right */}
        <div className="absolute bottom-3 right-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-amber-400/50">
            <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2" />
            <path d="M10 14 L13 17 L18 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* View button on hover */}
        <motion.div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-black/90 hover:border-accent/30 transition-all shadow-lg">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            View Certificate
          </span>
        </motion.div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="p-5 relative">
        {/* Top accent divider */}
        <div className="absolute top-0 left-5 right-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Title with decorative underline */}
        <div className="mt-1">
          <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300 leading-snug">
            {cert.title}
          </h3>
        </div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-2 my-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
          <svg className="w-3 h-3 text-zinc-600/40" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M6 1 V11 M1 6 H11" />
            <circle cx="6" cy="6" r="1.5" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        </div>

        {/* Issuer with badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-600">Issued by</span>
          </div>
        </div>
        <div className="mt-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-md hover:bg-white/[0.04] transition-colors">
            <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            {cert.issuer}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-20 sm:py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(74,222,128,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Certifications &amp; <span className="text-accent">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
