import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, X } from 'lucide-react';

export default function LiveDemandToast() {
  const [visible, setVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    { name: "Someone from Chennai", action: "locked a Business Starter Suite slot", time: "3 mins ago" },
    { name: "Boutique Owner in Madurai", action: "reserved 50% discount slot", time: "12 mins ago" },
    { name: "Client from Coimbatore", action: "booked an E-Commerce launch slot", time: "28 mins ago" },
    { name: "Doctor from Salem", action: "locked Mughilan Clinic style booking slot", time: "42 mins ago" }
  ];

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const rotateInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotateInterval);
    };
  }, [messages.length]);

  if (!visible) return null;

  const current = messages[currentMessageIndex];

  return (
    <div className="hidden sm:flex fixed bottom-5 left-5 z-40 animate-slideUp">
      <div className="relative rounded-2xl bg-surface/90 border border-primary/30 p-3.5 pr-8 shadow-[0_0_25px_rgba(236,72,153,0.25)] backdrop-blur-xl flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-inner">
          <Zap className="w-4 h-4 fill-primary" />
        </div>

        <div className="text-left">
          <p className="text-xs text-white leading-tight">
            <strong className="text-primary-glow font-bold">{current.name}</strong> {current.action}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-gray-400 font-mono">{current.time}</span>
            <span className="text-gray-500">•</span>
            <Link
              to="/book"
              className="text-[10px] text-primary-glow hover:text-white font-bold underline"
            >
              Reserve Yours for ₹1
            </Link>
          </div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-white p-1"
          aria-label="Dismiss Notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
