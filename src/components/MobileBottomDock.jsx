import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';

export default function MobileBottomDock() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-[#08040d]/95 backdrop-blur-2xl border-t border-primary/35 shadow-[0_-10px_40px_rgba(0,0,0,0.9),0_-2px_15px_rgba(236,72,153,0.25)]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        
        {/* WhatsApp Quick Chat */}
        <a
          href="https://wa.me/919677387448"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-surface/90 border border-white/15 text-primary-glow hover:text-white flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Direct WhatsApp Chat"
        >
          <Phone className="w-5 h-5 text-primary" />
        </a>

        {/* Primary Reserve Button navigating to /book with Breathing Glow */}
        <Link
          to="/book"
          className="btn-glow-primary flex-1 py-3 px-4 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-between"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 fill-white" />
            <span>Reserve ₹1 Slot</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-black bg-black/40 px-2 py-0.5 rounded-md text-primary-light">
            <span>50% OFF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

      </div>
    </div>
  );
}
