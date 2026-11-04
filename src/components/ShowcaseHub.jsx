import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ShowcaseHub({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('macbook'); // 'macbook' | 'iphone'
  const [activeProject, setActiveProject] = useState(siteData.showcase[0]);

  const categories = ['All', 'E-Commerce', 'Healthcare', 'Boutique', 'Beauty', 'Bakery / Store'];

  const filteredProjects = selectedCategory === 'All'
    ? siteData.showcase
    : siteData.showcase.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Background Ambience in Indigo / Violet */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client Showcase</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Real Websites. <span className="text-gradient-indigo glow-text-indigo">Proven Results.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl">
              Inspect real client projects designed and shipped by GloovUp across Tamil Nadu. Toggle between Laptop & Mobile frames to inspect responsive fidelity.
            </p>
          </div>

          {/* Viewport Switcher Controls (Laptop vs Mobile) with Neon Glow */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface/90 border border-white/10 self-start md:self-auto shadow-[0_0_25px_rgba(99,102,241,0.2)] backdrop-blur-xl">
            <button
              onClick={() => setViewMode('macbook')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'macbook'
                  ? 'bg-primary text-white shadow-glow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Laptop View</span>
            </button>
            <button
              onClick={() => setViewMode('iphone')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'iphone'
                  ? 'bg-primary text-white shadow-glow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile View</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <Filter className="w-4 h-4 text-primary shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                const firstMatch = cat === 'All' ? siteData.showcase[0] : siteData.showcase.find(p => p.category.toLowerCase().includes(cat.toLowerCase()));
                if (firstMatch) setActiveProject(firstMatch);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-primary/25 border-primary text-primary-light shadow-glow-sm'
                  : 'bg-surface/80 border-white/5 text-gray-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Interactive Stage: Device Frame + Active Project Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Left Side: 3D Interactive Device Frame Container with Ambient Glow Halo */}
          <div className="lg:col-span-8 flex justify-center items-center relative">
            <div className="absolute inset-4 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
            
            {viewMode === 'macbook' ? (
              /* LAPTOP / MACBOOK FRAME */
              <div className="w-full max-w-2xl bg-[#080d20] rounded-2xl p-3 border-2 border-primary/40 shadow-[0_20px_70px_-15px_rgba(99,102,241,0.4)] transition-all">
                {/* Screen bezel */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black border border-white/10 group">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top bar reflection */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-black/80 backdrop-blur-md flex items-center px-3 justify-between border-b border-white/10">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-gray-300 font-mono">{activeProject.url}</span>
                    <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                {/* Base bar */}
                <div className="h-3.5 bg-[#0e1636] rounded-b-xl mt-1.5 border-t border-white/15 flex justify-center items-center shadow-inner">
                  <div className="w-20 h-1 bg-white/25 rounded-full" />
                </div>
              </div>
            ) : (
              /* MOBILE / IPHONE FRAME */
              <div className="w-72 sm:w-80 bg-[#080d20] rounded-[50px] p-4 border-4 border-primary/40 shadow-[0_20px_70px_-15px_rgba(99,102,241,0.45)] transition-all">
                <div className="relative rounded-[38px] overflow-hidden aspect-[9/18] bg-black border border-white/10 group">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-20 flex items-center justify-end px-2 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-primary/70 animate-pulse" />
                  </div>
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 shadow-xl">
                    <span className="text-[10px] font-bold text-primary-glow block uppercase">{activeProject.category}</span>
                    <h5 className="font-bold text-sm text-white">{activeProject.title}</h5>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Side: Project Details Spotlight with Neon Trim */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-surface/90 border border-primary/35 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/25 text-primary-light font-bold text-xs uppercase tracking-wider border border-primary/30">
                  {activeProject.category}
                </span>
                <span className="text-xs text-gray-400 font-semibold">{activeProject.tag}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                {activeProject.title}
              </h3>

              <div className="mt-4 p-4 rounded-2xl bg-surface-elevated/80 border border-primary/20 shadow-inner">
                <span className="text-xs text-gray-400 block font-medium">Demonstrated Growth:</span>
                <p className="font-black text-sm sm:text-base text-primary-glow mt-1 flex items-center gap-1.5 glow-text-indigo">
                  ⚡ {activeProject.metrics}
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                Engineered with bespoke React architecture, instant responsive fidelity, direct customer engagement hooks, and fast SSL cloud hosting.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-surface-elevated hover:bg-surface border border-primary/40 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Launch Live Website</span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/book"
                className="btn-glow-primary w-full py-3.5 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Build Similar Website for ₹1</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Thumbnail Selector Row for all 7 Projects */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {filteredProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p)}
              className={`p-2.5 rounded-2xl border text-left transition-all ${
                activeProject.id === p.id
                  ? 'bg-surface border-primary ring-2 ring-primary/50 scale-[1.03] shadow-glow'
                  : 'bg-surface/60 border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="rounded-lg overflow-hidden aspect-[16/10] bg-black mb-2 border border-white/5">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h5 className="font-bold text-xs text-white truncate">{p.title}</h5>
              <span className="text-[10px] text-gray-400 block truncate">{p.category}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
