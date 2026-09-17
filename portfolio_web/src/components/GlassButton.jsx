import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  cursorText = '',
  icon: Icon,
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.2;
    const distanceY = (e.clientY - centerY) * 0.2;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isPrimary = variant === 'primary';

  const baseStyles = isPrimary
    ? 'bg-gradient-to-r from-flutter-500/90 via-sky-500/90 to-flutter-cyan/90 text-white shadow-xl shadow-sky-950/50 border border-white/20 backdrop-blur-xl hover:shadow-sky-500/30'
    : 'bg-[#0A101E]/70 hover:bg-[#0E172C]/80 text-slate-200 border border-white/10 hover:border-flutter-400/50 shadow-lg backdrop-blur-xl';

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={cursorText}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 18, stiffness: 250, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 ${baseStyles} ${className}`}
    >
      {/* Light Sweep Reflection */}
      <span className="pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-20" />

      {/* Top Edge Highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20" />

      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Icon */}
      {Icon && (
        <Icon className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
