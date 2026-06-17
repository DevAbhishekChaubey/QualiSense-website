const GRAIN_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#n)"/>
  </svg>`
)}`;

export default function GrainBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 9998,
        pointerEvents: 'none',
        opacity: 0.5,
        backgroundImage: `url("${GRAIN_SVG}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '50% 50%',
        imageRendering: 'pixelated',
      }}
    />
  );
}
