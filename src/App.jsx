import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueProps from './components/ValueProps';
import AdmissionJourney from './components/AdmissionJourney';
import LeadManagement from './components/LeadManagement';
import NoraAISection from './components/NoraAISection';
import LeadAllocation from './components/LeadAllocation';
import MultiCampus from './components/MultiCampus';
import VoiceCalling from './components/VoiceCalling';
import MobileAppSection from './components/MobileAppSection';
import OmnichannelMarketing from './components/OmnichannelMarketing';
import ApplicationPayment from './components/ApplicationPayment';
import DashboardShowcase from './components/DashboardShowcase';
import WhoIsItFor from './components/WhoIsItFor';
import HowItWorks from './components/HowItWorks';
import WhySpherex from './components/WhySpherex';
import TechStack from './components/TechStack';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import PageLoader from './components/PageLoader';
import Auth11 from './components/ui';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      return (
        path === '/login' ||
        path === '/auth' ||
        path === '/signin' ||
        path === '/demo' ||
        search.includes('page=login') ||
        search.includes('page=auth')
      );
    }
    return false;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      setIsLoginPage(
        path === '/login' ||
        path === '/auth' ||
        path === '/signin' ||
        path === '/demo' ||
        search.includes('page=login') ||
        search.includes('page=auth')
      );
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenLogin = () => {
    setIsLoginPage(true);
    if (window.history.pushState) {
      window.history.pushState(null, '', '/login');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseLogin = () => {
    setIsLoginPage(false);
    if (window.history.pushState) {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = (_source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  const handleOpenBooking = () => {
    setIsBookingLoading(true);
    setTimeout(() => {
      window.open('https://cal.com/sphere-x-5kss8s/30min', '_blank');
      setTimeout(() => {
        setIsBookingLoading(false);
      }, 400);
    }, 1400);
  };

  if (isLoginPage) {
    return (
      <div className="app-root">
        <Auth11
          onBackToHome={handleCloseLogin}
          showBackToHome={true}
          buttonText="Sign in"
        />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar onOpenBooking={handleOpenBooking} onOpenLogin={handleOpenLogin} />

      <main>
        <Hero onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />
        <Problem />
        <ValueProps />
        <LeadManagement onOpenBooking={handleOpenBooking} />
        <NoraAISection onOpenBooking={handleOpenBooking} />
        <LeadAllocation onOpenBooking={handleOpenBooking} />
        <MultiCampus />
        <AdmissionJourney onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />
        <VoiceCalling onOpenBooking={handleOpenBooking} />
        <MobileAppSection onOpenBooking={handleOpenBooking} />
        <OmnichannelMarketing onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />
        <ApplicationPayment />
        <DashboardShowcase />
        <WhoIsItFor />
        <HowItWorks />
        <WhySpherex />
        <TechStack />
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} onOpenLogin={handleOpenLogin} />

      <DemoModal isOpen={modalOpen} onClose={handleCloseDemo} onOpenBooking={handleOpenBooking} />
      <PageLoader isOpen={isBookingLoading} onClose={() => setIsBookingLoading(false)} />
    </div>
  );
}
