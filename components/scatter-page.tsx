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
          gradient: "from-blue-500 to-indigo-500",
        }))
      : [
          {
            title: "No Blog Posts Yet",
            subtitle: "Coming Soon",
            icon: <BookOpen className="w-8 h-8" />,
            gradient: "from-gray-500 to-gray-700",
          },
        ];

  const cards: CardData[] = [
    {
      title: "Hussein Salim",
      subtitle: "Senior Software Developer",
      icon: <User className="w-8 h-8" />,
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    blogCards[0],
    {
      title: "Skills",
      subtitle: "Frontend, Backend, Tools",
      icon: <Briefcase className="w-8 h-8" />,
      href: "#skills",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Timeline",
      subtitle: "My Journey",
      icon: <Calendar className="w-8 h-8" />,
      href: "#timeline",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Nai-Search",
      subtitle: "Live Project",
      icon: <Code className="w-8 h-8" />,
      href: "https://nai-search.vercel.app/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "FlixClone",
      subtitle: "Streaming App",
      icon: <Code className="w-8 h-8" />,
      href: "https://flixhqo.vercel.app/",
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Contact",
      subtitle: "Let's Talk",
      icon: <Mail className="w-8 h-8" />,
      href: "mailto:husseinsalim419@gmail.com",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      title: "LinkedIn",
      subtitle: "Connect",
      icon: <Linkedin className="w-8 h-8" />,
      href: "https://www.linkedin.com/in/hussein-salim-619007b8/",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      title: "GitHub",
      subtitle: "View Code",
      icon: <Github className="w-8 h-8" />,
      href: "https://github.com/salemHb",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      title: "View All Blogs",
      subtitle: "See more articles",
      icon: <ArrowRight className="w-8 h-8" />,
      href: "/blog",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 px-6 flex flex-col justify-between bg-[var(--color-background)] overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto h-[calc(100vh-8rem)]">
        {cards.map((card, index) => {
          let left;
          let size = "w-80 h-56"; // larger default
          if (index < 4) left = `${5 + Math.random() * 10}%`;
          else if (index < 6) {
            left = `${40 + Math.random() * 10}%`;
            size = "w-96 h-64"; // even bigger for center cards
          } else left = `${75 + Math.random() * 10}%`;

          const top = `${Math.random() * 70}%`;

          return (
            <ScatterCard
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

function ScatterCard({
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
    const colors = [
      "rgba(255, 0, 0, 0.2)",
      "rgba(0, 255, 0, 0.2)",
      "rgba(0, 0, 255, 0.2)",
      "rgba(255, 255, 0, 0.2)",
      "rgba(255, 0, 255, 0.2)",
      "rgba(0, 255, 255, 0.2)",
      "rgba(255, 165, 0, 0.2)",
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
      className={`absolute p-6 rounded-xl shadow-lg border-2 border-black 
      flex flex-col justify-center items-center text-center gap-4
      bg-white text-[var(--color-text-primary)] transition-all duration-500 ease-out
      hover:scale-110 hover:z-20
      ${size} card-tilt`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="z-10">{icon}</div>
      <h3 className="font-bold text-xl z-10">{title}</h3>
      {subtitle && <p className="text-base opacity-80 z-10">{subtitle}</p>}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
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
