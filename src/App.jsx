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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  const handleOpenDemo = (_source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  const handleOpenBooking = () => {
    window.open('https://cal.com/sphere-x-5kss8s/30min', '_blank');
  };

  return (
    <div className="app-root">
      {/* Full-Page Unified Landscape Background (Top to Bottom) */}
      <div className="page-fixed-background" aria-hidden="true" />
      <div className="page-fixed-scrim" aria-hidden="true" />

      <Navbar onOpenBooking={handleOpenBooking} />

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

      <Footer onOpenBooking={handleOpenBooking} />

      <DemoModal isOpen={modalOpen} onClose={handleCloseDemo} onOpenBooking={handleOpenBooking} />
      <PageLoader isOpen={isBookingLoading} onClose={() => setIsBookingLoading(false)} />
    </div>
  );
}
