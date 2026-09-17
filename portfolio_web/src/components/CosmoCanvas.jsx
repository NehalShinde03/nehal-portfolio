import React, { useEffect, useRef } from 'react';

export default function CosmoCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse position with smooth inertia (lerp)
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Subtle Dust Particles
    const numParticles = Math.min(90, Math.floor(width / 18));
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.3,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
      pulseSpeed: Math.random() * 0.015 + 0.005,
    }));

    // Render loop
    const render = () => {
      // Smooth interpolation for inertia light
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Global Inertia Mouse Light Source
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 500
      );
      gradient.addColorStop(0, 'rgba(2, 132, 199, 0.18)');
      gradient.addColorStop(0.3, 'rgba(0, 210, 184, 0.08)');
      gradient.addColorStop(0.7, 'rgba(99, 102, 241, 0.03)');
      gradient.addColorStop(1, 'rgba(4, 7, 17, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Dust Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.7 || p.alpha < 0.1) p.pulseSpeed = -p.pulseSpeed;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 230, 253, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      
      {/* Liquid Light Orbs */}
      <div className="absolute top-[8%] left-[10%] w-[650px] h-[650px] bg-flutter-500/10 rounded-full blur-[170px] animate-aurora pointer-events-none" />
      <div className="absolute top-[45%] right-[5%] w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-[8%] left-[25%] w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[190px] animate-aurora pointer-events-none" />
    </div>
  );
}
