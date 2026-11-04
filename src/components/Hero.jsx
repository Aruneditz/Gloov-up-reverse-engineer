import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenBooking }) {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const clientPreviews = siteData.showcase.slice(0, 4);

  // Auto-rotate the hero preview every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePreviewIndex((prev) => (prev + 1) % clientPreviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [clientPreviews.length]);

  const currentPreview = clientPreviews[activePreviewIndex];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Hero Ambient Radial Glow Mesh in Electric Indigo & Violet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-primary/20 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-12 right-12 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Trust Badge with Neon Glow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/90 border border-primary/40 shadow-glow-sm mb-6 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-semibold text-gray-200">
                {siteData.hero.trustBadgeText} <strong className="text-primary-glow font-bold">{siteData.hero.trustHighlight}</strong>
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs font-bold text-amber-400">{siteData.hero.fomoText}</span>
            </div>

            {/* Main Headline with Glowing Accents */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white">
              {siteData.hero.title}{" "}
              <span className="text-gradient-indigo glow-text-indigo underline decoration-primary/40 underline-offset-8">
                {siteData.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              {siteData.hero.subtitle}
            </p>

            {/* Pricing Anchor / Offer Callout with Neon Border */}
            <div className="mt-7 p-4 sm:p-5 rounded-2xl bg-surface/90 border border-primary/40 backdrop-blur-xl flex flex-wrap items-center gap-4 sm:gap-6 w-full max-w-lg shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase font-bold tracking-wider text-gray-400">Exclusive Launch Offer</span>
                <div className="flex items-baseline gap-2.5 mt-0.5">
                  <span className="font-display font-black text-3xl sm:text-4xl text-primary-glow font-mono glow-text-indigo">{siteData.hero.offerPrice}</span>
                  <span className="text-sm line-through text-gray-500 font-semibold">{siteData.hero.originalPrice}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/25 border border-primary/50 text-primary-light text-xs font-black tracking-wider uppercase shadow-glow-sm">
                {siteData.hero.saveBadge}
              </span>
              <div className="text-xs text-gray-300 ml-auto flex items-center gap-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            {/* CTA Group with Breathing Glow */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                to="/book"
                className="btn-glow-primary px-8 py-4 rounded-xl text-white font-black text-base uppercase tracking-wider flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 fill-white" />
                <span>{siteData.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                to="/pricing"
                className="px-6 py-4 rounded-xl bg-surface/80 hover:bg-surface-elevated border border-white/15 hover:border-primary/50 text-gray-200 font-bold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{siteData.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>7-Day Guaranteed Launch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Source Code Handover</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Google 4.7★ Verified Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Showcase Preview Card with Multi-layer Glow */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Neon Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/50 via-violet-600/40 to-cyan-500/30 blur-2xl opacity-80 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-surface/95 border border-primary/40 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl">
                
                {/* Header bar of the mock browser */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-black/60 border border-white/10 text-[11px] text-gray-300 font-mono flex items-center gap-1 shadow-inner">
                    <span className="text-primary font-bold">https://</span>
                    <span>{currentPreview.url.replace('https://', '')}</span>
                  </div>
                  <a
                    href={currentPreview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    title="Visit Live Client Website"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Live Client Image Preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black group border border-white/10 shadow-lg">
                  <img
                    src={currentPreview.image}
                    alt={currentPreview.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-primary text-white shadow-glow-sm">
                          {currentPreview.category}
                        </span>
                        <h4 className="font-extrabold text-lg text-white mt-1">{currentPreview.title}</h4>
                      </div>
                      <span className="text-xs text-primary-light font-semibold bg-black/70 px-2.5 py-1 rounded-lg border border-primary/40 backdrop-blur-md">
                        {currentPreview.metrics}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Thumbnails switcher */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {clientPreviews.map((client, idx) => (
                    <button
                      key={client.id}
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-[4/3] border transition-all ${
                        activePreviewIndex === idx
                          ? 'border-primary ring-2 ring-primary/60 scale-105 shadow-glow'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img src={client.image} alt={client.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/35" />
                      <span className="absolute bottom-1 left-1 right-1 text-[9px] text-white font-bold truncate text-left">
                        {client.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Live Performance Badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <Zap className="w-4 h-4 text-primary fill-primary" />
                    <span>Google PageSpeed: <strong className="text-primary-glow font-bold">99/100</strong></span>
                  </div>
                  <span className="text-gray-400 font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/5">Bespoke React 18</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
