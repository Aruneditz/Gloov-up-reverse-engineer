import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './FinalCTASection.css';

export const FinalCTASection = () => {
  const { openBooking } = useBooking();
  const cta = siteData.finalCTA;

  return (
    <section id="contact" className="final-cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="final-cta-card"
        >
          {/* Ambient Lighting Background */}
          <div className="final-cta-glow-1" aria-hidden="true" />
          <div className="final-cta-glow-2" aria-hidden="true" />

          <div className="final-cta-content">
            <div className="section-badge final-cta-badge">
              <Sparkles size={13} />
              <span>{cta.badge}</span>
            </div>

            <h2 className="final-cta-title">
              {cta.title} <span className="text-gradient">{cta.titleHighlight}</span>
            </h2>

            <p className="final-cta-subtitle">{cta.subtitle}</p>

            <div className="final-cta-actions">
              <button
                onClick={() => openBooking()}
                className="btn btn-primary final-btn-primary"
              >
                <span>{cta.ctaPrimary}</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={cta.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary final-btn-secondary"
              >
                <MessageSquare size={18} />
                <span>{cta.ctaSecondary}</span>
              </a>
            </div>

            <div className="final-cta-trust-note">
              <div className="trust-pulse-dot" />
              <span>Typical WhatsApp response time: <strong className="text-brand-teal">{cta.responseTime}</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
