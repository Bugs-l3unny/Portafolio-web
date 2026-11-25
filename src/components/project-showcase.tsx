"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectGallery } from "@/components/project-gallery";
import { scrollToY } from "@/components/smooth-scroll";
import type { Project } from "@/content/profile";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Scroll distance, in viewport heights, spent on each screenshot while the row is pinned. */
const SCROLL_PER_IMAGE = 0.2;

/** Pinning only makes sense when the whole row fits on screen. */
const PIN_QUERY = "(min-width: 768px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

/** One project: giant gold name that slides in, details, and a gallery that steps through screenshots while pinned. */
export function ProjectShowcase({ project }: { project: Project }) {
  const row = useRef<HTMLLIElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const stepper = useRef<ScrollTrigger | null>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const images = project.images ?? [];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // The name drifts in from the right as the row approaches, echoing the hero.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          name.current,
          { x: () => window.innerWidth * 0.32 },
          {
            x: 0,
            ease: "power1.out",
            scrollTrigger: { trigger: row.current, start: "top bottom", end: "top top", scrub: true },
          },
        );
      });

      if (images.length > 1) {
        mm.add(PIN_QUERY, () => {
          stepper.current = ScrollTrigger.create({
            trigger: row.current,
            start: "top top",
            end: () => `+=${window.innerHeight * SCROLL_PER_IMAGE * (images.length - 1)}`,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const next = Math.min(images.length - 1, Math.floor(self.progress * images.length));
              if (next !== activeRef.current) {
                activeRef.current = next;
                setActive(next);
              }
            },
          });
          return () => {
            stepper.current = null;
          };
        });
      }
    },
    { scope: row, dependencies: [images.length] },
  );

  function show(index: number) {
    const st = stepper.current;
    if (st) {
      // Scroll to the middle of that screenshot's stretch; onUpdate switches the image.
      scrollToY(st.start + ((index + 0.5) / images.length) * (st.end - st.start));
      return;
    }
    activeRef.current = index;
    setActive(index);
  }

  const details = (
    <>
      <p className="text-lg leading-snug text-stone">
        {project.context}
        <br />
        {project.role}
        {project.date && `, ${project.date}`}
      </p>
      <p className="mt-6 max-w-[34ch] font-display text-2xl leading-snug font-semibold text-bone md:text-[1.75rem]">
        {project.problem}
      </p>
    </>
  );

  const facts = (
    <>
      <ul className="max-w-[60ch] space-y-3 text-lg leading-snug text-bone/80">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-gold" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-base text-stone">{project.stack.join(", ")}</p>
      {project.links && (
        <ul className="mt-5 space-y-2">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-gold underline decoration-gold/40 decoration-2 underline-offset-4 hover:decoration-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <li
      ref={row}
      data-project-row
      className="flex flex-col justify-center border-t border-bone/10 bg-graphite-deep py-12 md:min-h-svh md:py-10"
    >
      <div className="overflow-hidden">
        <h3
          ref={name}
          className="font-display font-condensed text-[17vw] leading-[0.85] font-extrabold tracking-[-0.015em] whitespace-nowrap text-gold md:text-[9vw]"
        >
          {project.name}
        </h3>
      </div>

      {images.length > 0 ? (
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            {details}
            <div className="mt-6">{facts}</div>
          </div>
          <div className="md:col-span-7">
            <ProjectGallery
              projectName={project.name}
              images={images}
              active={active}
              onSelect={show}
              size={project.imageSize}
              note={project.imageNote}
            />
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">{details}</div>
          <div className="md:col-span-6 md:pt-1">{facts}</div>
        </div>
      )}
    </li>
  );
}
