import { useEffect, useState } from "react";

const navItems = ["Events", "Newsletter", "Volunteer", "Community", "Join Us"];

export function SiteNav() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed left-0 top-0 z-30 w-full px-4 py-4 transition-all duration-300 sm:px-6 lg:px-10 ${
				scrolled ? "border-b border-foreground/10 bg-background/60 backdrop-blur-lg" : ""
			}`}
		>
			<nav
				aria-label="Primary navigation"
				className={`mx-auto flex max-w-7xl items-center justify-between border-b pb-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] transition-all duration-300 ${
					scrolled
						? "border-foreground/5 text-foreground/80"
						: "border-foreground/15 text-foreground/70"
				}`}
			>
				<a href="/" className="text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
					TCA
				</a>
				<ul className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<li key={item}>
							<a
								href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
								className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
							>
								{item}
							</a>
						</li>
					))}
				</ul>
				<a
					href="#join-us"
					className="rounded-full border border-foreground/20 px-3 py-2 text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
				>
					Join
				</a>
			</nav>
		</header>
	);
}

