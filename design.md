# Tech Connect Alberta Landing Page Design

## Purpose
Create a dark, motion-led landing page for Tech Connect Alberta inspired by Good Fella’s craft, interaction density, large typography, and ASCII/WebGL aesthetic. The page should feel like a living community network: technical, warm, high-energy, and people-first.

This is not a content clone. Use the reference for motion language, layout confidence, ASCII treatment, and interaction quality while keeping all messaging, structure, and calls to action specific to Tech Connect Alberta.

## Source context
- Local content source: `tech-connect-raw-data.md`
- Reference site: `https://good-fella.com/`
- Target identity: Tech Connect Alberta, a nonprofit community under AMG Foundation
- Core message: “Community. Purpose. People First.”
- Primary audience: Alberta tech professionals, learners, founders, volunteers, partners, and event attendees

## Visual direction
The interface should be sparse, high-contrast, and cinematic. Use large typographic blocks, grid-based content sections, motion-triggered reveals, and interactive ASCII texture rather than decorative illustration.

The page should feel like:
- A community operating system
- A tech event wall in motion
- A nonprofit landing page with agency-level interaction quality
- Editorial, direct, and confident

Avoid:
- Generic startup gradients
- Stock-photo-heavy layouts
- Overly playful illustrations
- Copying Good Fella brand language or content

## Color system
Use the requested palette as the primary design system.

- Background: `#141314`
- Accent: `#da624d`
- Text: `#F7FFF7`
- Muted text: `rgba(247, 255, 247, 0.62)`
- Subtle text: `rgba(247, 255, 247, 0.38)`
- Hairline borders: `rgba(247, 255, 247, 0.14)`
- Soft panels: `rgba(247, 255, 247, 0.045)`
- Accent hover: `#ef765f`
- Accent dark: `#9f3f31`

Usage:
- Keep `#141314` dominant across the site.
- Use `#F7FFF7` for primary copy and section labels.
- Use `#da624d` for active states, CTAs, selected ASCII characters, hover trails, numeric stats, and section markers.
- Avoid large flat accent blocks unless used as a deliberate visual interruption.

## Typography
Use a strong grotesk/sans typeface for headings and a mono typeface for technical labels, metadata, event details, ASCII, and small UI.

Recommended pairing:
- Display/sans: Aktiv Grotesk, Inter, Satoshi, Neue Haas Grotesk, or system sans fallback
- Mono: Geist Mono, IBM Plex Mono, JetBrains Mono, or ui-monospace fallback

Type behavior:
- Hero headline should be oversized, tight, and responsive.
- Section headings should feel editorial, not marketing-template-like.
- Labels should use mono, uppercase or small caps, with generous letter spacing.
- Body copy should stay readable and calm, especially against animated backgrounds.

Suggested scale:
- Hero title: `clamp(4rem, 13vw, 13rem)`
- Section title: `clamp(3rem, 8vw, 8rem)`
- Large statement: `clamp(2rem, 5vw, 5.5rem)`
- Body: `clamp(1rem, 1.2vw, 1.25rem)`
- Meta/label: `0.75rem` to `0.875rem`

## Layout principles
- Use a 12-column desktop grid with wide gutters.
- Keep most sections full-bleed with inner content constrained by consistent page margins.
- Prefer vertical rhythm over boxed modules.
- Let hero, mission, stats, and CTA sections breathe.
- Use thin borders and subtle panels rather than heavy cards.
- Use sticky or pinned moments sparingly for high-impact sections.

Suggested page padding:
- Mobile: `1rem`
- Tablet: `1.5rem`
- Desktop: `2rem` to `3rem`

## Page structure

### 1. Navigation
Navigation should be minimal, fixed or sticky, and transparent over the hero.

Items:
- Events
- Newsletter
- Volunteer
- Community
- Join Us

Behavior:
- Use mono labels.
- Add subtle hover states with accent underlines or character shifts.
- On scroll, navigation can compress into a thin dark bar with a hairline border.
- Mobile menu should be simple and fast, not a complex animated overlay unless the app already supports it.

### 2. Hero
The hero is the defining moment of the page.

Content:
- Eyebrow: `Tech Connect Alberta`
- Main headline: `Community. Purpose. People First.`
- Supporting copy: “Building an inclusive, supportive, and collaborative tech ecosystem across Alberta.”
- Primary CTA: `Join Our Community`
- Secondary CTA: `View Events`

