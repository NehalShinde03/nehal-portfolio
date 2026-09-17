import React from 'react';
import { Smartphone, ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-flutter-500/20 flex items-center justify-center text-flutter-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Nehal Shinde<span className="text-flutter-400 font-extrabold">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              Flutter Developer & Software Engineer with 3+ years of experience crafting production applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-flutter-400 hover:border-flutter-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>© 2026 Nehal Shinde. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <span>Engineered with Flutter passion & React precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
