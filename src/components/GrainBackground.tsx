'use client';

import { useEffect, useRef } from 'react';

export default function GrainBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * 0.5;
      canvas.height = window.innerHeight * 0.5;
      draw();
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      const image = ctx.createImageData(w, h);
      for (let i = 0; i < image.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        image.data[i] = v;
        image.data[i + 1] = v;
        image.data[i + 2] = v;
        image.data[i + 3] = 6;
      }
      ctx.putImageData(image, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 9998,
        pointerEvents: 'none',
        opacity: 0.5,
        imageRendering: 'pixelated',
      }}
    />
  );
}
