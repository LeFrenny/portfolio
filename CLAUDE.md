# Project guide

## Stack and structure

- Next.js App Router, React, strict TypeScript, Tailwind CSS 3.
- `app/`: portfolio routes and global layout/styles.
- `components/`: PascalCase shared UI components with typed props.
- `lib/posts.ts`: local Markdown/frontmatter loader and HTML conversion.
- `public/`: resume and portrait assets.
- No database or API routes. Blog content is expected in `posts/*.md`; this directory is absent in the reviewed checkout.

## Existing conventions

- Use `@/` imports and Tailwind utilities.
- Keep pages as server components; Navbar uses a client boundary. Interest notes use native details/summary elements.
- The current visual direction is inspired by Pokémon factions: original split-color crest, trainer card, rounded panels, deep violet and lavender surfaces, and warm gold buttons. Both light and dark themes use semantic color variables in `app/globals.css`; Tailwind provides utilities and article typography.
- ThemeToggle remembers an explicit choice in localStorage; the inline bootstrap in `app/layout.tsx` initializes the theme before paint. Keep server rendering and hydration compatible.
- Project content is shared through `lib/projects.ts`. Interest notes live in `app/page.tsx`. The shared photo placeholder is in `components/PhotoPlaceholder.tsx` and appears on Home and About.
- Use personal, conversational copy rather than leading with a fixed job title. Keep professional background and project claims grounded in supplied content.
- Support keyboard navigation, visible focus, semantic headings, and reduced motion. Keep the design easy to revise.

## Commands

- Install: `npm ci`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Type check: `npx tsc --noEmit`
- Production build: `npm run build`
- Production server: `npm start`
- Windows PowerShell may require `npm.cmd` and `npx.cmd`.

No test runner or CI is configured. Do not describe checks as passing without running them. The redesign uses local font stacks and does not fetch Google Fonts during builds.

See `CODEBASE_REVIEW.md` for the historical review of the original terminal design; some findings were addressed by the redesign.
