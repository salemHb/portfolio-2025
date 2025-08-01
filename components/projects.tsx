"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: "Live" | "In Development";
  links: {
    github?: string;
    live?: string;
  };
  image: string;
}

const projects: Project[] = [
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
    image: "/projects/1.png",
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
    image: "/projects/travel.png",
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
    image: "/projects/flixclone.png",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Intersection Observer for animations
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

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="mb-16 fade-in">
          <h2 className="mb-4">Selected Work</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            A curated collection of projects that showcase my expertise in
            modern web development and user experience design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="order-first md:order-last">
                  <div className="aspect-video bg-[var(--color-surface-elevated)] rounded-lg overflow-hidden">
                    <img
                      src={
                        project.image || "/placeholder.svg?height=300&width=500"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
