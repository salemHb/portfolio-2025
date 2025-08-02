import { getAllPosts, getPostBySlug } from "@/lib/blog-server";
import type { Metadata } from "next";
import { BlogPostPageClient } from "./BlogPostPageClient";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Hussein Salim`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug); // ✅ This is OK here on server

  if (!post) notFound();

  return <BlogPostPageClient post={post} />;
}
