import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Cpu, Lock, CheckCircle2, ChevronRight, Eye, RefreshCw, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenInstall: () => void;
  onExploreDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInstall, onExploreDemo }) => {
  const [activeTab, setActiveTab] = useState<'eproc' | 'istrac' | 'banking'>('eproc');
  const [viewMode, setViewMode] = useState<'redacted' | 'raw_egress'>('redacted');
  const [isScanning, setIsScanning] = useState(false);
  const [scanTimestamp, setScanTimestamp] = useState('9.01 ms');

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanTimestamp((8.5 + Math.random() * 0.9).toFixed(2) + ' ms');
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-12 px-6 overflow-hidden silk-mesh-bg">
      {/* Background silk filament webs - subtle geometric lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="silkGlow" cx="50%" cy="30%" r="50%">
              <stop offset="0%" stopColor="rgba(254, 226, 226, 0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#silkGlow)" />
          {/* Subtle concentric spiderweb radial lines */}
          <circle cx="50%" cy="40%" r="200" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
          <circle cx="50%" cy="40%" r="380" fill="none" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1" />
          <circle cx="50%" cy="40%" r="580" fill="none" stroke="rgba(255, 255, 255, 0.015)" strokeWidth="1" />
          <path d="M 0 0 L 1440 900" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
          <path d="M 1440 0 L 0 900" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Unboxed clean metadata kicker (anti-pill discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-normal text-white mb-6 tracking-wide">
          <span className="text-white font-medium">SpideyAgent v2.5.1</span>
          <span aria-hidden="true" className="text-white">·</span>
          <span>Dual-Track WebGPU Vision</span>
          <span aria-hidden="true" className="text-white">·</span>
          <span>Zero-Data Egress</span>
          <span aria-hidden="true" className="text-white">·</span>
          <span className="text-white">ISRO SIH26171 Architecture</span>
        </div>

        {/* Hero Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-black tracking-tight leading-[1.08] [text-wrap:balance]">
            Traverse the web. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-red-100 to-slate-400">
              Without lifting a finger.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            An autonomous browser agent engineered with organic precision. Navigates complex tabs, extracts structured intelligence, and sanitizes sensitive data on-device in under 10 milliseconds.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenInstall}
            className="iridescent-glow group relative px-6 py-3.5 text-sm font-medium text-black bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center gap-2.5 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-black">Add to Browser — It&apos;s Free</span>
              <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>

          <button
            onClick={onExploreDemo}
            className="px-6 py-3.5 text-sm font-normal text-white hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 rounded-xl border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 flex items-center gap-2 whitespace-nowrap backdrop-blur-sm"
          >
            <span>Live Perception Sandbox</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

        </div>
    </section>
  );
};
