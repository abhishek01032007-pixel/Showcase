export type Project = {
  id: number;
  title: string;
  category: "Product" | "Web" | "Brand";
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  services: string[];
  visual: string;
  mark: string;
};

export const profile = {
  name: "Aarav Mehta",
  shortName: "AM",
  role: "Creative developer & product designer",
  location: "Bengaluru, India",
  email: "hello@aaravmehta.design",
  intro: "I turn ambitious ideas into digital products people remember—and enjoy using.",
  about: "I work at the intersection of design, technology and brand. My process brings structure to complex ideas, then gives them a distinct visual voice.",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Nova Finance",
    category: "Product",
    year: "2026",
    summary: "A calmer way for first-time investors to understand and grow their money.",
    challenge: "Turn intimidating market data into an experience that feels clear, trustworthy and useful to new investors.",
    solution: "A modular dashboard, guided portfolio setup and a visual language built around clarity rather than noise.",
    result: "+34% onboarding completion and a 22% lift in weekly active users during beta.",
    services: ["Product strategy", "UX/UI", "Design system"],
    visual: "visual-orbit",
    mark: "NOVA",
  },
  {
    id: 2,
    title: "Forma Objects",
    category: "Brand",
    year: "2025",
    summary: "A tactile identity and editorial shop for objects made slowly and kept forever.",
    challenge: "Help a small studio communicate material quality online without losing its human, crafted character.",
    solution: "A restrained identity, warm editorial art direction and a story-first commerce experience.",
    result: "Sold out the launch collection in eleven days and doubled newsletter sign-ups.",
    services: ["Identity", "Art direction", "E-commerce"],
    visual: "visual-forma",
    mark: "FORMA",
  },
  {
    id: 3,
    title: "Sona Sessions",
    category: "Web",
    year: "2025",
    summary: "An expressive digital stage for independent artists and intimate live performances.",
    challenge: "Create a flexible platform where every performance feels unique while the brand remains recognizable.",
    solution: "A motion-led system with modular show pages, bold typography and immersive performance archives.",
    result: "Reached 120K viewers across the first season and secured two cultural partners.",
    services: ["Creative direction", "Web design", "Development"],
    visual: "visual-sona",
    mark: "SONA",
  },
  {
    id: 4,
    title: "Kite Health",
    category: "Product",
    year: "2025",
    summary: "A supportive care companion that turns daily health routines into achievable steps.",
    challenge: "Make complex care plans understandable without making the experience feel clinical or demanding.",
    solution: "Accessible routines, gentle progress feedback and a care-team view built from the same system.",
    result: "Improved seven-day routine adherence by 41% in the pilot programme.",
    services: ["Research", "Product design", "Prototyping"],
    visual: "visual-kite",
    mark: "KITE",
  },
  {
    id: 5,
    title: "Afterlight Journal",
    category: "Web",
    year: "2024",
    summary: "A digital magazine exploring contemporary culture after dark.",
    challenge: "Build an editorial system that could feel cinematic while staying fast and readable on mobile.",
    solution: "A performance-minded publication with expressive story templates and purposeful motion.",
    result: "Increased average reading time by 2.4× after launch.",
    services: ["Editorial design", "Front-end", "CMS"],
    visual: "visual-afterlight",
    mark: "AFTER / LIGHT",
  },
  {
    id: 6,
    title: "Common Ground",
    category: "Brand",
    year: "2024",
    summary: "A generous identity for a neighbourhood space built around food, work and conversation.",
    challenge: "Unite a café, co-working space and events programme without making the brand feel corporate.",
    solution: "A flexible typographic identity and a warm toolkit that changes with the community calendar.",
    result: "Reached 80% membership capacity within the first six weeks.",
    services: ["Brand strategy", "Identity", "Campaign"],
    visual: "visual-ground",
    mark: "COMMON GROUND",
  },
  {
    id: 7,
    title: "Relay Studio",
    category: "Web",
    year: "2024",
    summary: "A precise portfolio for an architecture practice designing for changing cities.",
    challenge: "Present highly technical work with enough simplicity and character to engage non-specialist clients.",
    solution: "An image-led case-study system with clear project facts, restrained motion and flexible layouts.",
    result: "Generated three qualified international enquiries in its launch month.",
    services: ["UX strategy", "Web design", "Development"],
    visual: "visual-relay",
    mark: "R / S",
  },
  {
    id: 8,
    title: "Morrow AI",
    category: "Product",
    year: "2026",
    summary: "A collaborative workspace that helps research teams find signal in complex information.",
    challenge: "Make an advanced AI workflow understandable, controllable and transparent for expert teams.",
    solution: "A source-first interface, explainable actions and a shared research canvas designed for confidence.",
    result: "Reduced research synthesis time by 38% in closed beta testing.",
    services: ["Product strategy", "Interaction design", "Prototype"],
    visual: "visual-morrow",
    mark: "MORROW",
  },
];

export const experience = [
  { years: "2024—NOW", role: "Independent creative", place: "Aarav Mehta Studio", detail: "Partnering with founders and teams on products, brands and digital experiences." },
  { years: "2021—2024", role: "Senior product designer", place: "Northstar Labs", detail: "Led product design and helped establish a shared design system across three platforms." },
  { years: "2019—2021", role: "Designer & developer", place: "Fieldwork Studio", detail: "Designed and built award-winning websites for cultural and technology clients." },
];

export const capabilities = [
  { number: "01", title: "Product design", detail: "Strategy, research, user journeys, interfaces and design systems." },
  { number: "02", title: "Creative development", detail: "Responsive websites, thoughtful motion and high-quality front-end builds." },
  { number: "03", title: "Brand direction", detail: "Positioning, visual identity and digital systems made to stay coherent." },
];

export const skills = ["Figma", "React", "Next.js", "TypeScript", "Framer Motion", "Design systems", "Prototyping", "Creative direction"];
