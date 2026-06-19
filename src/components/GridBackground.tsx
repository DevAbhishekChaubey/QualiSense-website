export default function GridBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(18,38,51,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        contain: 'strict',
      }}
    />
  );
}
