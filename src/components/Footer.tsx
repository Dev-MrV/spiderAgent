import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenInstall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInstall }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-white/40 backdrop-blur-md pt-24 pb-16 px-6 overflow-hidden">
      {/* Immersive Final CTA Box */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="rounded-3xl p-8 sm:p-14 bg-white/40 backdrop-blur-md border border-white/[0.1] relative overflow-hidden text-center">
          {/* Subtle silk thread glow in CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/[0.06] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-black uppercase tracking-wider mb-3 block">
              Autonomous Browser Security
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-medium text-black tracking-tight leading-tight mb-4">
              Begin Traversing with SpideyAgent.
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              Experience browser automation that never compromises private data. 5.2 MB payload, sub-10ms perception, and mathematical zero-egress peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenInstall}
                className="iridescent-glow w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xl transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                Add to Browser — It&apos;s Free
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-4 text-sm font-normal text-slate-700 hover:text-black bg-slate-900/60 hover:bg-slate-800/80 rounded-xl border border-white/[0.08] transition-all duration-200 whitespace-nowrap"
              >
                Read SIH26171 Architecture
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter Dispatch */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
        {/* Brand Column */}
        <div className="md:col-span-4">
          <a href="#" className="flex items-center gap-2.5 text-black font-medium text-lg mb-3">
            <img src="/spider_logo.ico" alt="Spider Logo" className="w-6 h-6 object-contain" />
            <span className="font-display font-medium tracking-tight">SpideyAgent</span>
          </a>
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            Biomimetic on-device AI browser agent. Dual-track WebGPU perception, mathematical checksums, and zero-egress privacy boundaries.
          </p>
          <div className="mt-4 text-[11px] font-mono text-slate-500">
            SIH26171 (ISRO) · Dual-Track Perception &amp; Local Safety Boundary
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2">
          <div className="text-xs font-mono text-slate-700 uppercase tracking-wider mb-4">
            Navigation
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li><a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a></li>
            <li><a href="#features" className="hover:text-black transition-colors">Capabilities</a></li>
            <li><a href="#sandbox" className="hover:text-black transition-colors">Perception Sandbox</a></li>
            <li><a href="#benchmarks" className="hover:text-black transition-colors">Latency Metrics</a></li>
            <li><a href="#security" className="hover:text-black transition-colors">Zero-Egress Security</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <div className="text-xs font-mono text-slate-700 uppercase tracking-wider mb-4">
            Models
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li><span className="text-slate-700">BlazeFace (535 KB)</span></li>
            <li><span className="text-slate-700">DBNet ResNet (4.7 MB)</span></li>
            <li><span className="text-slate-700">Verhoeff D-Table Engine</span></li>
            <li><span className="text-slate-700">Luhn Card Modulo</span></li>
            <li><span className="text-slate-700">Model Context Protocol</span></li>
          </ul>
        </div>

        {/* Newsletter Dispatch Column */}
        <div className="md:col-span-4">
          <div className="text-xs font-mono text-slate-700 uppercase tracking-wider mb-2">
            Release Notes &amp; Updates
          </div>
          <p className="text-xs text-slate-600 mb-4">
            Subscribe for WebGPU model quantization updates and new MCP server adapters.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@domain.com"
              required
              className="flex-1 px-3.5 py-2 text-xs bg-white/40 backdrop-blur-md border border-white/[0.08] rounded-lg text-black placeholder-slate-500 focus:outline-none focus:border-red-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium text-slate-900 bg-white hover:bg-slate-200 rounded-lg transition-colors shrink-0"
            >
              {submitted ? <Check className="w-3.5 h-3.5 text-red-600" /> : 'Join'}
            </button>
          </form>

          {submitted && (
            <p className="text-[11px] text-red-700 mt-2 flex items-center gap-1.5">
              <Check className="w-3 h-3" />
              <span>Subscribed to SpideyAgent security bulletins.</span>
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} SpideyAgent Systems. Built for SIH26171. Apache 2.0.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-700 transition-colors">Privacy Charter</a>
          <a href="#" className="hover:text-slate-700 transition-colors">Verhoeff Cryptography Spec</a>
          <a href="#" className="hover:text-slate-700 transition-colors">Security Audit Report</a>
        </div>
      </div>
    </footer>
  );
};
