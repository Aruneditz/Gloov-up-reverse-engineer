import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-2xl border-b border-primary/30 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_1px_15px_rgba(99,102,241,0.2)]' 
        : 'bg-background/70 backdrop-blur-xl py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Logo without '2.0' badge */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center font-black text-xl text-white shadow-glow-sm group-hover:scale-105 transition-transform">
              G
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white flex items-center">
              {siteData.header.logoText}
              <span className="text-primary-glow ml-1">{siteData.header.logoHighlight}</span>
            </span>
          </Link>

          {/* Desktop Multi-Page Nav Links with Glowing Active Indicator */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-surface/90 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {siteData.navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-glow font-extrabold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button with Glowing Effects */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/book"
              className="btn-glow-primary px-5 py-2.5 rounded-xl text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              <span>Reserve ₹1 Slot</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-surface border border-white/10 text-gray-300 hover:text-white shadow-md"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Glass Blur and Neon Trim */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-background/95 backdrop-blur-2xl border-b border-primary/30 p-6 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-semibold text-primary-glow">⚡ 7 Project Slots Available</span>
            <span className="text-xs text-gray-400">Limited Monthly Offer</span>
          </div>

          <div className="flex flex-col gap-1">
            {siteData.navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2.5 px-3 rounded-xl text-sm font-bold transition-all ${
                    isActive ? 'bg-primary/25 text-white border border-primary/40 shadow-glow-sm' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/book"
              className="btn-glow-primary w-full py-3 rounded-xl text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Lock In My Slot for ₹1</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919677387448"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-surface border border-white/15 text-gray-200 text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
