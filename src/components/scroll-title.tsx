"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: string;
  id?: string;
  className?: string;
};

/** Section title set at hero scale; it slides sideways while the section passes, like the hero name. */
export function ScrollTitle({ children, id, className = "text-bone" }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          title.current,
          { x: () => window.innerWidth * 0.18 },
          {
            x: () => -Math.max(0, (title.current?.scrollWidth ?? 0) - window.innerWidth * 0.92) - window.innerWidth * 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: wrap.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    },
    { scope: wrap },
  );

  return (
    <div ref={wrap} className="overflow-hidden">
      <h2
        ref={title}
        id={id}
        className={`font-display font-condensed pl-[4vw] text-[24vw] leading-[0.82] font-extrabold tracking-[-0.02em] whitespace-nowrap md:text-[19vw] ${className}`}
      >
        {children}
      </h2>
    </div>
  );
}
