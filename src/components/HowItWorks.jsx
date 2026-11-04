import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{siteData.howItWorks.badge}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            {siteData.howItWorks.title} <span className="text-gradient-sky glow-text-sky">{siteData.howItWorks.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {siteData.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteData.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/50 transition-all shadow-lg flex flex-col justify-between backdrop-blur-xl group hover:shadow-glow-sm"
            >
              <div>
                <span className="font-display font-black text-5xl text-primary/30 group-hover:text-primary-glow/60 transition-colors block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary-light transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < siteData.howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/40 z-10">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Trigger Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface via-[#200a2d] to-surface border border-primary/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-xl">
          <div>
            <h4 className="font-display font-bold text-xl text-white">
              Ready to turn your vision into a high-converting website?
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              Lock in your ₹1 slot today and receive your complete strategy wireframe in 24 hours.
            </p>
          </div>
          <Link
            to="/book"
            className="btn-glow-primary px-7 py-3.5 rounded-xl text-white font-black text-xs uppercase tracking-wider shrink-0"
          >
            Start for ₹1 Now
          </Link>
        </div>

      </div>
    </section>
  );
}
