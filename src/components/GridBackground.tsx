'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 40;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(18,38,51,0.04)';
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(18,38,51,0.03)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x <= canvas.width; x += spacing) {
        for (let y = 0; y <= canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
