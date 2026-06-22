import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Highlights from "@/components/highlights/highlights";
import Languages from "@/components/languages/languages";
import Skills from "@/components/skills/skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <Skills />
      <Languages />
    </main>
  );
}
