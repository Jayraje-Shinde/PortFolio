export const siteConfig = {
  name: "Jayraje Shinde",
  title: "Full Stack & Systems Engineer",
  location: "Pune, India",
  email: "zeyraje@gmail.com",
  github: "https://github.com/Jayraje-Shinde",
  linkedin: "https://www.linkedin.com/in/jayraje-shinde-0a7a94223/",
  resume: "https://drive.google.com/file/d/154QCzr82qr664OZjbxyFxpVnw0tOybqz/view?usp=sharing",

  bio: "I build things that run in production. Full stack by practice, systems-curious by nature — I've written memory allocators in C and shipped IoT dashboards with real device management. Currently going deeper into Linux infrastructure, NGINX reverse proxies, DNS, and self-hosted deployments.",

  summary: "Second-year CS student at AISSMS College of Engineering, Pune. I work on real products — a freelance news portal, an IoT device management platform, and a desktop POS system for hotels. Outside class, I'm on the DevOps team at GDG On Campus and spending time learning how apps actually reach users: servers, networking, and infrastructure from scratch.",

  gdg: "DevOps Team Member · GDG On Campus, AISSMS",

  skills: {
    languages:  ["C", "Java", "TypeScript", "JavaScript", "SQL"],
    frontend:   ["React", "Next.js", "Tailwind CSS", "Electron"],
    backend:    ["Node.js", "Express", "Prisma", "Zod", "REST APIs"],
    databases:  ["PostgreSQL", "MongoDB", "MySQL"],
    tools:      ["Git", "Linux", "SSH", "Postman", "Neovim"],
    concepts:   ["System Design", "RBAC", "JWT Auth", "Low-level Memory Management"],
  },

  learning: [
    { topic: "Linux Server Administration",  detail: "Managing Ubuntu VPS, systemd services, users and file permissions" },
    { topic: "NGINX & Reverse Proxies",      detail: "Virtual hosts, SSL termination, proxying Node/Next.js apps" },
    { topic: "DNS & Networking",             detail: "A/CNAME records, TTL, how requests route end-to-end" },
    { topic: "Cloud Hosting & Deployment",   detail: "Self-hosting on VPS, understanding what Railway/Render abstract away" },
    { topic: "Logging & Monitoring",         detail: "Application logs, health checks, basic observability fundamentals" },
    { topic: "Containerization (Docker)",    detail: "Dockerfiles, service composition, image layers" },
    { topic: "CI/CD Pipelines",             detail: "Automated deploys, environment configs, build artifacts" },
    { topic: "Security Fundamentals",       detail: "TLS/SSL, secrets management, ufw firewall, SSH hardening" },
  ],
} as const;
