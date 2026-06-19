'use client';

import { motion } from 'framer-motion';
import { reveal } from '@/lib/motion';

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ ...reveal.transition, delay }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}
