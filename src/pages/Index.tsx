import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CredibilityStrip } from '@/components/CredibilityStrip';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { BuildProcess } from '@/components/BuildProcess';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Research } from '@/components/Research';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Sajad Amouei Sheshkal | AI Engineer Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Portfolio of Sajad Amouei Sheshkal, an Oslo-based PhD in AI and AI Engineer specializing in LLMs, RAG, Agentic AI, and Computer Vision.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <Projects />
        <Skills />
        <BuildProcess />
        <Experience />
        <Research />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
