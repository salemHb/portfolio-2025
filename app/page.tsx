import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";

const skills = {
  "Front End": ["React", "Next.js", "Vue", "Nuxt", "JavaScript"],
  Backend: ["Node.js", "Laravel", "Express", "REST APIs"],
  Infrastructure: ["Linux", "Azure", "Docker", "CI/CD", "Systems Programming"],
  Languages: ["TypeScript", "PHP", "SQL", "MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Figma", "Notion"],
};

const experience = [
  {
    period: "January 2026 - Present",
    role: "Digital Infrastructure Lead",
    company: "Food Innovation Studio",
    summary:
      "Leading digital infrastructure for scalable web platforms, internal systems, and data workflows while driving documentation, design systems, cybersecurity practice, and operational reliability.",
  },
  {
    period: "January 2024 - Present",
    role: "Fullstack Developer",
    company: "Tendu Solutions",
    summary:
      "Designing and building secure, scalable web and mobile systems, integrating REST services, shipping cloud-based solutions on Azure and AWS, and automating business workflows for clients.",
  },
  {
    period: "June 2024 - December 2024",
    role: "Consultant Research Assistant",
    company: "International Rescue Committee",
    summary:
      "Facilitated cross-cultural programs, authored actionable reports, coordinated grants and community initiatives, and supported 160+ weekly participants with a 95% attendance rate.",
  },
  {
    period: "September 2022 - January 2024",
    role: "IT Support Officer",
    company: "Farmbid Africa",
    summary:
      "Maintained 99.9% uptime, improved infrastructure reliability by 30%, led cloud migration that reduced costs by 25%, and strengthened release efficiency with CI/CD and documentation.",
  },
  {
    period: "January 2020 - April 2021",
    role: "IT Intern",
    company: "Hallmark Marketing Company",
    summary:
      "Worked on analytics, reporting, performance optimization, and ad-serving improvements, contributing to a 10% CTR lift and 30% faster page loads.",
  },
];

const projectHighlights = [
  {
    name: "Nai-Search",
    description:
      "A search-first property platform with advanced filtering, responsive UX, and admin workflows.",
    stack: "React, Express, MongoDB",
    href: "https://nai-search.vercel.app/",
  },
  {
    name: "FlixClone",
    description:
      "A polished frontend build focused on API integration, interface quality, and responsive performance.",
    stack: "React, TMDB API, JavaScript",
    href: "https://flixhqo.vercel.app/",
  },
];

export default function Home() {
  const latestPosts = getLatestPosts(3);

  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(15,91,216,0.24),_transparent_70%)] blur-3xl" />
        <div className="animate-pulse-glow absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(219,111,44,0.18),_transparent_72%)] blur-3xl" />
        <div className="animate-float-slow absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(31,143,102,0.16),_transparent_68%)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="animate-fade-up flex items-center justify-between border-b border-[var(--border)] pb-5">
          <Link
            href="/"
            className="font-display text-sm uppercase tracking-[0.28em] text-[var(--foreground)]"
          >
            Hussein Salim
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/salemHb"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hussein-salim-619007b8/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </header>

        <section className="grid gap-12 border-b border-[var(--border)] py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
          <div>
            <div className="animate-fade-up-delay-1 inline-flex rounded-full border border-[rgba(15,91,216,0.16)] bg-[linear-gradient(90deg,rgba(15,91,216,0.1),rgba(219,111,44,0.08),rgba(31,143,102,0.1))] px-4 py-2 text-sm uppercase tracking-[0.18em] text-[var(--foreground)] shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              Senior Software Engineer + Technical SEO
            </div>
            <h1 className="animate-fade-up-delay-2 mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              I design and build
              <span className="block bg-[linear-gradient(90deg,var(--accent),var(--accent-warm),var(--accent-strong))] bg-clip-text text-transparent">
                scalable software systems
              </span>
              <span className="block">
                with strong UI engineering and technically sound SEO foundations.
              </span>
            </h1>
            <div className="animated-divider animate-fade-up-delay-3 mt-8 h-px w-40" />
            <p className="animate-fade-up-delay-3 mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Software Developer with over five years of experience across onsite and fully remote teams. My work spans UI engineering, full-stack development, UX design, design systems, infrastructure, and technically sound web delivery that performs well for users and search engines.
            </p>
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:husseinsalim419@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition hover:translate-y-[-2px]"
              >
                <Mail className="h-4 w-4" />
                Hire me
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View experience
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay-3 space-y-6 text-sm leading-7 text-[var(--muted)]">
            <div className="rounded-[1.75rem] border border-[rgba(15,91,216,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(238,244,255,0.8))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Focus
              </p>
              <p className="mt-2">
                Senior-level frontend and full-stack engineering for products that need strong UX, stable architecture, search visibility, and maintainable delivery systems.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(219,111,44,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,245,238,0.76))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Technical SEO Value
              </p>
              <p className="mt-2">
                I help teams ship websites and platforms with clean information architecture, crawlable rendering, metadata discipline, performance awareness, and implementation quality that supports long-term organic growth.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[rgba(31,143,102,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(237,249,243,0.78))] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Education
              </p>
              <p className="mt-2">
                BSc Computer Science, Moi University
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[var(--border)] py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              About
            </p>
          </div>
          <div className="max-w-4xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              I want to be hired as a senior software engineer because that is the level I work at: architecting core systems, shipping production-ready interfaces, improving infrastructure, and translating business needs into software that lasts.
            </p>
            <p className="mt-6">
              My edge is the combination of product engineering and technical SEO thinking. I care about how a system is built, how it performs, how maintainable it is, and whether it can be properly discovered and understood on the web.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="grid gap-10 border-b border-[var(--border)] py-16 lg:grid-cols-[220px_minmax(0,1fr)]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              Experience
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="grid gap-3 border-b border-[var(--border)] pb-8 transition duration-300 hover:border-[rgba(15,91,216,0.26)] last:border-b-0 last:pb-0 md:grid-cols-[180px_minmax(0,1fr)]"
              >
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-base text-[var(--foreground)]/75">
                    {item.company}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-[var(--border)] py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              Skills
            </p>
          </div>
          <div className="space-y-6">
            {Object.entries(skills).map(([label, values]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[150px_minmax(0,1fr)]"
              >
                <p className="text-sm text-[var(--foreground)]">{label}</p>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  {values.join(" , ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-[var(--border)] py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              Selected Work
            </p>
          </div>
          <div className="space-y-8">
            {projectHighlights.map((project) => (
              <article
                key={project.name}
                className="grid gap-3 border-b border-[var(--border)] pb-6 last:border-b-0 last:pb-0 md:grid-cols-[180px_minmax(0,1fr)]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {project.name}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {project.description}
                  </p>
                  <p className="mt-2 text-sm text-[var(--foreground)]/75">
                    {project.stack}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:translate-x-1"
                  >
                    Visit project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-[var(--border)] py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              Writing
            </p>
          </div>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-b border-[var(--border)] pb-6 transition last:border-b-0 last:pb-0"
              >
                <p className="text-sm text-[var(--muted)]">{formatDate(post.date)}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
              Contact
            </p>
          </div>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              If you need a senior engineer who can think in systems, UX, and technical SEO, let’s talk.
            </h2>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--foreground)]">
              <a href="mailto:husseinsalim419@gmail.com">husseinsalim419@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/hussein-salim-619007b8/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://github.com/salemHb" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
