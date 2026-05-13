type ImagePlaceholderProps = {
	label: string;
	meta?: string;
	aspect?: "wide" | "portrait" | "square";
	className?: string;
	src?: string;
};

const aspectClasses = {
	wide: "aspect-[16/10]",
	portrait: "aspect-[4/5]",
	square: "aspect-square",
};

export function ImagePlaceholder({
	label,
	meta = "Image placeholder",
	aspect = "wide",
	className = "",
	src,
}: ImagePlaceholderProps) {
	return (
		<div
			className={`group relative overflow-hidden rounded-[1.75rem] border border-foreground/15 bg-foreground/[0.045] ${aspectClasses[aspect]} ${className}`}
			aria-label={meta}
			role="img"
		>
			{src ? (
				<>
					<img
						src={src}
						alt=""
						className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
						aria-hidden="true"
					/>
					<div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/0" />
				</>
			) : (
				<>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(218,98,77,0.28),transparent_28%),linear-gradient(135deg,rgba(247,255,247,0.1)_0,transparent_38%)] opacity-80" />
					<div className="placeholder-noise absolute inset-0 opacity-45 transition-transform duration-700 group-hover:scale-105" aria-hidden="true" />
					<div className="absolute inset-4 rounded-[1.25rem] border border-foreground/10" />
				</>
			)}
			<div className={`absolute left-5 top-5 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/45 transition-opacity duration-300 ${src ? "group-hover:opacity-0" : ""}`}>
				{meta}
			</div>
			<div className={`absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 transition-opacity duration-300 ${src ? "group-hover:opacity-0" : ""}`}>
				<p className="max-w-[12rem] font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
					{label}
				</p>
				<span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_24px_rgba(218,98,77,0.75)]" />
			</div>
		</div>
	);
}

