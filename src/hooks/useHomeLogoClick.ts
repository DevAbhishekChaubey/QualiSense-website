'use client';

import { usePathname } from 'next/navigation';
import { useRefresh } from '@/contexts/RefreshContext';

export function useHomeLogoClick(onBeforeRefresh?: () => void) {
  const pathname = usePathname();
  const { triggerRefresh } = useRefresh();

  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    onBeforeRefresh?.();

    if (pathname === '/') {
      // Already on home — just scroll to top and clear any hash
      e.preventDefault();
      triggerRefresh();
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (window.location.hash) {
          window.history.pushState(null, '', '/');
        }
      }, 50);
    } else {
      // Navigating to home from another page — strip any lingering hash first
      // so the browser doesn't scroll to #difference (or any anchor) on arrival
      e.preventDefault();
      window.history.replaceState(null, '', window.location.pathname);
      window.location.href = '/';
    }
  };
}
