import { useEffect, useRef } from "react";

type PointerState = {
	x: number;
	y: number;
	active: boolean;
};

type Ripple = {
	x: number;
	y: number;
	start: number;
};

const PALETTE = {
	background: "#141314",
	accent: "#da624d",
	foreground: "#F7FFF7",
};

const letterGlyphs = ["T", "C", "@", "#", "+", "|", "/", "\\", "O", "o", "=", "A", "*"];
const symbolGlyphs = [" ", ".", ":", "-", "+", "*"];

export function AsciiHero() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false });
	const ripplesRef = useRef<Ripple[]>([]);
	const reducedMotionRef = useRef(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		reducedMotionRef.current = mediaQuery.matches;

		const updateMotionPreference = () => {
			reducedMotionRef.current = mediaQuery.matches;
		};

		mediaQuery.addEventListener("change", updateMotionPreference);
		return () => mediaQuery.removeEventListener("change", updateMotionPreference);
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		let animationFrame = 0;
		let width = 0;
		let height = 0;
		let devicePixelRatio = 1;
		let textMask: Uint8ClampedArray | null = null;
		let maskW = 0;
		let maskH = 0;

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			devicePixelRatio = window.devicePixelRatio || 1;
			width = rect.width;
			height = rect.height;
			canvas.width = Math.floor(width * devicePixelRatio);
			canvas.height = Math.floor(height * devicePixelRatio);
			context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

			maskW = canvas.width;
			maskH = canvas.height;
			const offscreen = document.createElement("canvas");
			offscreen.width = maskW;
			offscreen.height = maskH;
			const offCtx = offscreen.getContext("2d")!;
			offCtx.fillStyle = "#000";
			offCtx.fillRect(0, 0, maskW, maskH);
			offCtx.fillStyle = "#fff";
			const tcScale = window.innerWidth < 768 ? 1 : 0.4;
			const tcY = window.innerWidth < 768 ? maskH * 0.38 : maskH / 2;
			offCtx.font = `900 ${Math.round(maskW * tcScale)}px "Geist Mono", "IBM Plex Mono", "SF Mono", ui-monospace, monospace`;
			offCtx.textAlign = "center";
			offCtx.textBaseline = "middle";
			offCtx.fillText("TC", maskW / 2, tcY);
			textMask = offCtx.getImageData(0, 0, maskW, maskH).data;
		};

		const draw = (time: number) => {
			context.clearRect(0, 0, width, height);
			context.fillStyle = PALETTE.background;
			context.fillRect(0, 0, width, height);

			const cell = 12;
			const lineHeight = cell * 1.15;

			context.font = `${cell}px "Geist Mono", "IBM Plex Mono", ui-monospace, monospace`;
			context.textBaseline = "middle";
			context.textAlign = "center";

			const now = performance.now();
			ripplesRef.current = ripplesRef.current.filter((ripple) => now - ripple.start < 900);

			for (let y = -cell; y < height + cell; y += lineHeight) {
				for (let x = -cell; x < width + cell; x += cell) {
					const mx = Math.min(Math.floor(x * devicePixelRatio), maskW - 1);
					const my = Math.min(Math.floor(y * devicePixelRatio), maskH - 1);
					const textBrightness = textMask ? textMask[(my * maskW + mx) * 4] / 255 : 0;
					const insideTC = textBrightness > 0.12;

					let strength = textBrightness > 0.1 ? 0.15 + textBrightness * 0.25 : 0;

					const noise = (Math.sin(x * 0.04 + y * 0.02 + time * 0.0008) + 1) * 0.5;
					strength += noise > 0.97 ? 0.04 : 0;

					let accent = 0;

					const pointer = pointerRef.current;
					if (pointer.active) {
						const d = Math.hypot(x - pointer.x, y - pointer.y);
						const influence = Math.max(0, 1 - d / 180);
						strength += influence * 0.58;
						if (influence > 0 && insideTC) {
							accent = Math.max(accent, influence * 0.9);
						}
					}

					for (const ripple of ripplesRef.current) {
						const age = now - ripple.start;
						const r = age * 0.36;
						const d = Math.hypot(x - ripple.x, y - ripple.y);
						const w = Math.max(0, 1 - Math.abs(d - r) / 34);
						accent = Math.max(accent, w);
						strength += w * 0.5;
					}

					if (strength < 0.18) continue;
					const alpha = Math.min(0.72, strength * 0.5);
					context.fillStyle =
						accent > 0.15
							? `rgba(218, 98, 77, ${Math.min(0.92, 0.3 + strength * 0.4)})`
							: `rgba(247, 255, 247, ${alpha})`;
					const set = insideTC ? letterGlyphs : symbolGlyphs;
					const index = Math.abs(Math.floor(x * 0.12 + y * 0.14 + time * 0.002 + strength * 6)) % set.length;
					context.fillText(set[index], x, y);
				}
			}

			const gradient = context.createRadialGradient(width * 0.5, height * 0.48, 0, width * 0.5, height * 0.48, width * 0.72);
			gradient.addColorStop(0, "rgba(20, 19, 20, 0.0)");
			gradient.addColorStop(0.4, "rgba(20, 19, 20, 0.18)");
			gradient.addColorStop(1, "rgba(20, 19, 20, 0.7)");
			context.fillStyle = gradient;
			context.fillRect(0, 0, width, height);

			animationFrame = requestAnimationFrame(draw);
		};

		resize();
		draw(0);
		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationFrame);
		};
	}, []);

	const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		pointerRef.current = {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
			active: true,
		};
	};

	const handlePointerLeave = () => {
		pointerRef.current.active = false;
	};

	const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		ripplesRef.current.push({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
			start: performance.now(),
		});
	};

	return (
		<section
			className="relative flex min-h-screen overflow-hidden bg-background text-foreground"
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			onPointerDown={handlePointerDown}
		>
			<canvas
				ref={canvasRef}
				aria-hidden="true"
				className="absolute inset-0 h-full w-full cursor-crosshair"
			/>
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,19,20,0.18)_0%,rgba(20,19,20,0.22)_45%,#141314_100%)]" />
			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
				<p className="font-mono text-xs uppercase tracking-[0.34em] text-accent sm:text-sm">
					01 / Tech Connect Alberta
				</p>
				<h1 className="mt-6 max-w-5xl text-[clamp(3.35rem,9.2vw,9.75rem)] font-extrabold leading-[0.92] tracking-[-0.065em] sm:leading-[0.9]">
					Community.
					<br />
					Purpose.
					<br />
					People First.
				</h1>
				<div className="mt-8 grid gap-6 border-t border-foreground/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
					<p className="max-w-2xl text-lg leading-7 text-foreground/75 sm:text-xl">
						Building an inclusive, supportive, and collaborative tech ecosystem across Alberta.
					</p>
					<div className="flex flex-wrap gap-3">
						<a
							href="#join-us"
							className="pointer-events-auto rounded-full bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition hover:bg-[#ef765f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
						>
							Join Our Community
						</a>
						<a
							href="#events"
							className="pointer-events-auto rounded-full border border-foreground/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
						>
							View Events
						</a>
					</div>
				</div>
			</div>
			<p className="sr-only">
				The background features a large "TC" watermark representing Tech Connect Alberta, overlaid with an interactive ASCII particle effect.
			</p>
		</section>
	);
}
