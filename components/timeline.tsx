"use client";

import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "current",
    title: "Software Developer",
    company: "Tendu Technology Solutions",
    location: "Kenya",
    period: "Dec 2023 - Present",
    description:
      "Building scalable web applications and design systems using modern technologies. Leading frontend development initiatives and collaborating with cross-functional teams.",
    highlights: [
      "Developed enterprise-level applications serving 100k+ users",
      "Implemented design systems reducing development time by 40%",
      "Led migration to modern tech stack improving performance by 60%",
    ],
  },
  {
    id: "previous",
    title: "IT Systems Administrator & Frontend Developer",
    company: "Farmbid Africa",
    location: "Kenya",
    period: "Sep 2022 - Dec 2023",
    description:
      "Managed IT infrastructure while developing frontend solutions for agricultural technology platform. Achieved 99.9% uptime and reduced operational costs by 25%.",
    highlights: [
      "Administered Windows servers with 99.9% uptime",
      "Developed CI/CD pipelines reducing deployment time by 70%",
      "Led cloud migration saving 25% in operational costs",
    ],
  },
];

export default function Timeline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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
    <section className="section">
      <div className="container">
        <div className="mb-16 fade-in">
          <h2 className="mb-4">Experience</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            My professional journey in software development and technology
            leadership.
          </p>
        </div>

        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative fade-in ${
                index !== experiences.length - 1 ? "pb-12" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-px h-full bg-[var(--color-border)]"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-3 h-3 bg-[var(--color-accent)] rounded-full border-2 border-[var(--color-background)]"></div>

              {/* Content */}
              <div className="ml-16">
                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-sm text-[var(--color-text-tertiary)]">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-[var(--color-text-tertiary)]">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
