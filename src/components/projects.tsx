import { ProjectShowcase } from "@/components/project-showcase";
import { ScrollTitle } from "@/components/scroll-title";
import type { Dictionary } from "@/content/types";

export function Projects({ copy }: { copy: Dictionary["projects"] }) {
  return (
    <section id={copy.id} aria-labelledby={`${copy.id}-title`} className="bg-graphite-deep pt-24 md:pt-32">
      <ScrollTitle id={`${copy.id}-title`}>{copy.title}</ScrollTitle>
      <p className="mt-8 max-w-2xl px-[4vw] font-display text-2xl leading-snug text-bone/80 md:text-3xl">
        {copy.intro}
      </p>

      <ol className="mt-16 px-[4vw] md:mt-24">
        {copy.items.map((project) => (
          <ProjectShowcase
            key={project.name}
            project={project}
            galleryLabel={`${copy.screenshotsOf} ${project.name}`}
          />
        ))}
      </ol>
    </section>
  );
}
