"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { profile } from "@/content/profile";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const nav = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const photo = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Arrival: name slides in behind the figure, figure rises into place.
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(photo.current, { yPercent: 6, opacity: 0, duration: 1.1 })
          .from(name.current, { xPercent: 12, opacity: 0, duration: 1.3 }, "<0.15")
          .from("[data-reveal]", { y: 16, opacity: 0, stagger: 0.08, duration: 0.7 }, "<0.5");

        // Scroll: the figure holds still while the full name passes behind it.
        gsap.to(name.current, {
          x: () => -((name.current?.scrollWidth ?? 0) - window.innerWidth * 0.92),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "+=110%",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative h-svh min-h-[560px] overflow-hidden bg-graphite"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,#3a3835_0%,transparent_60%)]"
      />

      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-[4vw] py-6 text-sm">
        <a href="#" className="font-display font-semibold text-bone">
          Alexander Iquise
        </a>
        <nav aria-label="Secciones">
          <ul className="flex gap-5 text-bone/80 sm:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-gold" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <h1
        ref={name}
        className="font-display font-condensed absolute top-[22%] left-0 z-10 whitespace-nowrap pl-[4vw] text-[38vw] leading-[0.8] font-extrabold tracking-[-0.02em] text-gold sm:top-[16%] md:text-[25vw]"
      >
        {profile.firstName} {profile.lastName}
      </h1>

      <div
        ref={photo}
        className="absolute bottom-0 left-1/2 z-20 h-[74svh] w-max -translate-x-1/2 md:right-[7vw] md:left-auto md:h-[90svh] md:translate-x-0"
      >
        <Image
          src="/images/alexander-cutout.webp"
          alt="Alexander Iquise con el dedo índice sobre los labios"
          width={1208}
          height={1813}
          priority
          sizes="(min-width: 768px) 60vh, 70vh"
          className="h-full w-auto max-w-none"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-20 h-[38svh] bg-gradient-to-t from-graphite via-graphite/80 to-transparent lg:hidden"
      />

      <div className="absolute bottom-0 left-0 z-30 px-[4vw] pb-10 md:pb-14">
        <p
          data-reveal
          className="font-display font-condensed text-[10.5vw] leading-[0.88] font-extrabold tracking-[-0.01em] text-bone md:text-[max(5.2vw,3.5rem)]"
        >
          {profile.role.title}
          <br />
          {profile.role.focus}
        </p>
        <div data-reveal className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-4 md:mt-8">
          <a
            className="rounded-full bg-gold px-6 py-3 text-base font-semibold text-graphite transition-colors hover:bg-bone md:text-lg"
            href={`mailto:${profile.email}`}
          >
            Escríbeme
          </a>
          <a
            className="rounded-full border border-bone/30 px-6 py-3 text-base font-semibold text-bone transition-colors hover:border-gold hover:text-gold md:text-lg"
            href={profile.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <span className="flex gap-x-5 sm:ml-3">
            {profile.links.map((link) => (
              <a
                key={link.href}
                className="text-base text-bone/70 underline-offset-4 transition-colors hover:text-bone hover:underline"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
