'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GrainBackground = dynamic(() => import('@/components/GrainBackground'), { ssr: false });
const GridBackground = dynamic(() => import('@/components/GridBackground'), { ssr: false });
const Spotlight = dynamic(() => import('@/components/Spotlight'), { ssr: false });
const CursorFollower = dynamic(() => import('@/components/CursorFollower'), { ssr: false });

export default function DeferredEffects() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(enable, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(enable, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  return (
    <>
      <GrainBackground />
      <GridBackground />
      <Spotlight />
      <CursorFollower />
    </>
  );
}
