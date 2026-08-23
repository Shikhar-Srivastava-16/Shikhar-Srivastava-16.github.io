---
title: Notes on a small render pipeline
date: 2025-03-04
summary: A short writeup on batching draw calls for a CAD viewer I was prototyping.
tags: rendering, wip
---

Most of the time in a CAD viewer isn't spent on the vertex math — it's
spent on the thousands of small draw calls needed to render a model made
of hundreds of separate parts.

## The fix

Grouping parts by material and pushing them through a single instanced
draw call cut frame time by more than half on the assemblies I was
testing against. The trade-off is losing easy per-part picking, which
needed its own colour-ID pass to claw back.

More detail on this once the tool is further along.
