import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    document.body.classList.add('cursor-host');

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target;
      setHovering(!!t.closest('a, button, [data-cursor="hover"]'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.body.classList.remove('cursor-host');
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block transition-transform duration-100 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`,
      }}
    >
      <div
        className={`rounded-full border-2 transition-all duration-200 ${
          hovering ? 'w-10 h-10 border-[#1877F2] bg-[#1877F2]/10' : 'w-5 h-5 border-[#1877F2]'
        }`}
        style={{ boxShadow: '0 0 12px rgba(24,119,242,0.6)' }}
      />
    </div>
  );
}