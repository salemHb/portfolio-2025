"use client";

import TiltCard from "./tilt-card";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "nai-search",
    title: "Nai-Search Property Platform",
    description:
      "A full-stack real estate platform for property discovery and management in Nairobi, featuring advanced filtering and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    year: "2025",
    status: "Live",
    links: {
      github: "https://github.com/salemHb/nai-search",
      live: "https://nai-search.vercel.app/",
    },
  },
  {
    id: "travel-dashboard",
    title: "Travel Agency Dashboard",
    description:
      "Production-ready React template with SSR, HMR, and Docker deployment for scalable travel applications.",
    tech: ["React", "TypeScript", "Docker", "Tailwind"],
    year: "2025",
    status: "In Development",
    links: {
      github: "https://github.com/salemHb/travelAgencyDashboard",
    },
  },
  {
    id: "flixclone",
    title: "FlixClone Streaming Interface",
    description:
      "HULU-style streaming interface built with React and TMDB API, featuring responsive design and smooth animations.",
    tech: ["React", "TMDB API", "CSS", "JavaScript"],
    year: "2025",
    status: "Live",
    links: {
      github: "https://github.com/salemHb/flixclone",
      live: "https://flixhqo.vercel.app/",
    },
  },
];

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="mb-12">Selected Work</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((p, i) => (
            <TiltCard
              key={p.id}
              href={p.links.live || p.links.github}
              delay={i * 0.1}
            >
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[var(--color-surface-elevated)] px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                {p.links.github && (
                  <span className="flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </span>
                )}
                {p.links.live && (
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Live
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
