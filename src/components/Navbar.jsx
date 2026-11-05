import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './Navbar.css';

export const Navbar = () => {
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);

          const navTargets = siteData.navLinks.map(link => {
            const el = document.querySelector(link.href);
            return { href: link.href, el };
          });

          const scrollPosition = window.scrollY + 140;
          for (let i = navTargets.length - 1; i >= 0; i--) {
            const target = navTargets[i];
            if (target.el && target.el.offsetTop <= scrollPosition) {
              setActiveSection(target.href);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="container">
          <nav className="navbar-container" aria-label="Main Navigation">
            {/* Official GloovUp Brand Lockup - Matching User's Image 2 in Blue */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="navbar-brand-lockup"
              aria-label="GloovUp Home"
            >
              <div className="brand-inline-wordmark">
                <img
                  src="/images/gloovup-g-pure-blue.png"
                  alt="G"
                  className="brand-inline-g-icon"
                  loading="eager"
                />
                <span className="brand-inline-text">loov Up</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <ul className="navbar-links" role="menubar">
              {siteData.navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href} role="none">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                      role="menuitem"
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="nav-active-indicator"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Header Action Controls */}
            <div className="navbar-actions">
              {/* Desktop-only Book Consultation button (Hidden on tablet/mobile) */}
              <button
                onClick={() => openBooking()}
                className="btn btn-primary navbar-cta desktop-only-cta"
              >
                <span>{siteData.header.ctaText}</span>
                <ArrowRight size={16} className="btn-arrow" />
              </button>

              {/* Mobile/Tablet Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-toggle-btn"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Animated Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="container mobile-drawer-container">
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mobile-menu-drawer"
              >
                <div className="mobile-menu-content">
                  <ul className="mobile-nav-list">
                    {siteData.navLinks.map((link, idx) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`mobile-nav-item ${activeSection === link.href ? 'mobile-active' : ''}`}
                        >
                          <span>{link.label}</span>
                          <ArrowRight size={16} opacity={activeSection === link.href ? 1 : 0.4} />
                        </a>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mobile-cta-wrapper">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openBooking();
                      }}
                      className="btn btn-primary w-full mobile-drawer-cta-btn"
                    >
                      <Sparkles size={16} />
                      <span>{siteData.header.ctaText}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for closing mobile menu on outside tap */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
