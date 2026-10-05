/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SpiderWebDiagram } from './components/SpiderWebDiagram';
import { VisualSafetyGate } from './components/VisualSafetyGate';
import { BentoGrid } from './components/BentoGrid';
import { LiveSandbox } from './components/LiveSandbox';
import { BenchmarkSection } from './components/BenchmarkSection';

import { InstallModal } from './components/InstallModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isInstallOpen, setIsInstallOpen] = useState(false);

  const handleScrollToSandbox = () => {
    const sandboxElement = document.getElementById('sandbox');
    if (sandboxElement) {
      sandboxElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-[#e5e7eb] font-sans antialiased selection:bg-red-900/60 selection:text-white relative">
      {/* Fixed Full-Screen Video Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050101]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105 pointer-events-none mix-blend-screen"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050101]/20 via-transparent to-[#050101]/40 pointer-events-none" />
      </div>

      {/* Navbar with 3-Zone contract */}
      <Navbar onOpenInstall={() => setIsInstallOpen(true)} />

      {/* Hero Section with Floating Arc Mockup */}
      <main id="main-content">
        <HeroSection
          onOpenInstall={() => setIsInstallOpen(true)}
          onExploreDemo={handleScrollToSandbox}
        />

        {/* How It Works: Biomimetic Spiderweb Node Constellation */}
        <SpiderWebDiagram />

        {/* Zero-Egress Visual Safety Gate Feature Spotlight */}
        <VisualSafetyGate />

        {/* Bento Box Feature Showcase */}
        <BentoGrid />

        {/* Live Interactive Verification Sandbox */}
        <LiveSandbox />

        {/* Quantitative Benchmarks & SIH26171 Evaluation Data */}
        <BenchmarkSection />


      </main>

      {/* Expansive Footer & Final CTA */}
      <Footer onOpenInstall={() => setIsInstallOpen(true)} />

      {/* Extension Install Simulation Modal */}
      <InstallModal
        isOpen={isInstallOpen}
        onClose={() => setIsInstallOpen(false)}
      />
    </div>
  );
}
