"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    label: "Location",
    value: "Remote",
    href: undefined,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Availability",
    value: "Open for opportunities",
    href: undefined,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function ContactCard({ info, index }: { info: typeof contactInfo[0]; index: number }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent flex-shrink-0">
        {info.icon}
      </div>
      <div>
        <div className="text-xs text-zinc-500 mb-0.5">{info.label}</div>
        <div className="text-sm text-foreground font-medium">{info.value}</div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      {info.href ? (
        <a
          href={info.href}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-accent/[0.03] hover:border-accent/15 transition-all duration-300"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {content}
        </div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      setFormState("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    } catch {
      setFormState("idle");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,222,128,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-zinc-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s <span className="text-accent">Work Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-accent/5 rounded-full blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-accent/5 rounded-lg rotate-12 blur-sm" />
              <p className="text-zinc-400 text-base leading-relaxed relative">
                Have a project, idea, or just want to chat? I&apos;m always open to 
                discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <ContactCard key={info.label} info={info} index={i} />
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-white/5 bg-white/[0.015] p-6 sm:p-8 transition-all duration-500 focus-within:border-accent/20 focus-within:shadow-[0_0_40px_rgba(74,222,128,0.05)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent pointer-events-none" />
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/0 focus-within:ring-accent/10 transition-all duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                {formState === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6"
                    >
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-sm text-zinc-500 text-center">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="group relative">
                        <label className="block text-xs text-zinc-600 mb-2 font-medium tracking-wide uppercase flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-foreground placeholder-zinc-700 focus:outline-none focus:border-accent/40 focus:bg-accent/[0.02] transition-all duration-300 peer"
                          />
                          <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                      </div>
                      <div className="group relative">
                        <label className="block text-xs text-zinc-600 mb-2 font-medium tracking-wide uppercase flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          Your Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            required
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-foreground placeholder-zinc-700 focus:outline-none focus:border-accent/40 focus:bg-accent/[0.02] transition-all duration-300 peer"
                          />
                          <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="block text-xs text-zinc-600 mb-2 font-medium tracking-wide uppercase flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project..."
                          rows={5}
                          required
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-foreground placeholder-zinc-700 focus:outline-none focus:border-accent/40 focus:bg-accent/[0.02] transition-all duration-300 resize-none peer"
                        />
                        <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-left" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-zinc-700">
                        I typically respond within 24 hours
                      </p>
                      <motion.button
                        type="submit"
                        disabled={formState === "sending" || !formData.name || !formData.email || !formData.message}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-6 py-3 rounded-xl overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 bg-accent" />
                        <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative text-black font-medium text-sm flex items-center gap-2">
                          {formState === "sending" ? (
                            <>
                              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
