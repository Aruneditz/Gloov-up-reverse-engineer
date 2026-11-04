import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const glowRef = useRef(null);
  const rafId = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    // Completely disable on touch screens, mobile devices, and small screens to save 100% memory
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    if (isTouch) return;

    setIsEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Smooth 60fps lerp loop using standard requestAnimationFrame (zero react re-renders!)
    const loop = () => {
      const ease = 0.18; // smooth lag-free response
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="cursor-glow-container" aria-hidden="true">
      {/* High-Performance Hardware-Accelerated Ambient Spotlight */}
      <div ref={glowRef} className="cursor-ambient-spotlight" />
    </div>
  );
};
