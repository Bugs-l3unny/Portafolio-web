import { whatsappLink } from "@/content/shared";
import type { Dictionary } from "@/content/types";

export const en: Dictionary = {
  meta: {
    title: "Alexander Iquise · Software Developer",
    description:
      "Full-stack and mobile developer. I build web platforms and mobile and desktop apps with React, Next.js, NestJS and Flutter.",
  },
  hero: {
    roleLines: ["Full-stack &", "mobile developer"],
    photoAlt: "Alexander Iquise holding an index finger to the lips",
    navLabel: "Sections",
    emailCta: "Email me",
    whatsappCta: "WhatsApp",
    languageSwitch: { href: "/", label: "ES", ariaLabel: "Versión en español", locale: "es" },
  },
  projects: {
    id: "projects",
    title: "Projects",
    intro: "Systems that are in use or solved a real problem, from the database to the screen.",
    screenshotsOf: "Screenshots of",
    items: [
      {
        name: "ArreglaYa",
        context: "SaaS platform for municipalities in Arequipa, Peru",
        role: "Tech lead and full-stack developer",
        date: "Sep 2026",
        problem:
          "Residents report potholes, garbage or broken street lights with a photo and location, and the municipality prioritizes them and closes them with evidence.",
        highlights: [
          "REST API in NestJS with PostgreSQL and PostGIS: each report's municipality is detected automatically from its GPS point.",
          "Municipal dashboard in Next.js with a map, filters and the status history of every report.",
          "Coordinated 4 developers: architecture, per-module branches and Scrum.",
        ],
        stack: ["Flutter", "NestJS", "Drizzle", "PostGIS", "Next.js", "Supabase"],
        images: [
          {
            src: "/images/projects/arreglaya/mapa.webp",
            alt: "Municipal map of Arequipa with reports marked by status",
            label: "Map",
          },
          {
            src: "/images/projects/arreglaya/reclamos.webp",
            alt: "List of reports with totals by status and filters by category and municipality",
            label: "Reports",
          },
        ],
        imageNote: "Municipal dashboard running locally with demo data.",
      },
      {
        name: "SystemFarm",
        context: "ERP and point of sale for a real pharmacy, as a freelancer",
        role: "Full-stack desktop developer",
        date: "May 2026",
        problem:
          "The pharmacy needed to sell, track stock and expiry dates, and see its profitability without relying on the internet.",
        highlights: [
          "Lightweight desktop app built with Tauri v2 and Rust.",
          "Offline SQLite database with more than 380 medical products.",
          "Low-stock and expiry alerts, profitability reports and printing on thermal receipt printers.",
        ],
        stack: ["React", "TypeScript", "Tauri v2", "Rust", "SQLite", "Zustand"],
        images: [
          {
            src: "/images/projects/farmacia/dashboard.webp",
            alt: "Dashboard with sales for the last 7 days, best-selling medicines, critical stock and products about to expire",
            label: "Dashboard",
          },
          {
            src: "/images/projects/farmacia/punto-de-venta.webp",
            alt: "Point of sale with a cart and a catalog of medicines with price and stock",
            label: "Point of sale",
          },
          {
            src: "/images/projects/farmacia/inventario.webp",
            alt: "Inventory with barcode, laboratory, category, price, cost, stock and expiry date",
            label: "Inventory",
          },
          {
            src: "/images/projects/farmacia/historial.webp",
            alt: "Sales history with the day's total and a list of transactions",
            label: "History",
          },
        ],
        imageSize: { width: 1600, height: 864 },
      },
      {
        name: "FitFlex",
        context: "Website for a budget gym in Cali, Colombia",
        role: "Design, development and deployment",
        problem:
          "The gym wanted to show students and workers that a membership costs less than paying by the day, and get them to reach out on WhatsApp.",
        highlights: [
          "Calculator that compares day passes and membership in real time, with a student discount.",
          "Four-question quiz that builds a workout assessment and sends it to the trainer on WhatsApp.",
          "Drink orders for pickup at the front desk, and opening hours that show whether the gym is open now.",
        ],
        stack: ["Next.js", "Tailwind CSS", "Cloudflare Workers"],
        images: [
          {
            src: "/images/projects/fitflex/hero.webp",
            alt: "FitFlex home page with the price, time and routine objections crossed out and answered",
            label: "Home",
          },
          {
            src: "/images/projects/fitflex/calculadora.webp",
            alt: "Savings calculator with a days-per-week selector and a price comparison",
            label: "Calculator",
          },
          {
            src: "/images/projects/fitflex/test-rutina.webp",
            alt: "Four-step workout quiz showing the first question",
            label: "Workout quiz",
          },
        ],
        links: [{ label: "View live site", href: "https://fitflex.devspaceb.workers.dev/" }],
      },
    ],
  },
  journey: {
    id: "journey",
    title: "Journey",
    entries: [
      { date: "Mar 2024", title: "Start Software Design and Development", place: "Tecsup" },
      { date: "Jan 2026", title: "Mobile development internship", place: "Fibertel Networks" },
      { date: "May 2026", title: "ERP and point of sale for a pharmacy", place: "Freelance" },
      { date: "Sep 2026", title: "Lead the development of ArreglaYa", place: "Team of 4" },
      { date: "Dec 2026", title: "Graduate", place: "Tecsup" },
    ],
  },
  stack: {
    id: "stack",
    title: "Stack",
    groups: [
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Zustand"] },
      { group: "Backend", items: ["NestJS", "Node.js", "Express", "Prisma", "Drizzle", "TypeORM"] },
      { group: "Mobile and desktop", items: ["Flutter", "Tauri v2"] },
      { group: "Data", items: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"] },
      { group: "Cloud and DevOps", items: ["Docker", "Nginx", "Linux", "Vercel", "Cloudflare", "Supabase"] },
      { group: "Applied AI", items: ["Claude Code", "MCP", "LLM workflows"] },
    ],
  },
  contact: {
    id: "contact",
    navLabel: "Contact",
    heading: "Have a project or a job opening?",
    whatsappLabel: "WhatsApp",
    whatsappHref: whatsappLink("Hi Alexander, I saw your portfolio and would like to talk."),
    credit: "Made by Alexander Iquise with Next.js and GSAP.",
  },
};
