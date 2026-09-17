import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, GitFork, LayoutGrid, Server, HardDrive, Wrench, 
  Layers, Code2, Cpu, Activity, Zap, Share2, Sliders, Box, Grid,
  Database, Workflow, Globe, FileJson, Radio, Terminal, Code, Flame,
  Archive, FileText, Lock, GitBranch, Kanban, Monitor, Gauge
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Smartphone, GitFork, LayoutGrid, Server, HardDrive, Wrench,
  Layers, Code2, Cpu, Activity, Zap, Share2, Sliders, Box, Grid,
  Database, Workflow, Globe, FileJson, Radio, Terminal, Code, Flame,
  Archive, FileText, Lock, GitBranch, Kanban, Monitor, Gauge
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Tech Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical <span className="text-gradient">Skillset & Tools</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Comprehensive tech stack built over 3+ years of engineering production applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-flutter-500 text-white shadow-lg shadow-flutter-500/25 scale-105'
                : 'bg-dark-850 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-flutter-500 text-white shadow-lg shadow-flutter-500/25 scale-105'
                  : 'bg-dark-850 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const CategoryIcon = iconMap[cat.icon] || Layers;
            return (
              <motion.div
                key={cat.id}
                className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800/80 hover:border-flutter-500/40 transition-all duration-300 shadow-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-flutter-500/10 border border-flutter-500/20 flex items-center justify-center text-flutter-400 group-hover:scale-110 transition-transform">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
                    <span className="text-[11px] text-slate-400 font-mono">{cat.skills.length} Competencies</span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="flex items-center gap-2 text-slate-200">
                            <SkillIcon className={`w-3.5 h-3.5 ${skill.primary ? 'text-flutter-400' : 'text-slate-400'}`} />
                            <span className={skill.primary ? 'font-bold text-white' : ''}>{skill.name}</span>
                          </span>
                          <span className="text-slate-400 font-mono text-[11px]">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-dark-950 rounded-full overflow-hidden p-[1px] border border-slate-800">
                          <motion.div 
                            className={`h-full rounded-full ${
                              skill.primary 
                                ? 'bg-gradient-to-r from-flutter-500 to-sky-400 shadow-sm shadow-flutter-500/50' 
                                : 'bg-slate-600'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 + sIdx * 0.05 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
