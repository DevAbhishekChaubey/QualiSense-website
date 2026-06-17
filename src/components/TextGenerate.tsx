'use client';

import { motion } from 'framer-motion';
import { textWord } from '@/lib/motion';

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
          initial={textWord.initial}
          whileInView={textWord.whileInView}
          viewport={{ once }}
          transition={{ ...textWord.transition, delay: i * textWord.wordDelay }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
