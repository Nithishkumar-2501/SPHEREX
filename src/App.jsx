import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CatalisHero from './components/CatalisHero';
import CatalisAbout from './components/CatalisAbout';
import CatalisBenefits from './components/CatalisBenefits';
import Problem from './components/Problem';
import LeadManagement from './components/LeadManagement';
import NoraAISection from './components/NoraAISection';
import LeadAllocation from './components/LeadAllocation';
import MultiCampus from './components/MultiCampus';
import AdmissionJourney from './components/AdmissionJourney';
import VoiceCalling from './components/VoiceCalling';
import MobileAppSection from './components/MobileAppSection';
import OmnichannelMarketing from './components/OmnichannelMarketing';
import CatalisPricing from './components/CatalisPricing';
import CatalisTestimonials from './components/CatalisTestimonials';
import TechStack from './components/TechStack';
import CatalisCTA from './components/CatalisCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import PageLoader from './components/PageLoader';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .catalis-benefit-card, .catalis-stat-item, .catalis-pricing-card, .comparison-card, .catalis-about-section, .section'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <div className="app-root catalis-theme">
      {/* Full-Page Fixed Serene Sky and Clouds Background (Reference: Catalis) */}
      <div className="catalis-fixed-sky-background" aria-hidden="true" />

      {/* Top Scooped Island Navbar (Matches Reference Images 1 & 2) */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="catalis-main-flow">
        {/* 1. Hero Canvas with Floating 3D Stat Cards & Live Intake OS (Image 1 Reference) */}
        <CatalisHero onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />

        {/* 2. Catalis About Us & Key Metrics */}
        <CatalisAbout onOpenBooking={handleOpenBooking} />

        {/* 3. Catalis Benefits 4-Card Grid (Image 2 Reference) */}
        <CatalisBenefits onOpenBooking={handleOpenBooking} />

        {/* 4. Core Platform Challenge vs SPHEREX */}
        <Problem />

        {/* 5. Lead Management & Candidate Entry Engine */}
        <LeadManagement onOpenBooking={handleOpenBooking} />

        {/* 6. Nora AI Cutoff Evaluator */}
        <NoraAISection onOpenBooking={handleOpenBooking} />

        {/* 7. Smart Faculty Allocation & Quota Tracking */}
        <LeadAllocation onOpenBooking={handleOpenBooking} />

        {/* 8. Multi-Campus Dual Architecture */}
        <MultiCampus />

        {/* 9. Interactive Admission Journey */}
        <AdmissionJourney onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />

        {/* 10. WebRTC Voice Telephony */}
        <VoiceCalling onOpenBooking={handleOpenBooking} />

        {/* 11. Native Mobile Counselor App */}
        <MobileAppSection onOpenBooking={handleOpenBooking} />

        {/* 12. Omnichannel Marketing Intelligence */}
        <OmnichannelMarketing onOpenBooking={handleOpenBooking} onOpenDemo={handleOpenDemo} />

        {/* 13. Catalis 3-Tier Pricing Plans */}
        <CatalisPricing onOpenBooking={handleOpenBooking} />

        {/* 14. Catalis Testimonial Marquee Loop */}
        <CatalisTestimonials />

        {/* 15. Technology Architecture Matrix */}
        <TechStack />

        {/* 16. Final Catalis Cloud Frame Onboarding CTA */}
        <CatalisCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <DemoModal isOpen={modalOpen} onClose={handleCloseDemo} onOpenBooking={handleOpenBooking} />
      <PageLoader isOpen={isBookingLoading} onClose={() => setIsBookingLoading(false)} />
    </div>
  );
}
