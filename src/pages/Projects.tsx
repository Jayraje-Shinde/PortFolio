import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? [...projects].sort((a, b) => a.featured_order - b.featured_order)
    : projects.filter((p) => p.category === active);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

      {/* Header */}
      <section className="mb-16">
        <span className="font-mono-custom text-xs text-subtle uppercase tracking-widest animate-fade-in delay-100">
          Work
        </span>
        <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] tracking-tightest text-primary mt-3 mb-6 animate-fade-up delay-200">
          Projects
        </h1>
        <p className="text-subtle text-[15px] max-w-xl leading-relaxed animate-fade-up delay-300">
          Real products built across domains — systems programming, web platforms, IoT infrastructure, and desktop applications. Each entry is a case study, not a bullet list.
        </p>
      </section>

      {/* Filter tabs */}
      <div className="flex items-center gap-0 mb-12 border-b border-border animate-fade-up delay-300">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-3 text-xs font-mono-custom uppercase tracking-widest transition-all duration-200 border-b-2 -mb-px ${
              active === cat
                ? "border-accent text-accent"
                : "border-transparent text-subtle hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-xs font-mono-custom text-muted pb-3">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Project list */}
      <div className="space-y-0">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Add more note */}
      <div className="border-t border-border mt-16 pt-8 animate-fade-in delay-700">
        <p className="text-xs font-mono-custom text-muted">
          More projects in progress — check{" "}
          <a
            href="https://github.com/Jayraje-Shinde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-accent transition-colors duration-200"
          >
            GitHub ↗
          </a>{" "}
          for latest work.
        </p>
      </div>
    </main>
  );
}
