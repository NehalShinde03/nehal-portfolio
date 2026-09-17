import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className = '', 
  cursorText = '', 
  onClick,
  tiltAmount = 2.5,
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [lightPosition, setLightPosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -tiltAmount;
    const rotY = ((x - centerX) / centerX) * tiltAmount;

    setRotateX(rotX);
    setRotateY(rotY);

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    setLightPosition({ x: percentX, y: percentY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setLightPosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={cursorText}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.1 }}
      className={`relative rounded-3xl bg-[#0A101E]/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 hover:border-flutter-400/40 hover:shadow-sky-950/60 ${className}`}
    >
      {/* Specular Mouse Highlight Reflection Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: lightPosition.opacity,
          background: `radial-gradient(450px circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(255, 255, 255, 0.14), rgba(56, 189, 248, 0.06) 40%, transparent 80%)`,
        }}
      />

      {/* Glass Top Specular Edge Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
