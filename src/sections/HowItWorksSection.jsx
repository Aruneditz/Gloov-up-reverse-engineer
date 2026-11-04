import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, FileText, Code2, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './HowItWorksSection.css';

const iconMap = {
  CalendarCheck,
  FileText,
  Code2,
  Rocket
};

export const HowItWorksSection = () => {
  const { openBooking } = useBooking();
  const process = siteData.howItWorks;

  return (
    <section id="process" className="how-it-works-section">
      <div className="container">
        {/* Header */}
        <div className="process-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Sparkles size={13} />
            <span>{process.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="process-title"
          >
            {process.title}{' '}
            <span className="text-gradient">{process.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="process-subtitle"
          >
            {process.subtitle}
          </motion.p>
        </div>

        {/* 4 Connected Process Steps */}
        <div className="process-steps-track">
          <div className="process-track-line" aria-hidden="true" />

          <div className="process-steps-grid">
            {process.steps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Rocket;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="process-step-card"
                >
                  <div className="step-number-tag">{step.number}</div>

                  <div className="step-icon-frame">
                    <Icon size={26} className="step-icon" />
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="process-footer-cta"
        >
          <div className="process-cta-box">
            <span className="process-cta-text">Ready to kick off Step 1 with our team today?</span>
            <button
              onClick={() => openBooking()}
              className="btn btn-primary"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
