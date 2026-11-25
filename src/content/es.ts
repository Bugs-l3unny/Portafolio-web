import { whatsappLink } from "@/content/shared";
import type { Dictionary } from "@/content/types";

export const es: Dictionary = {
  meta: {
    title: "Alexander Iquise · Desarrollador de software",
    description:
      "Desarrollador full-stack y móvil. Construyo plataformas web, apps móviles y de escritorio con React, Next.js, NestJS y Flutter.",
  },
  hero: {
    roleLines: ["Desarrollador", "full-stack y móvil"],
    photoAlt: "Alexander Iquise con el dedo índice sobre los labios",
    navLabel: "Secciones",
    emailCta: "Escríbeme",
    whatsappCta: "WhatsApp",
    languageSwitch: { href: "/en/", label: "EN", ariaLabel: "English version", locale: "en" },
  },
  projects: {
    id: "proyectos",
    title: "Proyectos",
    intro: "Sistemas en uso o que resolvieron un problema concreto, de la base de datos a la pantalla.",
    screenshotsOf: "Capturas de",
    items: [
      {
        name: "ArreglaYa",
        context: "Plataforma SaaS para municipalidades de Arequipa",
        role: "Líder técnico y full-stack",
        date: "Sep. 2026",
        problem:
          "Los vecinos reportan baches, basura o alumbrado roto con foto y ubicación, y la municipalidad los prioriza y los cierra con evidencia.",
        highlights: [
          "API REST en NestJS con PostgreSQL y PostGIS: la municipalidad de cada reclamo se detecta sola a partir del punto GPS.",
          "Panel municipal en Next.js con mapa, filtros e historial de estados de cada reclamo.",
          "Coordiné a 4 desarrolladores: arquitectura, ramas por módulo y Scrum.",
        ],
        stack: ["Flutter", "NestJS", "Drizzle", "PostGIS", "Next.js", "Supabase"],
        images: [
          {
            src: "/images/projects/arreglaya/mapa.webp",
            alt: "Mapa municipal de Arequipa con reclamos marcados por estado",
            label: "Mapa",
          },
          {
            src: "/images/projects/arreglaya/reclamos.webp",
            alt: "Lista de reclamos con totales por estado y filtros por categoría y municipalidad",
            label: "Reclamos",
          },
        ],
        imageNote: "Panel municipal corriendo en local con datos de demostración.",
      },
      {
        name: "SystemFarm",
        context: "ERP y punto de venta para una farmacia real, como freelance",
        role: "Full-stack de escritorio",
        date: "May. 2026",
        problem:
          "La farmacia necesitaba vender, controlar stock y vencimientos, y ver su rentabilidad sin depender de internet.",
        highlights: [
          "App de escritorio ligera con Tauri v2 y Rust.",
          "Base de datos offline en SQLite con más de 380 productos médicos.",
          "Alertas de stock crítico y productos por vencer, reportes de rentabilidad e impresión en ticketeras térmicas.",
        ],
        stack: ["React", "TypeScript", "Tauri v2", "Rust", "SQLite", "Zustand"],
        images: [
          {
            src: "/images/projects/farmacia/dashboard.webp",
            alt: "Dashboard con ventas de los últimos 7 días, medicamentos más vendidos, stock crítico y productos por vencer",
            label: "Dashboard",
          },
          {
            src: "/images/projects/farmacia/punto-de-venta.webp",
            alt: "Punto de venta con carrito y catálogo de medicamentos con precio y stock",
            label: "Punto de venta",
          },
          {
            src: "/images/projects/farmacia/inventario.webp",
            alt: "Inventario con código de barras, laboratorio, categoría, precio, costo, stock y vencimiento",
            label: "Inventario",
          },
          {
            src: "/images/projects/farmacia/historial.webp",
            alt: "Historial de ventas con total del día y lista de operaciones",
            label: "Historial",
          },
        ],
        imageSize: { width: 1600, height: 864 },
      },
      {
        name: "FitFlex",
        context: "Sitio web para un gimnasio de bajo costo en Cali",
        role: "Diseño, desarrollo y despliegue",
        problem:
          "El gimnasio quería convencer a universitarios y trabajadores de que la membresía les sale más barata que pagar por día, y llevarlos a escribir por WhatsApp.",
        highlights: [
          "Calculadora que compara en tiempo real pases diarios y membresía, con descuento universitario.",
          "Test de 4 preguntas que arma un diagnóstico de rutina y lo envía al entrenador por WhatsApp.",
          "Pedido de bebidas para recoger en recepción y horario que indica si el local está abierto.",
        ],
        stack: ["Next.js", "Tailwind CSS", "Cloudflare Workers"],
        images: [
          {
            src: "/images/projects/fitflex/hero.webp",
            alt: "Portada de FitFlex con las objeciones de precio, tiempo y rutina tachadas y respondidas",
            label: "Portada",
          },
          {
            src: "/images/projects/fitflex/calculadora.webp",
            alt: "Calculadora de ahorro con selector de días por semana y comparación de precios",
            label: "Calculadora",
          },
          {
            src: "/images/projects/fitflex/test-rutina.webp",
            alt: "Test de rutina de 4 pasos con la primera pregunta",
            label: "Test de rutina",
          },
        ],
        links: [{ label: "Ver sitio en vivo", href: "https://fitflex.devspaceb.workers.dev/" }],
      },
    ],
  },
  journey: {
    id: "trayectoria",
    title: "Trayectoria",
    entries: [
      { date: "Mar. 2024", title: "Empiezo Diseño y Desarrollo de Software", place: "Tecsup" },
      { date: "Ene. 2026", title: "Prácticas en aplicaciones móviles", place: "Fibertel Networks" },
      { date: "May. 2026", title: "ERP y punto de venta para una farmacia", place: "Freelance" },
      { date: "Sep. 2026", title: "Lidero el desarrollo de ArreglaYa", place: "Equipo de 4" },
      { date: "Dic. 2026", title: "Termino la carrera", place: "Tecsup" },
    ],
  },
  stack: {
    id: "stack",
    title: "Stack",
    groups: [
      { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Zustand"] },
      { group: "Backend", items: ["NestJS", "Node.js", "Express", "Prisma", "Drizzle", "TypeORM"] },
      { group: "Móvil y escritorio", items: ["Flutter", "Tauri v2"] },
      { group: "Datos", items: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"] },
      { group: "Cloud y DevOps", items: ["Docker", "Nginx", "Linux", "Vercel", "Cloudflare", "Supabase"] },
      { group: "IA aplicada", items: ["Claude Code", "MCP", "Flujos con LLMs"] },
    ],
  },
  contact: {
    id: "contacto",
    navLabel: "Contacto",
    heading: "¿Tienes un proyecto o una vacante?",
    whatsappLabel: "WhatsApp",
    whatsappHref: whatsappLink("Hola Alexander, vi tu portafolio y me gustaría conversar."),
    credit: "Hecho por Alexander Iquise con Next.js y GSAP.",
  },
};
