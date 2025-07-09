
export default function Home() {
	return (
		<div className="  h-dvh w-dvw flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-start p-4">
				<h1 className="text-2xl italic mb-2">Hi, im</h1>
				<h1 className="font-extrabold text-9xl italic opacity-0 translate-x-[-100%] animate-slideIn">abhi</h1>
			</div>
			<footer className="absolute bottom-0 left-0 w-full p-4 text-center">
				<p className="text-sm text-gray-500">© 2025 Abhinav Bandaru. All rights reserved.</p>
			</footer>
		</div>
	);
}
