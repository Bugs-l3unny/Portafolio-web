export type Locale = "es" | "en";

export type ProjectImage = {
  src: string;
  alt: string;
  /** Short label for the thumbnail button. */
  label: string;
};

export type Project = {
  name: string;
  context: string;
  role: string;
  date?: string;
  problem: string;
  highlights: string[];
  stack: string[];
  images?: ProjectImage[];
  /** Shared pixel size of the screenshots; defaults to 1600×1000. */
  imageSize?: { width: number; height: number };
  /** Note shown under the gallery, e.g. where the screenshots come from. */
  imageNote?: string;
  links?: { label: string; href: string }[];
};

/** Every piece of copy on the page, in one language. */
export type Dictionary = {
  meta: { title: string; description: string };
  hero: {
    /** The role, set on two lines. */
    roleLines: readonly [string, string];
    photoAlt: string;
    navLabel: string;
    emailCta: string;
    whatsappCta: string;
    /** Link to the same page in the other language. */
    languageSwitch: { href: string; label: string; ariaLabel: string; locale: Locale };
  };
  projects: { id: string; title: string; intro: string; screenshotsOf: string; items: Project[] };
  journey: { id: string; title: string; entries: { date: string; title: string; place: string }[] };
  stack: { id: string; title: string; groups: { group: string; items: string[] }[] };
  contact: {
    id: string;
    navLabel: string;
    heading: string;
    whatsappLabel: string;
    whatsappHref: string;
    credit: string;
  };
};
