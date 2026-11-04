import React from 'react';
import { Users, Globe, Headphones, ThumbsUp } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function AuthorityStats() {
  const iconMap = [Users, Globe, Headphones, ThumbsUp];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background ambient glow in Electric Magenta (Zero Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-glow block mb-2">
            {siteData.authority.badge}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            {siteData.authority.title} <span className="text-gradient-sky glow-text-primary">{siteData.authority.titleHighlight}</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {siteData.authority.subtitle}
          </p>
        </div>

        {/* 4 Metrics Cards with Glowing Hover */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteData.authority.stats.map((stat, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm transition-all text-center group shadow-lg backdrop-blur-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary-glow mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-primary/20">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display font-black text-3xl sm:text-4xl text-white block group-hover:text-primary-glow transition-colors glow-text-primary">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-200 mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5 block">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Client Brands Row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-80">
          <span className="text-xs text-primary-glow uppercase tracking-widest font-bold">Trusted By Brands:</span>
          {siteData.authority.logos.map((logo, idx) => (
            <span key={idx} className="text-xs sm:text-sm font-bold text-gray-300 font-mono tracking-wider hover:text-white transition-colors">
              {logo}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
