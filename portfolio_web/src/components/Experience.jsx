import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, Building2, Code2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-flutter-500/10 text-flutter-400 border border-flutter-500/20 inline-block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            My track record engineering production software and delivering mobile solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-flutter-500 via-sky-500 to-slate-800" />

          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className="relative mb-12 sm:mb-16 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline Center Dot Indicator */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-dark-950 border-2 border-flutter-500 flex items-center justify-center z-10 shadow-lg shadow-flutter-500/30 group-hover:scale-125 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-flutter-400 animate-ping" />
              </div>

              {/* Card Container */}
              <div className="pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12">
                
                {/* Meta Column (Duration & Location) */}
                <div className={`flex flex-col justify-start mb-3 sm:mb-0 ${
                  index % 2 === 0 
                    ? 'sm:order-1 sm:items-end sm:text-right' 
                    : 'sm:order-2 sm:items-start sm:text-left'
                }`}>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-flutter-500/10 border border-flutter-500/30 text-flutter-400 text-xs font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <div className={`flex items-center gap-1.5 text-xs text-slate-400 ${
                    index % 2 === 0 ? 'justify-start sm:justify-end' : 'justify-start sm:justify-start'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Right Column (Content Card) */}
                <div className={`mt-3 sm:mt-0 ${index % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-dark-850/90 border border-slate-800/80 hover:border-flutter-500/40 shadow-xl transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                          <span>{item.role}</span>
                        </h3>
                        <div className="text-flutter-400 font-semibold text-sm flex items-center gap-1.5 mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-2.5 mb-6">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Key Impact & Deliverables:</h4>
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-flutter-400 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {item.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
