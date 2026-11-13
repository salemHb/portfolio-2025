import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export function generateStaticParams() { return getAllPosts().map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return { title: `${post.title} | Hussein Salim`, description: post.excerpt, ...(process.env.NEXT_PUBLIC_SITE_URL ? { alternates: { canonical: `/blog/${post.slug}` } } : {}), openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date, authors: ["Hussein Salim"], ...(post.cover ? { images: [post.cover] } : {}) }, twitter: { card: post.cover ? "summary_large_image" : "summary", title: post.title, description: post.excerpt, ...(post.cover ? { images: [post.cover] } : {}) } };
}
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  const structured = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, datePublished: post.date, author: { "@type": "Person", name: "Hussein Salim" }, ...(site ? { mainEntityOfPage: new URL(`/blog/${post.slug}`, site).toString() } : {}), ...(post.cover && site ? { image: new URL(post.cover, site).toString() } : {}) };
  return <main className="journal"><div className="article-wrap"><Link className="back-link" href="/blog">← All articles</Link><header className="article-header"><div className="article-tags">{post.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-meta"><span>Hussein Salim</span><time dateTime={post.date}>{formatDate(`${post.date}T12:00:00Z`)}</time><span>{post.readTime}</span></div></header>{post.cover && <img className="article-hero" src={post.cover} alt="" />}<article className="article-prose"><MDXRemote source={post.content} /></article><footer className="journal-footer"><Link href="/blog">← More articles</Link></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} /></div></main>;
}
