"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const certificates = [
  {
    title: "Freelancing",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Freelancing-DigiSkills.pdf",
    gradient: "from-accent/20 via-accent/5 to-background",
    iconColor: "text-accent/60 group-hover:text-accent",
    ringGlow: "rgba(6,182,212,0.25)",
  },
  {
    title: "Graphic Design",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Graphic-Design-DigiSkills.pdf",
    gradient: "from-primary/20 via-primary/5 to-background",
    iconColor: "text-primary/60 group-hover:text-primary",
    ringGlow: "rgba(37,99,235,0.25)",
  },
  {
    title: "WordPress",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-WordPress-DigiSkills.pdf",
    gradient: "from-accent/20 via-accent/5 to-background",
    iconColor: "text-accent/60 group-hover:text-accent",
    ringGlow: "rgba(6,182,212,0.25)",
  },
  {
    title: "Communication & Soft Skills",
    issuer: "DigiSkills",
    file: "/certificates/Certificate-Communication-and-Soft-Skills-DigiSkills.pdf",
    gradient: "from-primary/20 via-primary/5 to-background",
    iconColor: "text-primary/60 group-hover:text-primary",
    ringGlow: "rgba(37,99,235,0.25)",
  },
];

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="0.8" />
      <path d="M24 32 L30 38 L40 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CertificateCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  return (
    <motion.a
      href={cert.file}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
    >
      <div className={`aspect-[4/3] bg-gradient-to-br ${cert.gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 0.6px, transparent 0.6px)", backgroundSize: "12px 12px" }} />

        <embed
          src={cert.file}
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        />

        <div className="relative z-10 flex flex-col items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
          <motion.div
            className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${cert.ringGlow}, transparent 70%)` }}
          />
          <div className="relative">
            <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                <CertificateIcon className={`w-10 h-10 ${cert.iconColor} transition-colors duration-300`} />
              </div>
            </div>
          </div>
          <span className="text-xs text-muted font-medium">Click to view full PDF</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        <motion.div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-30">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground bg-background/70 backdrop-blur-md px-4 py-2 rounded-full border border-border hover:border-accent/30 transition-all shadow-lg">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            View Certificate
          </span>
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
          {cert.title}
        </h3>
        <div className="flex items-center gap-2 mt-3">
          <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span className="text-xs text-muted">{cert.issuer}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Certificates() {
  return (
    <section id="certifications" className="relative py-20 sm:py-32 overflow-hidden before:absolute before:top-0 before:left-4 sm:before:left-6 lg:before:left-8 before:right-4 sm:before:right-6 lg:before:right-8 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Credentials" title="Certifications & Achievements" highlight="Achievements" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
