"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ProjectImage } from "@/content/types";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  /** Accessible name for the screenshot buttons, e.g. "Screenshots of FitFlex". */
  label: string;
  images: ProjectImage[];
  active: number;
  onSelect: (index: number) => void;
  size?: { width: number; height: number };
  note?: string;
};

/** Screenshot viewer: crossfades to the active image and opens like a window on scroll. */
export function ProjectGallery({
  label,
  images,
  active,
  onSelect,
  size = { width: 1600, height: 1000 },
  note,
}: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: frame.current,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.6,
            },
          })
          .fromTo(
            frame.current,
            { clipPath: "inset(14% 8% 14% 8% round 6px)" },
            { clipPath: "inset(0% 0% 0% 0% round 6px)", ease: "none" },
          )
          .fromTo(stack.current, { scale: 1.12 }, { scale: 1, ease: "none" }, 0);
      });
    },
    { scope: frame },
  );

  return (
    <figure
      className="md:ml-auto"
      // Keep the screenshot short enough that the pinned row fits on one screen.
      style={{ maxWidth: `calc(56svh * ${size.width / size.height})` }}
    >
      <div ref={frame} className="overflow-hidden rounded-md border border-bone/10 bg-graphite">
        <div
          ref={stack}
          className="relative w-full origin-top"
          style={{ aspectRatio: `${size.width} / ${size.height}` }}
        >
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={index === active ? image.alt : ""}
              aria-hidden={index !== active}
              fill
              sizes="(min-width: 768px) 55vw, 92vw"
              className={`object-cover object-top transition-opacity duration-500 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-pressed={index === active}
              onClick={() => onSelect(index)}
              className="rounded-full border border-bone/20 px-3.5 py-1.5 text-sm text-bone/70 transition-colors hover:border-bone/50 hover:text-bone aria-pressed:border-gold aria-pressed:bg-gold aria-pressed:text-graphite"
            >
              {image.label}
            </button>
          ))}
        </div>
      )}

      {note && <figcaption className="mt-3 text-sm text-stone">{note}</figcaption>}
    </figure>
  );
}
