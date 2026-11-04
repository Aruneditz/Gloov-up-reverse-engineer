import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './BookingOfferSection.css';

export const BookingOfferSection = () => {
  const { openBooking } = useBooking();
  const booking = siteData.booking;

  const [timeLeft, setTimeLeft] = useState(booking.countdownDurationSeconds || 217800);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n) => n.toString().padStart(2, '0');

  return (
    <section id="offer" className="booking-offer-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="offer-hero-card"
        >
          {/* Background Ambient Lighting */}
          <div className="offer-glow-layer" aria-hidden="true" />

          <div className="offer-content-grid">
            {/* Left Content Column */}
            <div className="offer-info-col">
              <div className="section-badge offer-badge">
                <Sparkles size={13} />
                <span>Special Opportunity</span>
              </div>

              <h2 className="offer-main-title">
                {booking.title} <span className="text-gradient-cyan">{booking.subtitle}</span>{' '}
                <span className="price-tag-jumbo">{booking.price}</span>
              </h2>

              <p className="offer-desc">{booking.description}</p>

              {/* 4 Core Pillars */}
              <div className="offer-features-list">
                {booking.features.map((feature) => (
                  <div key={feature} className="offer-feature-item">
                    <CheckCircle2 size={18} className="feature-check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="offer-actions-group">
                <button
                  onClick={() => openBooking()}
                  className="btn btn-teal offer-btn-primary"
                >
                  <span>{booking.ctaText}</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={booking.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary offer-btn-secondary"
                >
                  <MessageSquare size={17} />
                  <span>{booking.secondaryCtaText}</span>
                </a>
              </div>
            </div>

            {/* Right Card Column: Countdown + Scarcity */}
            <div className="offer-timer-col">
              <div className="timer-showcase-box">
                <div className="timer-badge">
                  <Clock size={15} />
                  <span>LIMITED PROMOTION TIMELINE</span>
                </div>

                <div className="countdown-grid-luxury">
                  <div className="luxury-time-cell">
                    <span className="time-val">{pad(days)}</span>
                    <span className="time-lbl">DAYS</span>
                  </div>
                  <span className="time-divider">:</span>
                  <div className="luxury-time-cell">
                    <span className="time-val">{pad(hours)}</span>
                    <span className="time-lbl">HOURS</span>
                  </div>
                  <span className="time-divider">:</span>
                  <div className="luxury-time-cell">
                    <span className="time-val">{pad(minutes)}</span>
                    <span className="time-lbl">MINUTES</span>
                  </div>
                  <span className="time-divider">:</span>
                  <div className="luxury-time-cell">
                    <span className="time-val">{pad(seconds)}</span>
                    <span className="time-lbl">SECONDS</span>
                  </div>
                </div>

                <div className="scarcity-box">
                  <div className="scarcity-pulse-dot" />
                  <span className="scarcity-text">
                    Only <strong className="text-brand-teal">{booking.slotsLeft} slots remaining</strong> at this price point
                  </span>
                </div>

                <div className="money-back-guarantee-pill">
                  <ShieldCheck size={16} className="text-brand-teal" />
                  <span>100% Risk-Free Reservation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
