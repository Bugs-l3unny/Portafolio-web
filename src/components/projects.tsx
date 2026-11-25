import { projects } from "@/content/profile";
import { ProjectShowcase } from "@/components/project-showcase";
import { ScrollTitle } from "@/components/scroll-title";

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="bg-graphite-deep pt-24 md:pt-32">
      <ScrollTitle id="proyectos-title">Proyectos</ScrollTitle>
      <p className="mt-8 max-w-2xl px-[4vw] font-display text-2xl leading-snug text-bone/80 md:text-3xl">
        Sistemas en uso o que resolvieron un problema concreto, de la base de datos a la pantalla.
      </p>

      <ol className="mt-16 px-[4vw] md:mt-24">
        {projects.map((project) => (
          <ProjectShowcase key={project.name} project={project} />
        ))}
      </ol>
    </section>
  );
}
