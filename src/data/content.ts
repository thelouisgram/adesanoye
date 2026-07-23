export const site = {
  brand: "A² Studio",
  name: "Adeyeye Adesanoye",
  email: "hadesanoye01@gmail.com",
  github: "https://github.com/thelouisgram",
  techPortfolio: "https://thelouisgram.vercel.app/",
  tagline: "Build a website that feels like you.",
  description:
    "A² Studio designs and builds custom websites for founders and freelancers who want something that feels considered — and quietly converts.",
};

export const projects = [
  {
    id: "nodoseoff",
    title: "NoDoseOff",
    role: "Medication adherence platform",
    category: "Health product",
    description:
      "Compliance, scheduling, and calm daily reporting for a health product that needs trust.",
    href: "https://nodoseoff.vercel.app",
    tone: "forest",
    cover: "/vibe/health.jpg",
  },
  {
    id: "luxe",
    title: "Luxe Dispense",
    role: "Smart vending machine",
    category: "Hospitality tech",
    description:
      "Inventory, telemetry, and payments shaped into a polished operator-facing product.",
    href: "https://247luxedispense.com",
    tone: "ink",
    cover: "/vibe/orange-vending.jpg",
    darkOverlay: true,
  },
  {
    id: "mac",
    title: "MAC Digital Agency",
    role: "Agency landing page",
    category: "Creative studio",
    description:
      "Pixel-precise Figma build — bold type, clean rhythm, and a site that feels on-brand.",
    href: "https://mac-azure-two.vercel.app/",
    tone: "lime",
    cover: "/vibe/mac-analytics.jpg",
  },
  {
    id: "arch",
    title: "Arch Studio",
    role: "Multi-page studio site",
    category: "Architecture",
    description:
      "Quiet, confident architecture presence with a restrained design system.",
    href: "https://arch-the-studio.vercel.app/",
    tone: "stone",
    cover: "/vibe/architecture.jpg",
  },
  {
    id: "audiophile",
    title: "Audiophile",
    role: "Audio e-commerce UI",
    category: "Retail",
    description:
      "Product storytelling, cart flow, and premium merchandising for headphones.",
    href: "https://audiophile-shop-nu.vercel.app/",
    tone: "ember",
    cover: "/vibe/audio.jpg",
  },
];

export const services = [
  {
    id: "landing",
    title: "Landing page",
    timing: "Fast turnaround",
    description:
      "One high-impact page for launches, offers, or waitlists. Clear story, sharp visuals, straight to the point.",
  },
  {
    id: "website",
    title: "Custom website",
    timing: "2–4 weeks",
    description:
      "A full multi-page site with personality and strategy — the kind you’re proud to send when someone asks for your link.",
  },
  {
    id: "product",
    title: "Web app / product UI",
    timing: "Scoped to the build",
    description:
      "Production-grade interfaces for founders and operators who need more than a brochure — dashboards, flows, and real systems.",
  },
] as const;

export const pains = [
  "You low-key cringe when someone asks for your website.",
  "Your work got better. Your site didn’t keep up.",
  "You’ve said “I need to redo the site” three times this year.",
  "Desktop looks okay. Mobile makes you nervous.",
];

export const testimonials = [
  {
    name: "Heart",
    role: "Hotel & CRM project",
    quote:
      "Louis built the website and CRM for my dad’s hotel. Guests finally get the experience online — and the team can actually manage bookings without the chaos.",
  },
  {
    name: "Daniel",
    role: "Luxe Dispense · site & CRM",
    quote:
      "From the Luxe Dispense site to the CRM behind it — everything feels connected. Operators see what’s happening, and the brand finally looks as sharp as the product.",
  },
  {
    name: "Kalu",
    role: "African NGO",
    quote:
      "Our NGO site needed to feel trustworthy and human. He got the tone right — clear stories, calm design, and a presence that helps people take us seriously.",
  },
];

export const marqueeItems = [
  "Bold websites",
  "Happy clients",
  "No boring sites here",
  "Built with care",
  "React · Next.js · TypeScript",
  "Your website era starts now",
  "A² Studio",
  "Ship it. Show it. Love it.",
];

export const faqs = [
  {
    q: "Okay but… how long does this actually take?",
    a: "Landing pages can move fast (days, not months). Full custom sites usually land in 2–4 weeks. Product UI is scoped together so we’re not guessing in the dark. You’ll always know the timeline before we start.",
  },
  {
    q: "Do I need brand assets / a Figma file already?",
    a: "Nice if you have them — not required. Bring whatever you’ve got: a logo, vibes, screenshots of sites you love, or “help, I have chaos.” We’ll shape it into something that feels like you.",
  },
  {
    q: "What do you actually build with?",
    a: "Modern web stack — React, Next.js, TypeScript, and clean CSS. That means fast sites, smooth motion, and something you can grow without rebuilding from scratch every year.",
  },
  {
    q: "Will you write the copy too?",
    a: "I can tighten, structure, and punch up what you have. Best results start from your voice — you know your clients; I know how to shape the page. We’ll collaborate, not ghostwrite your personality away.",
  },
  {
    q: "What if I’m not sure what I need yet?",
    a: "That’s normal. Hit apply anyway. Tell me where you’re stuck and what “winning” looks like. I’ll recommend the right shape of project — landing, full site, or product UI — no jargon dump.",
  },
  {
    q: "How do we start?",
    a: "Apply → I review within ~24 hours → we hop on a quick call if it’s a fit → kickoff with clear scope, milestones, and a site you’re actually excited to send.",
  },
] as const;
