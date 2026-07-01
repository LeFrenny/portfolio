# Frenny Portfolio

Raw portfolio skeleton built with Next.js App Router, TypeScript, Tailwind CSS, and a file-based markdown blog.

## Local Setup

```bash
npm install
npm run dev
```

The site uses markdown files from `posts/` and renders them at `/blog/[slug]`.

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
