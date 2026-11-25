"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Dictionary } from "@/content/types";
import { ScrollTitle } from "@/components/scroll-title";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Technologies set large; each group brightens as it scrolls up to the reading line. */
export function StackSection({ copy }: { copy: Dictionary["stack"] }) {
  const list = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-group]").forEach((group) =>
          gsap.fromTo(
            group,
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: { trigger: group, start: "top 88%", end: "top 55%", scrub: true },
            },
          ),
        );
      });
    },
    { scope: list },
  );

  return (
    <section id={copy.id} aria-labelledby={`${copy.id}-title`} className="bg-graphite-deep py-24 md:py-32">
      <ScrollTitle id={`${copy.id}-title`}>{copy.title}</ScrollTitle>

      <dl ref={list} className="mt-16 px-[4vw] md:mt-24">
        {copy.groups.map((row) => (
          <div
            key={row.group}
            data-group
            className="grid gap-2 border-t border-bone/10 py-6 md:grid-cols-12 md:gap-8 md:py-9"
          >
            <dt className="text-lg text-stone md:col-span-3 md:pt-3">{row.group}</dt>
            <dd className="font-display font-condensed text-4xl leading-[1.02] font-extrabold text-bone md:col-span-9 md:text-6xl">
              {row.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
