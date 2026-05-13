import { useEffect, useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImageCarousel } from "./ImageCarousel";
import { SectionReveal } from "./SectionReveal";

const stats = [
	{ value: "5,000+", label: "Community members" },
	{ value: "9,000+", label: "LinkedIn followers" },
	{ value: "80+", label: "Employment outcomes supported" },
	{ value: "Alberta", label: "Province-wide tech network" },
];

const events = [
	{
		date: "Upcoming",
		title: "Community tech meetup",
		meta: "Calgary / Networking / Speakers",
		action: "Register",
	},
	{
		date: "Monthly",
		title: "Founder and learner roundtable",
		meta: "Alberta / Community / Agenda",
		action: "View Event",
	},
	{
		date: "Calendar",
		title: "Subscribe to Tech Connect events",
		meta: "Google Calendar / Apple / Outlook",
		action: "Add to Calendar",
	},
];

const programs = [
	{
		title: "Women Entrepreneurs Program",
		copy: "Free digital support for women launching and growing businesses.",
		image: "/women_e.jpeg",
	},
	{
		title: "AI literacy workshops",
		copy: "Practical learning experiences for youth and community members.",
		image: "/AI_work.jpeg",
	},
	{
		title: "Cybersecurity training",
		copy: "Accessible digital safety education for seniors and under-resourced groups.",
		image: "/cybersecurity.jpeg",
	},
	{
		title: "Digital transformations",
		copy: "Volunteer-powered support for local businesses and nonprofit initiatives.",
		image: "/digital_transform.jpeg",
	},
];

function SectionLabel({ children }: { children: string }) {
	return <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">{children}</p>;
}

function SectionHeading({ children, className = "" }: { children: string; className?: string }) {
	return (
		<h2 className={`mt-5 text-[clamp(2.75rem,6.4vw,6.75rem)] font-extrabold leading-[0.92] tracking-[-0.065em] sm:leading-[0.9] ${className}`}>
			{children}
		</h2>
	);
}

export function StatsSection() {
	return (
		<SectionReveal as="section" id="community" className="border-y border-foreground/10 bg-background px-4 py-14 sm:px-6 lg:px-10">
			<div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground/10 md:grid-cols-4">
				{stats.map((stat, index) => (
					<div key={stat.label} className="bg-background p-6 sm:p-8">
						<p className="font-mono text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-none tracking-[-0.08em] text-accent">
							{stat.value}
						</p>
						<p className="mt-4 max-w-44 font-mono text-xs uppercase leading-5 tracking-[0.2em] text-foreground/55">
							{stat.label}
						</p>
						<p className="mt-10 font-mono text-xs text-foreground/25">0{index + 1}</p>
					</div>
				))}
			</div>
		</SectionReveal>
	);
}

export function MissionSection() {
	return (
		<section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
				<SectionReveal className="lg:sticky lg:top-28 lg:h-fit">
					<SectionLabel>02 / Mission</SectionLabel>
					<p className="mt-6 max-w-sm text-foreground/55">
						A large statement section that reveals line-by-line as the page moves.
					</p>
				</SectionReveal>
				<div className="space-y-5">
					{["We connect Alberta’s", "tech community through", "events, knowledge sharing,", "volunteering, and", "purpose-driven impact."].map((line, index) => (
						<SectionReveal key={line} delay={index * 90}>
							<p className="text-[clamp(2.35rem,5.4vw,6rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-foreground sm:leading-[0.92]">
								{line}
							</p>
						</SectionReveal>
					))}
				</div>
			</div>
		</section>
	);
}

