"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";

const quotes = [
  "👨🏽‍💻 Building something fun...",
  "💡 Always learning, always curious",
  "📍 Nairobi, Kenya",
  "🎯 Focused on creativity and code",
  "☕ Fueled by coffee and JavaScript",
  "🎧 Listening to lo-fi while coding",
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-col items-center">
        <div className="flex w-full items-center justify-between text-sm font-light text-[var(--color-text-secondary)]">
          {/* Left - Quote */}
          <div className="hidden md:flex items-center flex-1 justify-start">
            <span className="whitespace-nowrap">{quote}</span>
            <hr className="column undivided quote ml-4 flex-grow border-0 border-t border-[var(--color-border)]" />
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <a
              href="#home"
              className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              Mr Babu
            </a>
          </div>

          {/* Right - Links + Toggle */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-4">
            <hr className="column undivided title-rule mr-4 flex-grow border-0 border-t border-[var(--color-border)]" />
            <a
              href="https://medium.com"
              className="hover:text-[var(--color-accent)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
            <a
              href="https://dribbble.com"
              className="hover:text-[var(--color-accent)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
            <a
              href="https://x.com"
              className="hover:text-[var(--color-accent)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-[var(--color-accent)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Footer signature */}
        <span className="text-xs mt-2 text-[var(--color-text-tertiary)]">
          @thirty3solutions
        </span>

        {/* Bottom HR - thick rule */}
        <hr className="extra-thick mt-2 w-full border-0 border-t-2 border-[var(--color-border)]" />
      </div>
    </header>
  );
}
