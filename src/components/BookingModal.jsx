import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Globe,
  ShoppingBag,
  Sparkles,
  MessageSquare,
  Lock,
  Clock
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import './BookingModal.css';

const steps = [
  { id: 1, title: 'Details', icon: User },
  { id: 2, title: 'Service', icon: Globe },
  { id: 3, title: 'Package', icon: Sparkles },
  { id: 4, title: 'Confirm', icon: ShieldCheck }
];

const serviceOptions = [
  {
    id: 'business_portfolio',
    label: 'Service-Based Business Website',
    desc: 'Best for company profile, portfolio, consultancy, hotel, real estate, education, clinic, restaurant, service business.',
    icon: Globe
  },
  {
    id: 'ecommerce',
    label: 'Product-Based Online Store',
    desc: 'Best for clothing, grocery, beauty products, jewellery, furniture, retail shop, e-commerce selling products.',
    icon: ShoppingBag
  }
];

export const BookingModal = () => {
  const {
    isOpen,
    closeBooking,
    selectedPackage,
    setSelectedPackage,
    serviceType,
    setServiceType,
    activeStep,
    setActiveStep
  } = useBooking();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);
  const [countdown, setCountdown] = useState(5);

  // Available packages depending on serviceType
  const availablePackages = serviceType === 'Product-Based Online Store'
    ? siteData.packages.ecommercePackages
    : siteData.packages.portfolioPackages;

  // Preselect first package if none selected
  useEffect(() => {
    if (!selectedPackage && availablePackages.length > 0) {
      setSelectedPackage(availablePackages[0]);
    }
  }, [serviceType, selectedPackage, availablePackages, setSelectedPackage]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeBooking();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeBooking]);

  // Validation
  const validateStep1 = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Valid phone number is required';
    }
    if (!formData.location.trim()) {
      errs.location = 'City / Location is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (activeStep === 1) {
      if (!validateStep1()) return;
    }
    setActiveStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  // Build WhatsApp text URL
  const generateWhatsAppURL = (bookingId) => {
    const text = `Hi Gloov Up, I have booked my website slot.

Booking Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Website Type: ${serviceType}
Selected Package: ${selectedPackage?.name || 'Standard'}
Package Price: ${selectedPackage?.price || '₹9,998'}
Booking Amount: ₹1
Booking ID: ${bookingId}

Please contact me to start my project.`;

    return `https://wa.me/919677387448?text=${encodeURIComponent(text)}`;
  };

  const handleConfirmBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `GLV-${Date.now().toString().slice(-6)}`;
      setBookingResult({
        id: generatedId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
      });
      setIsSubmitting(false);
      setCountdown(5);
    }, 600);
  };

  // WhatsApp countdown redirect
  useEffect(() => {
    let timer;
    if (bookingResult && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (bookingResult && countdown === 0) {
      const waUrl = generateWhatsAppURL(bookingResult.id);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
    return () => clearInterval(timer);
  }, [bookingResult, countdown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="booking-modal-backdrop" onClick={closeBooking}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="booking-modal-card"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeBooking}
            className="booking-close-btn"
            aria-label="Close Booking"
          >
            <X size={20} />
          </button>

          {bookingResult ? (
            /* Success Screen */
            <div className="booking-success-view">
              <div className="success-icon-badge">
                <CheckCircle2 size={42} className="text-brand-teal" />
              </div>

              <h3 className="success-title">Congratulations!</h3>
              <p className="success-subtitle">
                Your website project slot has been reserved for just <strong className="text-brand-teal">₹1</strong>. We have received your details and our team is ready to begin.
              </p>

              <div className="success-summary-box">
                <div className="summary-field">
                  <span className="summary-lbl">Booking Reference ID</span>
                  <span className="summary-val text-brand-teal font-mono">{bookingResult.id}</span>
                </div>
                <div className="summary-field">
                  <span className="summary-lbl">Selected Package</span>
                  <span className="summary-val">{selectedPackage?.name}</span>
                </div>
                <div className="summary-field">
                  <span className="summary-lbl">Package Offer Price</span>
                  <span className="summary-val">{selectedPackage?.price}</span>
                </div>
                <div className="summary-field">
                  <span className="summary-lbl">Slot Booking Fee</span>
                  <span className="summary-val text-brand-teal font-bold">₹1 (Paid/Reserved)</span>
                </div>
              </div>

              <div className="whatsapp-redirect-box">
                <a
                  href={generateWhatsAppURL(bookingResult.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal w-full"
                >
                  <MessageSquare size={18} />
                  <span>Open WhatsApp Directly</span>
                </a>

                <div className="redirect-countdown-note">
                  <Clock size={13} className="text-cyan animate-spin" />
                  <span>Connecting to WhatsApp in <strong className="text-cyan">{countdown}s</strong>...</span>
                </div>
              </div>
            </div>
          ) : (
            /* Multi-step Interactive Funnel */
            <div className="booking-funnel-layout">
              {/* Sidebar Steps */}
              <div className="booking-sidebar">
                <div className="sidebar-brand">
                  <span className="sidebar-brand-name">
                    Gloov<span className="text-brand-teal">Up</span>
                  </span>
                  <span className="sidebar-brand-sub">PROJECT RESERVATION</span>
                </div>

                <div className="steps-progress-list">
                  {steps.map((st) => {
                    const StepIcon = st.icon;
                    const isActive = activeStep === st.id;
                    const isCompleted = activeStep > st.id;
                    return (
                      <div
                        key={st.id}
                        className={`step-item ${isActive ? 'step-active' : ''} ${isCompleted ? 'step-completed' : ''}`}
                      >
                        <div className="step-indicator">
                          {isCompleted ? (
                            <CheckCircle2 size={16} className="step-done-icon" />
                          ) : (
                            <StepIcon size={16} />
                          )}
                        </div>
                        <div className="step-info">
                          <span className="step-num">Step 0{st.id}</span>
                          <span className="step-text">{st.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="sidebar-trust-foot">
                  <Lock size={14} className="text-brand-teal" />
                  <span>256-Bit SSL Encrypted & Confidential</span>
                </div>
              </div>

              {/* Main Step Content */}
              <div className="booking-body">
                {/* Step 1: Contact Details */}
                {activeStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="step-content-pane"
                  >
                    <div className="pane-header">
                      <h4 className="pane-title">Tell Us About Yourself</h4>
                      <p className="pane-desc">We will use these details to contact you and prepare your project roadmap.</p>
                    </div>

                    <div className="form-fields-grid">
                      <div className="form-field">
                        <label className="form-label" htmlFor="client-name">Full Name *</label>
                        <div className="input-frame">
                          <User size={16} className="input-icon" />
                          <input
                            id="client-name"
                            type="text"
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>

                      <div className="form-field">
                        <label className="form-label" htmlFor="client-email">Email Address *</label>
                        <div className="input-frame">
                          <Mail size={16} className="input-icon" />
                          <input
                            id="client-email"
                            type="email"
                            placeholder="e.g. john@business.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>

                      <div className="form-field">
                        <label className="form-label" htmlFor="client-phone">Phone / WhatsApp *</label>
                        <div className="input-frame">
                          <Phone size={16} className="input-icon" />
                          <input
                            id="client-phone"
                            type="tel"
                            placeholder="e.g. +91 96773 87448"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        {errors.phone && <span className="field-error">{errors.phone}</span>}
                      </div>

                      <div className="form-field">
                        <label className="form-label" htmlFor="client-location">City / Location *</label>
                        <div className="input-frame">
                          <MapPin size={16} className="input-icon" />
                          <input
                            id="client-location"
                            type="text"
                            placeholder="e.g. Chennai, Tamil Nadu"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        {errors.location && <span className="field-error">{errors.location}</span>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Type */}
                {activeStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="step-content-pane"
                  >
                    <div className="pane-header">
                      <h4 className="pane-title">Choose Your Website Type</h4>
                      <p className="pane-desc">Select the primary business model for your upcoming website.</p>
                    </div>

                    <div className="service-options-list">
                      {serviceOptions.map((opt) => {
                        const OptIcon = opt.icon;
                        const isSelected = serviceType === opt.label;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setServiceType(opt.label)}
                            className={`service-card ${isSelected ? 'service-card-selected' : ''}`}
                          >
                            <div className="service-icon-box">
                              <OptIcon size={24} />
                            </div>
                            <div className="service-card-text">
                              <h5 className="service-card-label">{opt.label}</h5>
                              <p className="service-card-desc">{opt.desc}</p>
                            </div>
                            <div className="service-check-radio">
                              {isSelected && <CheckCircle2 size={18} className="text-brand-teal" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Package Selection */}
                {activeStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="step-content-pane"
                  >
                    <div className="pane-header">
                      <h4 className="pane-title">Select Your Package</h4>
                      <p className="pane-desc">Available packages tailored for {serviceType}.</p>
                    </div>

                    <div className="modal-packages-list">
                      {availablePackages.map((pkg) => {
                        const isSelected = selectedPackage?.name === pkg.name;
                        return (
                          <div
                            key={pkg.name}
                            onClick={() => setSelectedPackage(pkg)}
                            className={`modal-package-item ${isSelected ? 'pkg-item-selected' : ''}`}
                          >
                            <div className="pkg-item-left">
                              <div className="pkg-item-header">
                                <h5 className="pkg-item-name">{pkg.name}</h5>
                                {pkg.badge && <span className="pkg-item-badge">{pkg.badge}</span>}
                              </div>
                              <p className="pkg-item-desc">{pkg.desc}</p>
                              <div className="pkg-item-sla">
                                <span>{pkg.delivery}</span> • <span>{pkg.support}</span>
                              </div>
                            </div>

                            <div className="pkg-item-right">
                              <span className="pkg-item-orig">{pkg.original}</span>
                              <span className="pkg-item-price">{pkg.price}</span>
                              <div className="pkg-radio">
                                {isSelected && <CheckCircle2 size={18} className="text-brand-teal" />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review & Confirm */}
                {activeStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="step-content-pane"
                  >
                    <div className="pane-header">
                      <h4 className="pane-title">Review & Confirm Slot</h4>
                      <p className="pane-desc">Verify your details before reserving your ₹1 slot.</p>
                    </div>

                    <div className="review-summary-card">
                      <div className="review-row">
                        <span className="review-lbl">Client</span>
                        <span className="review-val">{formData.name} ({formData.phone})</span>
                      </div>
                      <div className="review-row">
                        <span className="review-lbl">Email</span>
                        <span className="review-val">{formData.email}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-lbl">Location</span>
                        <span className="review-val">{formData.location}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-lbl">Website Type</span>
                        <span className="review-val">{serviceType}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-lbl">Package Chosen</span>
                        <span className="review-val font-bold">{selectedPackage?.name}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-lbl">Delivery SLA</span>
                        <span className="review-val">{selectedPackage?.delivery}</span>
                      </div>
                      <div className="review-divider" />
                      <div className="review-row review-pricing-row">
                        <div className="price-label-group">
                          <span className="final-price-lbl">Reservation Fee Today</span>
                          <span className="final-price-note">Regular package price ({selectedPackage?.price}) applies on milestone delivery</span>
                        </div>
                        <div className="final-price-val">
                          <span className="struck-orig">{selectedPackage?.price}</span>
                          <strong className="one-rupee-accent">₹1</strong>
                        </div>
                      </div>
                    </div>

                    <div className="review-guarantee-note">
                      <ShieldCheck size={16} className="text-brand-teal" />
                      <span>100% Client Satisfaction & Money-Back Guarantee backed by GloovUp</span>
                    </div>
                  </motion.div>
                )}

                {/* Funnel Navigation Footer */}
                <div className="booking-footer-actions">
                  {activeStep > 1 && (
                    <button onClick={handleBack} className="btn btn-secondary back-btn">
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>
                  )}

                  {activeStep < 4 ? (
                    <button onClick={handleNext} className="btn btn-primary next-btn">
                      <span>Continue</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirmBooking}
                      disabled={isSubmitting}
                      className="btn btn-teal confirm-btn"
                    >
                      {isSubmitting ? (
                        <span>Reserving Slot...</span>
                      ) : (
                        <>
                          <span>Lock In Slot For ₹1</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