Hero background:
- Move the Good Fella-inspired footer ASCII hands concept into the hero.
- The ASCII hands should span the full viewport width and height.
- Treat the hands as a background layer, not a footer decoration.
- Foreground copy must remain readable at all breakpoints.

Composition:
- ASCII hands sit behind the headline and can exceed viewport bounds.
- The hands should feel monumental, like a network reaching across the screen.
- Use the accent color for active characters and the text color for inactive characters at low opacity.
- Add a dark overlay or gradient if needed for legibility.

### 3. Community proof / stats
Purpose: quickly show the scale and credibility of Tech Connect Alberta.

Possible stats:
- `5,000+` community members
- `9,000+` LinkedIn followers
- `80+` individuals supported in securing employment
- `Alberta-wide` tech community

Design:
- Large mono numbers.
- Thin dividers.
- Scroll-triggered count-up or reveal.
- Accent color only on numbers or active markers.

### 4. Mission statement
Use a large editorial statement section.

Primary message:
“We connect Alberta’s tech community through events, knowledge sharing, volunteering, and purpose-driven innovation.”

Behavior:
- Text reveals line by line on scroll.
- Optional pinned section while the statement completes.
- Keywords such as `connect`, `community`, `purpose`, and `impact` can briefly shift to accent.

### 5. Events
This section should feel like a live event board.

Content:
- Upcoming events
- Past events
- Date
- Location
- Category
- Speaker
- Agenda
- Register / View Event / Add to Calendar

Design:
- Use stacked event rows or cards with strong metadata.
- Keep cards dark with subtle borders.
- Accent only the active row, date, or CTA.
- Include a calendar subscription CTA.

Interactions:
- Event rows lift or invert subtly on hover.
- Metadata can slide in or fade up.
- On scroll, cards can stagger into view.
- If images are unavailable, use abstract placeholder panels with ASCII/noise/date patterns.

### 6. Programs
Highlight initiatives without making the page feel like a brochure.

Programs:
- Women Entrepreneurs Program
- AI literacy workshops for youth
- Cybersecurity training for seniors
- Volunteer-powered digital transformations for local businesses

Design:
- Use a split layout: large program title on one side, details on the other.
- Add image placeholders where real photos may be added later.
- Use scroll-triggered card transitions or horizontal stepping on desktop.

### 7. Newsletter
Purpose: convert visitors who are not ready to attend or volunteer.

Content:
- “Subscribe for Tech Connect updates, upcoming events, and community highlights.”
- Email reference: `techconnect@amgfoundation.ca`

Design:
- Simple dark form block.
- Accent submit button.
- Mono helper text.
- Keep the form accessible and direct.

### 8. Volunteer / community CTA
Purpose: invite people to participate.

Content:
- `Volunteer Registration`
- `Join Our Community`
- `Get Involved`

Design:
- Large call-to-action panel.
- Use animated ASCII fragments or pointer-reactive particles as background texture.
- Keep CTAs obvious and keyboard-focusable.

### 9. Partners / foundation context
Mention the AMG Foundation relationship and partner context without overwhelming the page.

Content:
- AMG Foundation provides the legal and charitable framework.
- Platform Calgary may be referenced as a venue or partner if appropriate.

Design:
- Use a compact, credibility-focused section.
- Avoid making this visually heavier than events or community CTAs.

### 10. Footer
Because the ASCII hands move to the hero, the footer should be restrained.

Content:
- Tech Connect Alberta
- AMG Foundation
- Newsletter / Community links
- Social link placeholders

Design:
- Large wordmark or text lockup.
- Thin top border.
- Mono contact and link details.
- Optional small ASCII echo, but not another large hands treatment.

## Interactive ASCII hands hero

### Concept
The hero background is an interactive ASCII composition of hands reaching, connecting, or forming a network. It should evoke the Good Fella footer’s ASCII/WebGL craft while becoming Tech Connect’s own opening scene.

### Visual treatment
- Full-screen layer behind hero copy.
- Characters rendered in mono type.
- Base state: low-opacity `#F7FFF7`.
- Hover/click state: selected characters shift to `#da624d`.
- Active regions ripple outward from cursor or click.
- Use density changes to create depth: denser characters near hands, sparse characters toward edges.

### Interaction requirements
- Hover over ASCII regions highlights nearby characters.
- Clickable regions should trigger visible ripples, bursts, or brief character swaps.
- Pointer movement should create subtle distortion or parallax.
- Keyboard users should have a focusable “Activate hero animation” control or the animation should be decorative and not required for navigation.
- Respect `prefers-reduced-motion`.

