# Portfolio

A dark-themed, Japanese-inspired portfolio site built with React, TypeScript and Vite.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Structure

```
blog/                    ← content lives here, outside src/
  <category>/
    _category.md         ← optional: name + description for the category
    my-post.md            ← one file per post
src/
  data/site.ts             ← name, nav labels, résumé link, socials
  data/projects.ts          ← Projects page content
  data/photography.ts       ← Photography page content
  data/cad.ts                ← 3D Design & CAD page content
  styles/tokens.css        ← SINGLE SOURCE OF TRUTH for all colour,
                              type, spacing and motion tokens
  pages/                   ← one file per route
  lib/blog.ts               ← reads /blog at build time via import.meta.glob
public/
  resume.pdf                ← placeholder — replace with your real CV
  images/                    ← placeholder SVGs — replace with real photos
```

## Editing content

- **Colours / type / spacing** — edit `src/styles/tokens.css` only. Every
  component reads from these CSS variables, so this is the one place to
  re-theme the whole site.
- **Nav, name, résumé link** — `src/data/site.ts`.
- **Projects / Photography / CAD** — edit the arrays in `src/data/*.ts` and
  drop matching images into `public/images/<section>/`.
- **Blog posts** — add a markdown file under `blog/<category>/`. Frontmatter
  fields: `title`, `date` (YYYY-MM-DD), `summary`, `tags` (comma-separated).
  Posts within a category are shown in chronological order (oldest first).
  A new folder under `blog/` automatically becomes a new category — no
  code changes needed. Add `blog/<category>/_category.md` with `name:` and
  `description:` frontmatter to customise how the category is labelled.

## Notes

- The 3D Design & CAD page follows the same card-per-project structure as
  the reference site, but the actual project write-ups are placeholders —
  the original site renders its content client-side, so I couldn't pull
  the real CAD entries into this document, only the nav structure and the
  photography intro copy. Replace the entries in `src/data/cad.ts`.
- Résumé button links to `/public/resume.pdf` — currently a placeholder
  file; drop your real CV in at the same path.
