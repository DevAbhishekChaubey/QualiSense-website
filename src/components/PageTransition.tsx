'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ 
  children, 
  refresh = 0 
}: { 
  children: React.ReactNode;
  refresh?: number;
}) {
  const pathname = usePathname();
  const [key, setKey] = useState(`${pathname}-${refresh}`);
  
  useEffect(() => {
    setKey(`${pathname}-${refresh}`);
  }, [pathname, refresh]);

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // No hash, just scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Try immediately
    handleScroll();
    
    // Also try after a short delay to wait for page to render
    const timeout = setTimeout(handleScroll, 200);
    const timeout2 = setTimeout(handleScroll, 500);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [pathname, refresh]);

  // Also scroll to top or hash on initial mount
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    handleScroll();
    const timeout = setTimeout(handleScroll, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -20, scale: 0.98, filter: 'blur(6px)' }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
