import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import './ProjectLightbox.css';

export const ProjectLightbox = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="lightbox-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lightbox-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Preview">
            <X size={20} />
          </button>

          {/* Device Mockup Header */}
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="browser-url-bar">
              <Globe size={13} className="text-cyan" />
              <span className="browser-url-text">{project.url}</span>
            </div>
          </div>

          {/* Project Image Preview */}
          <div className="lightbox-preview-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="lightbox-img"
            />
          </div>

          {/* Project Details Footer */}
          <div className="lightbox-footer">
            <div className="lightbox-info">
              <div className="lightbox-category-tag">
                <Sparkles size={13} />
                <span>{project.category}</span>
              </div>
              <h3 className="lightbox-title">{project.title}</h3>
              <p className="lightbox-desc">
                High-converting responsive digital solution designed, engineered, and deployed by GloovUp Studio.
              </p>
            </div>

            <div className="lightbox-actions">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Visit Live Website</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
