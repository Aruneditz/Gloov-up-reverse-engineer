import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Shield, ArrowRight, Table } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Packages({ onSelectPlan, selectedPlanId }) {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [showMatrix, setShowMatrix] = useState(false);

  const currentPackages = activeTab === 'portfolio'
    ? siteData.packages.portfolioPackages
    : siteData.packages.ecommercePackages;

  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/15 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{siteData.packages.badge}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            {siteData.packages.title} <span className="text-gradient-indigo glow-text-indigo">{siteData.packages.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            {siteData.packages.subtitle}
          </p>

          {/* Segmented Category Switcher with Glow */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-surface/90 border border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.2)] backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'portfolio'
                  ? 'bg-primary text-white shadow-glow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🏢 Business Portfolio ({siteData.packages.portfolioPackages.length} Plans)
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'ecommerce'
                  ? 'bg-primary text-white shadow-glow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🛍️ E-Commerce Store ({siteData.packages.ecommercePackages.length} Plans)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid gap-6 ${
          activeTab === 'portfolio' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {currentPackages.map((pkg) => {
            const isSelected = selectedPlanId === pkg.id;
            const isRec = pkg.recommended;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isRec
                    ? 'bg-gradient-to-b from-[#182042] via-[#0d1430] to-[#070b1e] border-2 border-primary shadow-[0_0_35px_rgba(99,102,241,0.4)] scale-[1.02] z-10'
                    : 'bg-surface/85 border border-white/10 hover:border-primary/50 hover:shadow-glow-sm'
                } ${isSelected ? 'ring-2 ring-primary-glow shadow-glow' : ''}`}
              >
                {/* Recommended Badge with Neon Glow */}
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-primary to-violet-600 text-white text-[10px] font-black uppercase tracking-wider shadow-neon-indigo border border-white/20">
                    ★ Most Popular Choice
                  </div>
                )}
                {pkg.badge && !isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface-elevated border border-primary/40 text-primary-glow text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Package Name & Desc */}
                  <h3 className="font-display font-black text-lg text-white mt-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 min-h-[36px] leading-relaxed">{pkg.desc}</p>

                  {/* Price Tag with Neon Glow */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500 line-through font-semibold block">{pkg.original}</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="font-display font-black text-3xl text-white font-mono glow-text-indigo">{pkg.price}</span>
                      <span className="text-[10px] text-primary-glow uppercase font-bold ml-1">50% Off</span>
                    </div>
                  </div>

                  {/* Delivery & Support Chips */}
                  <div className="mt-4 flex flex-col gap-1.5 text-[11px] font-medium">
                    <span className="text-primary-glow font-bold bg-primary/15 px-2.5 py-1 rounded-lg border border-primary/30 flex items-center gap-1 shadow-sm">
                      <Zap className="w-3 h-3 text-primary" />
                      <span>{pkg.delivery}</span>
                    </span>
                    <span className="text-gray-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                      <Shield className="w-3 h-3 text-gray-400" />
                      <span>{pkg.support}</span>
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-2.5 text-xs text-gray-300 pt-4 border-t border-white/10">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-4">
                  <Link
                    to="/book"
                    onClick={() => onSelectPlan && onSelectPlan(pkg)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      isRec
                        ? 'btn-glow-primary text-white'
                        : 'bg-surface-elevated hover:bg-primary hover:text-white border border-white/10 hover:border-primary/50 text-white shadow-md'
                    }`}
                  >
                    <span>Choose for ₹1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Drawer Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-white/10 hover:border-primary/40 text-xs font-bold text-gray-300 hover:text-white transition-all shadow-md"
          >
            <Table className="w-4 h-4 text-primary" />
            <span>{showMatrix ? 'Hide Comparison Matrix ▲' : 'Open Side-by-Side Comparison Matrix ▼'}</span>
          </button>
        </div>

        {/* Expandable Comparison Matrix Table */}
        {showMatrix && (
          <div className="mt-8 p-6 rounded-3xl bg-surface/90 border border-primary/30 overflow-x-auto shadow-2xl backdrop-blur-xl">
            <h4 className="font-bold text-base text-white mb-4">Detailed Feature Matrix ({activeTab === 'portfolio' ? 'Business Portfolio' : 'E-Commerce Store'})</h4>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 px-4 font-bold">Feature</th>
                  {currentPackages.map(p => (
                    <th key={p.id} className="py-3 px-4 font-bold text-white whitespace-nowrap">
                      {p.name} <br/>
                      <span className="text-primary-glow font-bold font-mono">{p.price}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-400">Turnaround Speed</td>
                  {currentPackages.map(p => (
                    <td key={p.id} className="py-3 px-4 font-bold text-primary-glow">{p.delivery}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-400">Free Support Period</td>
                  {currentPackages.map(p => (
                    <td key={p.id} className="py-3 px-4">{p.support}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-400">100% Source Code Ownership</td>
                  {currentPackages.map(p => (
                    <td key={p.id} className="py-3 px-4 text-primary font-bold">✓ Included</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-400">SSL & Mobile Responsiveness</td>
                  {currentPackages.map(p => (
                    <td key={p.id} className="py-3 px-4 text-primary font-bold">✓ Included</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-gray-400">Action</td>
                  {currentPackages.map(p => (
                    <td key={p.id} className="py-3 px-4">
                      <Link
                        to="/book"
                        onClick={() => onSelectPlan && onSelectPlan(p)}
                        className="px-3 py-1.5 rounded-lg bg-primary text-white font-extrabold text-[10px] uppercase inline-block shadow-glow-sm"
                      >
                        Select ₹1
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
