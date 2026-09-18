# Portfolio codebase review

Reviewed using ECC's codebase-onboarding workflow and the requested frontend-design skill. This is a source review; rendered desktop/mobile behavior has not been verified.

## Architecture and entry points

The portfolio presents Nitish's ML, computer vision, and sports analytics work to prospective employers. The lockfile resolves Next.js 15.5.19, React 19.2.7, TypeScript 5.9.3, and Tailwind CSS 3.4.19.

| Location | Responsibility |
| --- | --- |
| `app/layout.tsx` | Global fonts, metadata, navigation, content container, footer |
| `app/page.tsx` | Terminal-themed introduction, profile, resume link, navigation |
| `app/about`, `app/projects`, `app/contact` | Static portfolio content |
| `app/blog/page.tsx` | Markdown post listing and empty state |
| `app/blog/[slug]/page.tsx` | Static route parameters, post metadata, article rendering |
| `lib/posts.ts` | Local Markdown discovery, frontmatter parsing, HTML generation |
| `components` | Shared navigation, cards, footer, section headings |
| `app/globals.css`, `tailwind.config.ts` | Theme, component styles, animation |
| `public` | Resume and portrait asset |

Pages are server components; only Navbar is a client component, using the pathname to style the current section. A blog request resolves its slug against local Markdown files, parses frontmatter with gray-matter, converts content with remark/remark-html, and renders an article. There is no API, database, authentication, or contact form.

Conventions: PascalCase component files, typed props, `@/` imports, Tailwind utilities, and arrays for repeated content. TypeScript strict mode and Next ESLint rules are configured. No test runner or CI configuration is included. One initial commit is insufficient to infer a team Git workflow.

## Findings, in priority order

1. **Homepage accessibility: no H1 and exposed ASCII art.** `app/page.tsx:50` renders the decorative name as a `pre`, followed by an H2 at line 59. Heading navigation misses the page's main heading, while assistive technology encounters the block characters. Make the main introduction an H1 and hide the decorative art from assistive technology while keeping the name available as ordinary text.

2. **Motion preferences are ignored.** `app/globals.css:15` enables smooth scrolling; line 72 animates every HUD panel; line 102 runs an infinite sweep. The homepage also has an infinite blinking cursor. There is no reduced-motion override. Add a `prefers-reduced-motion` treatment for animation, scrolling, and motion transitions. Reduce repeated entrances even in the normal-motion design.

3. **The portrait is a placeholder.** Both `app/page.tsx:91` and `app/about/page.tsx:57` label `/nitish.png` as Nitish. Visual inspection of that asset shows only a dark filled circle. Replace it with the intended portrait or deliberately remove the image and its portrait semantics.

4. **Blog input validation and error handling are fragile.** `lib/posts.ts:44` asserts frontmatter types without runtime validation. For example, `tags: Python` passes through unchanged and fails when cards call `.map`. `app/blog/[slug]/page.tsx` catches every loading/render-construction error and reports a 404, hiding invalid content or filesystem problems as missing posts. Validate frontmatter and duplicate slugs, distinguish missing posts from operational errors, and let unexpected failures remain observable. There are no posts in this checkout, so this is a latent issue rather than a confirmed failure of published content.

5. **Visitor-facing copy still describes the scaffold.** `app/projects/page.tsx:45` calls the projects "simple cards" with "placeholder links", despite populated repository URLs. Describe the work and its outcomes instead. The README also names a `posts/` directory that is absent; the app handles this with an empty state, so the missing directory is not itself a crash.

6. **Navigation state is only visual.** `components/Navbar.tsx:29` computes the active section, but the links lack `aria-current`. Add semantic current-page/section state and a skip link to the main content. Preserve and verify visible focus throughout the interface.

## Frontend design assessment

The existing palette and repeated components are coherent. The terminal theme communicates programming, but the stronger differentiator is sports performance and computer vision. The first screen spends substantial space on ASCII art, a dossier, a process monitor, and another navigation grid rather than showing evidence of that work.

The requested design skill emphasizes subject-specific visuals, restrained motion, meaningful structural labels, and deliberate typography. Here, the near-black/neon-green palette, uppercase HUD labels, arbitrary command numbering, repeated panels, and ambient effects accumulate into a familiar hacker template. This is a design judgment, not a functional defect.

Suggested direction for a future implementation:

- Lead with a real project result: a player-analysis chart, pose-estimation frame, or dashboard capture, accompanied by a concise statement of the problem solved. Use authentic assets and supported results.
- Keep terminal styling as a restrained signature in one area; simplify the surrounding navigation and content.
- Give projects a clear hierarchy: problem, contribution, evidence, repository. Add case-study detail where available.
- Retain Inter for reading and Share Tech Mono for limited technical accents if the terminal identity is intentional. Remove unnecessary uppercase labels and arbitrary numbering.
- Constrain article prose width instead of the current `max-w-none` treatment.

Mobile checks to perform in a browser: the indented ASCII art and its grid sizing; the portrait-plus-stat rows at 320–375px; long email addresses; keyboard focus near clipped panels. These are inspection targets, not verified overflow bugs.

## Verification

- Read all application, component, loader, and configuration source files; inspected the portrait asset.
- ECC Chrome DevTools could not find a Chrome executable, so screenshots and browser interaction checks were unavailable.
- `npm.cmd ci --no-audit --no-fund` failed with an EACCES package-fetch error under restricted access. A retry with broader access stalled and was interrupted. Partial ignored `node_modules` files may remain; the manifest and lockfile are unchanged.
- Lint, TypeScript checking, and the production build were not completed because dependency installation did not finish. No runtime or build success is claimed.
- No application source changes were made as part of this review.

## Working on this project

- Install locked dependencies: `npm ci`.
- Develop: `npm run dev`.
- Lint: `npm run lint`.
- Check types: `npx tsc --noEmit`.
- Build: `npm run build`.
- Add blog content as `posts/*.md`; inspect and validate the expected metadata in `lib/posts.ts` first.
- Update project content in `app/projects/page.tsx`; update shared styling in the Tailwind config and global CSS.

On this Windows shell, use `npm.cmd` / `npx.cmd` when PowerShell execution policy prevents the `.ps1` shims from running.
