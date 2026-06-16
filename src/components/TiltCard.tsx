'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
    setGlow({ x: (e.clientX - rect.left) / rect.width * 100, y: (e.clientY - rect.top) / rect.height * 100 });
  };

  const reset = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        perspective: 800,
        position: 'relative',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(118,228,212,0.08), transparent 60%)`,
          pointerEvents: 'none',
          transition: 'background 0.2s ease',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}
