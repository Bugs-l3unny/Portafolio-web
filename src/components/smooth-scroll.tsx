"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** Scrolls to a page offset, through Lenis when smooth scrolling is active. */
export function scrollToY(y: number) {
  if (lenis) {
    lenis.scrollTo(y, { duration: 1.1 });
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/** Drives Lenis from GSAP's ticker so pinned ScrollTriggers stay in sync. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({ autoRaf: false, lerp: 0.1 });
    instance.on("scroll", ScrollTrigger.update);
    lenis = instance;

    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Giant display type reflows once the web fonts arrive; recompute trigger positions.
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
