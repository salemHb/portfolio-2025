"use client";

import { useEffect, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "Laravel", "Express", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Azure", "CI/CD", "Figma"],
  },
];

export default function Skills() {
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
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="fade-in">
            <h2 className="mb-6">About</h2>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I'm a senior software developer with a passion for creating
                digital experiences that are both functional and beautiful. I
                specialize in full-stack development with a particular focus on
                modern web technologies and user experience design.
              </p>
              <p>
                Currently working at Tendu Technology Solutions, where I build
                scalable web applications and design systems. I enjoy the
                challenge of turning complex problems into elegant,
                user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or mentoring other
                developers in the community.
              </p>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-8">Technologies & Tools</h3>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={category.category}>
                  <h4 className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
