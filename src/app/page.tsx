import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Highlights from "@/components/highlights/highlights";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Experience />
    </main>
  );
}
