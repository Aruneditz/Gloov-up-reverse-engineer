import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Headphones, ThumbsUp, Sparkles, Award, Shield } from 'lucide-react';
import { siteData } from '../data/siteData';
import './AuthoritySection.css';

const iconMap = {
  Users,
  Globe,
  Headphones,
  ThumbsUp
};

const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(eased * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
};

export const AuthoritySection = () => {
  const authority = siteData.authority;

  return (
    <section className="authority-section">
      <div className="container">
        {/* Section Header */}
        <div className="authority-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Shield size={14} />
            <span>{authority.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="authority-title"
          >
            {authority.title}{' '}
            <span className="text-gradient">{authority.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="authority-subtitle"
          >
            {authority.subtitle}
          </motion.p>
        </div>

        {/* 4 Statistics Cards */}
        <div className="stats-grid">
          {authority.stats.map((stat, idx) => {
            const Icon = iconMap[stat.iconName] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="stat-card"
              >
                <div className="stat-card-glow" />
                <div className="stat-icon-wrapper">
                  <Icon size={24} className="stat-icon" />
                </div>
                <div className="stat-counter-wrap">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Enterprise Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="partners-strip"
        >
          <div className="partners-strip-label">
            <Sparkles size={14} className="text-cyan" />
            <span>GLOBAL STANDARDS & HIGH INTEGRATION ARCHITECTURE</span>
          </div>
          <div className="partners-tags-list">
            {authority.logos.map((logoName) => (
              <span key={logoName} className="partner-tag">
                {logoName}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
