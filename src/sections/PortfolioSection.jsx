import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, LayoutGrid } from 'lucide-react';
import { siteData } from '../data/siteData';
import { ProjectLightbox } from '../components/ProjectLightbox';
import './PortfolioSection.css';

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = siteData.hero.showcase;

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <LayoutGrid size={14} />
            <span>Featured Case Studies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="portfolio-title"
          >
            Engineered For Impact.{' '}
            <span className="text-gradient">Real Client Websites.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="portfolio-subtitle"
          >
            Explore live production websites built with modern design architecture, lightning-fast performance, and high-conversion UX.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-btn ${selectedCategory === cat ? 'filter-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <motion.div layout className="portfolio-bento-grid">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetric sizing: index 0 and 3 are wide cards
              const isLarge = idx === 0 || idx === 3;
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`portfolio-card ${isLarge ? 'portfolio-card-large' : ''}`}
                >
                  <div className="card-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <div className="card-overlay-actions">
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="action-icon-btn action-preview"
                          title="Quick Preview"
                          aria-label={`Preview ${project.title}`}
                        >
                          <Eye size={18} />
                          <span>Preview</span>
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-icon-btn action-visit"
                          title="Visit Website"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ExternalLink size={18} />
                          <span>Visit Live</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-top-meta">
                      <span className="card-category-tag">{project.category}</span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-direct-link"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-link-url">{project.url.replace('https://', '')}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {activeProjectModal && (
        <ProjectLightbox
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
};
