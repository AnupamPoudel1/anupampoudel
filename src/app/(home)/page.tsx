import Tape from "@/components/Tape";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
