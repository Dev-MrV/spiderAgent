import React from 'react';

export const SocialProofSecurity: React.FC = () => {
  return (
    <section className="py-12 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-400 font-medium mb-6">Trusted by enterprise security teams</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="text-xl font-display font-bold text-slate-300">Vanguard</div>
          <div className="text-xl font-display font-bold text-slate-300">ISRO Systems</div>
          <div className="text-xl font-display font-bold text-slate-300">Public Sector</div>
          <div className="text-xl font-display font-bold text-slate-300">FinTech Ops</div>
        </div>
      </div>
    </section>
  );
};
