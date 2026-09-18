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
import MeetingScheduler from './components/MeetingScheduler';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDemo = (_source = 'General') => {
    setModalOpen(true);
  };

  const handleCloseDemo = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-root">
      <Navbar onOpenDemo={handleOpenDemo} />

      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <Problem />
        <ValueProps />
        <LeadManagement />
        <NoraAISection />
        <LeadAllocation />
        <MultiCampus />
        <AdmissionJourney onOpenDemo={handleOpenDemo} />
        <VoiceCalling />
        <MobileAppSection />
        <OmnichannelMarketing onOpenDemo={handleOpenDemo} />
        <ApplicationPayment />
        <DashboardShowcase />
        <WhoIsItFor />
        <HowItWorks />
        <WhySpherex />
        <TechStack />
        <MeetingScheduler />
        <FinalCTA />
      </main>

      <Footer />

      <DemoModal isOpen={modalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
