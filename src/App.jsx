import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

// Sections
import { HeroSection } from './sections/HeroSection';
import { ClientMarquee } from './sections/ClientMarquee';
import { AuthoritySection } from './sections/AuthoritySection';
import { PortfolioSection } from './sections/PortfolioSection';
import { BookingOfferSection } from './sections/BookingOfferSection';
import { PricingSection } from './sections/PricingSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FinalCTASection } from './sections/FinalCTASection';

const MainLayout = () => {
  return (
    <div className="gloovup-app-layout">
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />

      <main>
        <HeroSection />
        <ClientMarquee />
        <AuthoritySection />
        <PortfolioSection />
        <BookingOfferSection />
        <PricingSection />
        <WhyUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>

      <Footer />
      <BookingModal />
      <FloatingActions />
    </div>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/form" element={<MainLayout />} />
      <Route path="/success" element={<MainLayout />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
};

export default App;
