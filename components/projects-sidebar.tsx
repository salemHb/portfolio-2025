"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
	Search,
	Filter,
	ExternalLink,
	Github,
	Share2,
	Star,
	Calendar,
	Code,
	Globe,
	Zap,
	ArrowRight,
	Server,
	Bot,
	Layout,
	FileCode,
	Menu,
	ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
	id: number;
	title: string;
	tagline: string;
	description: string;
	longDescription: string;
	technologies: string[];
	category: string;
	difficulty: "Beginner" | "Intermediate" | "Advanced";
	status: "Live" | "In Development" | "Creation";
	image: string;
	githubUrl?: string;
	liveUrl?: string;
	challenges: string[];
	solutions: string[];
	features: string[];
	dateCompleted: string;
	metrics?: string[];
	primaryTech: string;
	primaryTechIcon: React.ReactNode;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Nai-Search Property Listing Platform",
		tagline:
			"Simplified apartment search and property management for Nairobi residents",
		description:
			"A user-centric platform for discovering, renting, or buying apartments in Nairobi, featuring an admin dashboard for property owners and managers.",
		longDescription:
			"Nai-Search is a full-stack real estate platform designed to simplify property discovery and management in Nairobi, Kenya. It offers an intuitive interface for tenants and buyers to search for apartments using filters like price, size, and location, while landlords or property managers can manage listings and respond to inquiries through an admin dashboard. The application delivers a responsive, modern experience, powered by React and Vite, with backend support from Express and MongoDB.",
		technologies: [
			"React",
			"Vite",
			"Tailwind CSS",
			"Node.js",
			"Express",
			"MongoDB",
		],
		category: "Web App",
		difficulty: "Intermediate",
		status: "Live",
		image: "/projects/1.png",
		githubUrl: "https://github.com/salemHb/nai-search",
		liveUrl: "https://nai-search.vercel.app/",
		challenges: [
			"Scalable filtering of property listings",
			"Landlord-tenant communication workflow",
			"Secure listing and inquiry handling",
			"Responsive multi-role dashboard design",
		],
		solutions: [
			"Custom search filters with debouncing",
			"Admin dashboard with listing CRUD operations",
			"Separation of public and admin routes",
			"Mobile-first responsive design with Tailwind",
		],
		features: [
			"Location-based apartment search with filters",
			"Rent and purchase inquiry options",
			"Admin dashboard for property listing management",
			"In-app landlord-tenant communication",
			"Responsive navigation and layout",
			"Role-based dashboard access",
		],
		dateCompleted: "2025-05-01",
		primaryTech: "React",
		primaryTechIcon: <Code />,
	},

	
	{
		id: 2,
		title: "Travel Agency Dashboard",
		tagline:
			"Production-ready full-stack React template with SSR, HMR, and Docker deployment",
		description:
			"A modern, full-stack React dashboard template with TypeScript, SSR, Docker deployment support, and fast development setup using React Router and Tailwind CSS.",
		longDescription:
			"Travel Agency Dashboard is a full-stack, developer-ready template designed to accelerate the development of scalable, server-rendered React applications. Featuring out-of-the-box support for server-side rendering, hot module replacement (HMR), and Docker containerization, the project offers a robust foundation for building production-grade travel and logistics dashboards. Built with React Router, Tailwind CSS, and TypeScript, the project balances speed, modularity, and modern tooling for enterprise-grade deployment.",
		technologies: [
			"React",
			"React Router",
			"TypeScript",
			"Tailwind CSS",
			"Docker",
		],
		category: "Web App",
		difficulty: "Intermediate",
		status: "In Development",
		image: "/projects/travel.png",
		githubUrl: "https://github.com/salemHb/travelAgencyDashboard",
		liveUrl: "https://github.com/salemHb/travelAgencyDashboard",
		challenges: [
			"Implementing server-side rendering with modern React stack",
			"Building a Docker-ready, scalable deployment pipeline",
			"Maintaining fast development workflow with HMR",
		],
		solutions: [
			"Preconfigured SSR with production and development mode separation",
			"Hot Module Replacement for real-time updates during development",
			"Dockerized app for easy deployment to cloud platforms",
		],
		features: [
			"Server-side rendering (SSR) support",
			"TypeScript-based codebase",
			"Asset bundling and build optimization",
			"Hot Module Replacement (HMR)",
			"Ready-to-deploy Docker configuration",
			"Tailwind CSS styling with responsive layout",
		],
		dateCompleted: "2025-06-30",
		primaryTech: "React",
		primaryTechIcon: <Layout />,
	},

	{
		id: 3,
		title: "FlixClone  HULU UI Clone",
		tagline:
			"A responsive HULU-style streaming interface built with React and TMDB API",
		description:
			"A visually accurate UI clone of HULU built using React.js and The Movie Database (TMDB) API, featuring trending movie categories, previews, and dynamic content fetching.",
		longDescription:
			"FlixClone is a front-end project that replicates the clean and interactive interface of HULU, designed to display trending movies and TV shows using The Movie Database (TMDB) API. Built with React, it fetches dynamic content in real-time and showcases responsive carousels, hover previews, and category-based filtering. The project focuses on delivering a rich user experience and is ideal for demonstrating API integration and media-based UI design skills.",
		technologies: ["React", "TMDB API", "JavaScript", "CSS"],
		category: "Web App",
		difficulty: "Beginner",
		status: "Live",
		image: "/projects/flixclone.png",
		githubUrl: "https://github.com/salemHb/flixclone",
		liveUrl: "https://flixhqo.vercel.app/",
		challenges: [
			"Dynamic content rendering from third-party API",
			"Mimicking real-world streaming UI design",
			"Responsive layout for various devices",
		],
		solutions: [
			"Integrated TMDB API with React state hooks",
			"Styled components using modular CSS",
			"Implemented horizontal scrollable categories and media previews",
		],
		features: [
			"Trending movies and TV shows fetched from TMDB",
			"Horizontal scrolling category rows",
			"Hover previews with smooth transitions",
			"Clean and responsive HULU-style layout",
			"Dynamic genre/category filtering",
		],
		dateCompleted: "2025-03-15",
		primaryTech: "React",
		primaryTechIcon: <Code />,
	},

	
];

