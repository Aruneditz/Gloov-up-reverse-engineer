import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';

export default function ReviewsPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">Client Reviews & Founder Stories</span>
        </div>
      </div>

      {/* Main Testimonials & Video Stories Component */}
      <Testimonials />

      {/* Regional Trust Breakdown */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Trusted Across Tamil Nadu & Worldwide
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              From local retail shops in Valangaiman to established corporate brands in Chennai and Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm transition-all backdrop-blur-xl">
              <span className="font-black text-2xl text-primary-glow block glow-text-primary">Chennai</span>
              <span className="text-xs text-gray-300 mt-1 block font-medium">180+ Completed Projects</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm transition-all backdrop-blur-xl">
              <span className="font-black text-2xl text-primary-glow block glow-text-primary">Madurai & South</span>
              <span className="text-xs text-gray-300 mt-1 block font-medium">140+ Business Websites</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm transition-all backdrop-blur-xl">
              <span className="font-black text-2xl text-primary-glow block glow-text-primary">Coimbatore</span>
              <span className="text-xs text-gray-300 mt-1 block font-medium">120+ E-Commerce Stores</span>
            </div>
            <div className="p-6 rounded-2xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm transition-all backdrop-blur-xl">
              <span className="font-black text-2xl text-primary-glow block glow-text-primary">Global / NRI</span>
              <span className="text-xs text-gray-300 mt-1 block font-medium">80+ International Clients</span>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/book"
              className="btn-glow-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider"
            >
              <span>Join 520+ Growing Brands for ₹1</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
