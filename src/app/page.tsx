
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";

export default function Home() {
	return (
		<div className="h-dvh w-dvw flex flex-col bg-black text-white relative overflow-hidden">
			{/* Particles background */}
			<Particles
				className="absolute inset-0"
				quantity={100}
				ease={80}
				size={0.4}
				staticity={50}
				color="#ffffff"
			/>
			
			<header className="w-full p-4 flex justify-center items-center relative z-10">
				<nav className="flex gap-4 underline">
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
					<a href="https://www.linkedin.com/in/abhinav-bandaru-a768022a5/" target="_blank">LinkedIn</a>
					<a href="https://github.com/vipr728" target="_blank">GitHub</a>
				</nav>
			</header>
			<div className="flex flex-col justify-center items-center flex-grow relative z-10">
				<div className="flex flex-col justify-center items-start p-4">
					<h1 className="text-2xl italic mb-2">Hi, im</h1>
					<h1 className="font-extrabold text-9xl italic opacity-0 translate-x-[-100%] animate-slideIn">abhi</h1>
				</div>
			</div>
			<footer className="absolute bottom-0 left-0 w-full p-4 text-center relative z-10">
				<p className="text-sm text-gray-500">© 2025 Abhinav Bandaru. All rights reserved.</p>
			</footer>
		</div>
	);
}
