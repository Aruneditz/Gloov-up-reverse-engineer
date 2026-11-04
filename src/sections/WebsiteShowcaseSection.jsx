import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Globe, Sparkles, Monitor } from 'lucide-react';
import './WebsiteShowcaseSection.css';

const SHOWCASE_ITEMS = [
  { id: 1, img: '/assets/website/w1.png', title: 'Luxury E-Commerce & Retail Portal' },
  { id: 2, img: '/assets/website/w2.png', title: 'Corporate Tech & SaaS Platform' },
  { id: 3, img: '/assets/website/w3.png', title: 'Creative Brand Studio Showcase' },
  { id: 4, img: '/assets/website/w4.png', title: 'Healthcare & Wellness Clinic Website' },
  { id: 5, img: '/assets/website/w5.png', title: 'Fashion & Lifestyle Boutique Store' },
  { id: 6, img: '/assets/website/w6.png', title: 'Modern Real Estate & Architecture' },
  { id: 7, img: '/assets/website/w7.png', title: 'Digital Agency & Growth Consulting' },
  { id: 8, img: '/assets/website/w8.png', title: 'High-Conversion Direct-to-Consumer Brand' },
  { id: 9, img: '/assets/website/w9.png', title: 'Artisanal Food & Hospitality Platform' },
  { id: 10, img: '/assets/website/w10.png', title: 'Fintech & Investment Advisory Portal' },
  { id: 11, img: '/assets/website/w11.png', title: 'Educational Academy & EdTech Platform' },
  { id: 12, img: '/assets/website/w12.png', title: 'Professional Services & Law Consultancy' },
  { id: 13, img: '/assets/website/w13.png', title: 'Automotive & Precision Engineering' }
];

const PORTFOLIO_EXTERNAL_URL = "https://gloovup.com/portfolio?category=Web+Development+Projects&q=&filter=all&subsub=all";

export const WebsiteShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance slides every 5.5 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SHOWCASE_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
  };

  const currentItem = SHOWCASE_ITEMS[currentIndex];

  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        {/* Header */}
        <div className="showcase-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Sparkles size={13} />
            <span>Original Portfolio Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="showcase-title"
          >
            Explore Our Recent{' '}
            <span className="text-gradient">Website Creations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="showcase-subtitle"
          >
            Real production websites crafted with bespoke digital design, lightning performance, and conversion-optimized architectures.
          </motion.p>
        </div>

        {/* Featured Browser Mockup Viewer */}
        <div
          className="showcase-viewer-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="showcase-nav-btn nav-btn-prev"
            aria-label="Previous Project"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            className="showcase-nav-btn nav-btn-next"
            aria-label="Next Project"
          >
            <ChevronRight size={22} />
          </button>

          {/* Browser Mockup Window */}
          <div className="browser-mockup">
            {/* Window Top Bar */}
            <div className="browser-topbar">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="browser-address-bar">
                <Globe size={13} className="browser-address-icon" />
                <span className="browser-address-text">
                  gloovup.com/showcase/project-{currentItem.id}.html
                </span>
              </div>

              <div className="browser-counter">
                {currentIndex + 1} / {SHOWCASE_ITEMS.length}
              </div>
            </div>

            {/* Browser Content Screen - Highly Optimized GPU Crossfade */}
            <div className="browser-screen">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="browser-image-wrap"
                >
                  <img
                    src={currentItem.img}
                    alt={currentItem.title}
                    className="browser-screenshot"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Hover Overlay with Action Button */}
                  <div className="browser-hover-overlay">
                    <div className="overlay-content">
                      <span className="overlay-tag">Client Project #{currentItem.id}</span>
                      <h4 className="overlay-title">{currentItem.title}</h4>
                      <a
                        href={PORTFOLIO_EXTERNAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-cta-btn no-underline"
                        style={{ textDecoration: 'none' }}
                      >
                        <span style={{ textDecoration: 'none' }}>View Live Project</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Interactive Thumbnail Carousel Strip */}
        <div className="showcase-thumbnail-strip">
          <div className="thumbnail-track">
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`thumbnail-card ${isActive ? 'thumb-active' : ''}`}
                  aria-label={`Jump to website ${item.id}`}
                >
                  <div className="thumb-browser-bar">
                    <span className="thumb-dot" />
                    <span className="thumb-dot" />
                    <span className="thumb-dot" />
                  </div>
                  <div className="thumb-img-wrap">
                    <img
                      src={item.img}
                      alt={`Thumbnail ${item.id}`}
                      className="thumb-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="thumb-label">
                    <span>Project {item.id}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action - Underline explicitly removed */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="showcase-footer-cta"
        >
          <p className="cta-prompt-text">Ready to see more of our work?</p>
          <a
            href={PORTFOLIO_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-view-all-btn no-underline"
            style={{ textDecoration: 'none' }}
          >
            <Monitor size={18} />
            <span style={{ textDecoration: 'none' }}>View Full Portfolio (100+ Projects)</span>
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
