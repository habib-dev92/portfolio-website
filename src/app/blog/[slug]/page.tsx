import Link from "next/link";
import type { Metadata } from "next";
import { blogArticles } from "@/data/blog";
import { BlogContent } from "./content";
import { ReadingProgress } from "./progress-bar";
import { TableOfContents } from "./toc";
import { ShareButtons } from "./share-buttons";

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Blog | Habib Ul Haq" };
  return {
    title: `${article.title} | Habib Ul Haq`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

function getRelated(current: typeof blogArticles[0], count = 3) {
  return blogArticles
    .filter((a) => a.slug !== current.slug && a.category === current.category)
    .slice(0, count);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-card border border-border flex items-center justify-center">
            <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Article Not Found</h1>
          <p className="text-muted mb-6">The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelated(article);

  return (
    <>
      <ReadingProgress />
      <main className="min-h-screen py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex gap-12">
            <article className="flex-1 min-w-0 max-w-3xl">
              <header className="mb-10">
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted font-mono">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-muted">{article.readTime}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  {article.title}
                </h1>
                <p className="text-base sm:text-lg text-muted leading-relaxed border-l-2 border-accent/30 pl-4 italic">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 mt-6 text-sm text-muted">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                    HU
                  </div>
                  <div>
                    <span className="font-medium text-foreground/80 block">{article.author}</span>
                    <span className="text-xs text-muted/60">Full-Stack & Agentic AI Developer</span>
                  </div>
                </div>
              </header>

              <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-border">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted hover:border-accent/20 hover:text-accent transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                <BlogContent content={article.content} />
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors group"
                  >
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 12H5m7 7l-7-7 7-7" />
                    </svg>
                    Back to Blog
                  </Link>
                  <ShareButtons title={article.title} slug={article.slug} />
                </div>
              </div>
            </article>

            <aside className="hidden lg:block w-56 shrink-0">
              <TableOfContents content={article.content} />
            </aside>
          </div>

          {related.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border">
              <h2 className="text-2xl font-bold mb-8">
                More in <span className="text-accent">{article.category}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}>
                    <article className="group border border-border rounded-2xl p-5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col bg-card/30">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                          {r.category}
                        </span>
                        <span className="text-[10px] text-muted">{r.readTime}</span>
                      </div>
                      <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed line-clamp-2 flex-1">
                        {r.excerpt}
                      </p>
                      <span className="text-xs text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read &rarr;
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
