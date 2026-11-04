import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import PlanQuiz from '../components/PlanQuiz';
import Packages from '../components/Packages';

export default function PricingPage({ onOpenBooking, onSelectPlan }) {
  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">Pricing, Packages & Quiz</span>
        </div>
      </div>

      {/* 1. Interactive 15-Second Plan Finder Quiz */}
      <PlanQuiz onSelectPlan={onSelectPlan} />

      {/* 2. Full 9 Transparent Packages with Segmented Switcher & Comparison Matrix */}
      <Packages onSelectPlan={onSelectPlan} />

      {/* Bottom Conversion Reassurance */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-primary/35 shadow-[0_0_40px_rgba(99,102,241,0.25)] backdrop-blur-xl">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Every Single Package Includes:
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-300 text-left">
              <div className="p-4 rounded-xl bg-surface-elevated/80 border border-white/5 shadow-inner">
                <span className="font-bold text-primary-glow block text-sm mb-1">✓ 100% Code Ownership</span>
                <span>You receive your complete source code with no platform lock-in.</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-elevated/80 border border-white/5 shadow-inner">
                <span className="font-bold text-primary-glow block text-sm mb-1">✓ 7-Day Guaranteed Launch</span>
                <span>We strictly respect delivery timelines with zero unnecessary delays.</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-elevated/80 border border-white/5 shadow-inner">
                <span className="font-bold text-primary-glow block text-sm mb-1">✓ Free SSL & Domain</span>
                <span>Domain registration and enterprise-grade security certificate included.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book"
                className="btn-glow-primary px-8 py-3.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Reserve Your 50% Off Slot for ₹1</span>
              </Link>

              <Link
                to="/reviews"
                className="px-6 py-3.5 rounded-xl bg-surface-elevated border border-white/10 text-gray-300 font-bold text-xs uppercase tracking-wider hover:text-white transition-colors"
              >
                Read Client Reviews →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
