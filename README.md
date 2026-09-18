# Frenny Portfolio

Nitish's personal portfolio, built with Next.js App Router, TypeScript, Tailwind CSS, and a file-based Markdown blog. The current direction is inspired by Pokémon factions: a split-color crest, trainer profile, rounded panels, and violet/lavender palettes with warm gold accents in light and dark modes.

## Local Setup

```bash
npm ci
npm run dev
```

The site reads Markdown files from `posts/` and renders them at `/blog/[slug]`. Create that directory when adding the first post; the Notes page has an empty state until then.

On Windows PowerShell, use `npm.cmd` if execution policy blocks the npm PowerShell shim.

Development uses `.next`; production builds and `npm start` use `.next-production` so a live dev server cannot overwrite the production preview.

## Changing the design and content

- Homepage introduction: `app/page.tsx`
- Project descriptions and links: `lib/projects.ts`
- Expandable interest notes: `app/page.tsx`
- Shared photo placeholder on Home and About: `components/PhotoPlaceholder.tsx`. Replace its placeholder panel with the real photo when available; keep the surrounding frame and caption.
- Palette, local font stacks, layout, and responsive styles: `app/globals.css`
- Light/dark toggle: `components/ThemeToggle.tsx`; initial preference is applied before paint in `app/layout.tsx`. The first visit follows the system preference, and explicit choices are stored under `portfolio-theme`.
- Original faction-style emblem: `components/Crest.tsx`
- Background and contact details: `app/about/page.tsx` and `app/contact/page.tsx`
- Resume download: `public/resume.pdf`

The theme uses original SVG/CSS illustrations, with no external artwork or remote font dependency. Interest notes use native keyboard-accessible disclosure controls. Existing public routes remain available. The photo space is deliberately labeled as a placeholder; it is not an upload control.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

```text
app/
  about/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx
  projects/page.tsx
  layout.tsx
  page.tsx
components/
lib/
posts/
```

## Deployment

Push the repo to GitHub and import it into Vercel. No environment variables or database are needed for this phase.
