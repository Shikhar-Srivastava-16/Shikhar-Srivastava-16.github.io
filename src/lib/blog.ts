import { parseFrontmatter } from "./frontmatter";

export type BlogPost = {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  date: string; // ISO string, YYYY-MM-DD
  summary: string;
  tags: string[];
  content: string;
  path: string; // full route path
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  posts: BlogPost[];
};

function titleCase(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Every markdown file under the top-level `/blog` directory.
// `/blog/<category>/<post>.md` — the folder name is the category.
const modules = import.meta.glob("/blog/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Optional `_category.md` per folder can supply a nicer name/description
// via frontmatter (`name:`, `description:`). Falls back to the folder name.
const categoryMetaEntries = Object.entries(modules).filter(([path]) => path.endsWith("_category.md"));
const categoryMeta = new Map<string, { name: string; description: string }>();
for (const [path, raw] of categoryMetaEntries) {
  const parts = path.split("/");
  const categorySlug = parts[2];
  const { data } = parseFrontmatter(raw);
  categoryMeta.set(categorySlug, {
    name: data.name ?? titleCase(categorySlug),
    description: data.description ?? "",
  });
}

const categoriesMap = new Map<string, BlogCategory>();

for (const [path, raw] of Object.entries(modules)) {
  if (path.endsWith("_category.md")) continue;

  // path looks like: /blog/<category>/<slug>.md
  const parts = path.split("/");
  const categorySlug = parts[2];
  const fileName = parts[parts.length - 1];
  const slug = fileName.replace(/\.md$/, "");

  const { data, content } = parseFrontmatter(raw);
  const meta = categoryMeta.get(categorySlug);

  if (!categoriesMap.has(categorySlug)) {
    categoriesMap.set(categorySlug, {
      slug: categorySlug,
      name: meta?.name ?? titleCase(categorySlug),
      description: meta?.description ?? "",
      posts: [],
    });
  }

  const post: BlogPost = {
    slug,
    categorySlug,
    categoryName: meta?.name ?? titleCase(categorySlug),
    title: data.title ?? titleCase(slug),
    date: data.date ?? "1970-01-01",
    summary: data.summary ?? "",
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
    content,
    path: `/blog/${categorySlug}/${slug}`,
  };

  categoriesMap.get(categorySlug)!.posts.push(post);
}

// Chronological order within each category — oldest first, the way a
// written series (à la Phil Opp's "Writing an OS in Rust") should be read.
for (const category of categoriesMap.values()) {
  category.posts.sort((a, b) => a.date.localeCompare(b.date));
}

export const blogCategories: BlogCategory[] = Array.from(categoriesMap.values()).sort((a, b) =>
  a.name.localeCompare(b.name)
);

export function getCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getPost(categorySlug: string, postSlug: string): BlogPost | undefined {
  return getCategory(categorySlug)?.posts.find((p) => p.slug === postSlug);
}

export function getAdjacentPosts(post: BlogPost): { prev?: BlogPost; next?: BlogPost } {
  const category = getCategory(post.categorySlug);
  if (!category) return {};
  const index = category.posts.findIndex((p) => p.slug === post.slug);
  return {
    prev: index > 0 ? category.posts[index - 1] : undefined,
    next: index < category.posts.length - 1 ? category.posts[index + 1] : undefined,
  };
}
