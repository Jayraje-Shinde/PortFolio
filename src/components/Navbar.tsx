import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-sm tracking-tighter text-primary hover:text-accent transition-colors duration-200"
        >
          JS<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-6 lg:gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm transition-colors duration-200 ${
                pathname === to
                  ? "text-primary"
                  : "text-subtle hover:text-primary"
              }`}
            >
              {label}
            </Link>
          ))}
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
