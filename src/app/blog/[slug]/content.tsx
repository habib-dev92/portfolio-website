"use client";

import React from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

function headingId(children: React.ReactNode): string {
  const text = extractText(children);
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number" || typeof node === "boolean") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const el = node as { props: { children?: React.ReactNode } };
    return extractText(el.props.children);
  }
  return "";
}

const components: Components = {
  h2: ({ children }) => {
    const id = headingId(children);
    return (
      <h2 id={id} className="text-2xl font-bold mt-10 mb-4 tracking-tight text-foreground scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    const id = headingId(children);
    return (
      <h3 id={id} className="text-xl font-semibold mt-8 mb-3 text-foreground/90 scroll-mt-24">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground/80">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-[15px] leading-relaxed mb-5 text-foreground/80">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground/80">
      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-accent/80">{children}</em>
  ),
  code: ({ children, className }) => {
    if (className) {
      const codeClass = className || "";
      return (
        <pre className="overflow-x-auto rounded-xl bg-card border border-border p-4 mb-6 text-sm font-mono leading-relaxed">
          <code className={codeClass}>{children}</code>
        </pre>
      );
    }
    return (
      <code className="px-1.5 py-0.5 rounded-md bg-accent/10 text-accent text-sm font-mono">
        {children}
      </code>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-accent/30 pl-4 italic text-muted my-6">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-10 border-border/50" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-card px-3 py-2 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-3 py-2 text-foreground/80">
      {children}
    </td>
  ),
};

export function BlogContent({ content }: { content: string }) {
  return (
    <ReactMarkdown components={components}>
      {content}
    </ReactMarkdown>
  );
}
