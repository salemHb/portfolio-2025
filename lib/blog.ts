import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover?: string;
  content: string;
  readTime: string;
};

const directory = path.join(process.cwd(), "content", "blog");

export function getPostBySlug(slug: string): BlogPost | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  const file = path.join(directory, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.published !== true || typeof data.title !== "string" || typeof data.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) return null;
  return {
    slug, title: data.title, date: data.date,
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    tags: Array.isArray(data.tags) ? data.tags.filter((tag: unknown): tag is string => typeof tag === "string") : [],
    cover: typeof data.cover === "string" && (/^https:\/\//.test(data.cover) || /^\/(?!\/)/.test(data.cover)) ? data.cover : undefined,
    content, readTime: `${Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))} min read`,
  };
}

export function getAllPosts(): BlogPost[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file.slice(0, -4)))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}
export function getLatestPosts(count: number): BlogPost[] { return getAllPosts().slice(0, count); }
