import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Journey />
      <StackSection />
      <Contact />
    </main>
  );
}
