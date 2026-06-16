'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let x = 0, y = 0;
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const animate = () => {
      x += (target.x - x) * 0.08;
      y += (target.y - y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate(${x - 75}px, ${y - 75}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
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
        transform: 'translate(-75px, -75px)',
      }}
    />
  );
}
