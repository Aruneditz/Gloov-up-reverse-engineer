import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import './ClientMarquee.css';

export const ClientMarquee = () => {
  const brands = siteData.authority.clientBrands;
  const track1 = [...brands, ...brands, ...brands];
  const track2 = [...brands.slice().reverse(), ...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section className="client-marquee-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="marquee-header"
        >
          <h2 className="marquee-title">
            Our Trusted <span className="text-gradient-cyan">Clients</span>
          </h2>
          <p className="marquee-subtitle">
            Powering fast-growing digital brands, e-commerce stores, and high-impact businesses
          </p>
        </motion.div>
      </div>

      <div className="marquee-outer">
        {/* Track 1: Moving Left */}
        <div className="marquee-container marquee-row">
          <div className="marquee-track-left">
            {track1.map((brand, idx) => (
              <div key={`t1-${brand.name}-${idx}`} className="brand-logo-card">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="client-brand-img"
                  loading="lazy"
                />
                <span className="brand-label-tooltip">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right */}
        <div className="marquee-container marquee-row">
          <div className="marquee-track-right">
            {track2.map((brand, idx) => (
              <div key={`t2-${brand.name}-${idx}`} className="brand-logo-card">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="client-brand-img"
                  loading="lazy"
                />
                <span className="brand-label-tooltip">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
