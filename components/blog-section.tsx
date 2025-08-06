"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import TiltCard from "./tilt-card";
import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/lib/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
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

        <div className="flex flex-wrap gap-6 justify-center">
          {posts.length === 0 ? (
            <TiltCard>
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-[var(--color-text-secondary)]">
                  Articles about development, design, and technology are on the
                  way. Check back soon!
                </p>
              </div>
            </TiltCard>
          ) : (
            posts.map((post, index) => (
              <TiltCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                delay={index * 0.1}
              >
                <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {post.excerpt}
                </p>
                <time
                  dateTime={post.date}
                  className="text-xs text-[var(--color-text-tertiary)]"
                >
                  {formatDate(post.date)}
                </time>
              </TiltCard>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
