export type Frontmatter = Record<string, string>;

/**
 * Minimal YAML-frontmatter parser for `key: value` pairs.
 * Deliberately tiny (no nested structures) — enough for blog posts'
 * title / date / summary / tags without pulling in a Node-oriented
 * YAML + gray-matter dependency that doesn't play well in the browser.
 */
export function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) {
    return { data: {}, content: raw };
  }

  const [, block, content] = match;
  const data: Frontmatter = {};

  for (const line of block.split(/\r?\n/)) {
    const lineMatch = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim().replace(/^["']|["']$/g, "");
    data[key.trim()] = value;
  }

  return { data, content: content.trim() };
}
