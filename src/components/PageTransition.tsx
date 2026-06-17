'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { pageTransition } from '@/lib/motion';

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
        window.scrollTo(0, 0);
      }
    };

    handleScroll();
    const timeout = setTimeout(handleScroll, 120);
    const timeout2 = setTimeout(handleScroll, 280);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
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
        window.scrollTo(0, 0);
      }
    };
    
    handleScroll();
    const timeout = setTimeout(handleScroll, 60);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
