import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, ShieldCheck, Cpu, Zap, Award, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const highlights = [
  {
    title: "Cross-Platform Flutter & Dart",
    description: "Architecting single-codebase apps for iOS, Android, and Web with native performance.",
    icon: Smartphone,
    color: "from-flutter-500 to-sky-400"
  },
  {
    title: "BLoC & Cubit State Control",
    description: "Decoupled business logic ensuring predictable state transitions and effortless testing.",
    icon: Layers,
    color: "from-sky-400 to-cyan-400"
  },
  {
    title: "Real-Time APIs & WebSockets",
    description: "Streaming audio/video, live messaging, and low-latency socket pipelines.",
    icon: Zap,
    color: "from-cyan-400 to-indigo-400"
  },
  {
    title: "Clean Architecture & MVVM",
    description: "Enterprise project structure separating presentation, domain, and data repositories.",
    icon: ShieldCheck,
    color: "from-indigo-400 to-flutter-500"
  }
];

const expertiseList = [
  "Flutter 3.x & Dart",
  "Android & iOS Build Pipelines",
  "RESTful APIs & JSON Handling",
  "Firebase Auth & Cloud Messaging",
  "WebSockets & Socket.IO",
  "SQLite & Hive Local Caching",
  "Push Notification Workflows",
  "Flutter DevTools Performance Profiling"
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Passionate About <span className="text-gradient">Mobile & Web Engineering</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Building reliable, high-performance Flutter applications with 3+ years of hands-on experience shipping production apps.
          </p>
        </div>

        {/* Story Grid & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Text (7 Cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800/80 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-flutter-400">Software Engineer — Flutter</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {personalInfo.longBio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether implementing card-to-card transfer flows in FinTech, streaming low-latency live video in Social apps, or optimizing local database storage in Document hubs, I focus on building scalable codebases that stand the test of time.
              </p>
            </div>

            {/* Checklist of core competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {expertiseList.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-flutter-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights 2x2 Grid (5 Cols) */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-dark-850/90 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} p-[1px] mb-4`}>
                    <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-flutter-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
