import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import './FloatingActions.css';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
      {/* Floating Scroll Back to Top Button - Restored & Fixed */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-btn back-to-top-btn"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-floating-btn"
        aria-label="Chat with GloovUp"
      >
        <span className="whatsapp-pulse-ping" />
        <MessageSquare size={22} className="whatsapp-icon" />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>
    </div>
  );
};
