import React from 'react';
import { motion } from 'framer-motion';
import { Box, Activity, Globe, Radio, Zap, ShieldCheck } from 'lucide-react';
import { technicalHighlights } from '../data/portfolioData';

const iconMap = {
  Box,
  Activity,
  Globe,
  Radio,
  Zap,
  ShieldCheck
};

export default function TechnicalHighlights() {
  return (
    <section id="highlights" className="py-24 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Engineering Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I <span className="text-gradient">Build Applications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Architectural standards and best practices applied across every codebase.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Box;
            return (
              <motion.div
                key={item.id}
                className="p-8 rounded-2xl bg-dark-850/80 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 shadow-xl group hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] mb-6 shadow-lg`}>
                  <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-flutter-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-flutter-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
