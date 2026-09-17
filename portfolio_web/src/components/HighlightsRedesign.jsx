import React from 'react';
import { motion } from 'framer-motion';
import { Box, Activity, Globe, Radio, Zap, ShieldCheck } from 'lucide-react';
import { technicalHighlights } from '../data/portfolioData';
import GlassCard from './GlassCard';

const iconMap = { Box, Activity, Globe, Radio, Zap, ShieldCheck };

export default function HighlightsRedesign() {
  return (
    <section id="highlights" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I <span className="bg-clip-text text-transparent bg-gradient-to-r from-flutter-400 via-sky-300 to-flutter-cyan">Build Applications</span>
          </h2>
          <p className="text-slate-400 font-grotesk text-sm sm:text-base mt-3">
            Architectural standards and best practices applied across every codebase.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Box;
            return (
              <GlassCard
                key={item.id}
                cursorText="PILLAR"
                className="p-8 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-flutter-500/10 border border-flutter-500/30 flex items-center justify-center text-flutter-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-flutter-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-grotesk text-sm leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
