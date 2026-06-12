import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">Home</Link>
          <Link to="/projects" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">Projects</Link>
          <Link to="/blog" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">Blog</Link>
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${siteConfig.email}`} className="text-subtle text-xs font-mono-custom hover:text-accent transition-colors duration-200">{siteConfig.email}</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">GitHub ↗</a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">LinkedIn ↗</a>
          <a href={siteConfig.medium} target="_blank" rel="noopener noreferrer" className="text-subtle text-xs font-mono-custom hover:text-primary transition-colors duration-200">Medium ↗</a>
        </div>
        <p className="text-muted text-xs font-mono-custom">© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
