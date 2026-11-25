import type { Metadata } from "next";
import { SiteDocument } from "@/components/site-document";
import { es } from "@/content/es";

export const metadata: Metadata = es.meta;

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="es">{children}</SiteDocument>;
}
