import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';
import './FloatingActions.css';

export const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/919677387448?text=${encodeURIComponent(
    'Hi GloovUp team, I am interested in building a high-converting website for my business.'
  )}`;

  return (
    <div className="floating-actions-container">
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="floating-btn back-to-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-floating-btn"
        aria-label="Chat with GloovUp on WhatsApp"
      >
        <span className="whatsapp-pulse-ping" />
        <MessageSquare size={22} className="whatsapp-icon" />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>
    </div>
  );
};
