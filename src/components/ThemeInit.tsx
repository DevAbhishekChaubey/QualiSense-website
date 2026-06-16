'use client';

import { useEffect } from 'react';

export default function ThemeInit() {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  return null;
}
