interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  featured_order: number;
  metrics: string[];
  challenges: string;
  results: string;
  role: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="group border-t border-border pt-8 pb-8 animate-fade-up"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Left column */}
        <div className="lg:col-span-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="font-mono-custom text-xs text-muted mt-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="inline-block text-xs font-mono-custom text-subtle border border-border px-2 py-0.5 mb-2">
                {project.category}
              </span>
              <h3 className="font-display font-semibold text-xl text-primary tracking-tighter leading-tight">
                {project.title}
              </h3>
              <p className="text-subtle text-sm mt-1">{project.tagline}</p>
            </div>
          </div>

          {/* Role */}
          <p className="text-xs text-muted font-mono-custom ml-7 mt-3">{project.role}</p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <ul className="ml-7 mt-4 space-y-1">
              {project.metrics.map((m, i) => (
                <li key={i} className="text-xs text-accent font-mono-custom flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          )}

          {/* Links */}
          <div className="ml-7 mt-5 flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-subtle hover:text-accent transition-colors duration-200 font-mono-custom flex items-center gap-1"
              >
                GitHub ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-subtle hover:text-accent transition-colors duration-200 font-mono-custom flex items-center gap-1"
              >
                Live ↗
              </a>
            )}
            {!project.github && !project.live && (
              <span className="text-xs text-muted font-mono-custom">Private repo</span>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 space-y-5">
          <p className="text-primary/80 text-[15px] leading-relaxed">{project.description}</p>

          <div>
            <p className="text-xs font-mono-custom text-muted uppercase tracking-widest mb-2">Challenge</p>
            <p className="text-subtle text-sm leading-relaxed">{project.challenges}</p>
          </div>

          <div>
            <p className="text-xs font-mono-custom text-muted uppercase tracking-widest mb-2">Outcome</p>
            <p className="text-subtle text-sm leading-relaxed">{project.results}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono-custom text-subtle border border-border px-2.5 py-1 hover:border-muted transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
