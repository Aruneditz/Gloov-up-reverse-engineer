import React from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Zap,
  TrendingUp,
  Smartphone,
  Search,
  LifeBuoy,
  Cpu,
  Target,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { siteData } from '../data/siteData';
import './WhyUsSection.css';

const iconMap = {
  Palette,
  Zap,
  TrendingUp,
  Smartphone,
  Search,
  LifeBuoy,
  Cpu,
  Target
};

export const WhyUsSection = () => {
  const whyUs = siteData.whyUs;

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        {/* Header */}
        <div className="why-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Sparkles size={13} />
            <span>{whyUs.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="why-title"
          >
            {whyUs.title}{' '}
            <span className="text-gradient">{whyUs.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="why-subtitle"
          >
            We don't use generic drag-and-drop builders or outdated templates. Every solution is custom-coded for high conversion, high velocity, and scalable performance.
          </motion.p>
        </div>

        {/* 8 Features Bento Cards Grid */}
        <div className="why-cards-grid">
          {whyUs.items.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="why-card"
              >
                <div className="why-card-glow" />
                <div className="why-icon-box">
                  <Icon size={22} />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
