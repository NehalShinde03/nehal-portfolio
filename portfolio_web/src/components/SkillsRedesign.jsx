import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkillsData } from '../data/portfolioData';
import GlassCard from './GlassCard';

export default function SkillsRedesign() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] via-[#38BDF8] to-[#A78BFA]">Skills</span>
          </h2>
        </div>

        {/* 8-Card Skills Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkillsData.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full"
            >
              <GlassCard
                cursorText="SKILL"
                className="p-6 sm:p-7 h-full flex flex-col justify-start group"
              >
                {/* Category Icon */}
                <div className="text-2xl mb-3 leading-none select-none">
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-4">
                  {category.title}
                </h3>

                {/* Skill Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-full bg-[#161B2E]/80 border border-indigo-500/20 text-[#A5B4FC] text-xs font-medium hover:bg-[#1C233B] hover:text-white hover:border-indigo-400/40 transition-all duration-200 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
