import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Links from './components/Links';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-navy-dark text-text-light font-body min-h-screen selection:bg-highlight selection:text-white">
      <CustomCursor />

      {isLoading && (
        <div className="loading-screen" aria-live="polite" aria-busy="true">
          <div className="loading-orb orb-one" />
          <div className="loading-orb orb-two" />
          <div className="loading-orb orb-three" />

          <div className="loading-content">
            <div className="loading-brand">HM<span>.</span></div>
            <div className="loading-bar">
              <span className="loading-bar-fill" />
            </div>
            <div className="loading-text">Loading Portfolio</div>
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Links />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
