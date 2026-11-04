import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, MessageSquareQuote, Video, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';
import { VideoModal } from '../components/VideoModal';
import './TestimonialsSection.css';

export const TestimonialsSection = () => {
  const testimonials = siteData.testimonials;
  const [activeTab, setActiveTab] = useState('text'); // 'text' | 'video'
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Sparkles size={13} />
            <span>{testimonials.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="testimonials-title"
          >
            {testimonials.title}{' '}
            <span className="text-gradient">{testimonials.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="testimonials-subtitle"
          >
            Real feedback from verified founders, store owners, and entrepreneurs whose businesses grew with GloovUp.
          </motion.p>

          {/* Tab Switcher */}
          <div className="testimonial-tabs">
            <button
              onClick={() => setActiveTab('text')}
              className={`test-tab-btn ${activeTab === 'text' ? 'tab-active' : ''}`}
            >
              <MessageSquareQuote size={16} />
              <span>Written Reviews ({testimonials.textReviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('video')}
              className={`test-tab-btn ${activeTab === 'video' ? 'tab-active' : ''}`}
            >
              <Video size={16} />
              <span>Video Stories ({testimonials.videoReviews.length})</span>
            </button>
          </div>
        </div>

        {/* Google Reviews Trust Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="google-trust-bar"
        >
          <div className="google-left">
            <div className="google-logo-badge">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
            </div>
            <div className="google-rating-group">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" fill="#FFAA33" stroke="#FFAA33" />
                ))}
              </div>
              <span className="google-score">{testimonials.googleReview.rating} Rating</span>
              <span className="google-ver-badge">Verified Business Reviews</span>
            </div>
          </div>

          <a
            href={testimonials.googleReview.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary google-action-btn"
          >
            <span>{testimonials.googleReview.buttonText}</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Content Tabs */}
        {activeTab === 'text' ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="testimonials-grid"
          >
            {testimonials.textReviews.map((rev, idx) => (
              <motion.div
                key={rev.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="testimonial-card"
              >
                <div className="testimonial-card-header">
                  <div className="reviewer-avatar">
                    <span>{rev.initials}</span>
                  </div>
                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">{rev.name}</h4>
                    <span className="reviewer-role">{rev.role}</span>
                  </div>
                  <div className="review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#00E599" stroke="#00E599" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-text">"{rev.text}"</p>

                <div className="testimonial-footer-tag">
                  <CheckCircle2 size={13} className="text-brand-teal" />
                  <span>Verified Client Partner</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="video-reviews-grid"
          >
            {testimonials.videoReviews.map((vid, idx) => (
              <motion.div
                key={vid.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="video-review-card"
                onClick={() => setSelectedVideo(vid)}
              >
                <div className="video-thumb-frame">
                  <img src={vid.thumbnailUrl} alt={vid.title} className="video-thumb-img" />
                  <div className="video-play-overlay">
                    <div className="play-button-pulse">
                      <Play size={24} fill="#FFFFFF" className="play-icon" />
                    </div>
                  </div>
                  <span className="video-business-tag">{vid.business}</span>
                </div>

                <div className="video-card-meta">
                  <h4 className="video-card-title">{vid.title}</h4>
                  <p className="video-card-name">{vid.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
};
