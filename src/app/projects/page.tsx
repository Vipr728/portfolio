"use client";

import { Particles } from "@/components/magicui/particles";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { useTheme } from "next-themes";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsPage() {
	const { resolvedTheme } = useTheme();
	const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";
	return (
		<div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background">
			<Particles
				className="absolute inset-0"
				quantity={100}
				ease={80}
				size={0.4}
				staticity={50}
				color={particleColor}
			/>
			<header className="w-full p-4 flex justify-center items-center relative z-10">
				<nav className="flex gap-4 items-center">
					<Link href="/" className="link-style-1">Home</Link>
					<Link href="/contact" className="link-style-1">Contact</Link>
					<a href="https://www.linkedin.com/in/abhinav-bandaru-a768022a5/" target="_blank" className="link-style-1">LinkedIn</a>
					<a href="https://github.com/vipr728" target="_blank" className="link-style-1">GitHub</a>
				</nav>
				<div className="absolute right-4">
					<ModeToggle />
				</div>
			</header>
			<div className="flex flex-col justify-center items-center flex-grow relative z-10">
				<h1 className="font-extrabold text-7xl italic">My Projects</h1>
				<div className="p-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<ProjectCard url="https://gitgud.pythonanywhere.com" />
					<ProjectCard url="https://vibeteach.me" />
					<ProjectCard url="https://infinimunch.fly.dev" />
					<ProjectCard url="https://vipr728.github.io/FluidSimulation/FluidSim/" />
				</div>
			</div>
			<footer className="absolute bottom-0 left-0 w-full p-4 text-center relative z-10">
				<p className="text-sm text-muted-foreground">© 2025 Abhinav Bandaru. All rights reserved.</p>
			</footer>
		</div>
	);
}
