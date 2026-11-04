import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Laptop, HelpCircle, SlidersHorizontal, Star, BookOpen, Calendar, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import AuthorityStats from '../components/AuthorityStats';
import { siteData } from '../data/siteData';

export default function HomePage({ onOpenBooking }) {
  const exploreCards = [
    {
      title: "Interactive Client Showcase",
      desc: "Explore 7 real websites built for Tamil Nadu brands with live 3D MacBook and iPhone device previews.",
      link: "/showcase",
      badge: "Showcase Studio",
      icon: Laptop,
      color: "from-blue-600/20 via-blue-900/20 to-surface",
      border: "border-primary/40",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
    },
    {
      title: "Smart Plan Finder & 9 Packages",
      desc: "Take the 15-second quiz to calculate your best-fit website plan and compare all transparent tiers.",
      link: "/pricing",
      badge: "Pricing & Quiz",
      icon: HelpCircle,
      color: "from-blue-600/20 via-sky-900/20 to-surface",
      border: "border-primary/40",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Before vs After Transformation",
      desc: "Drag the visual split slider to benchmark old slow template sites against 0.8s engineered speed.",
      link: "/why-us",
      badge: "Performance Benchmark",
      icon: SlidersHorizontal,
      color: "from-blue-700/20 via-indigo-900/20 to-surface",
      border: "border-primary/40",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Founder Reviews & Video Reels",
      desc: "Watch video case studies and listen to authentic voice testimonials from business owners across TN.",
      link: "/reviews",
      badge: "4.7★ Social Proof",
      icon: Star,
      color: "from-amber-600/20 via-yellow-950/20 to-surface",
      border: "border-amber-500/40",
      glow: "hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]"
    },
    {
      title: "Official Blog & Insights Hub",
      desc: "Case studies on MyKariKadai scaling to 3x sales, regional education platforms, and Generative AI workshops.",
      link: "/blog",
      badge: "Tech & Growth Hub",
      icon: BookOpen,
      color: "from-blue-500/20 via-sky-950/20 to-surface",
      border: "border-primary/40",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
    },
    {
      title: "₹1 Priority Reservation Terminal",
      desc: "Lock in your 50% discount and priority 7-day delivery slot with instant WhatsApp onboarding kickoff.",
      link: "/book",
      badge: "Instant Kickoff",
      icon: Sparkles,
      color: "from-blue-700/25 via-blue-900/25 to-surface",
      border: "border-primary/50",
      glow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* 1. Split Hero */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Authority Stats Numbers */}
      <AuthorityStats />

      {/* 3. Multi-Page Navigation Hub / Portal */}
      <section className="py-20 relative overflow-hidden">
        {/* Background ambient light in Electric Indigo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-glow block mb-2">
              Explore The GloovUp Ecosystem
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Dedicated Pages Engineered For <span className="text-gradient-indigo glow-text-indigo">Total Clarity</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400">
              No endless single-page clutter. Navigate through our dedicated spaces designed for client case studies, plan comparison, and verified stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exploreCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Link
                  key={idx}
                  to={card.link}
                  className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.color} border ${card.border} hover:scale-[1.02] transition-all duration-300 shadow-xl flex flex-col justify-between backdrop-blur-xl ${card.glow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-surface/90 border border-white/10 text-primary-light shadow-sm">
                        {card.badge}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-surface/90 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-black text-2xl text-white group-hover:text-primary-light transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-primary-glow group-hover:text-white">
                    <span>Open Dedicated Page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Featured Blog & Insights Section */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-2 shadow-glow-sm">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>GloovUp Official Blog</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                  Latest Insights & <span className="text-gradient-blue glow-text-blue">Case Studies</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-xl">
                  Deep-dive stories into how Tamil Nadu brands scale online, interactive learning systems, and Generative AI workshops.
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow hover:text-white transition-colors group shrink-0"
              >
                <span>Explore All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {siteData.blog.posts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  to="/blog"
                  className="rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/50 transition-all duration-300 p-5 flex flex-col justify-between group shadow-lg hover:shadow-glow-sm hover:-translate-y-1 backdrop-blur-xl"
                >
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black mb-4 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-primary-glow border border-primary/30">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white group-hover:text-primary-glow transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-primary-glow group-hover:text-white">
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick ₹1 Priority Banner with Glowing Neon Border */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-surface via-[#0a122e] to-surface border-2 border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.3)] flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                ⚡ Only 7 Slots Left This Month
              </span>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
                Reserve Your Website Project for Just <span className="text-primary-glow font-mono glow-text-indigo">₹1</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Save 50% on design & development with our guaranteed 7-day launch timeline.
              </p>
            </div>

            <Link
              to="/book"
              className="btn-glow-primary px-8 py-4 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Go to ₹1 Booking Terminal</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
