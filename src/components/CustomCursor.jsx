import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

export const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth fluid spring physics for the ambient spotlight
  const glowX = useSpring(0, { stiffness: 220, damping: 28 });
  const glowY = useSpring(0, { stiffness: 220, damping: 28 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    setIsEnabled(true);

    const handleMouseMove = (e) => {
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('.service-card') ||
        target.closest('.why-card') ||
        target.closest('.pricing-card') ||
        target.closest('.portfolio-card') ||
        target.closest('.browser-mockup') ||
        target.closest('.video-review-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [glowX, glowY]);

  if (!isEnabled) return null;

  return (
    <div className="cursor-glow-container" aria-hidden="true">
      {/* Primary Ambient Spotlight Glow - Smooth, elegant, no hard dot */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isClicking ? 0.85 : isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.9 : 0.65
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="cursor-ambient-spotlight"
      />

      {/* Subtle Micro Luminescence - Gentle focal aura on interactive hover */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovered ? 1.4 : 0.8,
          opacity: isHovered ? 0.85 : 0.35
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="cursor-focal-glow"
      />
    </div>
  );
};
