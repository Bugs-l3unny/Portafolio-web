import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Locale } from "@/content/types";
import "@/app/globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

/**
 * The <html> shell shared by both root layouts. Each language has its own root
 * layout so the page is served with the right `lang` attribute.
 */
export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${bricolage.variable} ${instrument.variable} antialiased`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
