import { WordReveal } from "@/components/word-reveal";
import { person } from "@/content/shared";
import type { Dictionary } from "@/content/types";

export function Contact({ copy }: { copy: Dictionary["contact"] }) {
  return (
    <footer id={copy.id} className="flex min-h-svh flex-col bg-graphite px-[4vw] pt-24 pb-10 md:pt-32">
      <div className="flex flex-1 flex-col justify-center">
        <WordReveal
          text={copy.heading}
          className="font-display font-condensed max-w-[14ch] text-[15vw] leading-[0.86] font-extrabold tracking-[-0.015em] text-bone md:text-[9.5vw]"
        />
        
        <a
          href={`mailto:${person.email}`}
          className="font-display font-condensed mt-12 inline-block self-start text-[7.5vw] leading-none font-extrabold break-all text-gold underline decoration-gold/30 decoration-[0.06em] underline-offset-[0.14em] transition-colors hover:decoration-gold md:text-[5.5vw]"
        >
          {person.email}
        </a>
        <a
          href={copy.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex flex-wrap items-baseline gap-x-4 self-start text-bone transition-colors hover:text-gold"
        >
          <span className="text-lg text-stone transition-colors group-hover:text-gold md:text-xl">{copy.whatsappLabel}</span>
          <span className="font-display font-condensed text-[7.5vw] leading-none font-extrabold md:text-[3.8vw]">
            {person.whatsappDisplay}
          </span>
        </a>
      </div>

      <div className="mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-bone/10 pt-6 text-bone/60">
        <ul className="flex gap-6 text-lg">
          {person.links.map((link) => (
            <li key={link.href}>
              <a className="hover:text-gold" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm">{copy.credit}</p>
      </div>
    </footer>
  );
}
