import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WhyUs from '../components/WhyUs';
import HowItWorks from '../components/HowItWorks';

export default function WhyUsPage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">Why GloovUp & Transformation Benchmark</span>
        </div>
      </div>

      {/* 1. Interactive Before vs After Transformation Split-Slider */}
      <BeforeAfterSlider />

      {/* 2. 8 Bento Superpower Features */}
      <WhyUs />

      {/* 3. 4-Step 7-Day Launch Roadmap */}
      <HowItWorks onOpenBooking={onOpenBooking} />

      {/* Bottom CTA to Book */}
      <section className="py-12 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/book"
            className="btn-glow-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider"
          >
            <span>Lock In Your 7-Day Launch Slot for ₹1</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
