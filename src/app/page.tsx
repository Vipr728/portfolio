
export default function Home() {
	return (
		<div className="h-dvh w-dvw flex flex-col bg-black text-white">
			<header className="w-full p-4 flex justify-center items-center">
				<nav className="flex gap-4 underline">
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
					<a href="https://www.linkedin.com/in/abhinav-bandaru-a768022a5/" target="_blank">LinkedIn</a>
					<a href="https://github.com/vipr728" target="_blank">GitHub</a>
				</nav>
			</header>
			<div className="flex flex-col justify-center items-center flex-grow">
				<div className="flex flex-col justify-center items-start p-4">
					<h1 className="text-2xl italic mb-2">Hi, im</h1>
					<h1 className="font-extrabold text-9xl italic opacity-0 translate-x-[-100%] animate-slideIn">abhi</h1>
				</div>
			</div>
			<footer className="absolute bottom-0 left-0 w-full p-4 text-center">
				<p className="text-sm text-gray-500">© 2025 Abhinav Bandaru. All rights reserved.</p>
			</footer>
		</div>
	);
}
