import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import GlassButton from './GlassButton';
import TechOrbitStage from './TechOrbitStage';

gsap.registerPlugin(ScrollTrigger);

export default function HeroRedesign() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic title entrance animation
      gsap.fromTo(
        '.hero-title-text',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      // Parallax scroll effect on Hero Visual
      gsap.to(visualRef.current, {
        y: -80,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden z-10"
    >
      
      {/* Top Banner Tagline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-start border-b border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A101E]/80 border border-flutter-500/30 text-flutter-400 text-xs font-medium shadow-lg shadow-flutter-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flutter-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-flutter-400"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>
        </div>
      </div>

      {/* Hero Center Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Title & Meta (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <span className="text-sm font-semibold tracking-wider text-flutter-400 uppercase block">
                Flutter Developer & Software Engineer
              </span>
              
              {/* Premium Heading */}
              <h1 
                ref={titleRef}
                className="hero-title-text text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] select-none"
              >
                Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span> 👋<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-flutter-400 via-sky-300 to-flutter-cyan">
                  Flutter Developer
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-3 leading-snug">
                  Building smooth, scalable mobile & web experiences.
                </span>
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-grotesk leading-relaxed">
              <strong className="text-white font-semibold">Flutter Developer with 3+ years of experience</strong> crafting scalable, pixel-perfect applications across <strong className="text-white font-semibold">FinTech/crypto, social networking, food delivery, document management, SMS communication, and civic complaint management</strong> domains. Experienced in developing <strong className="text-white font-semibold">user-focused, high-performance applications</strong> with a strong focus on <strong className="text-white font-semibold">seamless user experiences, responsive interfaces, and reliable application functionality</strong>.
            </p>

            {/* Glossy Magnetic Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <GlassButton
                href="#projects"
                variant="primary"
                cursorText="WORK"
                icon={ArrowUpRight}
              >
                View My Work
              </GlassButton>

              <GlassButton
                href="#contact"
                variant="secondary"
                cursorText="TALK"
              >
                Let's Connect
              </GlassButton>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-6 pt-6 font-mono">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block">{stat.value}</span>
                  <span className="text-[11px] text-slate-400 font-sans font-medium mt-0.5 block">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* 3D Orbiting Technology Stage (5 Cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative flex justify-center items-center">
            <TechOrbitStage />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-end">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <ArrowDown className="w-4 h-4 animate-bounce text-flutter-400" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

    </section>
  );
}
