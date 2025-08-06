"use client";

import TiltCard from "./tilt-card";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container flex flex-wrap gap-6 justify-center">
        {/* Name Card */}
        <TiltCard delay={0.1}>
          <h1 className="text-3xl font-bold mb-2">Hussein Salim</h1>
          <p className="text-[var(--color-text-secondary)]">
            Senior Software Developer
          </p>
        </TiltCard>

        {/* Availability Card */}
        <TiltCard delay={0.2}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-[var(--color-text-tertiary)]">
              Available for new opportunities
            </span>
          </div>
        </TiltCard>

        {/* About Card */}
        <TiltCard delay={0.3}>
          <p className="text-sm text-[var(--color-text-tertiary)] max-w-xs">
            I specialize in building scalable web applications and design
            systems that bridge beautiful design with robust functionality.
          </p>
        </TiltCard>

        {/* Contact Card */}
        <TiltCard href="mailto:husseinsalim419@gmail.com" delay={0.4}>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Get in touch
          </div>
        </TiltCard>

        {/* LinkedIn Card */}
        <TiltCard
          href="https://www.linkedin.com/in/hussein-salim-619007b8/"
          delay={0.5}
        >
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
