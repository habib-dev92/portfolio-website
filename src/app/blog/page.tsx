"use client";

import Link from "next/link";
import { useState, useMemo, useEffect, useRef } from "react";
import { blogArticles } from "@/data/blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const categories = useMemo(
    () => [...new Set(blogArticles.map((a) => a.category))],
    []
  );

  const filtered = useMemo(() => {
    return blogArticles.filter((a) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = !activeCategory || a.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogArticles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <main className="min-h-screen py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-muted text-lg sm:text-xl leading-relaxed">
            Thoughts on AI, agentic systems, supply chain, and building software that matters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 justify-between">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted/60 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search articles... (Ctrl+K)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <span className="text-xs text-muted/60 font-mono">
            {filtered.length} / {blogArticles.length} articles
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-300 ${
              !activeCategory
                ? "bg-accent/10 border-accent/30 text-accent shadow-sm shadow-accent/5"
                : "bg-card border-border text-muted hover:border-accent/20 hover:text-accent"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent/10 border-accent/30 text-accent shadow-sm shadow-accent/5"
                  : "bg-card border-border text-muted hover:border-accent/20 hover:text-accent"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-[10px] opacity-60">{categoryCounts[cat]}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-card border border-border flex items-center justify-center">
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <p className="text-muted text-lg mb-2">No articles found</p>
            <p className="text-muted/60 text-sm mb-6">Try a different search term or category.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory(null); }}
              className="text-sm text-accent hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-fade-up"
              >
                <article className="group border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-muted font-mono">{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 text-muted/40">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
