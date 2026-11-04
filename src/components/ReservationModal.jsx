import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Phone, MapPin, User, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteData } from '../data/siteData';
import { submitLead } from '../services/leadService';

export default function ReservationModal({ isOpen, onClose, preselectedPlan }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(
    preselectedPlan || siteData.packages.portfolioPackages[2]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (preselectedPlan) {
      setSelectedPackage(preselectedPlan);
    }
  }, [preselectedPlan]);

  if (!isOpen) return null;

  const handleConfirmReservation = async (e) => {
    if (e) e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your Name and WhatsApp phone number.');
      return;
    }

    setIsSubmitting(true);

    const leadPayload = {
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

    await submitLead(leadPayload);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#ffffff', '#93c5fd']
      });
    } catch (err) {
      console.warn('Confetti trigger skipped:', err);
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-surface border-2 border-primary/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(99,102,241,0.3)] backdrop-blur-2xl text-left overflow-hidden">
        
        {/* Glow Header Accent in Indigo / Violet */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-300 to-violet-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4 fill-primary" />
              </span>
              <div>
                <span className="text-[11px] font-bold text-primary-glow uppercase tracking-widest block">
                  GloovUp Priority Reservation
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  Reserve Project Slot for <span className="text-primary-glow font-mono">₹1</span>
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              Lock in your 50% discount and guaranteed 7-day launch slot before this month's remaining 7 slots close.
            </p>

            {/* Stepper Tabs */}
            <div className="flex items-center gap-2 mb-6 text-xs font-bold border-b border-white/10 pb-3">
              <button
                onClick={() => setStep(1)}
                className={`flex items-center gap-1.5 pb-1 transition-all ${
                  step === 1 ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-surface-elevated text-center leading-4 text-[10px]">1</span>
                <span>Contact Details</span>
              </button>
              <span className="text-gray-600">→</span>
              <button
                onClick={() => setStep(2)}
                className={`flex items-center gap-1.5 pb-1 transition-all ${
                  step === 2 ? 'text-primary border-b-2 border-primary' : 'text-gray-400'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-surface-elevated text-center leading-4 text-[10px]">2</span>
                <span>Selected Plan</span>
              </button>
            </div>

            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-4">
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
                      required
                    />
                  </div>
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    Our team will send your project wireframe to this WhatsApp number.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Chennai, Madurai, Coimbatore"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-elevated border border-white/10 focus:border-primary text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!name.trim() || !phone.trim()) {
                        alert('Please fill your name and WhatsApp number.');
                        return;
                      }
                      setStep(2);
                    }}
                    className="w-full py-3.5 rounded-xl bg-primary text-white font-extrabold text-xs uppercase tracking-wider shadow-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <span>Proceed to Plan Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Choose Plan */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Confirm Target Website Package:
                  </label>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
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
                            ? 'bg-primary/20 border-primary text-white ring-1 ring-primary'
                            : 'bg-surface-elevated border-white/5 text-gray-300 hover:border-white/20'
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

                {/* Summary Box */}
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Lock-in Amount Today</span>
                    <span className="text-lg font-black text-primary-glow">₹1 Only</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block text-[10px]">Guaranteed Savings</span>
                    <span className="font-bold text-primary-light">Save Up to 50%</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 rounded-xl bg-surface-elevated border border-white/10 text-xs font-bold text-gray-300 hover:text-white"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleConfirmReservation}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-primary to-violet-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 fill-white" />
                    <span>{isSubmitting ? 'Locking in slot...' : 'Confirm ₹1 Slot Reservation'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Bottom trust footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>100% Privacy & Zero Spam</span>
              </span>
              <span className="text-primary-glow font-semibold">Priority 7-Day Slot</span>
            </div>

          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary text-primary mx-auto flex items-center justify-center shadow-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-xs font-extrabold uppercase tracking-widest inline-block mb-2">
                🎉 Slot Reserved Successfully!
              </span>
              <h3 className="font-display font-black text-2xl text-white">
                Welcome to GloovUp, {name}!
              </h3>
              <p className="text-xs text-gray-300 mt-2 max-w-sm mx-auto">
                Your website project slot for <strong className="text-primary-glow">{selectedPackage.name}</strong> has been locked in at the 50% promotional rate.
              </p>
            </div>

            {/* Reservation Card Details */}
            <div className="p-4 rounded-2xl bg-surface-elevated border border-primary/30 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-400">Client Name:</span>
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
                <span className="text-gray-400">Target Delivery:</span>
                <span className="font-bold text-primary-light">{selectedPackage.delivery}</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-violet-600 text-white font-black text-xs uppercase tracking-wider shadow-glow-sm hover:shadow-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Open WhatsApp to Start Strategy Call</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs text-gray-400 hover:text-white py-2"
              >
                Close and return to website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
