import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, ArrowUpRight, Terminal, Sparkles, Download, Play, Layers, Cpu, Radio, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const codeSnippets = [
  "class NehalApp extends StatelessWidget {",
  "  const NehalApp({super.key});",
  "",
  "  @override",
  "  Widget build(BuildContext context) {",
  "    return BlocProvider(",
  "      create: (context) => AppBloc()..add(InitApp()),",
  "      child: MaterialApp(",
  "        theme: FlutterTheme.dark,",
  "        home: const ProductionApp(),",
  "      ),",
  "    );",
  "  }",
  "}"
];

export default function Hero() {
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < codeSnippets.length) {
      const timer = setTimeout(() => {
        setTypedLines(prev => [...prev, codeSnippets[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flutter-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-flutter-500/30 text-flutter-400 text-xs font-medium mb-6 shadow-lg shadow-flutter-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flutter-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-flutter-400"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-slate-300 font-medium text-3xl sm:text-4xl block mb-2">Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span> 👋</span>
              <span className="text-gradient-flutter">Flutter Developer</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-400 mt-2">
                Building smooth, scalable mobile & web experiences.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p 
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-flutter-500 via-sky-500 to-cyan-500 text-white shadow-xl shadow-flutter-500/25 hover:shadow-flutter-500/40 hover:scale-[1.02] transition-all duration-200 group"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200"
              >
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Key Quick Stats Bar */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-0.5">
                    <span className="text-gradient">{stat.value}</span>
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Hero Visual Element (5 Cols) - Interactive Mobile Phone & Code Terminal */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Phone Mockup Frame */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-slate-900 p-3 rounded-[40px] border-4 border-slate-800 shadow-2xl shadow-sky-500/10">
              
              {/* Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-flutter-500 animate-pulse" />
              </div>

              {/* Screen Inner */}
              <div className="w-full bg-dark-950 rounded-[32px] overflow-hidden border border-slate-800/80 pt-10 pb-6 px-4 font-mono text-xs text-slate-300 min-h-[430px] flex flex-col justify-between">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-flutter-400" />
                    <span className="text-slate-200 font-semibold">main.dart</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>BUILD SUCCESS</span>
                  </div>
                </div>

                {/* Animated Code Typewriter */}
                <div className="py-4 space-y-1 overflow-x-auto text-[11px] leading-relaxed select-none">
                  {typedLines.map((line, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-slate-600 text-[10px] w-4 select-none">{index + 1}</span>
                      <span className="whitespace-pre">
                        {line.includes('class') || line.includes('extends') || line.includes('return') || line.includes('const') ? (
                          <span className="text-sky-400 font-semibold">{line}</span>
                        ) : line.includes('Widget') || line.includes('BuildContext') || line.includes('StatelessWidget') ? (
                          <span className="text-cyan-300">{line}</span>
                        ) : line.includes('build') || line.includes('create') ? (
                          <span className="text-amber-300">{line}</span>
                        ) : (
                          <span className="text-slate-300">{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                  {currentLineIndex < codeSnippets.length && (
                    <div className="inline-block w-2 h-4 bg-flutter-400 animate-terminal-blink ml-6" />
                  )}
                </div>

                {/* Bottom App Bar Simulation */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-flutter-400" />
                    <span className="text-slate-400">Flutter 3.x • Dart 3</span>
                  </div>
                  <span className="text-flutter-400 font-semibold">60 FPS</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Chips (Subtle hover parallax effect) */}
            <motion.div 
              className="absolute -top-4 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-flutter-500/30 shadow-xl flex items-center gap-2 text-xs font-semibold text-slate-200"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-6 h-6 rounded-lg bg-flutter-500/20 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-flutter-400" />
              </div>
              <span>BLoC / Cubit</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-6 sm:-left-10 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-cyan-500/30 shadow-xl flex items-center gap-2 text-xs font-semibold text-slate-200"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span>WebSockets</span>
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -right-2 sm:-right-6 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-amber-500/30 shadow-xl flex items-center gap-2 text-xs font-semibold text-slate-200"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-amber-400 font-bold">🔥</span>
              <span>Firebase</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
