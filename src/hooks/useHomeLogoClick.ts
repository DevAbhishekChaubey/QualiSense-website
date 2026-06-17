'use client';

import { usePathname } from 'next/navigation';
import { useRefresh } from '@/contexts/RefreshContext';

export function useHomeLogoClick(onBeforeRefresh?: () => void) {
  const pathname = usePathname();
  const { triggerRefresh } = useRefresh();

  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    onBeforeRefresh?.();

    if (pathname === '/') {
      e.preventDefault();
      triggerRefresh();
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (window.location.hash) {
          window.history.pushState(null, '', pathname);
        }
      }, 50);
    }
  };
}