const categories = [
	"All",
	"E-commerce",
	"API",
	"Cloud",
	"AI/Bot",
	"Web App",
	"Blog",
	"Corporate",
	"Marketing",
	"Fintech",
];

export default function ProjectsSidebar() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		projects[0]
	);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, [isMounted]);

	useEffect(() => {
		if (!isMounted) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;

			const { left, top, width, height } =
				containerRef.current.getBoundingClientRect();
			const x = (e.clientX - left) / width;
			const y = (e.clientY - top) / height;

			setMousePosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [isMounted]);

	useEffect(() => {
		if (!isMounted) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowUp" || e.key === "ArrowDown") {
				e.preventDefault();
				const currentIndex = filteredProjects.findIndex(
					(p) => p.id === selectedProject?.id
				);

				if (e.key === "ArrowUp" && currentIndex > 0) {
					handleProjectSelect(filteredProjects[currentIndex - 1]);
				} else if (
					e.key === "ArrowDown" &&
					currentIndex < filteredProjects.length - 1
				) {
					handleProjectSelect(filteredProjects[currentIndex + 1]);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [filteredProjects, selectedProject, isMounted]);

	useEffect(() => {
		if (!isMounted) return;

		if (contentRef.current) {
			contentRef.current.scrollTop = 0;
		}
	}, [selectedProject, isMounted]);

	// Filter projects based on active category and search query
	useEffect(() => {
		if (!isMounted) return;

		let filtered = [...projects];

		// Filter by category
		if (activeCategory !== "All") {
			filtered = filtered.filter(
				(project) => project.category === activeCategory
			);
		}

		// Filter by search query
		if (searchQuery.trim() !== "") {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(
				(project) =>
					project.title.toLowerCase().includes(query) ||
					project.description.toLowerCase().includes(query) ||
					project.technologies.some((tech) =>
						tech.toLowerCase().includes(query)
					)
			);
		}

		setFilteredProjects(filtered);

		// If the currently selected project is not in the filtered list,
		// select the first project in the filtered list
		if (
			filtered.length > 0 &&
			!filtered.some((p) => p.id === selectedProject?.id)
		) {
			setSelectedProject(filtered[0]);
		}
	}, [activeCategory, searchQuery, selectedProject?.id, isMounted]);

	const moveX = mousePosition.x * 10 - 5;
	const moveY = mousePosition.y * 10 - 5;

	const handleProjectSelect = (project: Project) => {
		setIsLoading(true);
		setSelectedProject(project);
		setIsMobileSidebarOpen(false);

		if (typeof window !== "undefined") {
			window.history.replaceState(null, "", `#projects-${project.id}`);
		}

		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Live":
				return "#00ff88";
			case "In Development":
				return "#ffd700";
			case "Creation":
				return "#00d4ff";
			default:
				return "#00d4ff";
		}
	};

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Beginner":
				return "#00ff88";
			case "Intermediate":
				return "#00d4ff";
			case "Advanced":
				return "#ff6b6b";
			default:
				return "#00d4ff";
		}
	};

	const getCategoryColor = (category: string) => {
		switch (category) {
			case "E-commerce":
				return "#00d4ff";
			case "API":
				return "#00ff88";
			case "Cloud":
				return "#ffd700";
			case "AI/Bot":
				return "#ff6b6b";
			case "Web App":
				return "#9c5fff";
			case "Blog":
				return "#00d4ff";
			case "Corporate":
				return "#00ff88";
			case "Marketing":
				return "#ffd700";
			case "Fintech":
				return "#ff6b6b";
			default:
				return "#00d4ff";
		}
	};

	const shareProject = (project: Project) => {
		if (typeof window === "undefined") {
			alert("Sharing features are not available during server rendering.");
			return;
		}
		if (navigator.share) {
			navigator.share({
				title: project.title,
				text: project.description,
				url: project.liveUrl || window.location.href,
			});
		} else {
			navigator.clipboard.writeText(project.liveUrl || window.location.href);
		}
	};

	const getRelatedProjects = () => {
		const relatedProjects = projects
			.filter(
				(project) =>
					project.id !== selectedProject?.id &&
					project.technologies.some((tech) =>
						selectedProject?.technologies.includes(tech)
					)
			)
			.slice(0, 3);
		return relatedProjects;
	};

	return (
		<section
			id="projects"
			className="min-h-screen py-24  relative"
			ref={containerRef}
		>
			<div
				className="absolute pointer-events-none w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
					left: `calc(${mousePosition.x * 100}% - 20vw)`,
					top: `calc(${mousePosition.y * 100}% - 20vw)`,
					transition: "all 0.3s ease",
				}}
			/>

			<div className="container w-full">
				<div className="text-center mb-16">
					<h2
						className="text-4xl md:text-5xl font-bold mb-4"
						style={{
							color: "var(--accent-primary)",
							transform: `translate(${moveX * -0.3}px, ${moveY * -0.3}px)`,
							transition: "transform 0.3s ease",
						}}
					>
						Featured Projects
					</h2>
					<p className="text-[#b4bcd0] text-lg max-w-2xl mx-auto">
						A showcase of my technical expertise and creative problem-solving
					</p>
				</div>

				<div className="md:hidden mb-6">
					<button
						onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
						className="w-full glass-card p-4 flex items-center justify-between"
					>
						<div className="flex items-center">
							<Menu className="w-5 h-5 mr-2 text-[#00d4ff]" />
							<span>{selectedProject?.title}</span>
						</div>
						<ChevronDown
							className={`w-5 h-5 transition-transform ${
								isMobileSidebarOpen ? "rotate-180" : ""
							}`}
						/>
					</button>
				</div>

				<div
					className={`flex flex-col md:flex-row gap-6 transform transition-all duration-1000 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
					}`}
				>
					<div
						className={cn(
							"md:w-[30%] glass-card p-4 md:max-h-[800px] overflow-hidden flex flex-col",
							isMobileSidebarOpen ? "block" : "hidden md:flex"
						)}
					>
						<div className="relative mb-4">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b4bcd0] w-4 h-4" />
							<input
								type="text"
								placeholder="Search projects..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-2 glass-card text-white placeholder-[#b4bcd0] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 text-sm"
							/>
						</div>

						<div className="mb-4">
							<div className="flex items-center mb-2">
								<Filter
									className="w-4 h-4 mr-2"
									style={{ color: "var(--accent-primary)" }}
								/>
								<h4 className="text-sm font-medium">Filter by Category</h4>
							</div>
							<div className="flex flex-wrap gap-2">
								{categories.slice(0, 5).map((category) => (
									<button
										key={category}
										onClick={() => setActiveCategory(category)}
										className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
											activeCategory === category
												? "text-[#0a0f1c]"
												: "glass-card hover:text-[#00d4ff]"
										}`}
										style={
											activeCategory === category
												? {
														backgroundColor: "var(--accent-primary)",
														color: "#0a0f1c",
												  }
												: {}
										}
									>
										{category}
									</button>
								))}
							</div>
							<div className="flex flex-wrap gap-2 mt-2">
								{categories.slice(5).map((category) => (
									<button
										key={category}
										onClick={() => setActiveCategory(category)}
										className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
											activeCategory === category
												? "text-[#ffff]"
												: "glass-card hover:text-[#00d4ff]"
										}`}
										style={
											activeCategory === category
												? {
														backgroundColor: "var(--accent-primary)",
														color: "#ffff",
												  }
												: {}
										}
									>
										{category}
									</button>
								))}
							</div>
						</div>

						<div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
							<h4 className="text-sm font-medium mb-2 text-[#b4bcd0]">
								{filteredProjects.length} Project
								{filteredProjects.length !== 1 ? "s" : ""}
							</h4>
							<div className="space-y-2">
								{filteredProjects.map((project) => (
									<button
										key={project.id}
										onClick={() => handleProjectSelect(project)}
										className={`w-full text-left p-3 rounded-lg  ${
											selectedProject?.id === project.id
												? " border-l-4 border-[#00d4ff]"
												: "glass-card hover:bg-white/10"
										}`}
										style={{ transform: "none" }}
									>
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<div
													className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
													style={{
														backgroundColor: `${getCategoryColor(
															project.category
														)}15`,
														color: getCategoryColor(project.category),
													}}
												>
													{project.primaryTechIcon}
												</div>
												<div>
													<h3 className="font-medium text-sm">
														{project.title}
													</h3>
													<p className="text-[#b4bcd0] text-xs truncate max-w-[180px]">
														{project.tagline}
													</p>
												</div>
											</div>
										</div>
									</button>
								))}

								{filteredProjects.length === 0 && (
									<div className="text-center py-8 glass-card">
										<div className="text-4xl mb-2">🔍</div>
										<p className="text-[#b4bcd0]">No projects found</p>
										<button
											onClick={() => {
												setSearchQuery("");
												setActiveCategory("All");
											}}
											className="mt-2 text-[#00d4ff] text-sm hover:underline"
										>
											Clear filters
										</button>
									</div>
								)}
							</div>
						</div>

						<div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#b4bcd0] flex items-center justify-center">
							<span className="glass-card px-2 py-1 rounded mr-2">↑</span>
							<span className="glass-card px-2 py-1 rounded mr-2">↓</span>
							<span>to navigate projects</span>
						</div>
					</div>

					<div className="md:w-[70%] glass-card p-6 md:max-h-[800px] overflow-hidden relative">
						{isLoading && (
							<div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
								<div className="w-12 h-12 border-4 border-t-[#00d4ff] border-r-[#00d4ff] border-b-[#00ff88] border-l-[#00ff88] rounded-full animate-spin"></div>
							</div>
						)}

						<div
							ref={contentRef}
							className="h-full overflow-y-auto pr-2 custom-scrollbar"
						>
							<div className="mb-8 pb-6 border-b border-white/10">
								<div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
									<div>
										<h2 className="text-3xl font-bold mb-2">
											{selectedProject?.title}
										</h2>
										<p className="text-[#b4bcd0] text-lg">
											{selectedProject?.tagline}
										</p>
									</div>
									<div className="flex items-center space-x-3 mt-4 md:mt-0">
										<span
											className="px-3 py-1 rounded-full text-sm font-medium"
											style={{
												backgroundColor: getStatusColor(
													selectedProject?.status
												),
												color: "#0a0f1c",
											}}
										>
											{selectedProject?.status}
										</span>
										<span
											className="px-3 py-1 rounded-full text-sm font-medium"
											style={{
												backgroundColor: getDifficultyColor(
													selectedProject?.difficulty
												),
												color: "#0a0f1c",
											}}
										>
											{selectedProject?.difficulty}
										</span>
									</div>
								</div>

								<div className="flex flex-wrap gap-2 mb-6">
									{selectedProject?.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 text-sm rounded-lg"
											style={{
												backgroundColor: "var(--accent-primary)",
											}}
										>
											<span className="text-white">{tech}</span>
										</span>
									))}
								</div>

								<div className="flex flex-wrap gap-3">
									{selectedProject?.githubUrl && (
										<a
											href={selectedProject?.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
										>
											<Github className="w-5 h-5" />
											<span>View Code</span>
										</a>
									)}
									{selectedProject?.liveUrl && (
										<a
											href={selectedProject?.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
											style={{
												backgroundColor: "var(--accent-primary)",
											}}
										>
											<ExternalLink className="w-5 h-5" />
											<span className="text-white">Live Demo</span>
										</a>
									)}
									<button
										onClick={() => shareProject(selectedProject)}
										className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
									>
										<Share2 className="w-5 h-5" />
										<span>Share</span>
									</button>
								</div>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold mb-4 flex items-center">
										<Globe className="w-5 h-5 mr-2 text-[#00d4ff]" />
										Overview
									</h3>
									<p className="text-[#b4bcd0] leading-relaxed">
										{selectedProject?.longDescription}
									</p>
								</div>

								<div className="rounded-lg overflow-hidden">
									<img
										src={selectedProject?.image || "/placeholder.svg"}
										alt={selectedProject?.title}
										className="w-full h-auto object-cover"
									/>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4 flex items-center">
										<Zap className="w-5 h-5 mr-2 text-[#00ff88]" />
										Key Features
									</h3>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
										{selectedProject?.features.map((feature, index) => (
											<li
												key={index}
												className="flex items-start space-x-2 glass-card p-3 rounded-lg"
											>
												<div className="w-5 h-5 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
													<div className="w-2 h-2 rounded-full bg-[#00ff88]"></div>
												</div>
												<span className="text-[#b4bcd0]">{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h3 className="text-xl font-semibold mb-4">Challenges</h3>
										<ul className="space-y-3">
											{selectedProject?.challenges.map((challenge, index) => (
												<li key={index} className="flex items-start space-x-2">
													<div className="w-5 h-5 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
														<div className="w-2 h-2 rounded-full bg-[#ff6b6b]"></div>
													</div>
													<span className="text-[#b4bcd0]">{challenge}</span>
												</li>
											))}
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-semibold mb-4">Solutions</h3>
										<ul className="space-y-3">
											{selectedProject?.solutions.map((solution, index) => (
												<li key={index} className="flex items-start space-x-2">
													<div className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
														<div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
													</div>
													<span className="text-[#b4bcd0]">{solution}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="text-sm text-[#b4bcd0] flex items-center">
									<Calendar className="w-4 h-4 mr-1 opacity-60" />
									<span className="opacity-60">
										Completed:{" "}
										{new Date(
											selectedProject?.dateCompleted
										).toLocaleDateString()}
									</span>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-4">
										Related Projects
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										{getRelatedProjects().map((project) => (
											<button
												key={project.id}
												onClick={() => handleProjectSelect(project)}
												className="glass-card p-4 rounded-lg text-left transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
												aria-label={`View details for ${project.title}`}
											>
												<div className="flex items-center space-x-2 mb-2">
													<div
														className="w-6 h-6 rounded-full flex items-center justify-center"
														style={{
															backgroundColor: getCategoryColor(
																project.category
															),
															color: "#0a0f1c",
														}}
													>
														{project.primaryTechIcon}
													</div>
													<h4 className="font-medium text-sm">
														{project.title}
													</h4>
												</div>
												<p className="text-[#b4bcd0] text-xs line-clamp-2">
													{project.tagline}
												</p>
												<div className="flex items-center mt-2 text-[#00d4ff] text-xs">
													<span>View details</span>
													<ArrowRight className="w-3 h-3 ml-1" />
												</div>
											</button>
										))}
										{getRelatedProjects().length === 0 && (
											<div className="col-span-3 glass-card p-6 text-center">
												<p className="text-[#b4bcd0]">
													No related projects found
												</p>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
