import React from 'react';
import { Smartphone, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FooterRedesign() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cosmos-950 border-t border-slate-800/80 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-flutter-500/20 flex items-center justify-center text-flutter-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold font-display text-white tracking-tight">
                NEHAL SHINDE<span className="text-flutter-400 font-extrabold">.</span>
              </span>
            </div>
            <p className="text-slate-400 font-grotesk text-xs max-w-sm">
              Flutter Developer & Software Engineer crafting production cross-platform mobile and web experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LINKEDIN"
              className="p-3.5 rounded-2xl bg-cosmos-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="p-3.5 rounded-2xl bg-cosmos-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${personalInfo.email}`}
              data-cursor="EMAIL"
              className="p-3.5 rounded-2xl bg-cosmos-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-cosmos-900 border border-slate-800 text-xs font-mono font-bold uppercase text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <span>© 2026 Nehal Shinde. All rights reserved.</span>
          <span>Engineered with Flutter Passion & React Precision</span>
        </div>

      </div>
    </footer>
  );
}
