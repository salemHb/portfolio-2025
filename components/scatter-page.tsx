"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Github,
  BookOpen,
  Code,
  Briefcase,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface CardData {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  href?: string;
  gradient?: string;
}

interface ScatterPageProps {
  posts: BlogPost[];
}

export default function ScatterPage({ posts }: ScatterPageProps) {
  const blogCards =
    posts.length > 0
      ? posts.map((post) => ({
          title: post.title,
          subtitle: "Read blog",
          icon: <BookOpen className="w-8 h-8" />,
          href: `/blog/${post.slug}`,
          gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
        }))
      : [
          {
            title: "No Blog Posts Yet",
            subtitle: "Coming Soon",
            icon: <BookOpen className="w-8 h-8" />,
            gradient: "from-[var(--color-neutral)] to-[var(--color-neutral-light)]",
          },
        ];

  const cards: CardData[] = [
    {
      title: "Hussein Salim",
      subtitle: "Senior Software Developer",
      icon: <User className="w-8 h-8" />,
      gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
    },
    blogCards[0],
    {
      title: "Skills",
      subtitle: "Frontend, Backend, Tools",
      icon: <Briefcase className="w-8 h-8" />,
      href: "#skills",
      gradient: "from-[var(--color-secondary)] to-[var(--color-neutral)]",
    },
    {
      title: "Timeline",
      subtitle: "My Journey",
      icon: <Calendar className="w-8 h-8" />,
      href: "#timeline",
      gradient: "from-[var(--color-neutral)] to-[var(--color-neutral-light)]",
    },
    {
      title: "Nai-Search",
      subtitle: "Live Project",
      icon: <Code className="w-8 h-8" />,
      href: "https://nai-search.vercel.app/",
      gradient: "from-[var(--color-success)] to-[var(--gradient-primary)]",
    },
    {
      title: "FlixClone",
      subtitle: "Streaming App",
      icon: <Code className="w-8 h-8" />,
      href: "https://flixhqo.vercel.app/",
      gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    },
    {
      title: "Contact",
      subtitle: "Let's Talk",
      icon: <Mail className="w-8 h-8" />,
      href: "mailto:husseinsalim419@gmail.com",
      gradient: "from-[var(--color-warning)] to-[var(--color-warning)]",
    },
    {
      title: "LinkedIn",
      subtitle: "Connect",
      icon: <Linkedin className="w-8 h-8" />,
      href: "https://www.linkedin.com/in/hussein-salim-619007b8/",
      gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
    },
    {
      title: "GitHub",
      subtitle: "View Code",
      icon: <Github className="w-8 h-8" />,
      href: "https://github.com/salemHb",
      gradient: "from-[var(--color-neutral)] to-[var(--color-neutral-light)]",
    },
    {
      title: "View All Blogs",
      subtitle: "See more articles",
      icon: <ArrowRight className="w-8 h-8" />,
      href: "/blog",
      gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
    },
  ];

  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 px-4 sm:px-6 flex flex-col justify-between bg-[var(--color-background)] overflow-hidden">
      <div className="lg:hidden absolute w-full max-w-md mx-auto h-[calc(100vh-8rem)]">
        {/* Mobile-friendly stacked layout */}
        <div className="flex flex-col items-center justify-start space-y-4 pt-10 w-full">
          {cards.map((card, index) => (
            <MobileScatterCard
              key={`mobile-${index}`}
              {...card}
              size="w-full h-40 sm:h-44"
              style={{
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop scatter layout */}
      <div className="hidden lg:relative lg:w-full lg:max-w-7xl lg:mx-auto lg:h-[calc(100vh-8rem)]">
        {cards.map((card, index) => {
          // Desktop positioning
          let left, top;
          let size = "w-64 h-48 sm:w-72 sm:h-52 md:w-80 md:h-56"; // smaller default sizes for mobile

          if (index < 4) left = `${5 + Math.random() * 10}%`;
          else if (index < 6) {
            left = `${40 + Math.random() * 10}%`;
            size = "w-72 h-52 md:w-96 md:h-64"; // bigger for center cards
          } else left = `${75 + Math.random() * 10}%`;

          top = `${Math.random() * 70}%`;

          return (
            <DesktopScatterCard
              key={index}
              {...card}
              size={size}
              style={{
                top,
                left,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

// Desktop scatter card with absolute positioning
function DesktopScatterCard({
  title,
  subtitle,
  icon,
  href,
  gradient = "from-gray-400 to-gray-600",
  size,
  style,
}: CardData & { size: string; style?: React.CSSProperties }) {
  const [hoverColor, setHoverColor] = React.useState<string>("transparent");

  function getRandomColor() {
    // More conservative hover colors
    const colors = [
      "rgba(120, 119, 198, 0.1)", // Muted purple
      "rgba(42, 124, 122, 0.1)",  // Muted teal
      "rgba(92, 107, 192, 0.1)",  // Muted blue
      "rgba(121, 148, 96, 0.1)",  // Muted olive
      "rgba(148, 119, 176, 0.1)", // Muted lavender
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleMouseEnter = () => {
    setHoverColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setHoverColor("transparent");
  };

  const cardContent = (
    <div
      className={`${size} absolute p-5 rounded-lg shadow-lg border border-[var(--color-border)]
      flex flex-col justify-center items-center text-center gap-4
      bg-[var(--color-background)] text-[var(--color-text-primary)] transition-all duration-300 ease-out
      hover:scale-[1.03] hover:shadow-xl hover:z-20`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="z-10 text-[var(--color-primary)]">{icon}</div>
      <h3 className="font-bold text-xl md:text-2xl z-10">{title}</h3>
      {subtitle && <p className="text-base opacity-80 z-10">{subtitle}</p>}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: hoverColor, zIndex: 0 }}
      ></div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="group"
      >
        {cardContent}
      </Link>
    );
  }
  return cardContent;
}

// Mobile card for stacked layout
function MobileScatterCard({
  title,
  subtitle,
  icon,
  href,
  gradient = "from-gray-400 to-gray-600",
  size,
  style,
}: CardData & { size: string; style?: React.CSSProperties }) {
  const [hoverColor, setHoverColor] = React.useState<string>("transparent");

  function getRandomColor() {
    // More conservative hover colors
    const colors = [
      "rgba(120, 119, 198, 0.1)", // Muted purple
      "rgba(42, 124, 122, 0.1)",  // Muted teal
      "rgba(92, 107, 192, 0.1)",  // Muted blue
      "rgba(121, 148, 96, 0.1)",  // Muted olive
      "rgba(148, 119, 176, 0.1)", // Muted lavender
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleMouseEnter = () => {
    setHoverColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setHoverColor("transparent");
  };

  const cardContent = (
    <div
      className={`${size} w-full p-5 rounded-lg shadow-lg border border-[var(--color-border)]
      flex flex-col justify-center items-center text-center gap-4
      bg-[var(--color-background)] text-[var(--color-text-primary)] transition-all duration-300 ease-out
      hover:scale-[1.03] hover:shadow-xl hover:z-20`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="z-10 text-[var(--color-primary)]">{icon}</div>
      <h3 className="font-bold text-xl z-10">{title}</h3>
      {subtitle && <p className="text-base opacity-80 z-10">{subtitle}</p>}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: hoverColor, zIndex: 0 }}
      ></div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="group w-full"
      >
        {cardContent}
      </Link>
    );
  }
  return cardContent;
}
