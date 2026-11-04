import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

// Official SVG Brand Logos for Social Media
function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[#02050e] border-t border-white/10 pt-16 pb-28 md:pb-16 text-left relative overflow-hidden">
      
      {/* Background glow in Royal Indigo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-primary/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Card */}
        <div className="mb-14 p-8 sm:p-12 rounded-3xl bg-surface border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Limited Project Slots Available
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              Ready To Launch Your <span className="text-gradient-indigo">Dream Website?</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Don't let another month pass with a slow or outdated website. Lock in your priority slot today for just ₹1.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              to="/book"
              className="btn-glow-primary w-full sm:w-auto px-8 py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Reserve ₹1 Slot</span>
            </Link>
            <a
              href="https://wa.me/919677387448"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface-elevated border border-white/10 hover:border-primary/40 text-gray-200 font-bold text-xs uppercase tracking-wider transition-all text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* 4 Columns Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-violet-700 flex items-center justify-center font-black text-lg text-white shadow-glow-sm">
                G
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                {siteData.header.logoText}<span className="text-primary">{siteData.header.logoHighlight}</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              {siteData.footer.description}
            </p>
            <span className="text-[11px] text-primary block mt-3 font-semibold">
              {siteData.footer.tagline}
            </span>
          </div>

          {/* Col 2: Multi-Page Navigation Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-4">Pages & Studio</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Official Contact (With Direct Clickable mailto & tel) */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-4">Official Contact</h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919677387448"
                  className="hover:text-primary font-mono text-sm font-semibold transition-colors border border-transparent hover:border-primary/20 p-1 rounded-md"
                  title="Call Directly"
                >
                  {siteData.footer.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${siteData.footer.email}`}
                  className="hover:text-primary font-mono text-sm font-semibold transition-colors underline decoration-primary/40 underline-offset-4 p-1 rounded-md"
                  title="Send Direct Email (Click to Open Mail)"
                >
                  {siteData.footer.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-gray-400 text-xs leading-relaxed pt-1">
                  {siteData.footer.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow GloovUp with Official SVG Logos */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-4">Follow GloovUp</h4>
            
            {/* Social Media SVG Brand Logos */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/gloovup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 hover:border-primary/60 text-gray-300 hover:text-white hover:bg-primary/20 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                aria-label="Facebook"
                title="Follow on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/gloov_up?igsh=MWpwamdxdmYzZjlieQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 hover:border-primary/60 text-gray-300 hover:text-white hover:bg-primary/20 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/gloovupgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 hover:border-primary/60 text-gray-300 hover:text-white hover:bg-primary/20 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                aria-label="LinkedIn"
                title="Follow on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@gloovup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-white/10 hover:border-primary/60 text-gray-300 hover:text-white hover:bg-primary/20 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                aria-label="YouTube"
                title="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-surface/60 border border-white/5 text-[11px] text-gray-400">
              <span>Avg WhatsApp response time: <strong className="text-primary">under 5 minutes</strong></span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>{siteData.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="text-primary font-bold">100% Secure SSL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
