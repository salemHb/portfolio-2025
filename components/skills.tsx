"use client";

import TiltCard from "./tilt-card";

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
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="mb-8 sm:mb-12 text-center">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => (
            <TiltCard key={cat.category} delay={i * 0.1}>
              <h4 className="font-semibold mb-3 text-center">{cat.category}</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs sm:text-sm bg-[var(--color-surface-elevated)] rounded-full border border-[var(--color-border)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
