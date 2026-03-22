# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 personal portfolio website** (TypeScript, Tailwind CSS v4, shadcn/ui). It is a single-page application — `app/page.tsx` composes all sections in order: `Header`, `HeroSection`, `ProjectsSection`, `AchievementsSection`, `AboutSection`, `ContactSection`, `Footer`.

**Key structural facts:**

- `@/*` path alias maps to the repo root (not a `src/` folder)
- Page-level section components live in `components/` (e.g. `header.tsx`, `hero-section.tsx`)
- shadcn/ui primitives live in `components/ui/` — these are generated files, not hand-edited
- `lib/utils.ts` exports only the `cn()` utility (clsx + tailwind-merge)
- All content (projects list, achievements list, etc.) is hardcoded as `const` arrays directly inside each section component — there is no CMS or data layer
- Static images (project screenshots, headshot) live in `public/` and are referenced with root-relative paths like `/professional_headshot.jpg`

**Component patterns:**

- Sections that need browser APIs (scroll, window) are `"use client"` components
- `AchievementsSection` is a server component (no interactivity needed)
- Fonts: Geist Sans + Geist Mono (via `geist` package) + Manrope (Google Fonts). Manrope is applied inline via `font-[family-name:var(--font-manrope)]` on body text paragraphs

**shadcn/ui config** (`components.json`): style `new-york`, base color `neutral`, CSS variables enabled, Lucide icon library.

**`next.config.mjs`** intentionally suppresses TypeScript and ESLint build errors, and disables Next.js image optimization (`images: { unoptimized: true }`).

## Deployment

Merges to `main` automatically deploy to Firebase Hosting via the GitHub Actions workflow at `.github/workflows/firebase-hosting-merge.yml`. The workflow runs `npm ci && npm run build` then deploys to Firebase project `juaykaixun99`.

## The `website (old)` directory

This is the legacy JavaScript version of the site. It is not active and can be ignored.
