"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Dictionary } from "@/content/types";
import { ScrollTitle } from "@/components/scroll-title";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Timeline whose line draws with scroll; each milestone lights up once it reaches the reading line. */
export function Journey({ copy }: { copy: Dictionary["journey"] }) {
  const list = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: list.current, start: "top 60%", end: "bottom 60%", scrub: true },
          },
        );
        steps.forEach((step) =>
          ScrollTrigger.create({
            trigger: step,
            start: "top 60%",
            onEnter: () => step.classList.add("is-on"),
            onLeaveBack: () => step.classList.remove("is-on"),
          }),
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        steps.forEach((step) => step.classList.add("is-on"));
      });
    },
    { scope: list },
  );

  return (
    <section id={copy.id} aria-labelledby={`${copy.id}-title`} className="bg-graphite py-24 md:py-32">
      <ScrollTitle id={`${copy.id}-title`}>{copy.title}</ScrollTitle>

      <ol ref={list} className="relative mt-16 px-[4vw] md:mt-24">
        <div aria-hidden className="absolute top-0 bottom-0 left-[4vw] w-px bg-bone/10">
          <div data-progress className="h-full w-px origin-top bg-gold" />
        </div>

        {copy.entries.map((step) => (
          <li
            key={step.date + step.title}
            data-step
            className="group relative grid gap-1 py-8 pl-10 md:grid-cols-12 md:gap-8 md:py-12 md:pl-14"
          >
            <span
              aria-hidden
              className="absolute top-[2.6rem] left-0 size-3 -translate-x-1/2 rounded-full border-2 border-bone/30 bg-graphite transition-colors duration-500 group-[.is-on]:border-gold group-[.is-on]:bg-gold md:top-[3.9rem]"
            />
            <p className="font-display font-condensed text-4xl font-extrabold text-bone/20 transition-colors duration-500 group-[.is-on]:text-gold md:col-span-3 md:text-6xl">
              {step.date}
            </p>
            <div className="md:col-span-9">
              <p className="font-display text-2xl font-semibold text-bone/30 transition-colors duration-500 group-[.is-on]:text-bone md:text-4xl">
                {step.title}
              </p>
              <p className="mt-2 text-lg text-stone">{step.place}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
