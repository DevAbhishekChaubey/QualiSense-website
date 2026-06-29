'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoLink from '@/components/LogoLink';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NAV_LINKS, getNavDemoLabel } from '@/lib/navigation';

export default function Nav() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState('');
  const demoLabel = getNavDemoLabel(pathname);

  const getActiveHref = (path: string, currentHash: string) => {
    for (const link of NAV_LINKS) {
      if (link.href.includes('#')) {
        const [linkPath, linkHash] = link.href.split('#');
        if (path === linkPath && currentHash === '#' + linkHash) {
          return link.href;
        }
      } else if (path.startsWith(link.href)) {
        return link.href;
      }
    }
    return '';
  };

  useEffect(() => {
    const handleHashAndPath = () => {
      setActiveHref(getActiveHref(pathname, window.location.hash));
    };

    const handleScroll = () => {
      const currentHash = window.location.hash;
      if (!currentHash) {
        setActiveHref(getActiveHref(pathname, currentHash));
        return;
      }

      const element = document.querySelector(currentHash);
      if (!element) {
        setActiveHref(getActiveHref(pathname, currentHash));
        return;
      }

      const rect = element.getBoundingClientRect();
      const isNearElement = rect.top <= 400 && rect.bottom >= -100;

      setActiveHref(
        isNearElement ? pathname + currentHash : getActiveHref(pathname, '')
      );
    };

    window.addEventListener('hashchange', handleHashAndPath);
    window.addEventListener('popstate', handleHashAndPath);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleHashAndPath();

    return () => {
      window.removeEventListener('hashchange', handleHashAndPath);
      window.removeEventListener('popstate', handleHashAndPath);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    document.querySelector('.nav')?.classList.remove('open');

    if (!href.includes('#')) {
      setActiveHref(href);
      return;
    }

    const [linkPath, linkHash] = href.split('#');
    if (linkPath === pathname) {
      e.preventDefault();
      const element = document.getElementById(linkHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setActiveHref(href);
      }
      return;
    }

    setActiveHref(href);
  };

  const handleClearActive = () => setActiveHref('');

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <LogoLink priority onBeforeNavigate={handleClearActive} />
        <div className="nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ position: 'relative' }}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                {link.label}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      borderRadius: 1,
                      background: 'var(--primary)',
                      transformOrigin: 'center',
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
          <div className="nav-mobile-actions">
            <Link
              className="nav-mobile-action"
              href="/pricing"
              onClick={(e) => { handleClearActive(); handleLinkClick('/pricing', e); }}
            >
              Pricing
            </Link>
            <Link
              className="btn btn-primary nav-mobile-action"
              href="/pricing#demo"
              onClick={(e) => { handleClearActive(); handleLinkClick('/pricing#demo', e); }}
            >
              {demoLabel}
            </Link>
          </div>
        </div>
        <div className="nav-actions">
          <Link className="btn btn-ghost nav-pricing" href="/pricing" onClick={(e) => { handleClearActive(); handleLinkClick('/pricing', e); }}>Pricing</Link>
          <a className="btn btn-ghost" href="https://lab.quali-sense.ai/" target="_blank" rel="noopener noreferrer">Sign in</a>
          <Link className="btn btn-primary" href="/pricing#demo" onClick={(e) => { handleClearActive(); handleLinkClick('/pricing#demo', e); }}>{demoLabel}</Link>
          <button className="mobile-toggle" aria-label="Open menu" onClick={() => document.querySelector('.nav')?.classList.toggle('open')}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
