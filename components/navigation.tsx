"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";

const quotes = [
  "👩🏻‍💻 Beep boop boop",
  "🎵 Listening: House Piano",
  "🎶 Listening: Burna Boy",
  "🎵 Listening: No Sign of Weakness",
  "🎶 Listening: Rodwave",
  "📖 Reading: Biko Zulu",
  "📺 Watching: Ash vs Evil Dead",
  "📺 Watching: Family guy",
  "📺 Watching: Joe Rogan",
  "🎮 Playing: COD",
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Helper function to wrap each word for hover effect
  interface HoverWordsProps {
    text: string;
  }

  const hoverWords = (text: HoverWordsProps["text"]): JSX.Element[] =>
    text.split(" ").map((word: string, i: number) => (
      <span
        key={i}
        className="transition-colors hover:text-[var(--color-accent)]"
      >
        {word}
        {i < text.split(" ").length - 1 && " "}
      </span>
    ));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-col items-center">
        <div className="flex w-full items-center justify-between text-sm font-semibold text-[var(--color-text-secondary)]">
          {/* Left - Quote */}
          <div className="hidden md:flex items-center flex-1 justify-start">
            <span className="whitespace-nowrap font-medium">{quote}</span>
            <hr className="ml-4 flex-grow border-0 border-t border-[var(--color-border)]" />
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <a
              href="#home"
              className="text-lg font-bold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]"
            >
              {hoverWords("Hussein")}
            </a>
          </div>

          {/* Right - Desktop Links */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-6">
            <hr className="ml-4 flex-grow border-0 border-t border-[var(--color-border)]" />
            {[
              { text: "Blog", href: "/blog" },
              { text: "GitHub", href: "https://github.com/salemHb" },
              { text: "LinkedIn", href: "https://www.linkedin.com/in/hussein-salim-619007b8/" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                {hoverWords(link.text)}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <ThemeToggle className="mr-4" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none p-1"
            >
              <svg
                className="w-6 h-6 text-[var(--color-text-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide-down animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out w-full mt-2 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 py-4 border-t border-[var(--color-border)]">
            {[
              { text: "Blog", href: "/blog" },
              { text: "GitHub", href: "https://github.com/salemHb" },
              { text: "LinkedIn", href: "https://www.linkedin.com/in/hussein-salim-619007b8/" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="transition-colors hover:text-[var(--color-primary)] text-[var(--color-text-primary)] font-medium"
                onClick={() => setMenuOpen(false)} // Close menu after selection
              >
                {hoverWords(link.text)}
              </a>
            ))}
          </div>
        </div>

        {/* Footer signature */}
        <span className="text-xs mt-2 text-[var(--color-text-tertiary)] font-medium">
          @thirty3solutions
        </span>

        {/* Bottom HR - thin rule */}
        <hr className="mt-2 w-full border-0 border-t border-[var(--color-border)]" />
      </div>
    </header>
  );
}
