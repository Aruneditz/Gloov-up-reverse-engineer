import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import ShowcaseHub from '../components/ShowcaseHub';
import { siteData } from '../data/siteData';

export default function ShowcasePage({ onOpenBooking }) {
  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">Client Showcase Studio</span>
        </div>
      </div>

      {/* Main Interactive Showcase Hub Component */}
      <ShowcaseHub onOpenBooking={onOpenBooking} />

      {/* Detailed Case Studies Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Full Project Breakdown & Live Links
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              Every client website below was designed, coded, and launched in under 7 days by GloovUp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.showcase.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-surface/85 border border-white/10 hover:border-primary/50 p-5 flex flex-col justify-between transition-all group shadow-xl hover:shadow-glow-sm backdrop-blur-xl"
              >
                <div>
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black mb-4 relative group border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-primary-glow uppercase border border-white/10 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-xl text-white group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-gray-400 block mt-0.5">{project.tag}</span>

                  <div className="mt-3 p-3 rounded-xl bg-surface-elevated/80 border border-primary/20 text-xs text-primary-glow font-semibold flex items-center gap-1.5 shadow-inner">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-primary" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-300 hover:text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    to="/book"
                    className="px-3.5 py-1.5 rounded-lg bg-primary/20 hover:bg-primary text-primary-glow hover:text-white font-extrabold text-[11px] uppercase transition-all shadow-sm"
                  >
                    Build This for ₹1
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 text-center">
            <Link
              to="/pricing"
              className="btn-glow-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider"
            >
              <span>Explore Pricing & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
