import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Sparkles, Layers, Shield, Zap, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];
  const secondaryProjects = projectsData.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 relative bg-grid-pattern">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-flutter-500/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-gradient">Production Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real-world applications crafted using Flutter, Dart, Clean Architecture, BLoC/Cubit, and real-time APIs.
          </p>
        </div>

        {/* Featured Project Showcase Card (Large) */}
        <motion.div 
          className="mb-12 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-slate-900 border border-slate-700/80 p-8 sm:p-10 shadow-2xl relative overflow-hidden group cursor-pointer"
          onClick={() => setSelectedProject(featuredProject)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle background ambient blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-flutter-500/10 rounded-full blur-3xl group-hover:bg-flutter-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Case Study</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-flutter-500/20 text-flutter-400 border border-flutter-500/30">
                  {featuredProject.category}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-flutter-400 transition-colors">
                {featuredProject.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {featuredProject.shortDescription}
              </p>

              {/* Highlights pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {featuredProject.highlights.slice(0, 4).map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-flutter-400" />
                    <span className="line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {featuredProject.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 text-slate-200 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-flutter-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                <span>View Full Case Study & Metrics</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>

            </div>

            {/* Right Visual Card Mockup (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-dark-950 p-6 border border-slate-800 shadow-xl space-y-4 group-hover:scale-105 transition-transform duration-300">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-flutter-400" />
                    <span className="text-xs font-mono text-slate-200">OppiWallet.app</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    LIVE PRODUCTION
                  </span>
                </div>

                {/* Simulated Wallet Card */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-flutter-600 to-sky-600 text-white space-y-3 shadow-lg">
                  <div className="flex justify-between items-center text-xs opacity-80 font-mono">
                    <span>DIGITAL WALLET</span>
                    <span>FLUTTER</span>
                  </div>
                  <div className="text-2xl font-mono font-bold tracking-wider">•••• •••• •••• 4829</div>
                  <div className="flex justify-between items-end text-xs">
                    <div>
                      <span className="block text-[10px] opacity-75">BALANCE</span>
                      <span className="font-bold text-sm">$24,890.50</span>
                    </div>
                    <span className="px-2 py-1 bg-white/20 rounded text-[10px] font-bold">VISA</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Card Transfer
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    Crypto APIs
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* Secondary Projects Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="p-8 rounded-2xl bg-dark-850/80 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-flutter-500/10 text-flutter-400 border border-flutter-500/20">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-flutter-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-flutter-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded text-xs font-mono bg-dark-950 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-flutter-400">
                <span>View Details & Role</span>
                <span className="text-slate-500 font-mono text-[11px] group-hover:text-slate-300">Click to expand</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
}