### Implementation options
Use the lightest viable option for the final app:

1. DOM/CSS grid
   - Best for fast implementation and clickable character regions.
   - Render ASCII as rows and spans.
   - Use pointer coordinates to calculate distance-based opacity/color.
   - Good for accessible fallback and easy theming.

2. Canvas 2D
   - Best for smoother performance with many characters.
   - Render characters onto a canvas.
   - Track pointer/click ripples in animation state.
   - Pair with hidden semantic hero content for accessibility.

3. Three.js/WebGL
   - Best for closest Good Fella-like shader depth.
   - Use only if the app already supports advanced animation or performance budget allows it.
   - Keep it progressively enhanced and provide a non-WebGL fallback.

Recommended starting path:
- Start with Canvas 2D or DOM/CSS.
- Add Three.js only if the ASCII needs shader-level distortion.

### ASCII art direction
The hands should not be copied directly from Good Fella. Create a custom composition suited to Tech Connect:
- Two hands reaching from opposite sides
- Hands connected by dotted ASCII network lines
- Abstract community nodes between palms
- Characters can include `/`, `\`, `|`, `_`, `-`, `.`, `:`, `+`, `*`, `#`, `{`, `}`, `(`, `)`, and `@`

Example design language:
- Low-density field in corners
- Higher-density hand silhouettes
- Accent nodes around fingertips
- Click ripples convert nearby characters to `+`, `*`, or `#` briefly

## Scroll animation system

### Motion goals
Motion should make the page feel responsive and crafted, not slow or decorative. Every animation should clarify hierarchy, reveal content, or create a sense of momentum.

### Recommended stack
If the app is React/Tailwind-based:
- Use CSS transitions and IntersectionObserver for simple reveals.
- Use GSAP with ScrollTrigger only for pinned timelines, text splitting, card sequencing, and advanced scroll choreography.
- Use Lenis only if smooth scrolling is important and does not conflict with accessibility or browser defaults.
- Avoid adding Framer Motion and GSAP together unless the app already uses one of them.

### Required animation patterns
1. Hero load
   - ASCII hands fade/draw in before or with the headline.
   - Headline appears with slight vertical reveal.
   - CTAs fade in last.

2. Scroll reveals
   - Section labels fade up.
   - Large headings reveal by line.
   - Cards stagger in with small translate and opacity changes.

3. Parallax
   - ASCII hero layer moves slower than foreground copy.
   - Event/program image placeholders shift subtly on scroll.

4. Pinned statement
   - Mission statement can pin for a short duration on desktop.
   - Lines highlight sequentially as the user scrolls.
   - Disable pinning on small screens if it hurts usability.

5. Card transitions
   - Event cards and program cards should enter as a sequence.
   - Hover states should be immediate and not depend on scroll.

6. Footer reveal
   - Footer slides or un-masks subtly from the previous CTA section.
   - Do not reuse the huge ASCII hands here.

### Reduced-motion behavior
When `prefers-reduced-motion: reduce` is active:
- Disable smooth scrolling.
- Disable parallax.
- Replace pinned timelines with static content.
- Keep hover/focus states instant.
- Show a static ASCII hero background.

## Image placeholder system
Use placeholders until real assets are available. Placeholders should look intentional, not broken.

Placeholder types:

### Event image placeholder
- Dark panel with subtle ASCII/noise texture.
- Include event category, date, or location as mono metadata.
- Accent corner marker.

### Program image placeholder
- Abstract grid or node pattern.
- Optional label such as `Program Image`.
- Use muted text and hairline border.

### Community image placeholder
- Larger editorial frame for future event photography.
- Use a dark gradient and sparse ASCII marks.

### Partner placeholder
- Simple logo slot with border and muted label.
- Do not over-style partner logos once real assets exist.

Rules:
- Always include meaningful `alt` text once images are real.
- If an image is purely decorative, mark it decorative in implementation.
- Avoid layout shift by defining aspect ratios.

Suggested aspect ratios:
- Hero background: full viewport
- Event cards: `16 / 10`
- Program cards: `4 / 3`
- Community editorial: `16 / 9`
- Partner logos: flexible but constrained

## Components to define in implementation
These are component responsibilities, not current file names.

### `AsciiHero`
- Renders full-screen ASCII hands background.
- Handles pointer hover and click ripples.
- Provides reduced-motion static fallback.
- Keeps foreground content readable.

