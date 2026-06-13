import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
  author: string;
  content: string;
}

type Status = "loading" | "success" | "error";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
}

function excerpt(html: string, maxLen = 160): string {
  const text = stripHtml(html);
  return text.length > maxLen ? text.slice(0, maxLen).trimEnd() + "…" : text;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

function readTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min read`;
}

function SkeletonCard() {
  return (
    <div className="border-t border-border pt-8 pb-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-3 space-y-3">
          <div className="h-3 w-20 bg-surface rounded" />
          <div className="h-5 w-40 bg-surface rounded" />
          <div className="h-3 w-24 bg-surface rounded" />
        </div>
        <div className="lg:col-span-9 space-y-3">
          <div className="h-4 w-full bg-surface rounded" />
          <div className="h-4 w-4/5 bg-surface rounded" />
          <div className="h-4 w-3/5 bg-surface rounded" />
          <div className="flex gap-2 mt-4">
            <div className="h-5 w-16 bg-surface rounded" />
            <div className="h-5 w-20 bg-surface rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(siteConfig.mediumRSS);
        if (!res.ok) throw new Error("Feed fetch failed");
        const data = await res.json();
        if (data.status !== "ok") throw new Error("Feed returned error");
        setPosts(data.items ?? []);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }
    fetchPosts();
  }, []);

  // Collect all unique tags across posts
  const allTags = [
    "All",
    ...Array.from(new Set(posts.flatMap((p) => p.categories))).filter(Boolean).slice(0, 8),
  ];

  const filtered =
    activeTag === "All" ? posts : posts.filter((p) => p.categories.includes(activeTag));

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Header ───────────────────────────────────────────── */}
      <section className="mb-16">
        <span className="font-mono-custom text-xs text-subtle uppercase tracking-widest animate-fade-in delay-100">
          Writing
        </span>
        <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] tracking-tightest text-primary mt-3 mb-6 animate-fade-up delay-200">
          Blog
        </h1>
        <p className="text-subtle text-[15px] max-w-xl leading-relaxed animate-fade-up delay-300">
          I write about things I'm learning or building — systems programming, backend architecture, DevOps, and occasionally a deep dive into something that confused me. Published on{" "}
          <a
            href={siteConfig.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors duration-200"
          >
            Medium ↗
          </a>
          , mirrored here.
        </p>
      </section>

      {/* ── Tag filter (only when posts loaded) ──────────────── */}
      {status === "success" && allTags.length > 1 && (
        <div className="flex flex-wrap items-center gap-0 mb-12 border-b border-border animate-fade-up delay-300">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-3 text-xs font-mono-custom uppercase tracking-widest transition-all duration-200 border-b-2 -mb-px whitespace-nowrap ${
                activeTag === tag
                  ? "border-accent text-accent"
                  : "border-transparent text-subtle hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono-custom text-muted pb-3">
            {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          </span>
        </div>
      )}

      {/* ── Loading skeletons ─────────────────────────────────── */}
      {status === "loading" && (
        <div className="space-y-0">
          {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* ── Error state ──────────────────────────────────────── */}
      {status === "error" && (
        <div className="border-t border-border pt-16 pb-16 text-center">
          <p className="font-mono-custom text-xs text-muted uppercase tracking-widest mb-4">
            Feed unavailable
          </p>
          <p className="text-subtle text-sm mb-8 max-w-sm mx-auto">
            Couldn't load posts right now. Read everything directly on Medium.
          </p>
          <a
            href={siteConfig.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-muted text-subtle font-mono-custom text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            Open Medium ↗
          </a>
        </div>
      )}

      {/* ── Posts ────────────────────────────────────────────── */}
      {status === "success" && filtered.length === 0 && (
        <div className="border-t border-border pt-16 text-center">
          <p className="text-subtle text-sm">No posts in this category yet.</p>
        </div>
      )}

      {status === "success" && filtered.length > 0 && (
        <div className="space-y-0">
          {filtered.map((post, i) => (
            <article
              key={post.link}
              className="group border-t border-border pt-8 pb-8 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

                {/* Left column — meta */}
                <div className="lg:col-span-3">
                  <p className="font-mono-custom text-xs text-muted mb-3">
                    {formatDate(post.pubDate)}
                  </p>

                  {/* Thumbnail */}
                  {post.thumbnail && (
                    <div className="w-full aspect-video overflow-hidden border border-border mb-4 hidden lg:block">
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <p className="font-mono-custom text-xs text-muted">
                    {readTime(post.content)}
                  </p>
                </div>

                {/* Right column — content */}
                <div className="lg:col-span-9">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link"
                  >
                    <h2 className="font-display font-semibold text-xl lg:text-2xl text-primary tracking-tighter leading-tight mb-3 group-hover/link:text-accent transition-colors duration-200">
                      {post.title}
                    </h2>
                  </a>

                  <p className="text-subtle text-[14px] leading-relaxed mb-5">
                    {excerpt(post.description, 200)}
                  </p>

                  {/* Tags */}
                  {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.categories.slice(0, 4).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setActiveTag(tag)}
                          className="text-xs font-mono-custom text-subtle border border-border px-2.5 py-1 hover:border-muted hover:text-primary transition-all duration-200"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-custom text-subtle hover:text-accent transition-colors duration-200"
                  >
                    Read on Medium ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ── Footer CTA ───────────────────────────────────────── */}
      {status === "success" && (
        <div className="border-t border-border mt-12 pt-8 flex items-center justify-between animate-fade-in">
          <p className="text-xs font-mono-custom text-muted">
            All posts live on Medium — follow there for notifications.
          </p>
          <a
            href={siteConfig.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono-custom text-subtle hover:text-accent transition-colors duration-200"
          >
            @jayraje ↗
          </a>
        </div>
      )}
    </main>
  );
}
