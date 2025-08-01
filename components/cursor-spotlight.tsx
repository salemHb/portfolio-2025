"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const isBrowser = typeof window !== "undefined";

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isBrowser) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isBrowser]);

  if (!isBrowser) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 w-40 h-40 rounded-full blur-2xl mix-blend-difference"
      style={{
        backgroundColor: "rgba(120, 120, 120, 0.1)", // soft neutral tone
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
