import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Zap,
  Sparkles,
  Globe,
  Crown,
  Rocket,
  ShoppingBag,
  TrendingUp,
  CreditCard,
  Layout,
  BarChart3,
  Clock,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Table
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './PricingSection.css';

const iconMap = {
  Rocket,
  Sparkles,
  Globe,
  Zap,
  Crown,
  ShoppingBag,
  TrendingUp,
  Layout,
  CreditCard,
  BarChart3
};

export const PricingSection = () => {
  const { openBooking } = useBooking();
  const pricing = siteData.packages;

  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' | 'ecommerce'
  const [showComparison, setShowComparison] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const packagesList = activeTab === 'portfolio'
    ? pricing.portfolioPackages
    : pricing.ecommercePackages;

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectPackage = (pkg) => {
    const serviceType = activeTab === 'portfolio'
      ? 'Service-Based Business Website'
      : 'Product-Based Online Store';
    openBooking(pkg, serviceType);
  };

  return (
    <section id="packages" className="pricing-section">
      <div className="container">
        {/* Section Header */}
        <div className="pricing-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Sparkles size={13} />
            <span>{pricing.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pricing-title"
          >
            {pricing.title}{' '}
            <span className="text-gradient">{pricing.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pricing-subtitle"
          >
            {pricing.subtitle}
          </motion.p>

          {/* Service Type Switcher Tabs */}
          <div className="pricing-controls">
            <div className="pricing-tabs-pills">
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`pricing-tab-btn ${activeTab === 'portfolio' ? 'tab-active' : ''}`}
              >
                <Globe size={16} />
                <span>Service & Business Websites ({pricing.portfolioPackages.length} Plans)</span>
              </button>

              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`pricing-tab-btn ${activeTab === 'ecommerce' ? 'tab-active' : ''}`}
              >
                <ShoppingBag size={16} />
                <span>E-Commerce & Online Stores ({pricing.ecommercePackages.length} Plans)</span>
              </button>
            </div>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="btn btn-secondary comparison-toggle-btn"
            >
              <Table size={16} />
              <span>{showComparison ? 'Hide Comparison Matrix' : 'Compare All Features'}</span>
            </button>
          </div>
        </div>

        {/* 4 Quick Value Highlights */}
        <div className="package-highlights-grid">
          {pricing.packageHighlights.map((hl) => {
            const Icon = iconMap[hl.iconName] || Zap;
            return (
              <div key={hl.title} className="highlight-mini-card">
                <div className="highlight-mini-icon">
                  <Icon size={18} />
                </div>
                <div className="highlight-mini-text">
                  <h4 className="highlight-mini-title">{hl.title}</h4>
                  <p className="highlight-mini-desc">{hl.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <motion.div layout className="pricing-cards-grid">
          <AnimatePresence mode="wait">
            {packagesList.map((pkg, idx) => {
              const Icon = iconMap[pkg.iconName] || Globe;
              const isRecommended = pkg.recommended;
              const isExpanded = !!expandedCards[pkg.id || pkg.name];
              const displayedFeatures = isExpanded ? pkg.features : pkg.features.slice(0, 5);

              return (
                <motion.div
                  layout
                  key={pkg.id || pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`pricing-card ${isRecommended ? 'pricing-card-recommended' : ''}`}
                >
                  {/* Recommended / Tier Badge */}
                  {pkg.badge && (
                    <div className="package-tier-badge">
                      <Sparkles size={12} />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div className="package-header">
                    <div className="package-icon-box">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="package-name">{pkg.name}</h3>
                      <p className="package-desc">{pkg.desc}</p>
                    </div>
                  </div>

                  {/* Pricing Display */}
                  <div className="package-pricing-wrap">
                    <div className="pricing-tag-row">
                      <span className="price-orig">{pkg.original}</span>
                      <span className="price-current">{pkg.price}</span>
                    </div>
                    <div className="package-sla-meta">
                      <span className="sla-chip">
                        <Clock size={12} />
                        {pkg.delivery}
                      </span>
                      <span className="sla-chip">
                        <Shield size={12} />
                        {pkg.support}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="package-features-block">
                    <p className="features-list-title">What's Included:</p>
                    <ul className="package-features-list">
                      {displayedFeatures.map((feat) => (
                        <li key={feat} className="package-feature-item">
                          <Check size={16} className="feature-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.features.length > 5 && (
                      <button
                        onClick={() => toggleExpand(pkg.id || pkg.name)}
                        className="features-expand-btn"
                      >
                        <span>{isExpanded ? 'Show less features' : `+${pkg.features.length - 5} more features`}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    )}
                  </div>

                  {/* CTA Action */}
                  <div className="package-cta-wrap">
                    <button
                      onClick={() => handleSelectPackage(pkg)}
                      className={`btn w-full ${isRecommended ? 'btn-teal' : 'btn-primary'}`}
                    >
                      <span>Choose Plan & Book for ₹1</span>
                      <ArrowRight size={16} />
                    </button>
                    <p className="package-micro-guarantee">
                      Reserve now for ₹1 • Full delivery start within 7 days
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Feature Comparison Matrix Table (Expandable) */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="comparison-matrix-wrapper"
            >
              <div className="comparison-table-container">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="th-feature">Plan Features & Deliverables</th>
                      {packagesList.map((pkg) => (
                        <th key={pkg.name} className="th-plan">
                          <div className="th-plan-name">{pkg.name}</div>
                          <div className="th-plan-price">{pkg.price}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-feature">Original & Offer Price</td>
                      {packagesList.map((pkg) => (
                        <td key={pkg.name} className="td-val">
                          <span className="table-orig">{pkg.original}</span>
                          <strong className="table-current">{pkg.price}</strong>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="td-feature">Delivery Timeline</td>
                      {packagesList.map((pkg) => (
                        <td key={pkg.name} className="td-val font-semibold">{pkg.delivery}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="td-feature">Post-Launch Support</td>
                      {packagesList.map((pkg) => (
                        <td key={pkg.name} className="td-val">{pkg.support}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="td-feature">Action</td>
                      {packagesList.map((pkg) => (
                        <td key={pkg.name} className="td-val">
                          <button
                            onClick={() => handleSelectPackage(pkg)}
                            className="btn btn-teal table-book-btn"
                          >
                            Book ₹1
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
