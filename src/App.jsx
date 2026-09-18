import React, { useState } from 'react';
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
import Demo from './components/ui/demo';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showHero31Demo, setShowHero31Demo] = useState(false);

  const handleOpenDemo = (_source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  const handleOpenBooking = () => {
    window.open('https://cal.com/sphere-x-5kss8s/30min', '_blank', 'noopener,noreferrer');
  };

  if (showHero31Demo) {
    return (
      <div className="relative min-h-screen w-full bg-black text-white">
        <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }}>
          <button
            onClick={() => setShowHero31Demo(false)}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            &larr; Back to SPHEREX Platform
          </button>
        </div>
        <Demo />
      </div>
    );
  }

  return (
    <div className="app-root">
      {/* Floating preview toggle to view the new Hero31 UI anytime */}
      <div className="hero31-floating-trigger">
        <button
          onClick={() => setShowHero31Demo(true)}
          className="hero31-floating-btn"
          title="Preview new Hero31 UI component"
        >
          <span>✨</span>
          <span>Hero31 UI Preview</span>
        </button>
      </div>

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
