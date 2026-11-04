import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, AlertTriangle, CheckCircle2, Zap, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Visual Benchmark</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            See The Difference: <span className="text-gradient-indigo glow-text-indigo">Old Web vs GloovUp</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Drag the slider below to compare a typical slow template site against an engineered high-converting GloovUp website.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[420px] sm:h-[460px] rounded-3xl overflow-hidden select-none border-2 border-primary/40 shadow-[0_0_50px_rgba(99,102,241,0.3)] bg-black cursor-ew-resize"
          >
            {/* RIGHT SIDE: GloovUp Engineered Website (High Performance) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#101938] via-[#091024] to-black p-6 sm:p-10 flex flex-col justify-between">
              
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/25 border border-primary/50 text-primary-light font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-glow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>GloovUp Engineered Architecture</span>
                </span>
                <span className="text-xs font-mono text-primary-glow font-bold bg-primary/15 px-3 py-1 rounded-lg border border-primary/30 shadow-sm">
                  Speed Index: 0.8s (Instant)
                </span>
              </div>

              {/* High Tech Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto">
                <div className="p-4 rounded-2xl bg-surface/90 border border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-md">
                  <span className="text-xs text-gray-400 block font-medium">Google Performance</span>
                  <span className="text-2xl sm:text-3xl font-black text-primary-glow mt-1 block glow-text-indigo">99 / 100</span>
                  <span className="text-[11px] text-primary-light font-medium">Core Web Vitals Pass</span>
                </div>
                <div className="p-4 rounded-2xl bg-surface/90 border border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-md">
                  <span className="text-xs text-gray-400 block font-medium">Lead Conversion</span>
                  <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">3.4x Higher</span>
                  <span className="text-[11px] text-gray-400 font-medium">1-Click WhatsApp Hook</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-surface/90 border border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-md">
                  <span className="text-xs text-gray-400 block font-medium">Turnaround Time</span>
                  <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">7 Days</span>
                  <span className="text-[11px] text-primary font-medium">100% Code Ownership</span>
                </div>
              </div>

              <div className="text-xs text-gray-400 flex items-center justify-between pt-4 border-t border-white/10">
                <span>⚡ React 18 + Bespoke Multi-Page Experience</span>
                <span className="text-primary font-bold">Zero Lead Loss Funnel</span>
              </div>
            </div>

            {/* LEFT SIDE: Typical Outdated Website (Clipped Overlay) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#27272a] via-[#18181b] to-black p-6 sm:p-10 flex flex-col justify-between overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-black text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Typical Outdated Template</span>
                </span>
                <span className="text-xs font-mono text-red-400 font-bold bg-red-950/40 px-3 py-1 rounded-lg border border-red-800/40">
                  Speed Index: 5.2s (Slow)
                </span>
              </div>

              {/* Poor Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto">
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-red-500/30">
                  <span className="text-xs text-gray-400 block">Google Performance</span>
                  <span className="text-2xl sm:text-3xl font-black text-red-400 mt-1 block">39 / 100</span>
                  <span className="text-[11px] text-red-400 font-medium">Fails Mobile Vitals</span>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/90 border border-red-500/30">
                  <span className="text-xs text-gray-400 block">Bounce Rate</span>
                  <span className="text-2xl sm:text-3xl font-black text-red-400 mt-1 block">68% Drop</span>
                  <span className="text-[11px] text-gray-400 font-medium">Visitors Leave Early</span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-zinc-900/90 border border-red-500/30">
                  <span className="text-xs text-gray-400 block">Delivery Time</span>
                  <span className="text-2xl sm:text-3xl font-black text-gray-400 mt-1 block">30-45 Days</span>
                  <span className="text-[11px] text-red-400 font-medium">Locked Code / Ghosted</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 flex items-center justify-between pt-4 border-t border-white/10">
                <span>⚠️ Heavy bloated plugins & outdated code</span>
                <span className="text-red-400">High Customer Drop-off</span>
              </div>
            </div>

            {/* Draggable Divider Handle with Electric Laser Beam */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-indigo-200 to-violet-600 cursor-ew-resize z-20 shadow-[0_0_20px_rgba(129,140,248,1),0_0_40px_rgba(99,102,241,0.8)]"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black border-2 border-primary-glow flex items-center justify-center text-primary shadow-neon-indigo">
                <ArrowLeftRight className="w-5 h-5 text-primary-light" />
              </div>
            </div>

          </div>

          {/* Quick preset tabs */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-xs text-gray-400">Quick Slide:</span>
            <button
              onClick={() => setSliderPosition(25)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-primary/50 text-gray-300 transition-all hover:text-white"
            >
              25% (View Old)
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-primary/50 text-gray-300 transition-all hover:text-white"
            >
              50% (Split View)
            </button>
            <button
              onClick={() => setSliderPosition(75)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface border border-white/10 hover:border-primary/50 text-gray-300 transition-all hover:text-white"
            >
              75% (View GloovUp)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
