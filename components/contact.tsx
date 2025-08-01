"use client";

import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="mb-6">Let's Connect</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              interesting projects, or just having a conversation about
              technology and design.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 gap-4 fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="mailto:husseinsalim419@gmail.com"
              className="card text-center hover:scale-105 transition-transform"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                husseinsalim419@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/hussein-salim-619007b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:scale-105 transition-transform"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Professional network
              </p>
            </a>

            <a
              href="https://github.com/salemHb"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center hover:scale-105 transition-transform"
            >
              <Github className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Code repositories
              </p>
            </a>
          </div>

          <div className="mt-12 fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="mailto:husseinsalim419@gmail.com"
              className="btn btn-primary text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              Start a conversation
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
