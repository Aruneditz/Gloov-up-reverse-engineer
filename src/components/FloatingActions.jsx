import React from 'react';
import { MessageSquare } from 'lucide-react';
import './FloatingActions.css';

export const FloatingActions = () => {
  const whatsappUrl = `https://wa.me/919677387448?text=${encodeURIComponent(
    'Hi GloovUp team, I am interested in building a high-converting website for my business.'
  )}`;

  return (
    <div className="floating-actions-container">
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
