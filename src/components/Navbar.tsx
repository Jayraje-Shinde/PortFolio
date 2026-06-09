import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-700 text-sm tracking-tighter text-primary hover:text-accent transition-colors duration-200"
        >
          JS<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-body transition-colors duration-200 ${
              pathname === "/" ? "text-primary" : "text-subtle hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`text-sm transition-colors duration-200 ${
              pathname === "/projects" ? "text-primary" : "text-subtle hover:text-primary"
            }`}
          >
            Projects
          </Link>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 border border-muted text-subtle hover:border-accent hover:text-accent transition-all duration-200 font-mono-custom tracking-tight"
          >
            Resume ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
