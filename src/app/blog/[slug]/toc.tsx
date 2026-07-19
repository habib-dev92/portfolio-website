"use client";

import { useState, useEffect } from "react";

function extractHeadings(content: string) {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ level, text, id });
    }
  }
  return headings;
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState("");
  const headings = extractHeadings(content);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className="hidden lg:block sticky top-32 w-56 shrink-0">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-4">
        On this page
      </h4>
      <ul className="space-y-2.5">
        {headings.map((h) => (
          <li key={h.text}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors duration-200 ${
                h.level === 3 ? "pl-4" : ""
              } ${
                activeId === h.id
                  ? "text-accent font-medium"
                  : "text-muted/60 hover:text-foreground"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
