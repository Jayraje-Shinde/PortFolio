import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import projects from "../data/projects.json";

const featuredProject = [...projects].sort((a, b) => a.featured_order - b.featured_order)[0];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="mb-28">
        <div className="mb-6 animate-fade-up delay-100">
          <span className="font-mono-custom text-xs text-subtle tracking-widest uppercase">
            {siteConfig.location}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tightest text-primary mb-8 animate-fade-up delay-200">
          Jayraje<br />
          <span className="text-accent">Shinde</span>
        </h1>

        <div className="max-w-xl animate-fade-up delay-300">
          <p className="text-[17px] text-primary/70 leading-relaxed mb-2">
            Full Stack & Systems Engineer
          </p>
          <p className="text-[15px] text-subtle leading-relaxed">
            {siteConfig.bio}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-up delay-400">
          <a
            href={`mailto:${siteConfig.email}`}
            className="px-6 py-3 bg-accent text-bg font-display font-semibold text-sm hover:bg-accent-dim transition-colors duration-200"
          >
            Get in touch
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-muted text-subtle font-mono-custom text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            Resume ↗
          </a>
          <Link
            to="/projects"
            className="px-6 py-3 text-subtle font-mono-custom text-sm hover:text-primary transition-colors duration-200"
          >
            View projects →
          </Link>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-6 mt-8 animate-fade-up delay-500">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono-custom text-muted hover:text-primary transition-colors duration-200">
            GitHub ↗
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono-custom text-muted hover:text-primary transition-colors duration-200">
            LinkedIn ↗
          </a>
          <span className="text-xs font-mono-custom text-muted">{siteConfig.gdg}</span>
        </div>
      </section>

      {/* ── Horizontal rule ──────────────────────────────────── */}
      <div className="border-t border-border mb-20 animate-fade-in delay-500" />

      {/* ── About ────────────────────────────────────────────── */}
      <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 animate-fade-up delay-400">
        <div className="lg:col-span-3">
          <p className="font-mono-custom text-xs text-muted uppercase tracking-widest">About</p>
        </div>
        <div className="lg:col-span-9">
          <p className="text-[16px] text-primary/80 leading-relaxed mb-6">
            {siteConfig.summary}
          </p>

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
            {(Object.entries(siteConfig.skills) as [string, readonly string[]][]).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-mono-custom text-muted uppercase tracking-widest mb-3">
                  {category}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-subtle flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Project ─────────────────────────────────── */}
      <section className="mb-28 animate-fade-up delay-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-8">
          <div className="lg:col-span-3">
            <p className="font-mono-custom text-xs text-muted uppercase tracking-widest">Featured</p>
          </div>
          <div className="lg:col-span-9">
            <p className="text-xs text-muted font-mono-custom">Flagship project</p>
          </div>
        </div>

        <div className="border border-border p-8 lg:p-10 hover:border-muted transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="inline-block text-xs font-mono-custom text-subtle border border-border px-2 py-0.5 mb-4">
                {featuredProject.category}
              </span>
              <h2 className="font-display font-bold text-3xl text-primary tracking-tighter mb-2">
                {featuredProject.title}
              </h2>
              <p className="text-subtle text-sm mb-6">{featuredProject.tagline}</p>

              {featuredProject.metrics.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {featuredProject.metrics.map((m, i) => (
                    <li key={i} className="text-xs text-accent font-mono-custom flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              )}

              <p className="text-xs text-muted font-mono-custom">{featuredProject.role}</p>

              <div className="mt-6">
                {featuredProject.github ? (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-custom text-subtle hover:text-accent transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="text-xs font-mono-custom text-muted">Private / internal</span>
                )}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <p className="text-primary/80 text-[15px] leading-relaxed">
                {featuredProject.description}
              </p>
              <div>
                <p className="text-xs font-mono-custom text-muted uppercase tracking-widest mb-2">Challenge</p>
                <p className="text-subtle text-sm leading-relaxed">{featuredProject.challenges}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="text-xs font-mono-custom text-subtle border border-border px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/projects"
            className="text-sm font-mono-custom text-subtle hover:text-accent transition-colors duration-200"
          >
            All projects →
          </Link>
        </div>
      </section>

      {/* ── Currently Learning ───────────────────────────────── */}
      <section className="mb-20 animate-fade-up delay-600">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-8">
          <div className="lg:col-span-3">
            <p className="font-mono-custom text-xs text-muted uppercase tracking-widest">
              Currently Learning
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="text-subtle text-sm leading-relaxed max-w-lg">
              I'm working through cloud infrastructure and self-hosting fundamentals — learning how production systems are actually wired together from the server up.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {siteConfig.learning.map((item, i) => (
            <div
              key={i}
              className="border-t border-border py-5 px-1 group"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono-custom text-xs text-muted mt-0.5 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm text-primary font-medium mb-1 group-hover:text-accent transition-colors duration-200">
                    {item.topic}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <p className="text-xs font-mono-custom text-muted italic">
            Active learning journey — not professional certifications. Documenting this honestly.
          </p>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section className="border-t border-border pt-16 animate-fade-up delay-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="font-mono-custom text-xs text-muted uppercase tracking-widest">Contact</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-bold text-3xl text-primary tracking-tighter mb-4">
              Let's work together.
            </h2>
            <p className="text-subtle text-sm mb-8 max-w-md">
              Open to SDE internships, freelance projects, and conversations about interesting engineering problems.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block font-display font-semibold text-sm px-8 py-4 bg-accent text-bg hover:bg-accent-dim transition-colors duration-200"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
