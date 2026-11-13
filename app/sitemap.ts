import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return [];
  return [{ url: new URL("/", site).toString() }, { url: new URL("/blog", site).toString() }, ...getAllPosts().map(post => ({ url: new URL(`/blog/${post.slug}`, site).toString(), lastModified: new Date(`${post.date}T12:00:00Z`) }))];
}
