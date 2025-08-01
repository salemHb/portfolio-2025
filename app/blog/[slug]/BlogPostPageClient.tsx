"use client";

import { getPostBySlug, formatDate } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mb-3 mt-6" {...props} />
  ),
  p: (props: any) => (
    <p
      className="mb-4 leading-relaxed text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="mb-4 space-y-2 list-disc list-inside" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 space-y-2 list-decimal list-inside" {...props} />
  ),
  li: (props: any) => (
    <li className="text-[var(--color-text-secondary)]" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-[var(--color-accent)] pl-4 my-6 italic text-[var(--color-text-secondary)]"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-[var(--color-surface-elevated)] px-2 py-1 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[var(--color-surface-elevated)] p-4 rounded-lg overflow-x-auto my-6 text-sm"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-[var(--color-accent)] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export function BlogPostPageClient({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container max-w-4xl">
        {/* Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Tags */}
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

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
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

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {/* Footer */}
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
