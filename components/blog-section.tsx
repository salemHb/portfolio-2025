"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/lib/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  if (posts.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <div className="fade-in">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-[var(--color-accent)]" />
              <h2>Latest Thoughts</h2>
            </div>
            <div className="card text-center py-12">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-[var(--color-text-secondary)]">
                I'm working on some interesting articles about development,
                design, and technology. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-12 fade-in">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[var(--color-accent)]" />
            <h2>Latest Thoughts</h2>
          </div>
          <Link href="/blog" className="btn btn-secondary">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="card group hover:scale-[1.02] transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs text-[var(--color-text-tertiary)]">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)] pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:gap-2 transition-all mt-3 group-hover:translate-x-1"
                >
                  Read more
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
