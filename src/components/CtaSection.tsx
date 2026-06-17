'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ctaInView } from '@/lib/motion';

type CtaSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  id?: string;
  className?: string;
};

export default function CtaSection({
  eyebrow,
  title,
  description,
  actions,
  id,
  className = 'cta',
}: CtaSectionProps) {
  return (
    <section className={className} id={id}>
      <div className="container">
        <motion.div
          className="cta-box"
          initial={ctaInView.initial}
          whileInView={ctaInView.whileInView}
          viewport={{ once: true }}
          transition={ctaInView.transition}
        >
          <div>
            {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
          </div>
          {actions ? (
            <div className="cta-actions">{actions}</div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
