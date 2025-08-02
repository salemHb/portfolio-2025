"use client";

import { formatDate } from "@/lib/blog-shared";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

interface BlogPostPageClientProps {
  post: {
    title: string;
    slug: string;
    date: string;
    content: string;
    excerpt?: string;
    tags: string[];
    readTime: string;
  };
}

const mdxComponents = {
  // your existing h1, h2, p, etc.
};

export function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  return (
    <main className="min-h-screen pt-20">
      <div className="container max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <header className="mb-12">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-tertiary)] mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="flex items-center gap-2 hover:text-[var(--color-text-primary)] transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {post.excerpt && (
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        <article className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        <footer className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Thanks for reading! Have thoughts or questions?
              </p>
              <Link
                href="mailto:husseinsalim419@gmail.com"
                className="text-sm text-[var(--color-accent)] hover:underline"
              >
                Let's discuss →
              </Link>
            </div>
            <Link href="/blog" className="btn btn-secondary">
              More Posts
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
