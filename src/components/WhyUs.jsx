import React from 'react';
import { Palette, Zap, TrendingUp, Smartphone, Search, LifeBuoy, Cpu, Target } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function WhyUs() {
  const iconComponents = {
    Palette,
    Zap,
    TrendingUp,
    Smartphone,
    Search,
    LifeBuoy,
    Cpu,
    Target
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background ambient glow in Electric Magenta (Zero Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-glow block mb-2">
            {siteData.whyUs.badge}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            {siteData.whyUs.title} <span className="text-gradient-sky glow-text-sky">{siteData.whyUs.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            We don't build generic slow templates. We engineer bespoke, high-converting digital storefronts.
          </p>
        </div>

        {/* Bento Grid with Neon Glow on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.whyUs.items.map((item, idx) => {
            const Icon = iconComponents[item.icon] || Zap;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm hover:-translate-y-1.5 transition-all shadow-xl group backdrop-blur-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 text-primary-glow flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
