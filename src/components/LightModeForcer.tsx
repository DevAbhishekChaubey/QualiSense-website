'use client';

import { useEffect } from 'react';

export function LightModeForcer() {
  useEffect(() => {
    // Force light mode on the document
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.colorScheme = 'light';
    document.body.style.colorScheme = 'light';
    
    // Try to override any browser dark mode
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', 'light');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'color-scheme';
      newMeta.content = 'light';
      document.head.appendChild(newMeta);
    }
    
    // Remove any dark mode classes
    document.body.classList.remove('dark', 'dark-mode', 'theme-dark');
    document.documentElement.classList.remove('dark', 'dark-mode', 'theme-dark');
    
    console.log('Light mode forced');
  }, []);
  
  return null;
}
