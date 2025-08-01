"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            © {currentYear} BabuLake
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:husseinsalim419@gmail.com"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hussein-salim-619007b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/salemHb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
