'use client';

import { motion } from 'framer-motion';

export default function Spotlight() {
  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{
          x: [0, 30, -20, 10, 0],
          y: [0, -40, 20, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(103,169,255,0.12) 0%, rgba(118,228,212,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -30, 20, -10, 0],
          y: [0, 30, -40, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(57,120,212,0.10) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
