import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Eye, Camera, RefreshCw, CheckCircle2, AlertTriangle, ArrowRight, Server, Lock } from 'lucide-react';

export const VisualSafetyGate: React.FC = () => {
    const [verdictState, setVerdictState] = useState<'safe' | 'risk'>('safe');
    const [isSimulating, setIsSimulating] = useState(false);
    const [activeStep, setActiveStep] = useState<number>(3); // default showing step 4 (Verdict)

    const triggerStepSimulation = (state: 'safe' | 'risk') => {
        setVerdictState(state);
        setIsSimulating(true);
        let s = 0;
        const interval = setInterval(() => {
            s++;
            setActiveStep(s);
            if (s >= 3) {
                clearInterval(interval);
                setIsSimulating(false);
            }
        }, 450);
    };

    const steps = [
        {
            num: '01',
            title: 'The Intercept',
            desc: 'When you or an autonomous browser agent clicks a high-stakes "Submit" button, SpideyAgent instantly freezes the action execution thread.',
            icon: Lock,
            metric: '0.4 ms freeze'
        },
        {
            num: '02',
            title: 'The Visual Sweep',
            desc: 'In the background, SpideyAgent captures a pixel-perfect, lossless screenshot buffer of the active browser viewport before egress.',
            icon: Camera,
            metric: 'WebGPU buffer'
        },
        {
            num: '03',
            title: 'Neural Verification',
            desc: 'The visual payload is evaluated against multimodal reasoning engines to mathematically verify that zero unredacted PII is exposed.',
            icon: Eye,
            metric: 'Multimodal VLM'
        },
        {
            num: '04',
            title: 'The Verdict',
            desc: 'Green light re-hydrates vault tokens and replays the click. Red light halts egress and triggers the human Manual Override Modal.',
            icon: ShieldCheck,
            metric: 'Fail-Closed'
        }
    ];

    return (
        <section id="safety-gate" className="py-24 px-6 border-t border-white/[0.06] bg-transparent relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-red-500/[0.04] via-red-500/[0.03] to-red-500/[0.03] blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-2 text-xs font-mono text-red-600 uppercase tracking-wider mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <span>Patented Pre-Egress Inspection</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
                        Zero-Egress Visual Safety Gate
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-200 font-medium">
                        Your data doesn&apos;t leave the browser until the AI <em className="text-white not-italic underline decoration-red-400 underline-offset-4">sees</em> it&apos;s safe.
                    </p>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                        Most privacy tools only look at raw code strings. SpideyAgent literally <span className="text-white font-medium">looks at your screen</span>. Our Zero-Egress Visual Safety Gate is a final, impenetrable checkpoint that intercepts form submissions milliseconds before they leave your browser.
                    </p>
                </div>

                {/* Interactive 4-Step Architecture Workflow */}
                <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 mb-12 shadow-2xl">
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-8">
                        <div>
                            <h3 className="text-base font-medium text-white">
                                How It Works: Millisecond Pre-Egress Interception
                            </h3>
                            <p className="text-xs text-slate-300 mt-0.5">
                                Step-by-step verification pipeline triggered prior to network transmission
                            </p>
                        </div>

                        {/* Test Simulation Buttons */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-600 mr-1 hidden sm:inline">Simulate Path:</span>
                            <button
                                onClick={() => triggerStepSimulation('safe')}
                                disabled={isSimulating}
                                className={`px-3.5 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${verdictState === 'safe'
                                        ? 'bg-red-500/20 text-red-600 border border-red-500/40 shadow-sm'
                                        : 'bg-white/40 backdrop-blur-md text-slate-600 border border-white/[0.06] hover:text-black'
                                    }`}
                            >
                                <CheckCircle2 className="w-3.5 h-3.5 text-red-700" />
                                <span>Green Light (Safe)</span>
                            </button>

                            <button
                                onClick={() => triggerStepSimulation('risk')}
                                disabled={isSimulating}
                                className={`px-3.5 py-1.5 text-xs rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 ${verdictState === 'risk'
                                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                                        : 'bg-white/40 backdrop-blur-md text-slate-600 border border-white/[0.06] hover:text-black'
                                    }`}
                            >
                                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                                <span>Red Light (Risk Detected)</span>
                            </button>
                        </div>
                    </div>

                    {/* 4 Pipeline Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {steps.map((st, i) => {
                            const Icon = st.icon;
                            const isCurrent = activeStep === i;

                            return (
                                <div
                                    key={st.num}
                                    className={`p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${isCurrent
                                            ? 'bg-white/40 backdrop-blur-md border-red-400/50 shadow-md ring-1 ring-red-400/20'
                                            : 'bg-white/40 backdrop-blur-md border-white/[0.05] hover:border-white/[0.1]'
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-mono text-xs text-red-600 font-semibold px-2 py-0.5 rounded bg-red-950/60 border border-red-800/40">
                                                {st.num}
                                            </span>
                                            <Icon className="w-4 h-4 text-slate-600" />
                                        </div>

                                        <h4 className="text-sm font-medium text-black mb-2">
                                            {st.title}
                                        </h4>

                                        <p className="text-xs text-slate-700 leading-relaxed">
                                            {st.desc}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-600 flex items-center justify-between">
                                        <span>Latency Budget</span>
                                        <span className="text-slate-800">{st.metric}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Verdict Visualizer Preview Box */}
                    <div className={`p-6 rounded-xl border transition-all duration-300 ${verdictState === 'safe'
                            ? 'bg-white/40 backdrop-blur-md border-red-500/30'
                            : 'bg-white/40 backdrop-blur-md border-rose-500/30'
                        }`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-3.5">
                                <div className={`p-2 rounded-xl mt-0.5 ${verdictState === 'safe'
                                        ? 'bg-red-500/20 text-red-700'
                                        : 'bg-rose-500/20 text-rose-400'
                                    }`}>
                                    {verdictState === 'safe' ? (
                                        <CheckCircle2 className="w-6 h-6" />
                                    ) : (
                                        <ShieldAlert className="w-6 h-6" />
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-semibold text-black">
                                            {verdictState === 'safe' ? 'Verdict: Green Light (Safe)' : 'Verdict: Red Light (Risk Intercepted)'}
                                        </h4>
                                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${verdictState === 'safe'
                                                ? 'bg-red-950 text-red-600 border border-red-700/50'
                                                : 'bg-rose-950 text-rose-300 border border-rose-700/50'
                                            }`}>
                                            {verdictState === 'safe' ? 'REPLAY_CLICK_AUTHORIZED' : 'EGRESS_VIOLENTLY_HALTED'}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-700 mt-1 leading-relaxed max-w-2xl">
                                        {verdictState === 'safe'
                                            ? 'SpideyAgent rapidly re-hydrates the local Vault data into DOM input fields and replays the original click. The form submits securely to target servers with your authentic authenticated data.'
                                            : 'The Vision API detects potential leaked PII or network unreachability. The submission is halted immediately. A non-dismissible Manual Override Modal appears detailing the exact coordinates of the unredacted entity.'}
                                    </p>
                                </div>
                            </div>

                            <div className="shrink-0 flex items-center gap-2">
                                <span className="text-xs font-mono text-slate-600">
                                    {verdictState === 'safe' ? 'Zero PII Leaked' : 'Fail-Closed Active'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two Deep-Dive Cards: Human-in-the-Loop & Cloudflare-Resilient Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card A: Human-in-the-Loop Override */}
                    <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.14] transition-colors">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-mono text-red-600 uppercase tracking-wider mb-3">
                                <AlertTriangle className="w-4 h-4 text-red-700" />
                                <span>Fail-Closed Principle</span>
                            </div>

                            <h3 className="text-xl font-display font-medium text-black mb-3">
                                Human-in-the-Loop Override
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                                AI shouldn&apos;t make the final call on your privacy. If the Visual Verification Pipeline flags a false positive—or if cloud APIs go completely offline—SpideyAgent <strong className="text-black font-medium">&ldquo;fails closed&rdquo;</strong>, forcing a human validation modal. You always maintain the ultimate authority to Approve or Reject the data egress.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.05] text-xs font-mono text-slate-700 flex items-center justify-between">
                            <span className="text-slate-600">Default Policy:</span>
                            <span className="text-red-600">FAIL_CLOSED (Zero Leakage)</span>
                        </div>
                    </div>

                    {/* Card B: Cloudflare-Resilient Architecture */}
                    <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.14] transition-colors">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-mono text-red-600 uppercase tracking-wider mb-3">
                                <Server className="w-4 h-4 text-red-700" />
                                <span>Enterprise Edge Evasion</span>
                            </div>

                            <h3 className="text-xl font-display font-medium text-black mb-3">
                                Cloudflare-Resilient Architecture
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                                Our backend orchestration servers are built with built-in evasion heuristics (User-Agent masking) to ensure uninterrupted multimodal communication across enterprise API gateways like Cloudflare, guaranteeing our Vision Pipeline remains online when you need it most.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.05] text-xs font-mono text-slate-700 flex items-center justify-between">
                            <span className="text-slate-600">Gateway Masking:</span>
                            <span className="text-red-700">User-Agent Dynamic Rotation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
