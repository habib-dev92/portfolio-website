"use client";

import { toast } from "@/components/Toast";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://habibulhaq.com/blog/${slug}`;
  const shareText = `${title} — Habib Ul Haq`;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted/50">Share</span>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url).then(() => {
            toast("Link copied to clipboard");
          });
        }}
        className="text-muted/60 hover:text-accent transition-colors"
        title="Copy link"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted/60 hover:text-accent transition-colors"
        title="Share on X"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M17.232 6.232l-3.696 3.696" />
        </svg>
      </a>
      <a
        href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted/60 hover:text-accent transition-colors"
        title="Share on LinkedIn"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </a>
    </div>
  );
}
