import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { StackSection } from "@/components/stack-section";
import type { Dictionary } from "@/content/types";

/** The whole one-page portfolio in the language of `dict`. */
export function Portfolio({ dict }: { dict: Dictionary }) {
  const nav = [
    { label: dict.projects.title, href: `#${dict.projects.id}` },
    { label: dict.journey.title, href: `#${dict.journey.id}` },
    { label: dict.contact.navLabel, href: `#${dict.contact.id}` },
  ];

  return (
    <main>
      <Hero copy={dict.hero} nav={nav} whatsappHref={dict.contact.whatsappHref} />
      <Projects copy={dict.projects} />
      <Journey copy={dict.journey} />
      <StackSection copy={dict.stack} />
      <Contact copy={dict.contact} />
    </main>
  );
}
