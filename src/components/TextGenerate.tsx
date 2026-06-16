'use client';

import { motion } from 'framer-motion';

export default function TextGenerate({
  text,
  className = '',
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) {
  const words = text.split(' ');

  return (
    <span className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(2px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once }}
          transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
