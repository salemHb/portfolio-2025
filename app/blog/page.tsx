// app/blog/page.tsx
import { getLatestPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Hussein Salim",
  description: "Thoughts on development, design, and technology",
};

export default function BlogPage() {
  const posts = getLatestPosts(10);

  return (
    <main className="min-h-screen pt-20">
      <div className="container">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="font-bold text-4xl mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8" />
          Blog
        </h1>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-4 border rounded-md hover:shadow transition-shadow"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {"3 min read"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
