import React, { useEffect } from 'react';
import Lenis from 'lenis';

import CosmoCanvas from './components/CosmoCanvas';
import CustomCursor from './components/CustomCursor';
import NavbarRedesign from './components/NavbarRedesign';
import HeroRedesign from './components/HeroRedesign';
import AboutRedesign from './components/AboutRedesign';
import ProjectsRedesign from './components/ProjectsRedesign';
import SkillsRedesign from './components/SkillsRedesign';
import Experience from './components/Experience';
import HighlightsRedesign from './components/HighlightsRedesign';
import WorkflowRedesign from './components/WorkflowRedesign';
import ContactRedesign from './components/ContactRedesign';
import FooterRedesign from './components/FooterRedesign';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll momentum
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-cosmos-950 text-slate-100 font-sans selection:bg-flutter-500/30 selection:text-flutter-300">
      
      {/* Dynamic Starfield & Nebula Canvas */}
      <CosmoCanvas />

      {/* Custom Trailing Ring Cursor */}
      <CustomCursor />

      {/* Navbar */}
      <NavbarRedesign />

      {/* Content Layers */}
      <main className="relative z-10">
        <HeroRedesign />
        <AboutRedesign />
        <ProjectsRedesign />
        <SkillsRedesign />
        <Experience />
        <HighlightsRedesign />
        <WorkflowRedesign />
        <ContactRedesign />
      </main>

      {/* Footer */}
      <FooterRedesign />

    </div>
  );
}
