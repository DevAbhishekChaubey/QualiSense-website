'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { href: '/product', label: 'Product' },
  { href: '/agencies', label: 'For Agencies' },
  { href: '/brands', label: 'For Brand Teams' },
  { href: '/#difference', label: 'Why Qualisense' },
  { href: '/security', label: 'Security' },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
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

    const handleScroll = () => {
      const currentHash = window.location.hash;
      if (!currentHash) {
        // No hash, just set active state based on path, don't clear everything
        setActiveHref(getActiveHref(pathname, currentHash));
        return;
      }

      // Check if we're actually at the section (only for hash links!)
      const element = document.querySelector(currentHash);
      if (!element) {
        // No element, set active state based on path
        setActiveHref(getActiveHref(pathname, currentHash));
        return;
      }

      const rect = element.getBoundingClientRect();
      // Be more generous about when we're "at" the section
      const isNearElement = rect.top <= 400 && rect.bottom >= -100;

      if (isNearElement) {
        // If near, keep hash link active
        setActiveHref(pathname + currentHash);
      } else {
        // Otherwise, set active state based on current path, NOT blank!
        setActiveHref(getActiveHref(pathname, ''));
      }
    };

    window.addEventListener('hashchange', handleHashAndPath);
    window.addEventListener('popstate', handleHashAndPath);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial and pathname-based sync
    handleHashAndPath();

    return () => {
      window.removeEventListener('hashchange', handleHashAndPath);
      window.removeEventListener('popstate', handleHashAndPath);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href.includes('#')) {
      const [linkPath, linkHash] = href.split('#');
      if (linkPath === pathname) {
        // Same page hash link - handle manually
        e.preventDefault();
        const element = document.getElementById(linkHash);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
          setActiveHref(href);
        }
      } else {
        // Cross page - let Next.js handle it normally
        setActiveHref(href);
        // We'll handle the scroll when we get to the page
      }
    } else {
      // Regular link - just set active href
      setActiveHref(href);
    }
  };

  const handleClearActive = () => {
    setActiveHref('');
  };

  const handleToggle = () => {
    document.querySelector('.nav')?.classList.toggle('open');
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    // Only prevent default if we're already on home page
    if (pathname === '/') {
      e.preventDefault();
      handleClearActive();
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (window.location.hash) {
        window.history.pushState(null, '', pathname);
      }
    } else {
      // On other pages, let Next.js handle navigation normally
      // Just clear active state and let it go
      handleClearActive();
      // We'll let PageTransition handle scrolling to top when it gets there
    }
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" onClick={(e) => handleLogoClick(e)}>
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
                  onClick={(e) => handleLinkClick(link.href, e)}
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
