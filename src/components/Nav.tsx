'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/product', label: 'Product' },
  { href: '/agencies', label: 'For Agencies' },
  { href: '/brands', label: 'For Brand Teams' },
  { href: '/#difference', label: 'Why Qualisense' },
  { href: '/security', label: 'Security' },
];

export default function Nav() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState('');

  // Helper function to calculate active link based on pathname and hash
  const getActiveHref = (path: string, currentHash: string) => {
    for (const link of links) {
      if (link.href.includes('#')) {
        const [linkPath, linkHash] = link.href.split('#');
        if (path === linkPath && currentHash === '#' + linkHash) {
          return link.href;
        }
      } else {
        if (link.href === '/' ? path === '/' : path.startsWith(link.href)) {
          return link.href;
        }
      }
    }
    return '';
  };

  useEffect(() => {
    const handleHashAndPath = () => {
      const currentHash = window.location.hash;
      setActiveHref(getActiveHref(pathname, currentHash));
    };

    window.addEventListener('hashchange', handleHashAndPath);
    window.addEventListener('popstate', handleHashAndPath);
    
    // Initial and pathname-based sync
    handleHashAndPath();

    return () => {
      window.removeEventListener('hashchange', handleHashAndPath);
      window.removeEventListener('popstate', handleHashAndPath);
    };
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
  };

  const handleClearActive = () => {
    setActiveHref('');
  };

  const handleToggle = () => {
    document.querySelector('.nav')?.classList.toggle('open');
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" onClick={handleClearActive}>
          <span className="logo-mark">
            <img src="/logo-removebg-preview.png" alt="Qualisense" />
          </span>
        </Link>
        <div className="nav-links">
          {links.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ position: 'relative' }}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      borderRadius: 1,
                      background: 'var(--primary)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <Link className="btn btn-ghost nav-pricing" href="/pricing" onClick={handleClearActive}>Pricing</Link>
          <a className="btn btn-ghost" href="https://lab.quali-sense.ai/" target="_blank" rel="noopener noreferrer">Sign in</a>
          {pathname === '/security' ? (
            <Link className="btn btn-primary" href="/pricing#demo" onClick={handleClearActive}>Discuss requirements</Link>
          ) : (
            <Link className="btn btn-primary" href="/pricing#demo" onClick={handleClearActive}>Book a demo</Link>
          )}
          <button className="mobile-toggle" aria-label="Open menu" onClick={handleToggle}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
