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

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-cyan selection:text-black relative">
      <NoiseOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <FounderSection />
        <AmaraFeature />
        <InteractiveDiagnostic />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
