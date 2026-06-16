'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.85 }}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'inherit',
        width: 36,
        height: 36,
        borderRadius: 10,
        display: 'grid',
        placeItems: 'center',
        fontSize: '1.1rem',
        position: 'relative',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ position: 'absolute' }}
        >
          {dark ? '☀️' : '🌙'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
