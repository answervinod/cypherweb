import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { OurFocusSection } from '../components/OurFocusSection';
import { TokenPlatform } from '../components/TokenPlatform';
import { ProofOfEngagement } from '../components/ProofOfEngagement';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <OurFocusSection />
        <TokenPlatform />
        <ProofOfEngagement />
      </main>
      <Footer />
    </div>
  );
}
// Trigger deployment
