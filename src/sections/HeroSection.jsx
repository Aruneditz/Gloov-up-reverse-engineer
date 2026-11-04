import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Flame, CheckCircle2, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './HeroSection.css';

export const HeroSection = () => {
  const { openBooking } = useBooking();
  const hero = siteData.hero;

  // Countdown timer initialized to original seconds (217800s ≈ 2d 12h 30m)
  const [timeLeft, setTimeLeft] = useState(217800);

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

  const scrollToPackages = (e) => {
    e.preventDefault();
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic Animated Ambient Glows */}
      <div className="hero-ambient-mesh" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb glow-orb-violet"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.55, 0.3],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb glow-orb-cyan"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb glow-orb-magenta"
        />
      </div>

      <div className="container hero-container">
        {/* Trust Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-badge-wrapper"
        >
          <div className="section-badge hero-trust-pill">
            <span className="pulse-dot" />
            <span>
              {hero.trustBadgeText} <strong className="highlight-white">{hero.trustHighlight}</strong> • 98% Client Satisfaction
            </span>
          </div>
        </motion.div>

        {/* Oversized Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-heading-wrapper"
        >
          <h1 className="hero-title">
            <span className="hero-title-line">Launch Your Business</span>
            <span className="hero-title-line">
              Website in Just{' '}
              <span className="hero-highlight-word">
                {hero.titleHighlight}
                <span className="highlight-underline" />
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hero-subtitle"
        >
          {hero.subtitle}
        </motion.p>

        {/* Promotional Offer Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="hero-promo-card"
        >
          <div className="promo-left">
            <div className="promo-badge-tag">
              <Flame size={14} className="tag-icon" />
              <span>LIMITED SLOT ONLY</span>
            </div>
            <div className="promo-discount-row">
              <span className="discount-pct">{hero.saveBadge}</span>
              <span className="discount-label">OFFER</span>
            </div>
            <span className="promo-sub-note">on all website packages</span>
          </div>

          <div className="promo-divider" />

          <div className="promo-center">
            <div className="promo-price-compare">
              <span className="price-old">{hero.originalPrice}</span>
              <span className="price-arrow">→</span>
              <span className="price-current">{hero.offerPrice}</span>
            </div>
            <div className="booking-one-rupee-pill">
              <CheckCircle2 size={13} />
              <span>Book now at just ₹1</span>
            </div>
          </div>

          <div className="promo-divider promo-divider-second" />

          {/* Countdown Clock */}
          <div className="promo-countdown">
            <div className="countdown-header">
              <Clock size={12} />
              <span>OFFER ENDS IN</span>
            </div>
            <div className="countdown-digits">
              <div className="timer-box">
                <span className="timer-val">{pad(days)}</span>
                <span className="timer-lbl">DAYS</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-box">
                <span className="timer-val">{pad(hours)}</span>
                <span className="timer-lbl">HRS</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-box">
                <span className="timer-val">{pad(minutes)}</span>
                <span className="timer-lbl">MINS</span>
              </div>
              <span className="timer-sep">:</span>
              <div className="timer-box">
                <span className="timer-val">{pad(seconds)}</span>
                <span className="timer-lbl">SECS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="hero-ctas"
        >
          <button
            onClick={() => openBooking()}
            className="btn btn-primary hero-btn-main"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={scrollToPackages}
            className="btn btn-secondary hero-btn-sub"
          >
            <span>{hero.ctaSecondary}</span>
          </button>
        </motion.div>

        {/* Live Booking Slots Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="hero-slots-tracker"
        >
          <div className="slots-header">
            <div className="slots-status">
              <span className="live-pulse" />
              <span className="slots-title">Limited Slots</span>
            </div>
            <span className="slots-count">{hero.joinedThisWeek}/30 Filled</span>
          </div>

          <div className="slots-progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(hero.joinedThisWeek / 30) * 100}%` }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
              className="slots-progress-fill"
            />
          </div>

          <p className="slots-note">
            Only <strong className="slots-highlight">{hero.slotsRemaining} left</strong> — book quickly before slots close
          </p>
        </motion.div>
      </div>
    </section>
  );
};