### `SectionReveal`
- Wraps sections with IntersectionObserver or GSAP reveal behavior.
- Handles reduced-motion fallback.

### `EventBoard`
- Displays upcoming and past events.
- Supports metadata, CTA links, and calendar actions.
- Uses image placeholders when no event image exists.

### `ProgramShowcase`
- Displays programs and initiatives.
- Supports image placeholders and scroll reveal.

### `NewsletterSignup`
- Provides accessible email capture or mail link behavior.
- Shows clear success/error states if wired to an API.

### `CTASection`
- Handles volunteer and community conversion moments.
- Uses subtle ASCII texture or accent interaction.

## Accessibility requirements
- Maintain text contrast against animated backgrounds.
- Keep all CTAs keyboard-focusable.
- Provide visible focus states using `#da624d`.
- Do not rely on color alone for state.
- Respect reduced motion.
- Ensure hero animation is non-blocking and decorative unless interactive controls are explicitly exposed.
- Use semantic headings in order.
- Use accessible labels for forms and calendar actions.
- Keep navigation usable without JavaScript where practical.

## Performance requirements
- Keep first load lightweight.
- Lazy-load non-critical animation libraries.
- Avoid rendering thousands of DOM nodes if performance suffers.
- Prefer canvas for very dense ASCII.
- Pause animation when hero is off-screen.
- Use `requestAnimationFrame` responsibly.
- Avoid scroll listeners that trigger layout thrashing.
- Define image dimensions or aspect ratios to avoid layout shift.

## Responsive behavior

### Mobile
- Hero remains full-screen but ASCII should simplify.
- Disable complex pinned scroll.
- Keep CTAs stacked and thumb-friendly.
- Event cards become single-column.
- Navigation collapses.

### Tablet
- Preserve large type but reduce ASCII density.
- Use two-column layouts where comfortable.
- Keep scroll reveals subtle.

### Desktop
- Use full interaction density.
- Enable optional pinned mission section.
- Use multi-column event/program layouts.
- Let ASCII hands span beyond viewport edges.

## Content mapping

### Hero
- `Tech Connect Alberta`
- `Community. Purpose. People First.`
- Mission-supporting sentence
- `Join Our Community`
- `View Events`

### Community proof
- `5,000+ members`
- `9,000+ followers`
- `80+ employment outcomes`
- `Alberta-wide network`

### Events
- Event listings
- Register
- View Event
- Add to Calendar
- Subscribe to Calendar

### Newsletter
- Subscribe for Tech Connect updates, upcoming events, and community highlights
- `techconnect@amgfoundation.ca`

### Volunteer
- Volunteer Registration
- Join Our Community
- Get Involved

### Programs
- Women Entrepreneurs Program
- AI literacy workshops
- Cybersecurity training
- Digital transformation support

### Foundation / partners
- AMG Foundation
- Platform Calgary, if relevant

## Interaction details

### Buttons
- Base: transparent or dark panel with hairline border.
- Primary: accent background or accent border with text contrast.
- Hover: slight translate, border/accent shift, optional character flicker.
- Focus: visible accent ring.

### Links
- Mono text links can use animated underline.
- Avoid slow hover animations.
- Active states should be clear.

### Cards
- Default: dark, bordered, low contrast.
- Hover: border brightens, title shifts, image placeholder animates subtly.
- Active/featured: accent marker or left border.

### Section labels
- Mono, small, uppercase.
- Prefix with index numbers such as `01 / Hero`, `02 / Events`.
- Reveal before main heading.

## Acceptance criteria
- `design.md` clearly specifies the Good Fella-inspired direction without copying Good Fella content.
- The footer ASCII hands concept is reworked as a full-screen interactive hero background.
- The hero includes hover and click-reactive ASCII regions.
- Scroll animations are specified, including reveal, parallax, pinned statement, and reduced-motion behavior.
- Image placeholders are defined for events, programs, community, and partners.
- The palette uses `#141314`, `#da624d`, and `#F7FFF7`.
- Implementation guidance is useful for a future React/Tailwind-style app but does not assume nonexistent local files.
- Accessibility and performance requirements are included.

## Open implementation notes
- If the final app already uses an animation library, prefer extending that library instead of adding another.
- If no animation library exists, start with CSS and IntersectionObserver, then add GSAP only for advanced scroll choreography.
- If real event images are unavailable, use intentional placeholder panels rather than empty image boxes.
- If WebGL is too heavy for the first version, ship the ASCII hero with Canvas 2D or DOM/CSS first.
