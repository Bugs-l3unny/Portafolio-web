"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  text: string;
  className?: string;
};

/** Heading whose words light up one by one as it scrolls through the viewport. */
export function WordReveal({ text, className }: Props) {
  const heading = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: heading.current,
              start: "top 85%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: heading },
  );

  return (
    <h2 ref={heading} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden data-word className="inline-block">
          {word}
          {i < words.length - 1 && " "}
        </span>
      ))}
    </h2>
  );
}
