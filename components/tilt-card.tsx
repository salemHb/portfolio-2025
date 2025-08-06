"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TiltCardProps {
  children: React.ReactNode;
  href?: string;
  delay?: number;
}

export default function TiltCard({ children, href, delay = 0 }: TiltCardProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Random tilt between -3 and 3 degrees
    setRotation(Math.random() * 6 - 3);
  }, []);

  const cardInner = (
    <div
      className={`bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg shadow-lg p-6 transition-transform duration-300 ease-out fade-in`}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block transform hover:rotate-0 hover:scale-105 hover:z-10 transition-transform duration-300"
      >
        {cardInner}
      </Link>
    );
  }

  return (
    <div className="transform hover:rotate-0 hover:scale-105 hover:z-10 transition-transform duration-300">
      {cardInner}
    </div>
  );
}
