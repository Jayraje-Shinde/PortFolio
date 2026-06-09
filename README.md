# Jayraje Shinde — Portfolio

Built with React + Vite + TypeScript + Tailwind CSS.

## Stack
- **React 18** + **React Router v6**
- **Vite** (fast builds, HMR)
- **TypeScript** (strict)
- **Tailwind CSS v3**
- Fonts: Syne (display), DM Sans (body), JetBrains Mono

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── pages/
│   ├── Home.tsx
│   └── Projects.tsx
├── data/
│   └── projects.json     ← Add projects here, UI updates automatically
├── config/
│   └── site.ts           ← Name, bio, skills, links, learning list
└── assets/
```

## Adding a Project
Open `src/data/projects.json` and add a new object:
```json
{
  "id": 5,
  "title": "Project Name",
  "tagline": "One-liner",
  "description": "What it does and why.",
  "tech": ["React", "Node.js"],
  "github": "https://github.com/...",
  "live": "",
  "featured": false,
  "featured_order": 5,
  "metrics": ["Some metric"],
  "challenges": "What was hard and how you solved it.",
  "results": "What shipped.",
  "role": "Solo Developer",
  "category": "Fullstack"
}
```
No component changes needed — it renders automatically.

## Development
```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
```

## Deploy

### Vercel (recommended)
1. Push to GitHub
2. Import repo on vercel.com
3. Framework: Vite — it auto-detects
4. Done. `vercel.json` handles SPA routing.

### Netlify
1. Push to GitHub
2. Import on netlify.com, build command: `npm run build`, publish dir: `dist`
3. `netlify.toml` handles redirects.

## Updating Profile Info
Edit `src/config/site.ts` — bio, skills, learning list, social links all live there.
