import React, { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ValueProps from './components/ValueProps';
import AdmissionJourney from './components/AdmissionJourney';
import LeadManagement from './components/LeadManagement';
import LeadAllocation from './components/LeadAllocation';
import OmnichannelMarketing from './components/OmnichannelMarketing';
import VoiceCalling from './components/VoiceCalling';
import ApplicationPayment from './components/ApplicationPayment';
import MultiCampus from './components/MultiCampus';
import DashboardShowcase from './components/DashboardShowcase';
import WhoIsItFor from './components/WhoIsItFor';
import HowItWorks from './components/HowItWorks';
import WhySpherex from './components/WhySpherex';
import TechStack from './components/TechStack';
import FinalCTA from './components/FinalCTA';
import MeetingScheduler from './components/MeetingScheduler';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

/**
 * SPHEREX Landing Page Component
 * Drop-in module for merging into any React / Next.js / Vite project.
 */
export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenDemo = (source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  const handleSimulateAction = (actionName) => {
    setToastMessage(`${actionName} Executed in SPHEREX Demo Engine`);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="app-root">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <Problem />
        <ValueProps />
        <AdmissionJourney onOpenDemo={handleOpenDemo} />
        <LeadManagement onOpenDemo={handleOpenDemo} />
        <LeadAllocation onOpenDemo={handleOpenDemo} onSimulateAction={handleSimulateAction} />
        <OmnichannelMarketing onOpenDemo={handleOpenDemo} />
        <VoiceCalling onOpenDemo={handleOpenDemo} onSimulateAction={handleSimulateAction} />
        <ApplicationPayment />
        <MultiCampus />
        <DashboardShowcase />
        <WhoIsItFor />
        <HowItWorks />
        <WhySpherex />
        <TechStack />
        <MeetingScheduler />
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal isOpen={modalOpen} onClose={handleCloseDemo} />

      {toastMessage && (
        <div className="toast-notification">
          <span style={{ color: 'var(--accent-cyan)' }}>&#10003;</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
