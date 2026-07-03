import CustomCursor from '@/components/portfolio/CustomCursor';

import Nav from '@/components/portfolio/Nav';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Certifications from '@/components/portfolio/Certifications';
import Projects from '@/components/portfolio/Projects';
import AgentforceGallery from '@/components/portfolio/AgentforceGallery';
import Interests from '@/components/portfolio/Interests';
import Contact from '@/components/portfolio/Contact';

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <AgentforceGallery />
      <Interests />
      <Contact />
    </div>
  );
}