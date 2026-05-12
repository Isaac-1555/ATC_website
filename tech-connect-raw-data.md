# Tech Connect Alberta - Landing Page Raw Data

## Site Overview
- **URL:** https://techconnect.amgfoundation.ca/
- **Title:** Tech Connect Alberta
- **Meta description:** "Connecting Alberta's tech community through events, networking, and collaboration opportunities."
- **OG description:** "Community. Purpose. People First."
- **Framework:** React SPA (minified JS bundle at /assets/index-BqoSYf2l.js)
- **Fonts:** League Spartan (700,800,900), Poppins (500,600,700 italic variants), DM Sans (500,600,700)
- **Analytics:** React GA4

## Organization Info

### Identity
- **Name:** Tech Connect Alberta
- **Parent:** AMG Foundation (Aspire. Motivate. Give.)
- **Legal:** Registered nonprofit organization in Alberta
- **Tagline:** "Community. Purpose. People First."

### Mission
"Building an inclusive, supportive, and collaborative tech ecosystem where individuals are empowered to learn, grow, and make a meaningful impact."

### Vision
"Purpose-driven innovation and community impact"

### Who They Are
- Member-driven community
- 5,000+ tech enthusiasts, professionals, and learners across Alberta
- United by passion for technology
- Mission: connect, share knowledge, drive innovation

### AMG Foundation Role
"Provides the legal and charitable framework that allows Tech Connect to run programs, events, and initiatives supporting entrepreneurs, volunteers, and under-resourced organizations."

### Impact Stats (from search)
- 9,081 LinkedIn followers
- 5,000+ community members
- Supported 80+ individuals in securing employment (since 2024)

### Key People
- **Founder:** Akshay Gulati (Cloud Engineer, community builder)
  - Founded Tech Connect Alberta and AMG
  - Leads Women Entrepreneurship Program
  - Programs: AI literacy workshops for youth, cybersecurity training for seniors, digital transformations for local businesses
  - Collaboration with Calgary Food Bank

## Main Sections & Content

### Navigation
- Events
- Newsletter
- Volunteer
- Community
- Join Us

### Hero Section
- Title: "Tech Connect Alberta"
- Subtitle/tagline: "Community. Purpose. People First."

### Core Features

#### 1. Events System
- Event listing with filters (Date, Location, Category, Speaker, Agenda)
- Event details: Date, Location, Category, Speaker, Agenda
- Event actions: "Register Now", "View Event", "Add to Calendar"
- Calendar subscription: "Subscribe to Calendar"
- Calendar export options: Google Calendar, Apple Calendar, Outlook Calendar
- Event categories and status: Upcoming events, Past events
- API endpoint: /api/events-ics, webcal://amgtech.community/api/events-ics
- Sync systems: Showpass, Airtable, JSON local storage

#### 2. Newsletter
- Label: "Newsletter"
- CTA: "Subscribe for Tech Connect updates, upcoming events, and community highlights"
- Email: techconnect@amgfoundation.ca

#### 3. Volunteer
- "Volunteer Registration"
- "Join Our Community"

#### 4. Community
- Platform Calgary mentioned as venue/partner
- LinkedIn: "Tech Connect Alberta | 9,081 followers"

### Programs

#### Women Entrepreneurs Program
- Free digital support for women to launch and grow businesses

#### Past Initiatives
- AI literacy workshops for youth
- Cybersecurity training for seniors
- Volunteer-powered digital transformations for local businesses

## UI Elements

### Buttons/Labels
- "Register Now" / "Register"
- "Join Now"
- "Join Our Community"
- "Subscribe"
- "View Event"
- "Add to Calendar"
- "Subscribe to Calendar"
- "Subscribe for Tech Connect updates, upcoming events, and community highlights"
- "Get Involved"
- "Learn More"

### Content Sections (inferred)
- About/Who We Are
- Events (Our Events)
- Newsletter
- Volunteer
- Community
- Join Us

### Loading/States
- "Loading..."
- "Syncing..."
- "404 Error: User attempted to access non-existent route:"
- Error messages for failed syncs

### Social Links
- LinkedIn page
- Linktree: linktr.ee/TechConnectAlberta

## Technical Notes

### API/Sync
- Showpass integration for event ticketing
- Airtable backend for event data
- Local JSON caching
- Gemini AI for text formatting (descriptions)
- Webcal subscription support

### Image Assets
- OG image: /og_image.png
- Event images stored at: pub-61a5c6e17ff14e068b109797b6abf2ef.r2.dev/events/[year]/[slug]/photo-001.webp

### CSS/UI
- Tailwind CSS classes observed (flex, text-*, bg-*, transitions)
- Radix UI components
- CSS custom properties for theming
- Toast notifications with --front-toast-height

## Color Scheme (inferred)
- Brand primary color
- Muted backgrounds
- Brand accent for emphasis

## Footer
- Tech Connect Alberta
- AMG Foundation
- Platform Calgary (venue partner)

---
*Document generated for redesign purposes - all content extracted from live site and associated sources*