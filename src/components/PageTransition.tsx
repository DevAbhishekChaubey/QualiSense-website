'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRefresh } from '@/contexts/RefreshContext';
import { pageTransition } from '@/lib/motion';
import { scrollToHashOrTop } from '@/lib/scroll';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { refresh } = useRefresh();
  const key = `${pathname}-${refresh}`;

  useEffect(() => {
    scrollToHashOrTop();
    const timeout = setTimeout(scrollToHashOrTop, 120);
    const timeout2 = setTimeout(scrollToHashOrTop, 280);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [pathname, refresh]);

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
