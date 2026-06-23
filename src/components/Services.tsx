"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const services = [
  {
    title: "AI & RAG Solutions",
    description:
      "Intelligent document Q&A systems, custom AI agent engines, and RAG pipelines powered by OpenAI, Ollama, and LangChain — grounded, private, and production-ready.",
    features: [
      "RAG Pipelines",
      "AI Chatbots",
      "Document Q&A",
      "Multi-LLM Support",
    ],
    gradient: "from-emerald-500/10 to-transparent",
    border: "hover:border-emerald-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with Next.js, React, TypeScript, and Tailwind CSS — from concept and design to deployment and scaling.",
    features: [
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    gradient: "from-blue-500/10 to-transparent",
    border: "hover:border-blue-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Data Engineering & ETL",
    description:
      "Python-powered data pipelines that clean, flatten, and transform messy spreadsheets and documents into structured, analysis-ready datasets.",
    features: [
      "Excel Processing",
      "Data Extraction",
      "ETL Pipelines",
      "pandas & openpyxl",
    ],
    gradient: "from-purple-500/10 to-transparent",
    border: "hover:border-purple-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Backend & API Architecture",
    description:
      "Scalable backend services with FastAPI, Python, and PostgreSQL — featuring async patterns, JWT auth, Docker orchestration, and multi-service deployments.",
    features: [
      "FastAPI & Python",
      "PostgreSQL & MongoDB",
      "Docker Deployment",
      "JWT Authentication",
    ],
    gradient: "from-amber-500/10 to-transparent",
    border: "hover:border-amber-500/20",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - centerY) / rect.height) * -6);
    rotateY.set(((e.clientX - centerX) / rect.width) * 6);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:shadow-glow transition-all duration-500 overflow-hidden"
    >
      {/* Animated gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ padding: '1px', background: 'linear-gradient(135deg, rgba(74,222,128,0.3), transparent 40%, transparent 60%, rgba(74,222,128,0.15))', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }} />
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent/60 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300 mb-5">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-500 border border-white/5 group-hover:bg-accent/10 group-hover:text-accent/80 group-hover:border-accent/10 transition-all duration-300"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.03),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            What <span className="text-accent">I Do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
