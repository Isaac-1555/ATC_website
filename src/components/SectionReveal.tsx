import { type ReactNode, useEffect, useRef, useState } from "react";

type SectionRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: "div" | "section" | "article";
	id?: string;
};

export function SectionReveal({
	children,
	className = "",
	delay = 0,
	as: Component = "div",
	id,
}: SectionRevealProps) {
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reducedMotion) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	const sharedProps = {
		id,
		className: `reveal ${visible ? "reveal-visible" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
	};
	const setNode = (node: HTMLElement | null) => {
		ref.current = node;
	};

	if (Component === "section") {
		return (
			<section {...sharedProps} ref={setNode}>
				{children}
			</section>
		);
	}

	if (Component === "article") {
		return (
			<article {...sharedProps} ref={setNode}>
				{children}
			</article>
		);
	}

	return (
		<div {...sharedProps} ref={setNode}>
			{children}
		</div>
	);
}

