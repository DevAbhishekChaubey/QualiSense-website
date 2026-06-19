'use client';

import { motion } from 'framer-motion';
import { DURATION, EASE } from '@/lib/motion';

export default function TextGenerate({
  text,
  className = '',
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: DURATION.section, ease: EASE }}
      style={{ display: 'inline' }}
    >
      {text}
    </motion.span>
  );
}
