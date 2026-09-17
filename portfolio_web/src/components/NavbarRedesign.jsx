import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'How I Build', href: '#highlights' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Contact', href: '#contact' },
];

export default function NavbarRedesign() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3.5 bg-[#070B14]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            data-cursor="NEHAL"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flutter-500 to-flutter-cyan p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070B14] rounded-[11px] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-flutter-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center">
                Nehal Shinde<span className="text-flutter-400 font-extrabold">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                Flutter Developer
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A101E]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-cursor={link.name.toUpperCase()}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-flutter-500 text-white shadow-md shadow-flutter-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              data-cursor="TALK"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-flutter-500 to-flutter-cyan text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-105 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-2xl bg-[#0A101E] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[75px] bg-[#070B14]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-3 text-sm font-medium rounded-xl flex items-center justify-between ${
                  isActive
                    ? 'bg-flutter-500/20 text-flutter-400 border border-flutter-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-flutter-400" />}
              </a>
            );
          })}
        </div>
      </div>

    </header>
  );
}
