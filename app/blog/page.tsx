import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Engineering Notes | Hussein Salim",
  description: "Notes on software engineering, infrastructure, security, and the systems behind reliable products.",
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { alternates: { canonical: "/blog" } } : {}),
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <main className="journal"><div className="journal-wrap">
    <header className="journal-header"><Link className="back-link" href="/"><ArrowLeft size={16} /> Portfolio</Link><p className="section-kicker">HUSSEIN SALIM / WRITING</p><h1>Engineering notes<span>.</span></h1><p>Ideas, lessons, and practical notes on building software and operating the systems behind it.</p></header>
    <section className="journal-section"><div className="journal-section-title"><h2>Latest articles</h2><span>{posts.length} {posts.length === 1 ? "article" : "articles"}</span></div>
      {posts.length ? <div className="journal-grid">{posts.map(post => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}>
        <div className="article-cover">{post.cover ? <img src={post.cover} alt="" /> : <div className="cover-art"><span>HS / NOTES</span><ArrowUpRight size={32} /></div>}</div>
        <div className="article-card-body"><div className="article-tags">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{post.title}</h3><p>{post.excerpt}</p><div className="article-meta"><time dateTime={post.date}>{formatDate(`${post.date}T12:00:00Z`)}</time><span>{post.readTime}</span></div></div>
      </Link>)}</div> : <div className="journal-empty"><p>New writing is on the way.</p><span>Check back for notes on software, infrastructure, and security.</span></div>}
    </section><footer className="journal-footer"><Link href="/">← Back to portfolio</Link><span>© {new Date().getFullYear()} Hussein Salim</span></footer>
  </div></main>;
}
