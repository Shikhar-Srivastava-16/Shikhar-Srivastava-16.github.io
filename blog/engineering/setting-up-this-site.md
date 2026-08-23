---
title: Setting up this site
date: 2025-01-12
summary: Why the blog reads from a plain folder of markdown instead of a CMS, and how the category system works.
tags: meta, react, vite
---

I wanted a blog that lived next to the code, not behind a headless CMS
login screen. So every post here is a markdown file sitting inside a
`blog/<category>/` folder at the root of the repository.

## How it's organised

Each top-level folder under `blog/` becomes a category on the Blog page.
Every markdown file inside that folder becomes a post, ordered by the
`date` in its frontmatter. An optional `_category.md` file can set a
nicer display name and a short description for the whole category.

```
blog/
  engineering/
    _category.md
    setting-up-this-site.md
  travel-journal/
    _category.md
    the-longest-approach.md
```

That's it — no database, no admin panel. Writing a post is opening a
text editor.
