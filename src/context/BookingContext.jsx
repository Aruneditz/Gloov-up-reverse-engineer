import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(() => {
    return location.pathname === '/form' || location.pathname === '/success';
  });
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [serviceType, setServiceType] = useState('Service-Based Business Website');
  const [activeStep, setActiveStep] = useState(1);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const openBooking = useCallback((pkg = null, sType = null) => {
    if (pkg) setSelectedPackage(pkg);
    if (sType) setServiceType(sType);
    setIsOpen(true);
    setActiveStep(pkg ? 1 : 1);
    if (location.pathname !== '/form' && location.pathname !== '/success') {
      navigate('/form', { replace: false });
    }
  }, [location.pathname, navigate]);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    if (location.pathname === '/form' || location.pathname === '/success') {
      navigate('/', { replace: false });
    }
  }, [location.pathname, navigate]);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openBooking,
        closeBooking,
        selectedPackage,
        setSelectedPackage,
        serviceType,
        setServiceType,
        activeStep,
        setActiveStep,
        confirmedBooking,
        setConfirmedBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
