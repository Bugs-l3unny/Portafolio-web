import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Iquise · Desarrollador de software",
  description:
    "Desarrollador full-stack y móvil. Construyo plataformas web, apps móviles y de escritorio con React, Next.js, NestJS y Flutter.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${instrument.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
