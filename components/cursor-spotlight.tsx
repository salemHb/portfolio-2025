"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
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
	}, []);

	return (
		<div
			className="fixed z-50 w-3 h-3 bg-neutral-300 rounded-full pointer-events-none transition-opacity duration-300"
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
				transform: "translate(-50%, -50%)",
				opacity: isVisible ? 1 : 0,
			}}
		/>
	);
}
