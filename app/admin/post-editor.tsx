"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function BlogEditor() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const owner = value("owner"), repo = value("repo"), branch = value("branch"), token = value("token");
    const slug = value("slug"), title = value("title"), excerpt = value("excerpt"), date = value("date"), cover = value("cover"), body = value("body");
    if (!/^[a-zA-Z0-9_.-]+$/.test(owner) || !/^[a-zA-Z0-9_.-]+$/.test(repo) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) { setStatus("Check the repository owner, name, and slug. Use lowercase letters, numbers, and hyphens for the slug."); return; }
    if (cover && !/^https:\/\//.test(cover) && !/^\/(?!\/)/.test(cover)) { setStatus("Cover image must be an HTTPS URL or a path beginning with /."); return; }
    const tags = value("tags").split(",").map(tag => tag.trim()).filter(Boolean);
    const frontmatter = [`title: ${JSON.stringify(title)}`, `date: ${JSON.stringify(date)}`, `excerpt: ${JSON.stringify(excerpt)}`, `tags: ${JSON.stringify(tags)}`, `published: true`, ...(cover ? [`cover: ${JSON.stringify(cover)}`] : [])].join("\n");
    const text = `---\n${frontmatter}\n---\n\n${body}\n`;
    const bytes = new TextEncoder().encode(text);
    let binary = ""; for (const byte of bytes) binary += String.fromCharCode(byte);
    setBusy(true); setStatus("Publishing to GitHub…");
    try {
      const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/content/blog/${slug}.mdx`, { method: "PUT", headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "Content-Type": "application/json", "X-GitHub-Api-Version": "2022-11-28" }, body: JSON.stringify({ message: `Publish: ${title}`, content: btoa(binary), branch }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "GitHub rejected the request.");
      setStatus("Published to GitHub. Your hosting provider must deploy this branch before the article appears on the site.");
      form.reset();
    } catch (error) { setStatus(error instanceof Error ? error.message : "Publishing failed. Please try again."); }
    finally { setBusy(false); }
  }
  return <main className="journal"><div className="editor-wrap"><Link className="back-link" href="/blog">← Back to writing</Link><header className="editor-header"><p className="section-kicker">PUBLISHING / GITHUB</p><h1>Write a post<span>.</span></h1><p>Publish an article to your portfolio repository. Your host will need to redeploy the selected branch.</p></header>
    <div className="editor-note"><strong>Before you publish</strong><p>Use a fine-grained GitHub token with Contents read and write access to this repository only. The token stays in this page’s memory and is sent directly to GitHub; it is not saved. This editor creates new posts and will not overwrite an existing slug.</p></div>
    <form className="editor-form" onSubmit={publish}><fieldset><legend>Repository</legend><div className="editor-columns"><label>GitHub owner<input name="owner" defaultValue="salemHb" required /></label><label>Repository name<input name="repo" required placeholder="portfolio-2025" /></label><label>Branch<input name="branch" defaultValue="main" required /></label></div><label>Fine-grained GitHub token<input name="token" type="password" autoComplete="off" required /></label></fieldset>
    <fieldset><legend>Article</legend><label>Title<input name="title" required maxLength={160} /></label><div className="editor-columns"><label>URL slug<input name="slug" required pattern="[a-z0-9]+(-[a-z0-9]+)*" placeholder="my-engineering-notes" /></label><label>Publish date<input name="date" type="date" required /></label></div><label>Summary<textarea name="excerpt" required maxLength={300} rows={3} /></label><label>Tags <small>Comma separated</small><input name="tags" placeholder="Infrastructure, Engineering" /></label><label>Cover image URL <small>Optional, HTTPS or a site-relative path</small><input name="cover" placeholder="https://…" /></label><label>Article body <small>Markdown or MDX</small><textarea name="body" required rows={18} placeholder="Write your article here…" /></label></fieldset><button type="submit" disabled={busy}>{busy ? "Publishing…" : "Publish to GitHub ↗"}</button><p className="editor-status" role="status">{status}</p></form>
  </div></main>;
}
