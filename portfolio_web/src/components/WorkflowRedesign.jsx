import React from 'react';
import { motion } from 'framer-motion';
import { Search, Figma, Code2, Unplug, Gauge, Rocket } from 'lucide-react';
import { workflowSteps } from '../data/portfolioData';
import GlassCard from './GlassCard';

const iconMap = { Search, Figma, Code2, Unplug, Gauge, Rocket };

export default function WorkflowRedesign() {
  return (
    <section id="workflow" className="py-24 relative bg-[#070B14]/50 border-y border-white/10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Development Life Cycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-flutter-400 via-sky-300 to-flutter-cyan">Workflow</span>
          </h2>
          <p className="text-slate-400 font-grotesk text-sm sm:text-base mt-3">
            A structured 6-step engineering methodology from concept to production release.
          </p>
        </div>

        {/* 6 Grid Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Code2;
            return (
              <GlassCard
                key={step.number}
                cursorText="STEP"
                className="p-8 relative overflow-hidden group"
              >
                <div className="absolute top-2 right-4 text-6xl font-extrabold font-mono text-slate-800/30 select-none group-hover:text-flutter-500/20 transition-colors">
                  {step.number}
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-flutter-500/10 border border-flutter-500/30 flex items-center justify-center text-flutter-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-flutter-400 uppercase tracking-widest">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-flutter-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-grotesk text-sm leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
