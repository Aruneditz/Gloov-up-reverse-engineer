import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Clear Answers. <span className="text-gradient-sky glow-text-sky">Zero Confusion.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Everything you need to know about our 7-day delivery, ownership, and ₹1 booking guarantee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-surface/90 border-primary/40 shadow-glow-sm'
                    : 'bg-surface/60 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-primary-glow bg-primary/25 shadow-sm' : 'text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
