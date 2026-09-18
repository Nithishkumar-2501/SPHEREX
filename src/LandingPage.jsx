import React, { useState } from 'react';
import './index.css';

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

/**
 * SPHEREX Landing Page Component
 * Intelligent Admission CRM & Lead Management System
 */
export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDemo = (_source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  const handleOpenBooking = () => {
    window.open('https://cal.com/sphere-x-5kss8s/30min', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-root">
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
    </div>
  );
}
