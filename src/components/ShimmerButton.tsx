'use client';

import { motion } from 'framer-motion';

export default function ShimmerButton({
  children,
  href,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const Tag = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Tag
      {...props}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
          skewX: '-20deg',
        }}
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      {children}
    </Tag>
  );
}
