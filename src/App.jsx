import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomDock from './components/MobileBottomDock';
import LiveDemandToast from './components/LiveDemandToast';
import ReservationModal from './components/ReservationModal';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import ShowcasePage from './pages/ShowcasePage';
import PricingPage from './pages/PricingPage';
import WhyUsPage from './pages/WhyUsPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogPage from './pages/BlogPage';
import BookPage from './pages/BookPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  // Dynamic Interactive Mouse Spotlight Effect in Electric Indigo
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const handleOpenBooking = (plan = null) => {
    if (plan) setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-gray-100 flex flex-col font-sans selection:bg-primary/40 selection:text-white relative overflow-x-hidden cyber-matrix">
        
        {/* =========================================================================
            COSMIC ATMOSPHERE & AMBIENT GLOW EFFECTS (Global Layer)
            ========================================================================= */}
        
        {/* Dynamic Interactive Mouse Spotlight in Proper Blue */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.16), rgba(37, 99, 235, 0.08), transparent 70%)`,
          }}
        />

        {/* Ambient Floating Aurora Glow 1 (Top Hero Royal Blue) */}
        <div 
          className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-600/20 via-blue-800/15 to-transparent rounded-full blur-[160px] animate-pulse-slow -z-10" 
          aria-hidden="true"
        />

        {/* Ambient Floating Aurora Glow 2 (Mid-Right Electric Blue) */}
        <div 
          className="pointer-events-none fixed top-1/3 -right-48 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[170px] animate-float -z-10" 
          aria-hidden="true"
        />

        {/* Ambient Floating Aurora Glow 3 (Bottom-Left Soft Ice Blue) */}
        <div 
          className="pointer-events-none fixed -bottom-32 -left-48 w-[700px] h-[600px] bg-blue-500/12 rounded-full blur-[180px] animate-float-reverse -z-10" 
          aria-hidden="true"
        />

        {/* =========================================================================
            PERSISTENT MULTI-PAGE NAVIGATION & CORE LAYOUT
            ========================================================================= */}
        
        {/* Clean Logo Header without '2.0' badge */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Page Routes */}
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/showcase" element={<ShowcasePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/pricing" element={<PricingPage onOpenBooking={handleOpenBooking} onSelectPlan={handleSelectPlan} />} />
            <Route path="/why-us" element={<WhyUsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/reviews" element={<ReviewsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/blog" element={<BlogPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/book" element={<BookPage preselectedPlan={selectedPlan} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Laser Divider before Footer */}
        <div className="laser-divider relative z-10" />

        {/* Global Footer with Official SVG Logos & Direct Working Contact Links */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Persistent Mobile Bottom Conversion Dock */}
        <MobileBottomDock onOpenBooking={() => handleOpenBooking()} />

        {/* Subtle Live Social Activity Ticker */}
        <LiveDemandToast onOpenBooking={() => handleOpenBooking()} />

        {/* ₹1 Reservation Terminal Modal with Confetti & Direct WhatsApp Connection */}
        <ReservationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preselectedPlan={selectedPlan}
        />

      </div>
    </Router>
  );
}
