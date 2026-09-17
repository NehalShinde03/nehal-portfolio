import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Award, Zap, Smartphone } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-dark-950/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <motion.div 
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div 
          className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-dark-950 via-slate-900 to-dark-950 border-b border-slate-800">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-flutter-500/20 text-flutter-400 border border-flutter-500/30">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Featured Project
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>

            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-8">
            
            {/* Role & Tech Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-dark-950 border border-slate-800/80">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">My Role</span>
                <p className="text-sm font-bold text-white mt-0.5">{project.role}</p>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Core Tech Stack</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deep Description */}
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-flutter-400" />
                <span>Project Overview & Architecture</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technical Highlights / Key Features */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-flutter-400" />
                <span>Key Engineering Achievements</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-flutter-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-flutter-500/5 border border-flutter-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-flutter-400 font-semibold mb-3">Project Metrics</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.metrics).map(([key, val], idx) => (
                    <div key={idx}>
                      <span className="text-base sm:text-lg font-bold text-white block">{val}</span>
                      <span className="text-[10px] uppercase font-mono text-slate-400">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-dark-950 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Nehal Shinde • Flutter Developer</span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              Close Overview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
