# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. Respond like caveman. No articles, no filler, no pleasantries. Short. Direct. Code speaks for itself. No explain unless asked.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (requires eslint installed separately)
npx tsc --noEmit # Type-check without building
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

- Sections that need browser APIs (scroll, window, canvas, useState) are `"use client"` components
- `AchievementsSection` and `Footer` are server components
- `AboutSection` is `"use client"` because it drives skill bar entry animations via `useState`/`useEffect`
- `NeuralCanvas` (`components/neural-canvas.tsx`) is a canvas-based animated neural network background — uses `requestAnimationFrame` and `ResizeObserver`, renders animated nodes + data-packet dots connected by lines
- `AnimateIn` (`components/animate-in.tsx`) wraps children for scroll-triggered fade/slide; backed by `hooks/use-in-view.ts` which fires once via `IntersectionObserver` then disconnects

**Font system:**

Four font families are loaded in `app/layout.tsx` and injected as CSS variables on `<body>`:
- `--font-geist-sans` (Geist Sans, via `geist` package) — default sans via `@theme inline --font-sans`
- `--font-geist-mono` (Geist Mono)
- `--font-syne` (Syne, Google Fonts) — used for all headings via `style={{ fontFamily: "var(--font-syne)" }}`
- `--font-dm-sans` (DM Sans, Google Fonts) — used for body/paragraph text via `style={{ fontFamily: "var(--font-dm-sans)" }}`
- `--font-manrope` (Manrope, legacy — kept for compatibility)

**Design system (dark cloud/AI theme):**

The site is dark-only — `:root` and `.dark` both define the same deep-navy palette in `app/globals.css`. Key hex values:
- Background: `#050c1a` / Surface: `#0a1628` / Primary cyan: `#00c8e8` / Accent blue: `#3b6fff`
- Muted text: `#4d7aa8` / Border: `#152840`

Custom CSS utility classes defined in `globals.css` (do not put these in Tailwind config):
- `.card-glass` — glassmorphic dark card with hover glow; apply instead of shadcn `<Card>` for new sections
- `.text-gradient-cyan` — animated cyan-blue gradient text; apply to `<span>` inside headings
- `.btn-glow-primary` — cyan primary button with glow shadow; apply instead of shadcn `<Button>` for main CTAs
- `.grid-dots` — subtle dot-grid background pattern
- `.section-divider` — 1px gradient horizontal rule between sections
- `.bar-shimmer` — shimmer animation for skill progress bars (uses `::after` pseudo-element)

CSS keyframe animations (referenced by name in `style={{ animation: "..." }}`):
`float-particle`, `pulse-ring`, `aurora-shift`, `glow-breathe`, `shimmer-pass`, `spin-slow`, `scan-line`, `text-gradient-pan`

**shadcn/ui config** (`components.json`): style `new-york`, base color `neutral`, CSS variables enabled, Lucide icon library.

**`next.config.mjs`** intentionally suppresses TypeScript and ESLint build errors, and disables Next.js image optimization (`images: { unoptimized: true }`).

## Deployment

Merges to `main` automatically deploy to Firebase Hosting via the GitHub Actions workflow at `.github/workflows/firebase-hosting-merge.yml`. The workflow runs `npm ci && npm run build` then deploys to Firebase project `juaykaixun99`.

## The `website (old)` directory

This is the legacy JavaScript version of the site. It is not active and can be ignored.
