import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Code2, Layers, Flame, Box, Globe, GitBranch, Radio, Zap 
} from 'lucide-react';
import GlassCard from './GlassCard';

export default function TechOrbitStage() {
  return (
    <div className="relative w-full max-w-2xl py-12 px-2 sm:px-6 flex flex-col items-center justify-center select-none min-h-[480px]">
      
      {/* Central Code Deck (NehalApp.dart from reference image) */}
      <GlassCard 
        cursorText="FLUTTER"
        className="relative z-10 w-full max-w-md p-6 space-y-4 border border-flutter-500/30 shadow-2xl backdrop-blur-2xl bg-[#070D1B]/95"
      >
        <div className="flex items-center justify-between pb-1 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-flutter-400" />
            <span className="text-slate-200 font-bold">NehalApp.dart</span>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 font-semibold tracking-wider">
            PROD READY
          </span>
        </div>

        {/* Code Snippet Box matching user image */}
        <div className="font-mono text-xs text-slate-300 leading-relaxed bg-[#040813]/90 p-4 rounded-2xl border border-white/10 space-y-1 backdrop-blur-md">
          <div><span className="text-sky-400">class</span> <span className="text-cyan-300">NehalApp</span> <span className="text-sky-400">extends</span> <span className="text-cyan-300">StatelessWidget</span> &#123;</div>
          <div className="pl-4"><span className="text-amber-300">@override</span></div>
          <div className="pl-4"><span className="text-cyan-300">Widget</span> <span className="text-amber-300">build</span>(<span className="text-cyan-300">BuildContext</span> ctx) &#123;</div>
          <div className="pl-8"><span className="text-sky-400">return</span> <span className="text-cyan-300">BlocProvider</span>(</div>
          <div className="pl-12">create: (_) =&gt; <span className="text-flutter-400">AppBloc</span>()..<span className="text-amber-300">init</span>(),</div>
          <div className="pl-12">child: <span className="text-cyan-300">ProductionApp</span>(),</div>
          <div className="pl-8">);</div>
          <div className="pl-4">&#125;</div>
          <div>&#125;</div>
        </div>

        <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-400">
          <span>Architecture: Clean / MVVM</span>
          <span className="text-flutter-400 font-bold">60 FPS</span>
        </div>
      </GlassCard>

      {/* DESKTOP & TABLET PERIMETER FLOATING BADGES (8 Technologies: Dart, Flutter, Firebase, MVVM, REST API, Git, WebSockets, Performance Optimization) */}

      {/* 1. Dart - Top Left */}
      <motion.div
        animate={{ y: [-3, 4, -3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        data-cursor="DART"
        className="hidden md:flex absolute -top-3 left-[6%] z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-cyan-500/40 shadow-xl shadow-cyan-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-cyan-400 transition-all">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>Dart</span>
        </div>
      </motion.div>

      {/* 2. Flutter - Top Right */}
      <motion.div
        animate={{ y: [3, -4, 3] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        data-cursor="FLUTTER"
        className="hidden md:flex absolute -top-3 right-[6%] z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-sky-500/40 shadow-xl shadow-sky-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-sky-400 transition-all">
          <Layers className="w-4 h-4 text-sky-400" />
          <span>Flutter</span>
        </div>
      </motion.div>


      {/* 3. Firebase - Mid Left */}
      <motion.div
        animate={{ x: [-4, 3, -4], y: [-2, 3, -2] }}
        transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        data-cursor="FIREBASE"
        className="hidden md:flex absolute top-[36%] -left-8 lg:-left-14 z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-amber-500/40 shadow-xl shadow-amber-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-amber-400 transition-all">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Firebase</span>
        </div>
      </motion.div>

      {/* 4. MVVM - Lower Left */}
      <motion.div
        animate={{ x: [3, -4, 3], y: [3, -2, 3] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        data-cursor="MVVM"
        className="hidden md:flex absolute bottom-[24%] -left-6 lg:-left-12 z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-indigo-500/40 shadow-xl shadow-indigo-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-indigo-400 transition-all">
          <Box className="w-4 h-4 text-indigo-400" />
          <span>MVVM</span>
        </div>
      </motion.div>


      {/* 5. REST API - Mid Right */}
      <motion.div
        animate={{ x: [4, -3, 4], y: [-2, 3, -2] }}
        transition={{ duration: 4.7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        data-cursor="REST API"
        className="hidden md:flex absolute top-[36%] -right-8 lg:-right-14 z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-blue-500/40 shadow-xl shadow-blue-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-blue-400 transition-all">
          <Globe className="w-4 h-4 text-blue-400" />
          <span>REST API</span>
        </div>
      </motion.div>

      {/* 6. Git - Lower Right */}
      <motion.div
        animate={{ x: [-3, 4, -3], y: [2, -4, 2] }}
        transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
        data-cursor="GIT"
        className="hidden md:flex absolute bottom-[24%] -right-6 lg:-right-12 z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-orange-500/40 shadow-xl shadow-orange-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-orange-400 transition-all">
          <GitBranch className="w-4 h-4 text-orange-400" />
          <span>Git</span>
        </div>
      </motion.div>


      {/* 7. WebSockets - Bottom Left */}
      <motion.div
        animate={{ y: [3, -4, 3] }}
        transition={{ duration: 4.9, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        data-cursor="WEBSOCKETS"
        className="hidden md:flex absolute -bottom-3 left-[6%] z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-teal-500/40 shadow-xl shadow-teal-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-teal-400 transition-all">
          <Radio className="w-4 h-4 text-teal-400" />
          <span>WebSockets</span>
        </div>
      </motion.div>

      {/* 8. Performance Optimization - Bottom Right */}
      <motion.div
        animate={{ y: [-4, 3, -4] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        data-cursor="PERFORMANCE"
        className="hidden md:flex absolute -bottom-3 right-[6%] z-20"
      >
        <div className="px-3.5 py-2 rounded-2xl bg-[#091020]/95 backdrop-blur-xl border border-yellow-500/40 shadow-xl shadow-yellow-500/10 flex items-center gap-2 text-xs font-mono font-bold text-white hover:scale-105 hover:border-yellow-400 transition-all">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span>Performance Optimization</span>
        </div>
      </motion.div>


      {/* MOBILE RESPONSIVE FLOATING ECOSYSTEM (Screen Width < 768px) */}
      <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mt-6 z-20 w-full">
        {[
          { name: 'Dart', icon: Code2, color: 'text-cyan-400', border: 'border-cyan-500/40' },
          { name: 'Flutter', icon: Layers, color: 'text-sky-400', border: 'border-sky-500/40' },
          { name: 'Firebase', icon: Flame, color: 'text-amber-400', border: 'border-amber-500/40' },
          { name: 'MVVM', icon: Box, color: 'text-indigo-400', border: 'border-indigo-500/40' },
          { name: 'REST API', icon: Globe, color: 'text-blue-400', border: 'border-blue-500/40' },
          { name: 'Git', icon: GitBranch, color: 'text-orange-400', border: 'border-orange-500/40' },
          { name: 'WebSockets', icon: Radio, color: 'text-teal-400', border: 'border-teal-500/40' },
          { name: 'Performance', icon: Zap, color: 'text-yellow-400', border: 'border-yellow-500/40' },
        ].map((badge) => {
          const Icon = badge.icon;
          return (
            <div 
              key={badge.name}
              className={`px-3 py-1.5 rounded-xl bg-[#091020]/95 backdrop-blur-xl border ${badge.border} flex items-center gap-1.5 text-xs font-mono font-bold text-white shadow-lg`}
            >
              <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
              <span>{badge.name}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
