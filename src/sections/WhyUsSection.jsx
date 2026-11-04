import React, { useState } from 'react';
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
  MessageCircle,
  Send,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  X
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

const SUGGESTED_QUERIES = [
  "Custom pricing & package offers",
  "Can you launch our website in 7 days?",
  "E-commerce & payment gateway setup",
  "Do you redesign existing websites?",
  "SEO optimization & Google ranking"
];

export const WhyUsSection = () => {
  const whyUs = siteData.whyUs;
  const [query, setQuery] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleQuerySubmit = (e) => {
    if (e) e.preventDefault();
    const finalQuery = query.trim() || 'Hi GloovUp! I have a question regarding my website project.';
    const whatsappUrl = `https://wa.me/919677387448?text=${encodeURIComponent(
      `Hi GloovUp Team, I have a query from your website: "${finalQuery}"`
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  const handleChipClick = (suggestedText) => {
    setQuery(suggestedText);
    const whatsappUrl = `https://wa.me/919677387448?text=${encodeURIComponent(
      `Hi GloovUp Team, I have a query from your website: "${suggestedText}"`
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

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
                transition={{ duration: 0.45, delay: idx * 0.05 }}
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

        {/* Interactive "Any Query?" Direct Search & WhatsApp Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="why-query-hub"
        >
          <div className="query-hub-header">
            <div className="query-badge">
              <MessageCircle size={14} className="query-badge-icon" />
              <span>Direct Instant Connect</span>
            </div>
            <h3 className="query-hub-title">
              Have Any Query? <span className="text-gradient">Ask Directly</span>
            </h3>
            <p className="query-hub-subtitle">
              Type your custom requirement or question below. Our senior tech architect will reply instantly.
            </p>
          </div>

          <form onSubmit={handleQuerySubmit} className="query-search-form">
            <div className="query-input-wrap">
              <Search size={20} className="query-input-icon" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask any question about your website project (e.g. pricing, features, timeline)..."
                className="query-input"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="query-clear-btn"
                  aria-label="Clear query"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button type="submit" className="query-submit-btn">
              <MessageCircle size={18} />
              <span>Send Query</span>
              <Send size={16} />
            </button>
          </form>

          {/* Quick Clickable Suggestions */}
          <div className="query-suggestions">
            <span className="suggestions-label">Popular Queries:</span>
            <div className="suggestions-chips">
              {SUGGESTED_QUERIES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleChipClick(item)}
                  className="suggestion-chip"
                >
                  <span>{item}</span>
                  <ArrowRight size={13} />
                </button>
              ))}
            </div>
          </div>

          {/* Direct Contact Footer strip */}
          <div className="query-hub-footer">
            <div className="direct-item">
              <CheckCircle2 size={16} className="text-cyan-accent" />
              <span>Instant Response • Average reply in 5 mins</span>
            </div>
            <div className="direct-item">
              <PhoneCall size={16} className="text-violet-accent" />
              <a href="tel:+919677387448" className="direct-phone-link">
                Direct Solution Architect Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
