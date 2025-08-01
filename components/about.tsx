"use client";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing px-6 bg-[var(--color-background)] text-[var(--color-text-secondary)]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Main content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-[var(--color-text-primary)]">
              About
            </h2>

            <div className="space-y-6 leading-relaxed">
              <p>
                I'm a software developer with a passion for creating digital
                experiences that are both functional and beautiful. I specialize
                in full-stack development, with a particular focus on frontend
                technologies and user experience design.
              </p>

              <p>
                Currently working at Tendu Technology Solutions, where I build
                scalable web applications using modern technologies like React,
                Next.js, and TypeScript. I enjoy the challenge of turning
                complex problems into simple, elegant solutions.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or enjoying a good cup of
                coffee while reading about design and development trends.
              </p>
            </div>
          </div>

          {/* Right column - Skills */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-[var(--color-text-primary)]">
              Skills & Technologies
            </h3>

            <div className="space-y-6">
              {/* Frontend */}
              <div>
                <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "HTML/CSS",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-elevated)] px-3 py-1 border border-[var(--color-border)] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "PHP",
                    "Laravel",
                    "Express",
                    "MongoDB",
                    "MySQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-elevated)] px-3 py-1 border border-[var(--color-border)] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                  Tools & Others
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "Figma", "VS Code"].map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-elevated)] px-3 py-1 border border-[var(--color-border)] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
