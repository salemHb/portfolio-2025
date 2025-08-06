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
            <span className="whitespace-nowrap">{quote}</span>
            <hr className="column undivided quote ml-4 flex-grow border-0 border-t border-[var(--color-border)]" />
          </div>

          {/* Center - Title */}
          <div className="flex-1 text-center">
            <a
              href="#home"
              className="text-lg font-semibold text-[var(--color-text-primary)] transition-colors"
            >
              {hoverWords("Hussein")}
            </a>
          </div>

          {/* Right - Desktop Links */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-4">
            <hr className="column undivided quote ml-4 flex-grow border-0 border-t border-[var(--color-border)]" />
            {[
              { text: "Latenight Rants", href: "/blog" },
              { text: "Medium", href: "https://medium.com" },
              { text: "Github", href: "https://github.com/salemHb" },
              { text: "X", href: "https://x.com" },
              {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/hussein-salim-619007b8/",
              },
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
                className="transition-colors"
              >
                {hoverWords(link.text)}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
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
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-[var(--color-text-primary)]">
            {[
              { text: "Latenight Rants", href: "/blog" },
              { text: "Medium", href: "https://medium.com" },
              { text: "Github", href: "https://github.com/salemHb" },
              { text: "X", href: "https://x.com" },
              {
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/hussein-salim-619007b8/",
              },
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
                className="transition-colors"
              >
                {hoverWords(link.text)}
              </a>
            ))}
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
