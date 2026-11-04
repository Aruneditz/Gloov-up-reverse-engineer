import React, { useState } from 'react';
import { Star, Play, X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [playingAudioId, setPlayingAudioId] = useState(null);

  const toggleAudio = (idx) => {
    setPlayingAudioId(playingAudioId === idx ? null : idx);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{siteData.testimonials.badge}</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            {siteData.testimonials.title} <span className="text-gradient-indigo glow-text-indigo">{siteData.testimonials.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Real stories from genuine business owners across Tamil Nadu whose brands scaled with GloovUp.
          </p>

          {/* Google Scorecard with Neon Accent */}
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface/90 border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.15)] backdrop-blur-xl">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">4.7 / 5.0 Rating</span>
            <span className="text-gray-500">•</span>
            <a
              href={siteData.testimonials.googleReview.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-glow hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Verified Google Reviews</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Video Stories Row */}
        <div className="mb-14">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary-glow mb-6 flex items-center gap-2">
            <Play className="w-4 h-4 text-primary fill-primary" />
            <span>Founder Video Case Studies</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.testimonials.videoReviews.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideoModal(video.youtubeId)}
                className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-white/15 hover:border-primary/60 cursor-pointer shadow-xl hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] transition-all"
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent flex flex-col justify-between p-4">
                  <span className="self-start text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-primary/30 text-primary-light uppercase border border-primary/40 backdrop-blur-md">
                    {video.business}
                  </span>

                  <div>
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 shadow-neon-indigo group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                    <h4 className="font-bold text-sm text-white text-center leading-snug">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Tamil Reviews Grid */}
        <div>
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-primary-glow mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Verified Customer Testimonials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.testimonials.textReviews.map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/45 transition-all flex flex-col justify-between shadow-lg hover:shadow-glow-sm backdrop-blur-xl"
              >
                <div>
                  {/* Rating Stars & Location */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-gray-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      📍 {review.location}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  {/* Simulated Audio Waveform Bar */}
                  <div className="mt-4 p-2.5 rounded-xl bg-surface-elevated/90 border border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => toggleAudio(idx)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        playingAudioId === idx ? 'bg-primary text-white shadow-neon-indigo' : 'bg-white/10 text-white hover:bg-primary/50'
                      }`}
                      aria-label="Play Voice Note"
                    >
                      {playingAudioId === idx ? (
                        <span className="w-2.5 h-2.5 bg-white rounded-sm" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      )}
                    </button>

                    <div className="flex-1 flex items-center gap-0.5 h-4">
                      {[40, 70, 30, 90, 60, 100, 45, 80, 50, 65, 85, 35, 95, 60, 40].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1 rounded-full transition-colors ${
                            playingAudioId === idx ? 'bg-primary animate-pulse' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono text-gray-400">
                      {playingAudioId === idx ? 'Playing...' : review.audioVoiceDuration}
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-violet-700 text-white font-extrabold text-xs flex items-center justify-center shadow-glow-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white">{review.name}</h5>
                    <span className="text-[10px] text-gray-400 block">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Lightbox Modal with Glowing Frame */}
      {activeVideoModal && (
        <div
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden aspect-[16/9] bg-black border-2 border-primary/50 shadow-[0_0_60px_rgba(99,102,241,0.5)]"
          >
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 text-white hover:bg-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoModal}?autoplay=1`}
              title="YouTube Video Review"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
