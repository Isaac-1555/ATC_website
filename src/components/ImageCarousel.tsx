import { useState, useEffect } from "react";

type ImageCarouselProps = {
	images: string[];
	label: string;
	meta?: string;
	aspect?: "wide" | "portrait" | "square";
	className?: string;
};

const aspectClasses = {
	wide: "aspect-[16/10]",
	portrait: "aspect-[4/5]",
	square: "aspect-square",
};

export function ImageCarousel({
	images,
	label,
	meta = "Image placeholder",
	aspect = "wide",
	className = "",
}: ImageCarouselProps) {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 4000);
		return () => clearInterval(timer);
	}, [images.length]);

	return (
		<div
			className={`group relative overflow-hidden rounded-[1.75rem] border border-foreground/15 bg-foreground/[0.045] ${aspectClasses[aspect]} ${className}`}
			aria-label={meta}
			role="img"
		>
			{images.map((src, index) => (
				<img
					key={index}
					src={src}
					alt=""
					className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ${
						index === current ? "opacity-100 group-hover:grayscale-0" : "opacity-0"
					}`}
					aria-hidden="true"
				/>
			))}
			<div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/0" />
			<div className="absolute left-5 top-5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/45 transition-opacity duration-300 group-hover:opacity-0">
				{meta}
			</div>
			<div className={`absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 transition-opacity duration-300 group-hover:opacity-0`}>
				<p className="max-w-[12rem] font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
					{label}
				</p>
				<span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_24px_rgba(218,98,77,0.75)]" />
			</div>
			<div className="absolute bottom-5 right-5 flex gap-1.5">
				{images.map((_, index) => (
					<span
						key={index}
						className={`h-1.5 rounded-full transition-all duration-300 ${
							index === current ? "w-6 bg-accent" : "w-1.5 bg-foreground/30"
						}`}
					/>
				))}
			</div>
		</div>
	);
}