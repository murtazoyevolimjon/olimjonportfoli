import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Education } from "@/sections/Education";
import { Languages } from "@/sections/Languages";
import { Contact } from "@/sections/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </main>
  );
}
