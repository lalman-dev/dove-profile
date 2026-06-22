import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Highlights from "@/components/highlights/highlights";
import Languages from "@/components/languages/languages";
import Objective from "@/components/objective/objective";
import Skills from "@/components/skills/skills";
import Strengths from "@/components/strengths/strengths";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <Skills />
      <Languages />
      <Strengths />
      <Objective />
      <Contact />
    </main>
  );
}
