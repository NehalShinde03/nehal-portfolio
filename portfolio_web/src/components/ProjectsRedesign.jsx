import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Smartphone, Apple, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import GlassCard from './GlassCard';

export default function ProjectsRedesign() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const currentProject = projectsData[activeProjectIndex];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Section Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-flutter-400 via-sky-300 to-flutter-cyan">Production Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-grotesk">
            Select a project to explore key deliverables, state architecture, and official application store links.
          </p>
        </div>

        {/* Case Study Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Project List Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {projectsData.map((project, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  data-cursor="SELECT"
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#0A101E]/90 border-flutter-500/50 shadow-2xl scale-[1.02]'
                      : 'bg-[#050A14]/60 border-white/10 hover:border-white/20 hover:bg-[#0A101E]/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${isActive ? 'text-flutter-400' : 'text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-flutter-500 text-white shadow-lg shadow-flutter-500/40'
                      : 'bg-cosmos-950 text-slate-500 group-hover:text-white'
                  }`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Project Stage Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <GlassCard
                  cursorText="PROJECT"
                  className="h-full p-8 sm:p-10 flex flex-col justify-between group"
                >
                  {/* Background Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-flutter-500/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-extrabold font-mono text-flutter-400">
                          0{activeProjectIndex + 1}
                        </span>
                        {currentProject.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                        {currentProject.category}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-slate-300 font-grotesk text-base leading-relaxed">
                      {currentProject.shortDescription}
                    </p>

                    {/* Highlights Bullet List */}
                    {currentProject.highlights && currentProject.highlights.length > 0 && (
                      <div className="space-y-2.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">
                          Key Deliverables & Engineering Features:
                        </span>
                        {currentProject.highlights.slice(0, 4).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs font-grotesk text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-flutter-400 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {currentProject.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#050A14] text-slate-200 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Official Project Links Row */}
                  {(currentProject.playStoreUrl || currentProject.appStoreUrl || currentProject.githubUrl) && (
                    <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-3 relative z-10">
                      <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider mr-1">
                        Official Links:
                      </span>

                      {currentProject.playStoreUrl && (
                        <a
                          href={currentProject.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="PLAY STORE"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 text-xs font-mono font-bold transition-all shadow-lg shadow-emerald-950/20"
                        >
                          <Smartphone className="w-4 h-4 text-emerald-400" />
                          <span>Google Play</span>
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-400 opacity-70" />
                        </a>
                      )}

                      {currentProject.appStoreUrl && (
                        <a
                          href={currentProject.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="APP STORE"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 text-xs font-mono font-bold transition-all shadow-lg shadow-sky-950/20"
                        >
                          <Apple className="w-4 h-4 text-sky-400" />
                          <span>App Store</span>
                          <ExternalLink className="w-3.5 h-3.5 text-sky-400 opacity-70" />
                        </a>
                      )}

                      {currentProject.githubUrl && currentProject.githubUrl !== '#' && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GITHUB"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 text-xs font-mono font-bold transition-all shadow-lg shadow-purple-950/20"
                        >
                          <Github className="w-4 h-4 text-purple-400" />
                          <span>GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 text-purple-400 opacity-70" />
                        </a>
                      )}
                    </div>
                  )}

                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
