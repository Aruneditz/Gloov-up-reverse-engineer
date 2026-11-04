import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles, CheckCircle2, User, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import FAQ from '../components/FAQ';
import { siteData } from '../data/siteData';
import { submitLead } from '../services/leadService';

export default function BookPage({ preselectedPlan }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(
    preselectedPlan || siteData.packages.portfolioPackages[2]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleReserve = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your full name and WhatsApp phone number.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name,
      phone,
      location: location || 'Tamil Nadu',
      selected_package_name: selectedPackage.name,
      selected_package_price: selectedPackage.price,
      delivery_time: selectedPackage.delivery,
      service_needed: 'Website Development',
      payment_amount: 1,
      payment_status: 'slot_reserved'
    };

    await submitLead(payload);

    try {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#ffffff', '#93c5fd']
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }

    setIsSubmitting(false);
    setConfirmed(true);
  };

  const whatsappUrl = `https://wa.me/919677387448?text=${encodeURIComponent(
    `Hi GloovUp Team, I have reserved my website slot for ₹1!\n\n` +
    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone}\n` +
    `📍 Location: ${location || 'Tamil Nadu'}\n` +
    `📦 Selected Plan: ${selectedPackage.name} (${selectedPackage.price})\n` +
    `⚡ Delivery: ${selectedPackage.delivery}\n\n` +
    `Looking forward to starting our strategy call!`
  )}`;

  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen relative overflow-hidden">
      {/* Background ambient glow in Electric Indigo / Violet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-primary/15 rounded-full blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary-glow font-bold">₹1 Reservation Terminal & Contact Hub</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary-glow text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Project Terminal</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Reserve Your Project Slot For <span className="text-gradient-indigo glow-text-indigo">₹1 Today</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Lock in your 50% discount and guaranteed 7-day launch timeline before this month's remaining 7 slots close.
          </p>
        </div>

        {/* Two-Column Grid: Form Terminal on Left, Contact & Trust on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Interactive Terminal with Neon Halo */}
          <div className="lg:col-span-7 rounded-3xl bg-surface/90 border-2 border-primary/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(99,102,241,0.3)] backdrop-blur-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-300 to-violet-500" />

            {!confirmed ? (
              <form onSubmit={handleReserve} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-primary-glow flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Offer Closes Soon • 7 Slots Remaining</span>
                  </span>
                  <span className="text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded border border-white/5">Instant Priority</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated/80 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors shadow-inner"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated/80 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors shadow-inner"
                      required
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    Our team will share wireframe updates on this WhatsApp number.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Chennai, Madurai, Coimbatore"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated/80 border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Choose Your Target Package:
                  </label>
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {[
                      ...siteData.packages.portfolioPackages,
                      ...siteData.packages.ecommercePackages
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPackage(p)}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          selectedPackage.id === p.id
                            ? 'bg-primary/25 border-primary text-white ring-1 ring-primary/60 shadow-glow-sm'
                            : 'bg-surface-elevated/70 border-white/5 text-gray-300 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <span className="font-bold text-xs block">{p.name}</span>
                          <span className="text-[10px] text-gray-400">{p.delivery}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono font-bold text-primary-glow text-xs">{p.price}</span>
                          <span className="text-[10px] text-gray-500 line-through block">{p.original}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Box with Neon Accent */}
                <div className="p-4 rounded-xl bg-primary/15 border border-primary/40 flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Lock-in Fee Today</span>
                    <span className="text-xl font-black text-primary-glow font-mono glow-text-indigo">₹1 Only</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block text-[10px]">Guaranteed Savings</span>
                    <span className="font-bold text-primary-light">Save 50% on Launch</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow-primary w-full py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>{isSubmitting ? 'Locking in slot...' : 'Lock In My Slot for ₹1 Now'}</span>
                </button>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-8 text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary text-primary mx-auto flex items-center justify-center shadow-glow">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div>
                  <span className="px-3.5 py-1 rounded-full bg-primary/20 text-primary-glow text-xs font-extrabold uppercase tracking-widest inline-block mb-2 shadow-glow-sm">
                    🎉 Slot Reserved Successfully!
                  </span>
                  <h3 className="font-display font-black text-3xl text-white">
                    Congratulations, {name}!
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 max-w-sm mx-auto">
                    Your website project slot for <strong className="text-primary-glow">{selectedPackage.name}</strong> has been secured.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-elevated/90 border border-primary/30 text-left text-xs space-y-2 max-w-sm mx-auto shadow-inner">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="font-bold text-white">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">WhatsApp:</span>
                    <span className="font-bold text-white">{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Package:</span>
                    <span className="font-bold text-primary-glow">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Delivery Timeline:</span>
                    <span className="font-bold text-primary-light">{selectedPackage.delivery}</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-primary w-full py-4 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp to Start Strategy Call</span>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Direct Clickable Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Official Channels */}
            <div className="p-8 rounded-3xl bg-surface/90 border border-white/10 shadow-xl space-y-5 backdrop-blur-xl">
              <h3 className="font-display font-bold text-xl text-white">
                Official Contact Channels
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Click any contact option below to immediately connect with our engineering team:
              </p>

              <div className="space-y-4 pt-2">
                {/* Clickable Phone Number */}
                <a
                  href="tel:+919677387448"
                  className="p-4 rounded-2xl bg-surface-elevated/80 border border-white/5 hover:border-primary/50 transition-all flex items-center gap-4 group shadow-sm"
                  title="Click to Call Immediately"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Direct Call & WhatsApp</span>
                    <span className="text-sm font-extrabold text-white font-mono group-hover:text-primary transition-colors">
                      {siteData.footer.phone}
                    </span>
                  </div>
                </a>

                {/* Direct Working Clickable Email */}
                <a
                  href={`mailto:${siteData.footer.email}`}
                  className="p-4 rounded-2xl bg-surface-elevated/80 border border-white/5 hover:border-primary/50 transition-all flex items-center gap-4 group shadow-sm"
                  title="Click to Open Your Email App Directly"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Official Email Address</span>
                    <span className="text-sm font-extrabold text-white font-mono group-hover:text-primary transition-colors underline decoration-primary/40 underline-offset-4">
                      {siteData.footer.email}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-surface-elevated/80 border border-white/5 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Headquarters</span>
                    <span className="text-sm font-bold text-gray-200">
                      {siteData.footer.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero Risk Guarantee Card */}
            <div className="p-6 rounded-3xl bg-surface-elevated/90 border border-primary/30 text-xs text-gray-300 space-y-3 backdrop-blur-xl shadow-md">
              <div className="flex items-center gap-2 text-primary-glow font-bold">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Our 100% Commitment Guarantee</span>
              </div>
              <p className="leading-relaxed">
                If we don't complete and deploy your website within the agreed timeline, you receive a full refund and our sincere apologies.
              </p>
            </div>

          </div>

        </div>

        {/* High-Trust Accordion FAQ */}
        <FAQ />

      </div>
    </div>
  );
}
