import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, CheckCircle, ArrowRight, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function PlanQuiz({ onSelectPlan }) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('service');
  const [timeline, setTimeline] = useState('standard');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const getRecommendation = () => {
    if (businessType === 'store') {
      if (timeline === 'express') {
        return siteData.packages.ecommercePackages.find(p => p.id === 'launch-commerce');
      } else if (timeline === 'enterprise') {
        return siteData.packages.ecommercePackages.find(p => p.id === 'pro-commerce');
      } else {
        return siteData.packages.ecommercePackages.find(p => p.id === 'growth-commerce');
      }
    } else {
      if (timeline === 'express') {
        return siteData.packages.portfolioPackages.find(p => p.id === 'portfolio-essential');
      } else if (timeline === 'enterprise') {
        return siteData.packages.portfolioPackages.find(p => p.id === 'custom-business');
      } else {
        return siteData.packages.portfolioPackages.find(p => p.id === 'business-starter');
      }
    }
  };

  const matchedPlan = getRecommendation() || siteData.packages.portfolioPackages[2];

  const handleReset = () => {
    setStep(1);
    setQuizCompleted(false);
  };

  return (
    <section id="quiz" className="py-20 relative overflow-hidden">
      {/* Background ambient glow in Electric Indigo / Violet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-primary/15 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Smart Plan Finder</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Find Your Perfect Website Plan in <span className="text-gradient-indigo glow-text-indigo">15 Seconds</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Answer 2 quick questions to uncover the exact high-converting package engineered for your business needs.
          </p>
        </div>

        {/* Quiz Container with Glassmorphic Neon Glow */}
        <div className="rounded-3xl bg-surface/90 border border-primary/35 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(99,102,241,0.25)] relative">
          
          {!quizCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-semibold">
                <span className="text-primary-glow flex items-center gap-1.5 font-bold">
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-glow-sm">
                    {step}
                  </span>
                  <span>Question {step} of 2</span>
                </span>
                <span className="text-gray-400">Step {step === 1 ? '1: Business Model' : '2: Timeline & Scope'}</span>
              </div>

              {/* Question 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    What type of website does your business need?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        setBusinessType('service');
                        setStep(2);
                      }}
                      className={`p-6 rounded-2xl border text-left transition-all group backdrop-blur-md ${
                        businessType === 'service'
                          ? 'bg-primary/20 border-primary ring-2 ring-primary/50 shadow-glow'
                          : 'bg-surface-elevated/80 border-white/10 hover:border-primary/50 hover:bg-surface-elevated'
                      }`}
                    >
                      <span className="text-3xl block mb-2">🏢</span>
                      <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors">
                        Business & Service Portfolio
                      </h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        For clinics, consultants, agencies, local services, freelancers, or personal brands looking to collect customer leads.
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        setBusinessType('store');
                        setStep(2);
                      }}
                      className={`p-6 rounded-2xl border text-left transition-all group backdrop-blur-md ${
                        businessType === 'store'
                          ? 'bg-primary/20 border-primary ring-2 ring-primary/50 shadow-glow'
                          : 'bg-surface-elevated/80 border-white/10 hover:border-primary/50 hover:bg-surface-elevated'
                      }`}
                    >
                      <span className="text-3xl block mb-2">🛍️</span>
                      <h4 className="font-bold text-lg text-white group-hover:text-primary-light transition-colors">
                        Online E-Commerce Store
                      </h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        For boutiques, bakery, fashion, product shops, with catalog, WhatsApp ordering, or online UPI payments.
                      </p>
                    </button>
                  </div>
                </div>
              )}

              {/* Question 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    What is your desired timeline & launch scale?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      onClick={() => {
                        setTimeline('standard');
                        setQuizCompleted(true);
                      }}
                      className="p-5 rounded-2xl bg-surface-elevated/90 border-2 border-primary hover:border-primary-glow text-left transition-all relative group shadow-glow"
                    >
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary text-white shadow-sm">
                        Recommended
                      </span>
                      <span className="text-2xl block mb-2">🚀</span>
                      <h4 className="font-bold text-base text-white group-hover:text-primary-light">
                        Standard Growth (3-4 Days)
                      </h4>
                      <p className="text-xs text-gray-400 mt-2">
                        Complete setup with domain, business emails, admin panel, and 60-90 days support.
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        setTimeline('express');
                        setQuizCompleted(true);
                      }}
                      className="p-5 rounded-2xl bg-surface-elevated/80 border border-white/10 hover:border-primary/50 text-left transition-all group"
                    >
                      <span className="text-2xl block mb-2">⚡</span>
                      <h4 className="font-bold text-base text-white group-hover:text-primary-light">
                        Express Launch (1-2 Days)
                      </h4>
                      <p className="text-xs text-gray-400 mt-2">
                        Ultra-fast delivery for urgent launches, essential pages & WhatsApp integration.
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        setTimeline('enterprise');
                        setQuizCompleted(true);
                      }}
                      className="p-5 rounded-2xl bg-surface-elevated/80 border border-white/10 hover:border-primary/50 text-left transition-all group"
                    >
                      <span className="text-2xl block mb-2">👑</span>
                      <h4 className="font-bold text-base text-white group-hover:text-primary-light">
                        Advanced / Enterprise (7-12 Days)
                      </h4>
                      <p className="text-xs text-gray-400 mt-2">
                        High volume product catalog, custom CRM, booking engine & 6 to 12 months support.
                      </p>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-gray-400 hover:text-white underline"
                    >
                      ← Back to Question 1
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Result Spotlight Card with Glowing Ring */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shadow-glow-sm">
                    <Sparkles className="w-4 h-4 fill-primary" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary-glow uppercase tracking-wider block">
                      Recommendation Result
                    </span>
                    <h4 className="text-lg font-bold text-white">Your Best-Fit Website Solution</h4>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/10"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Matched Plan Showcase Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161e3e] via-[#0d1430] to-surface border-2 border-primary shadow-[0_0_40px_rgba(99,102,241,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white font-black text-[11px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-md">
                  ★ 99% Exact Match
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-gray-400">
                      {businessType === 'store' ? 'E-Commerce Package' : 'Business Portfolio Package'}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-0.5">
                      {matchedPlan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-md">{matchedPlan.desc}</p>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs text-gray-500 line-through font-semibold block">{matchedPlan.original}</span>
                    <span className="font-display font-black text-3xl sm:text-4xl text-primary-glow font-mono glow-text-indigo">{matchedPlan.price}</span>
                    <span className="text-[11px] text-primary-light font-bold block mt-0.5">⚡ {matchedPlan.delivery}</span>
                  </div>
                </div>

                {/* Key Features Preview */}
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {matchedPlan.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    to="/book"
                    className="btn-glow-primary w-full sm:w-auto px-7 py-3.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Lock In This Plan for ₹1</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#packages"
                    className="text-xs text-gray-400 hover:text-white font-semibold underline py-2"
                  >
                    Or compare all 9 packages below ↓
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
