"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "AI Chatbot Development",
    description:
      "Custom AI chatbots powered by LLMs, RAG pipelines, and agentic workflows for customer support, document Q&A, and business automation.",
    features: ["RAG Pipelines", "AI Chatbots", "Document Q&A", "Multi-LLM Support"],
    gradient: "from-accent/10 to-transparent",
    border: "hover:border-accent/30",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Portfolio Website Development",
    description:
      "Modern, responsive, and performant portfolio websites built with Next.js, TypeScript, and Tailwind CSS — optimized for performance and SEO.",


    features: ["Next.js & React", "TypeScript", "Tailwind CSS", "SEO Optimized"],
    gradient: "from-primary/10 to-transparent",
    border: "hover:border-primary/30",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Business Automation Solutions",
    description:
      "End-to-end automation for business processes — from data extraction and Excel processing to custom AI agents that streamline operations.",


    features: ["Process Automation", "Data Extraction", "AI Agents", "Excel Processing"],
    gradient: "from-accent/10 to-transparent",
    border: "hover:border-accent/30",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Custom SaaS Development",
    description:
      "Full-stack SaaS platforms with user authentication, billing, dashboards, and role-based access — built to scale from day one.",


    features: ["Full-Stack SaaS", "Auth & Billing", "Dashboards", "API Development"],
    gradient: "from-primary/10 to-transparent",
    border: "hover:border-primary/30",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, style, handleMouse, handleLeave } = useTilt(6);
  const isAccent = service.border === "hover:border-accent/30";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={style}
      className={`group relative p-6 sm:p-8 rounded-2xl bg-card border border-border ${service.border} hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ padding: "1px", background: `linear-gradient(135deg, ${isAccent ? "rgba(6,182,212,0.3)" : "rgba(37,99,235,0.3)"}, transparent 40%, transparent 60%, ${isAccent ? "rgba(6,182,212,0.15)" : "rgba(37,99,235,0.15)"})`, mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full ${isAccent ? "bg-accent/5" : "bg-primary/5"} blur-3xl ${isAccent ? "group-hover:bg-accent/10" : "group-hover:bg-primary/10"} transition-all duration-500`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center ${isAccent ? "text-accent/60 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5" : "text-primary/60 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5"} transition-all duration-300 mb-5`}>
          {service.icon}
        </div>
        <h3 className={`text-xl font-semibold mb-3 ${isAccent ? "group-hover:text-accent" : "group-hover:text-primary"} transition-colors duration-300`}>
          {service.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feature) => (
            <span
              key={feature}
              className={`text-xs px-3 py-1.5 rounded-full bg-background text-muted border border-border ${isAccent ? "group-hover:bg-accent/10 group-hover:text-accent/80 group-hover:border-accent/10" : "group-hover:bg-primary/10 group-hover:text-primary/80 group-hover:border-primary/10"} transition-all duration-300`}
            >
              {feature}
            </span>
          ))}
        </div>
        <Link
          href="/#contact"
          className={`group/link relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 ${
            isAccent
              ? "bg-accent/10 text-accent hover:bg-accent hover:text-white"
              : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
          }`}
        >
          <span className="relative z-10">Get a Quote</span>
          <svg className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Services" title="What I Offer" highlight="I Offer" />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
