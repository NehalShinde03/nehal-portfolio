import React from 'react';
import { motion } from 'framer-motion';
import { Search, Figma, Code2, Unplug, Gauge, Rocket, ArrowRight } from 'lucide-react';
import { workflowSteps } from '../data/portfolioData';

const iconMap = {
  Search,
  Figma,
  Code2,
  Unplug,
  Gauge,
  Rocket
};

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Development Life Cycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Development <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            A structured 6-step engineering methodology from concept to production release.
          </p>
        </div>

        {/* Desktop Horizontal Workflow & Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {workflowSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Code2;
            return (
              <motion.div
                key={step.number}
                className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Large Background Step Number */}
                <div className="absolute top-2 right-4 text-5xl font-extrabold font-mono text-slate-800/40 select-none group-hover:text-flutter-500/15 transition-colors">
                  {step.number}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-flutter-500/10 border border-flutter-500/30 flex items-center justify-center text-flutter-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-flutter-400 font-bold uppercase tracking-wider">
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-flutter-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
