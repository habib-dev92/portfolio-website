"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogArticles } from "@/data/blog";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 sm:py-32 overflow-hidden before:absolute before:top-0 before:left-4 sm:before:left-6 lg:before:left-8 before:right-4 sm:before:right-6 lg:before:right-8 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading label="Blog" title="Latest Articles" highlight="Articles" />

        <div className="grid md:grid-cols-2 gap-6">
          {blogArticles.slice(0, 4).map((article, i) => (
            <motion.a
              href={`/blog/${article.slug}`}
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-0.5 transition-all duration-500 cursor-pointer"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${i % 2 === 0 ? "from-accent/20 via-accent/5 to-background" : "from-primary/20 via-primary/5 to-background"}`} />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="text-accent font-mono">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:gap-2 transition-all duration-300">
                  Read Article
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted text-sm font-medium hover:bg-card hover:text-foreground hover:border-accent/30 transition-all duration-300"
          >
            View All Articles
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
