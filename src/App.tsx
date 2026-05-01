/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BrandsSection from './components/BrandsSection';
import FounderSection from './components/FounderSection';
import AmaraFeature from './components/AmaraFeature';
import InteractiveDiagnostic from './components/InteractiveDiagnostic';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';
import WhatsAppButton from './components/WhatsAppButton';
import AgendaSection from './components/AgendaSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--pd-bg)] text-[var(--pd-text)] selection:bg-[var(--pd-primary)] selection:text-white relative flex flex-col">
      <NoiseOverlay />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <AgendaSection />
        <FounderSection />
        <AmaraFeature />
        <InteractiveDiagnostic />
      </main>
      <Footer />
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-[40] pointer-events-none flex justify-center">
        <a href="#agenda" className="pointer-events-auto w-full max-w-sm flex items-center justify-center gap-2.5 bg-[var(--pd-primary)] text-white border border-[rgba(255,255,255,0.1)] font-body font-semibold text-[15px] px-6 py-3.5 rounded-full shadow-[0_8px_32px_rgba(67,97,238,0.5),0_0_0_1px_rgba(67,97,238,0.2)] backdrop-blur-md transition-all duration-300 hover:bg-[var(--pd-primary-hover)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(67,97,238,0.6)]">
          Agenda una llamada
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      <WhatsAppButton />
    </div>
  );
}
