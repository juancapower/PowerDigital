/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AmaraFeature from './components/AmaraFeature';
import InteractiveDiagnostic from './components/InteractiveDiagnostic';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-cyan selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AmaraFeature />
        <InteractiveDiagnostic />
      </main>
      <Footer />
    </div>
  );
}
