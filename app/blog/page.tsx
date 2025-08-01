import { getAllPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Hussein Salim",
  description: "Thoughts on development, design, and technology",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-20">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-[var(--color-accent)]" />
            <h1>All Posts</h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Thoughts on development, design, technology, and the craft of
            building digital experiences.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="card text-center py-16">
            <div className="text-6xl mb-6">✍️</div>
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
              I'm working on some interesting articles about development,
              design, and technology. Check back soon for insights and
              tutorials!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card group hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-grow">
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-tertiary)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read more button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-secondary"
                    >
                      Read Post
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
