import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, ShieldCheck, Zap, Layers, CheckCircle2, 
  TrendingUp, Clock, Gauge, Sparkles 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Cross-Platform Tech",
    subtitle: "Flutter & Dart Core",
    description: "Single-codebase architecture for iOS, Android, and Web with 60 FPS native performance.",
    icon: Smartphone,
    tag: "MOBILE TECH",
    glowColor: "group-hover:shadow-sky-500/20",
    iconBg: "bg-sky-500/10 border-sky-500/30 text-sky-400",
    tagBg: "bg-sky-500/10 border-sky-500/30 text-sky-300"
  },
  {
    title: "Predictable State",
    subtitle: "BLoC & Cubit Control",
    description: "Decoupled business logic ensuring predictable state transitions and unidirectional data flow.",
    icon: Layers,
    tag: "STATE CONTROL",
    glowColor: "group-hover:shadow-flutter-500/20",
    iconBg: "bg-flutter-500/10 border-flutter-500/30 text-flutter-400",
    tagBg: "bg-flutter-500/10 border-flutter-500/30 text-flutter-300"
  },
  {
    title: "Real-Time Engine",
    subtitle: "WebSockets & APIs",
    description: "Low-latency bidirectional socket pipelines, live streaming networks, and Dio REST APIs.",
    icon: Zap,
    tag: "REAL TIME",
    glowColor: "group-hover:shadow-teal-500/20",
    iconBg: "bg-teal-500/10 border-teal-500/30 text-teal-400",
    tagBg: "bg-teal-500/10 border-teal-500/30 text-teal-300"
  },
  {
    title: "Enterprise MVVM",
    subtitle: "Modular Architecture",
    description: "Structured project architecture separating View UI, ViewModel logic, and Data Repositories.",
    icon: ShieldCheck,
    tag: "ENTERPRISE",
    glowColor: "group-hover:shadow-indigo-500/20",
    iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    tagBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
  }
];

const impactMetrics = [
  { label: "UI Responsiveness", value: "40% Faster", icon: TrendingUp },
  { label: "Bug Resolution Time", value: "30% Faster", icon: Clock },
  { label: "App Load Time", value: "25% Faster", icon: Gauge },
];

const domainBadges = [
  "FinTech / Crypto",
  "Social Networking",
  "Food Delivery",
  "Document Management",
  "SMS Communication",
  "Civic Complaint Management"
];

const techChecklist = [
  "Flutter 3.x & Dart Development",
  "MVVM & BLoC Architecture",
  "RESTful APIs & WebSockets",
  "Firebase Auth & Cloud Messaging",
  "SQLite & Hive Offline Caching",
  "Flutter DevTools Profiling"
];

export default function AboutRedesign() {
  const sectionRef = useRef(null);
  const scaleTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dynamic scaling text on scroll
      gsap.fromTo(
        scaleTextRef.current,
        { scale: 0.92, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 25%',
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 relative bg-[#070B14]/60 border-y border-white/10 z-10 overflow-hidden"
    >
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-flutter-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Refined Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-flutter-400" />
            <span>About Me</span>
          </span>
          <h2 
            ref={scaleTextRef}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Engineering Scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-flutter-400 via-sky-300 to-flutter-cyan">Cross-Platform Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed font-grotesk max-w-2xl mx-auto">
            Senior Flutter Developer with 3+ years of hands-on experience delivering production-grade applications with responsive UI and rock-solid architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Concise Introduction Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <GlassCard className="p-8 space-y-6 flex-1 flex flex-col justify-between border-flutter-500/20 hover:border-flutter-400/40">
              
              <div className="space-y-4">
                {/* Header Tag & Title */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                    Software Engineer <span className="text-flutter-400 font-semibold">— Flutter</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    3+ YEARS EXP
                  </span>
                </div>

                {/* Concise Impactful Bio */}
                <p className="text-slate-300 font-grotesk text-base sm:text-lg leading-relaxed">
                  <strong className="text-white font-semibold">Sr. Flutter Developer</strong> specializing in crafting scalable cross-platform applications for <strong className="text-white font-semibold">Android, iOS, and Web</strong>. Skilled in <strong className="text-white font-semibold">MVVM Architecture, BLoC/Cubit state management</strong>, and <strong className="text-white font-semibold">real-time WebSockets</strong>.
                </p>

                {/* Impact Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {impactMetrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div 
                        key={idx} 
                        className="p-3.5 rounded-2xl bg-[#050B16]/80 border border-white/10 flex flex-col items-start justify-center group hover:border-flutter-400/40 transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-flutter-400 font-extrabold text-base sm:text-lg font-mono">
                          <Icon className="w-4 h-4 text-flutter-400 flex-shrink-0" />
                          <span>{metric.value}</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium font-sans mt-1 leading-tight">
                          {metric.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Domain Specializations Tags */}
                <div className="pt-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3.5 font-semibold">
                    Domain Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domainBadges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-grotesk font-medium bg-[#050B16] border border-white/10 text-slate-200 hover:border-flutter-400/40 hover:text-white hover:bg-flutter-500/10 transition-all"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid Technical Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                {techChecklist.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#091020]/70 border border-white/5 hover:border-flutter-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-flutter-400 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

            </GlassCard>
          </div>

          {/* Redesigned 4 Side Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlassCard
                  key={idx}
                  cursorText="PILLAR"
                  className={`p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${item.glowColor}`}
                >
                  <div className="space-y-4">
                    {/* Top Icon & Tag Header */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${item.iconBg}`}>
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider border ${item.tagBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block font-medium">
                        {item.subtitle}
                      </span>
                      <h4 className="text-base font-extrabold text-white tracking-tight mt-0.5 group-hover:text-flutter-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300/80 leading-relaxed font-grotesk">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Glow Accent Line */}
                  <div className="w-full h-0.5 mt-4 rounded-full bg-gradient-to-r from-transparent via-flutter-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

