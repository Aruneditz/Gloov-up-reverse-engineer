import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Calendar, Clock, User, ArrowRight, Sparkles, CheckCircle2, Share2, BookOpen } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BlogPage({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const posts = siteData.blog.posts;

  // Filter posts based on search query and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow in Proper Royal Blue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-primary/15 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">Blog & Digital Insights</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{siteData.blog.badge}</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {siteData.blog.title}{" "}
            <span className="text-gradient-blue glow-text-blue">
              {siteData.blog.titleHighlight}
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            {siteData.blog.subtitle}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-2xl mx-auto mb-12 flex flex-col gap-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles by title, topic or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-surface/90 border border-white/10 focus:border-primary text-white text-sm outline-none transition-all placeholder:text-gray-500 shadow-xl backdrop-blur-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {siteData.blog.categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' 
                ? posts.length 
                : posts.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-white shadow-glow'
                      : 'bg-surface/80 border border-white/10 text-gray-400 hover:text-white hover:border-primary/40'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="group cursor-pointer rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-glow-sm hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-xl"
              >
                <div>
                  {/* Thumbnail Image with Category Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 border border-primary/40 text-primary-glow backdrop-blur-md shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-primary" />
                        <span>{post.author}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-lg text-white group-hover:text-primary-glow transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <p className="mt-2.5 text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-bold text-primary-glow group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>Read Full Story</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface/60 rounded-3xl border border-dashed border-white/10 max-w-md mx-auto p-8">
            <Search className="w-10 h-10 text-gray-500 mx-auto mb-3 opacity-50" />
            <h3 className="font-bold text-base text-white">No Matching Articles Found</h3>
            <p className="text-xs text-gray-400 mt-1 mb-4">
              We couldn't find any articles matching "{searchQuery}". Try a different keyword or reset filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold"
            >
              Clear Search & Filters
            </button>
          </div>
        )}

        {/* Bottom Conversion Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-surface via-[#0a122e] to-surface border-2 border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
          
          <div className="max-w-xl text-left">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
              ⚡ Guaranteed 7-Day Launch
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Want Similar <span className="text-gradient-blue glow-text-blue">3x Growth</span> For Your Business?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Reserve your priority website development slot today for just ₹1 and get 50% off design + code handover.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/book"
              className="btn-glow-primary w-full sm:w-auto px-8 py-4 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Lock In Slot for ₹1</span>
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface-elevated border border-white/10 hover:border-primary/40 text-gray-200 font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Compare Packages
            </Link>
          </div>
        </div>

      </div>

      {/* =========================================================================
          FULL ARTICLE DETAIL READER MODAL
          ========================================================================= */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          {/* Reader Modal Container */}
          <div className="relative bg-surface border border-primary/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 animate-fadeIn text-left custom-scrollbar">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-surface-elevated text-gray-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category & Date */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-primary/20 text-primary-glow border border-primary/40">
                {activeArticle.category}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{activeArticle.date}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{activeArticle.readTime}</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {activeArticle.title}
            </h2>

            {/* Author */}
            <div className="flex items-center gap-2 mt-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-bold">
                {activeArticle.author.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-gray-300">By {activeArticle.author}</span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Highlights Box */}
            {activeArticle.highlights && activeArticle.highlights.length > 0 && (
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-glow block mb-3">
                  Key Takeaways & Impact:
                </span>
                <ul className="space-y-2">
                  {activeArticle.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Body Text */}
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              {activeArticle.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => handleShare(activeArticle)}
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4 text-primary" />
                <span>Share Article</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="btn-glow-primary w-full sm:w-auto px-6 py-3 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>Reserve Website Slot for ₹1</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
