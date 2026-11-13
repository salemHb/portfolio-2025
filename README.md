# Hussein Salim — portfolio

A Next.js portfolio and file-based engineering blog.

## Local development

Install dependencies with `npm install`, then run `npm run dev` and open the displayed local URL.

## Blog publishing

Open `/admin` to write a new post. Enter the GitHub owner, repository, deployment branch, and a fine-grained personal access token restricted to that repository with **Contents: read and write** permission. The browser sends the token directly to GitHub; it is not stored by the application. The editor creates `content/blog/<slug>.mdx` and refuses to overwrite an existing file. A hosting service connected to that branch must rebuild and deploy after the commit. To edit or delete posts, use GitHub or edit the files in the repository. The editor is a public page, not a login-protected dashboard: GitHub permissions authorize each publication. Never use a token on an untrusted or non-HTTPS deployment.

Articles use Markdown/MDX with front matter containing `title`, `date` (YYYY-MM-DD as a quoted string), `excerpt`, `tags`, optional `cover` (HTTPS URL or site-relative path), and `published: true`. Only explicitly published posts appear publicly. Existing sample files are unpublished until reviewed and given that flag. MDX can execute code during rendering, so only publish trusted content.

## SEO and deployment

Set `NEXT_PUBLIC_SITE_URL` to the actual public origin (for example `https://example.com`) in the deployment environment before building. This enables canonical URLs and a populated sitemap at `/sitemap.xml`; `/robots.txt` excludes the editor. Article metadata, social previews, and BlogPosting structured data are generated from each post. Add HTTPS cover images for rich social cards. After deployment, submit the sitemap to your preferred search engine and verify the public pages. Without the site URL, the sitemap is intentionally empty to avoid publishing localhost URLs.