export function EventsSection() {
	return (
		<section id="events" className="px-4 py-24 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-7xl">
				<SectionReveal>
					<SectionLabel>03 / Events</SectionLabel>
					<SectionHeading>Live event board.</SectionHeading>
				</SectionReveal>
				<div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
					<SectionReveal>
						<ImageCarousel
							images={["/i_1.jpeg", "/i_2.jpeg", "/i_3.jpeg"]}
							label="Upcoming event visual"
							meta="Event image placeholder"
							aspect="wide"
							className="lg:aspect-[4/3]"
						/>
					</SectionReveal>
					<div className="space-y-3">
						{events.map((event, index) => (
							<SectionReveal key={event.title} delay={index * 80}>
								<a
									href="#newsletter"
									className="group grid gap-6 rounded-[1.75rem] border border-foreground/15 bg-foreground/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/70 md:grid-cols-[9rem_1fr_auto]"
								>
									<p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">{event.date}</p>
									<div>
										<h3 className="text-2xl font-bold tracking-[-0.04em] text-foreground sm:text-3xl">{event.title}</h3>
										<p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">{event.meta}</p>
									</div>
									<p className="self-end font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 transition-colors group-hover:text-accent">
										{event.action}
									</p>
								</a>
							</SectionReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function ProgramsSection() {
	return (
		<section className="px-4 py-24 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-7xl">
				<SectionReveal>
					<SectionLabel>04 / Programs</SectionLabel>
					<SectionHeading>Purpose in motion.</SectionHeading>
				</SectionReveal>
				<div className="mt-12 grid gap-4 md:grid-cols-2">
					{programs.map((program, index) => (
						<SectionReveal key={program.title} delay={index * 70}>
							<article className="group overflow-hidden rounded-[1.75rem] border border-foreground/15 bg-foreground/[0.045] transition duration-300 hover:border-accent/60">
								<ImagePlaceholder label={program.title} meta="Program image placeholder" aspect="wide" className="rounded-none border-0" src={program.image} />
								<div className="p-6 sm:p-8">
									<p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">0{index + 1}</p>
									<h3 className="mt-5 text-3xl font-bold leading-none tracking-[-0.05em]">{program.title}</h3>
									<p className="mt-5 max-w-xl text-foreground/62">{program.copy}</p>
								</div>
							</article>
						</SectionReveal>
					))}
				</div>
			</div>
		</section>
	);
}

export function NewsletterSection() {
	return (
		<SectionReveal as="section" id="newsletter" className="px-4 py-24 sm:px-6 lg:px-10">
			<div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-foreground/15 bg-foreground/[0.045] p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
				<div>
					<SectionLabel>05 / Newsletter</SectionLabel>
					<h2 className="mt-6 text-[clamp(2.75rem,6.4vw,6.75rem)] font-extrabold leading-[0.92] tracking-[-0.065em] sm:leading-[0.9]">
						Stay in the loop.
					</h2>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/65">
						Subscribe for Tech Connect updates, upcoming events, and community highlights.
					</p>
				</div>
				<form className="self-end" aria-label="Newsletter signup">
					<label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/55">
						Email address
					</label>
					<div className="mt-4 flex flex-col gap-3 sm:flex-row">
						<input
							id="email"
							type="email"
							placeholder="you@example.com"
							className="min-h-14 flex-1 rounded-full border border-foreground/15 bg-background px-5 text-foreground outline-none transition placeholder:text-foreground/30 focus:border-accent"
						/>
						<button
							type="submit"
							className="min-h-14 rounded-full bg-accent px-6 font-mono text-xs uppercase tracking-[0.18em] text-background transition hover:bg-[#ef765f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
						>
							Subscribe
						</button>
					</div>
					<p className="mt-4 font-mono text-xs text-foreground/40">Or contact techconnect@amgfoundation.ca</p>
				</form>
			</div>
		</SectionReveal>
	);
}

export function VolunteerSection() {
	return (
		<section id="volunteer" className="px-4 py-24 sm:px-6 lg:px-10">
			<SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-accent/40 bg-accent text-background">
				<div className="relative p-6 sm:p-10 lg:p-14">
					<div className="cta-ascii absolute inset-0 opacity-20" aria-hidden="true" />
					<div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<p className="font-mono text-xs uppercase tracking-[0.32em]">06 / Volunteer</p>
							<h2 className="mt-6 max-w-4xl text-[clamp(2.75rem,6.4vw,6.75rem)] font-extrabold leading-[0.92] tracking-[-0.065em] sm:leading-[0.9]">
								Build the network with us.
							</h2>
						</div>
						<div className="flex flex-wrap gap-3">
							<a
								href="#join-us"
								className="rounded-full bg-background px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
							>
								Volunteer Registration
							</a>
							<a
								href="#community"
								className="rounded-full border border-background/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-background hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
							>
								Join Community
							</a>
						</div>
					</div>
				</div>
			</SectionReveal>
		</section>
	);
}

const partners = [
	{ name: "AMG Foundation", logo: "/logos/AMG.png", url: "https://www.amgfoundation.ca/" },
	{ name: "Gateway", logo: "/logos/Gateway.png", url: "https://gatewayconnects.ca/" },
	{ name: "InceptionU", logo: "/logos/InceptionU.png", url: "https://inceptionu.com/" },
	{ name: "Platform Calgary", logo: "/logos/Platform_Calgary.png", url: "https://www.platformcalgary.com/" },
];

const testimonials = [
	{
		quote: "I owe a significant part of my success and growth to Tech Connect, and I can't express my gratitude enough. Here's to the continued growth and success of this wonderful community that has made such a positive impact on my life.",
		name: "Sathish",
		role: "Data Scientist at WestJet",
	},
	{
		quote: "From resume building to interview prep, the support I received was exceptional. Highly recommend!",
		name: "Smith Patel",
		role: "Software Developer at Longview Systems",
	},
	{
		quote: "I have secured job offer from City of Calgary. I appreciate the effort from members and admin. Great help with interview guidance. Thank you.",
		name: "Sunny",
		role: "System Administrator",
	},
	{
		quote: "Group advice on interview and resume helped me to land my role in Canada. This is a great group, looking forward to give back to community.",
		name: "Bharti",
		role: "Data Engineer at Telus",
	},
	{
		quote: "After nearly a year of relentless job applications, interviews, and moments of self-doubt, I finally landed a role as a Junior Full Stack Developer. The journey wasn't easy — it tested my patience, resilience, and determination at every step. And in this journey, Aki and Tech Connect played a huge role.",
		name: "Shivam Gupta",
		role: "Junior Full Stack Developer",
	},
	{
		quote: "I wanted to extend my heartfelt thanks to Aki and the Tech Connect Alberta group for your instrumental support during my job search. Your guidance, recommendations, and trust in me were invaluable, and I'm deeply grateful for the role you played in helping me secure new role.",
		name: "Ravi",
		role: "Program Manager at Birlasoft",
	},
	{
		quote: "A heartfelt thank you to Tech Connect — your community has been a guiding light throughout my journey. Special shoutout to Aki for always showing up with encouragement, guidance, and genuine support.",
		name: "Raksha Chaudhary",
		role: "Pricing and Campaign Analyst at Servus Credit Union",
	},
	{
		quote: "I want to extend my heartfelt thanks to the Tech Connect Alberta community. This incredible group played a significant role in my job search journey. From referrals and resume building to interview preparation, the support I received was truly invaluable.",
		name: "Anand Khimsurya",
		role: "Network Consultant at Long View Systems",
	},
	{
		quote: "I am beyond excited to share that I have taken a significant step forward in my career by transitioning into a Data Modeler role! A huge shout out to Aki for believing in me and providing a valuable reference that played a crucial role in securing this opportunity.",
		name: "Rohan Kapoor",
		role: "Data Modeler",
	},
];

export function PartnersSection() {
	return (
		<section id="partners" className="px-4 py-24 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-7xl">
				<SectionReveal>
					<SectionLabel>07 / Partners</SectionLabel>
					<SectionHeading>Strategic Partnerships.</SectionHeading>
				</SectionReveal>
				<SectionReveal delay={60}>
					<p className="mt-8 max-w-3xl text-lg leading-8 text-foreground/65">
						We collaborate with industry leaders to create opportunities, drive innovation, and build a stronger tech ecosystem together.
					</p>
					<p className="mt-4 max-w-3xl text-foreground/50">
						Tech Connect operates under the umbrella of AMG Foundation (Aspire. Motivate. Give.) — a registered nonprofit organization in Alberta. AMG Foundation provides the legal and charitable framework that allows Tech Connect to run programs, events, and initiatives supporting entrepreneurs, volunteers, and under-resourced organizations.
					</p>
				</SectionReveal>

				<SectionReveal delay={100}>
					<div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
						<span className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/50">Partners We Worked With</span>
						
						{partners.map((partner) => (
							<a
								key={partner.name}
								href={partner.url}
								target="_blank"
								rel="noopener noreferrer"
								className="font-sans text-xl md:text-2xl font-black uppercase tracking-wider text-foreground/50 transition duration-300 hover:text-foreground"
							>
								{partner.name}
							</a>
						))}

						<span className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/50">+ Many More</span>
					</div>
				</SectionReveal>

				<SectionReveal delay={120}>
					<div className="mt-16 rounded-[2rem] border border-foreground/15 bg-foreground/[0.045] p-8 text-center sm:p-12">
						<h3 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Become a Partner</h3>
						<p className="mx-auto mt-4 max-w-xl text-foreground/62">
							Interested in partnering with us? We'd love to explore how we can collaborate to create meaningful opportunities for the tech community.
						</p>
						<p className="mt-6 font-mono text-xs uppercase tracking-[0.24em] text-foreground/50">Email us at:</p>
						<a
							href="mailto:techconnect@amgfoundation.ca"
							className="mt-2 inline-block font-mono text-sm text-accent underline underline-offset-4 transition hover:text-[#ef765f]"
						>
							techconnect@amgfoundation.ca
						</a>
					</div>
				</SectionReveal>
			</div>
		</section>
	);
}

const chunked = (arr: typeof testimonials, size: number) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

export function TestimonialsSection() {
	const [slide, setSlide] = useState(0);
	const groups = chunked(testimonials, 3);

	useEffect(() => {
		const timer = setInterval(() => {
			setSlide(prev => (prev + 1) % groups.length);
		}, 4000);
		return () => clearInterval(timer);
	}, [groups.length]);

	return (
		<section className="px-4 py-24 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-7xl">
				<SectionReveal>
					<SectionLabel>08 / Impact</SectionLabel>
					<SectionHeading>Real Stories, Real Impact.</SectionHeading>
				</SectionReveal>
				<SectionReveal delay={60}>
					<p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/65">
						Every success story in our community reinforces our belief in the power of collective growth and mutual support.
					</p>
				</SectionReveal>

				<div className="relative mt-12">
					{groups.map((group, gi) => (
						<div
							key={gi}
							className={`grid gap-6 md:grid-cols-3 transition-all duration-700 ease-in-out ${
								gi === slide ? "opacity-100 visible relative" : "opacity-0 invisible absolute inset-0"
							}`}
						>
							{group.map(t => (
								<blockquote key={t.name} className="flex h-[320px] flex-col rounded-[1.75rem] border border-foreground/15 bg-foreground/[0.045] p-6 sm:p-8">
									<p className="flex-1 text-foreground/70 leading-relaxed">"{t.quote}"</p>
									<div className="mt-6 shrink-0 border-t border-foreground/10 pt-4">
										<p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">{t.name}</p>
										<p className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">{t.role}</p>
									</div>
								</blockquote>
							))}
						</div>
					))}
				</div>

				<div className="mt-10 flex justify-center gap-2">
					{groups.map((_, i) => (
						<button
							key={i}
							onClick={() => setSlide(i)}
							className={`h-2 w-2 rounded-full transition-all duration-300 ${
								slide === i ? "w-6 bg-accent" : "bg-foreground/20 hover:bg-foreground/40"
							}`}
							aria-label={`Go to testimonial group ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export function FinalCTASection() {
	return (
		<section className="px-4 sm:px-6 lg:px-10">
			<SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-accent/40 bg-accent text-background">
				<div className="relative p-8 text-center sm:p-12 lg:p-16">
					<div className="cta-ascii absolute inset-0 opacity-20" aria-hidden="true" />
					<div className="relative z-10">
						<h2 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.065em]">
							Ready to Transform Your Tech Career?
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-background/75">
							Join thousands of professionals who have accelerated their careers through our supportive community.
						</p>
						<a
							href="#join-us"
							className="mt-8 inline-block rounded-full bg-background px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
						>
							Join Our Community
						</a>
					</div>
				</div>
			</SectionReveal>
		</section>
	);
}

export function SiteFooter() {
	return (
		<footer className="mt-24 border-t border-foreground/10 px-4 py-16 sm:px-6 lg:px-10">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
					<div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
						<div>
							<h3 className="font-mono text-xs uppercase tracking-[0.32em] text-accent">Services</h3>
							<ul className="mt-6 space-y-3">
								<li><a href="#" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Tech Consulting</a></li>
								<li><a href="#" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Find Talent</a></li>
								<li><a href="#" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Join Talent Pool</a></li>
							</ul>
						</div>
						<div>
							<h3 className="font-mono text-xs uppercase tracking-[0.32em] text-accent">Community</h3>
							<ul className="mt-6 space-y-3">
								<li><a href="#events" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Our Events</a></li>
								<li><a href="#" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Our Team</a></li>
								<li><a href="#newsletter" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Newsletter</a></li>
							</ul>
						</div>
						<div>
							<h3 className="font-mono text-xs uppercase tracking-[0.32em] text-accent">Connect</h3>
							<ul className="mt-6 space-y-3">
								<li><a href="#join-us" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Join Us</a></li>
								<li><a href="#volunteer" className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition hover:text-accent">Volunteer</a></li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col items-start gap-6 lg:items-end">
						<div className="flex gap-3">
							<a
								href="https://www.instagram.com/techconnectalberta"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/55 transition hover:border-accent hover:text-accent"
							>
								<InstagramIcon />
							</a>
							<a
								href="https://www.linkedin.com/company/tech-connectab"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/55 transition hover:border-accent hover:text-accent"
							>
								<LinkedInIcon />
							</a>
							<a
								href="https://discord.gg/55UZDP7MNv"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Discord"
								className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/55 transition hover:border-accent hover:text-accent"
							>
								<DiscordIcon />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-foreground/10 pt-8 text-center">
					<p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/40">
						© 2026 Tech Connect Alberta | Powered by{" "}
						<a href="https://amgfoundation.ca" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 transition hover:text-[#ef765f]">
							AMG Foundation
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

function InstagramIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

function DiscordIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
			<path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
			<path d="M15.5 6.5c2.5.5 4.5 2 4.5 2s2-1 4-1c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1-2 0-4-1-4-1s-2 2-5.5 2-5.5-2-5.5-2-2 1-4 1c-.5 0-1-.5-1-1v-8c0-.5.5-1 1-1 2 0 4 1 4 1s2-1.5 4.5-2" />
			<path d="M10 10.5c-1 0-2 .5-2 .5s1 .5 2 .5 2-.5 2-.5-1-.5-2-.5zm4 0c-1 0-2 .5-2 .5s1 .5 2 .5 2-.5 2-.5-1-.5-2-.5z" />
		</svg>
	);
}

export function PartnerFooter() {
	return (
		<>
			<PartnersSection />
			<TestimonialsSection />
			<FinalCTASection />
			<SiteFooter />
		</>
	);
}

