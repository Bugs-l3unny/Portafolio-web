import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { en } from "@/content/en";

export const metadata: Metadata = en.meta;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
