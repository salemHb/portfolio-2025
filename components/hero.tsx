"use client";

import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-4xl">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8 fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-[var(--color-text-tertiary)]">
              Available for new opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 fade-in" style={{ animationDelay: "0.1s" }}>
            Hussein Salim
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl text-[var(--color-text-secondary)] mb-8 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Senior Software Developer crafting digital experiences with
            precision and purpose.
          </p>

          {/* Description */}
          <p
            className="text-lg text-[var(--color-text-tertiary)] mb-12 max-w-2xl leading-relaxed fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            I specialize in building scalable web applications and design
            systems that bridge the gap between beautiful design and robust
            functionality. Currently focused on full-stack development with
            modern technologies.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="mailto:husseinsalim419@gmail.com"
              className="btn btn-primary"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/hussein-salim-619007b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
