'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { quoteInView } from '@/lib/motion';

type QuoteSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function QuoteSection({ children, className = 'section' }: QuoteSectionProps) {
  return (
    <section className={className}>
      <div className="container">
        <motion.div
          initial={quoteInView.initial}
          whileInView={quoteInView.whileInView}
          viewport={{ once: true }}
          transition={quoteInView.transition}
        >
          <div className="quote">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
