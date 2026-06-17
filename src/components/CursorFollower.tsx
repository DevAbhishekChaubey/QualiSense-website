'use client';

import { useEffect, useRef } from 'react';

const SETTLE_THRESHOLD = 0.5;
const LERP = 0.08;
const HALO_OFFSET = 75;

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!media.matches) return;

    let raf = 0;
    let animating = false;
    let x = 0;
    let y = 0;
    const target = { x: 0, y: 0 };

    const applyTransform = () => {
      if (ref.current) {
        ref.current.style.transform = `translate(${x - HALO_OFFSET}px, ${y - HALO_OFFSET}px)`;
      }
    };

    const animate = () => {
      x += (target.x - x) * LERP;
      y += (target.y - y) * LERP;
      applyTransform();

      if (
        Math.abs(target.x - x) > SETTLE_THRESHOLD ||
        Math.abs(target.y - y) > SETTLE_THRESHOLD
      ) {
        raf = requestAnimationFrame(animate);
        return;
      }

      x = target.x;
      y = target.y;
      applyTransform();
      animating = false;
    };

    const startAnimation = () => {
      if (animating) return;
      animating = true;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      startAnimation();
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        animating = false;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 150,
        height: 150,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(118,228,212,0.08), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(-${HALO_OFFSET}px, -${HALO_OFFSET}px)`,
      }}
    />
  );
}
