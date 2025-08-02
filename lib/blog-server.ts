import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "./blog";
const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    content,
    readTime: calculateReadTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min read`;
}
