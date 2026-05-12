import { AsciiHero } from "./components/AsciiHero";
import {
	EventsSection,
	MissionSection,
	NewsletterSection,
	PartnerFooter,
	ProgramsSection,
	StatsSection,
	VolunteerSection,
} from "./components/LandingSections";
import { SiteNav } from "./components/SiteNav";

export default function App() {
	return (
		<main className="bg-background text-foreground">
			<SiteNav />
			<AsciiHero />
			<StatsSection />
			<MissionSection />
			<EventsSection />
			<ProgramsSection />
			<NewsletterSection />
			<VolunteerSection />
			<PartnerFooter />
		</main>
	);
}

