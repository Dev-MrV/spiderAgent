import React, { useState } from 'react';
import { PIPELINE_NODES, PipelineNode } from '../data/mockData';
import { Lock, Cpu, ShieldCheck, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export const SpiderWebDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<PipelineNode>(PIPELINE_NODES[1]); // default to Dual-Track Neural Vision
  const [activePulse, setActivePulse] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const runPulse = () => {
    setActivePulse(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < PIPELINE_NODES.length) {
        setSelectedNode(PIPELINE_NODES[step]);
        setActiveStep(step);
        step++;
      } else {
        clearInterval(interval);
        setActivePulse(false);
        setActiveStep(null);
      }
    }, 850);
  };

  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-white/[0.06] relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-normal text-red-600 tracking-wide uppercase mb-2">
            01. Dual-Track Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            The SpideyAgent Traversal Web
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every web page is an organic fabric of DOM elements and pixel canvases. SpideyAgent connects visual perception and deterministic execution across a strictly verified client-side privacy boundary.
          </p>
        </div>

        {/* Pulse Action Trigger */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="text-xs text-slate-700 font-medium">
              Dual-Track State: Armed &amp; Sealed
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-xs text-slate-600 hidden sm:inline">
              SHA-256 Digest Active
            </span>
          </div>

          <button
            onClick={runPulse}
            disabled={activePulse}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-50 rounded-lg border border-white/10 transition-all duration-200 active:scale-[0.98]"
          >
            <Play className={`w-3.5 h-3.5 ${activePulse ? 'animate-spin text-red-600' : 'text-white'}`} />
            <span>{activePulse ? 'Traversing Web Pipeline...' : 'Simulate Traversal Pulse'}</span>
          </button>
        </div>

        {/* Interactive Web Graph & Detail Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Node Network Graph */}
          <div className="lg:col-span-7 bg-white/40 backdrop-blur-md rounded-2xl border border-white/[0.07] p-6 relative overflow-hidden">
            {/* Background geometric spiderweb SVG lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
                {/* Connecting Web Filaments between nodes */}
                <line x1="250" y1="50" x2="100" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="250" y1="50" x2="400" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="100" y1="150" x2="120" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="400" y1="150" x2="380" y2="300" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="120" y1="300" x2="250" y2="420" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="380" y1="300" x2="250" y2="420" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                <line x1="100" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                <line x1="120" y1="300" x2="380" y2="300" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                <circle cx="250" cy="250" r="160" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* List of 8 Pipeline Nodes arranged in sequence */}
            <div className="relative z-10 space-y-2.5">
              {PIPELINE_NODES.map((node, index) => {
                const isSelected = selectedNode.id === node.id;
                const isCurrentlyPulsing = activeStep === index;
                const isTrusted = node.zone === 'trusted';

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-white/40 backdrop-blur-md border-red-400/40 shadow-sm'
                        : isCurrentlyPulsing
                        ? 'bg-red-950/40 border-red-400 text-black'
                        : 'bg-white/40 backdrop-blur-md border-white/[0.04] hover:border-white/[0.12] hover:bg-white/40 backdrop-blur-md'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Node number glyph */}
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-red-500/20 text-red-600 border border-red-400/30'
                          : 'bg-white/[0.04] text-slate-600 border border-white/[0.04]'
                      }`}>
                        {node.number}
                      </span>

                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-medium truncate ${
                            isSelected ? 'text-black' : 'text-slate-800'
                          }`}>
                            {node.title}
                          </span>
                          {!isTrusted && (
                            <span className="text-[10px] text-red-600/80 font-mono">
                              Remote
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-600 truncate">
                          {node.subtext}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono text-slate-600">
                        {node.metrics}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Boundary Line Legend */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>On-Device Trusted Zone (Nodes 01-05 &amp; 07-08)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>Untrusted Egress Stream (Node 06 only)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deep-Dive Inspector Card for Selected Node */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-red-600 font-semibold px-2 py-0.5 rounded bg-red-950/60 border border-red-800/40">
                    STAGE {selectedNode.number}
                  </span>
                  <h3 className="text-sm font-medium text-black">
                    {selectedNode.title}
                  </h3>
                </div>
                <span className={`text-[11px] font-mono ${
                  selectedNode.zone === 'trusted' ? 'text-red-700' : 'text-red-700'
                }`}>
                  {selectedNode.zone === 'trusted' ? 'Trusted Local' : 'Zero-PII Wire'}
                </span>
              </div>

              {/* Technical Description */}
              <p className="mt-4 text-xs text-slate-700 leading-relaxed">
                {selectedNode.details}
              </p>

              {/* Performance Latency Badge */}
              <div className="mt-5 p-3.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.05]">
                <div className="text-[11px] text-slate-600 uppercase tracking-wider mb-1 font-mono">
                  Execution Benchmark
                </div>
                <div className="text-base font-semibold text-black font-mono flex items-center justify-between">
                  <span>{selectedNode.metrics}</span>
                  <span className="text-[10px] text-red-700 font-normal">
                    Verified in SIH26171
                  </span>
                </div>
              </div>

              {/* Underlying Technologies used */}
              <div className="mt-5">
                <div className="text-[11px] text-slate-600 uppercase tracking-wider mb-2 font-mono">
                  Engine Modules
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-[11px] font-mono text-slate-700 bg-white/[0.04] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guarantee statement */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>
                  {selectedNode.zone === 'trusted'
                    ? 'All tensor memory, pixel buffers, and raw inputs are isolated within the browser runtime.'
                    : 'The remote LLM operates blindly on tokenized abstractions without access to raw DOM state.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
