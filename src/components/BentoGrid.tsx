import React, { useState } from 'react';
import { Eye, Shield, Cpu, Lock, ArrowUpRight, Check, Activity, Layers, Sliders } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'blazeface' | 'dbnet'>('blazeface');

  return (
    <section id="features" className="py-24 px-6 border-t border-white/[0.06] bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-normal text-red-600 tracking-wide uppercase mb-2">
            02. Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            Engineered with Organic Precision
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            SpideyAgent replaces bulky cloud scraping farms with on-device biomimicry. Compact neural networks glide across web structures with microsecond agility.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1 (Large 2-col): Dual-Track WebGPU Neural Vision */}
          <div className="lg:col-span-2 rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/[0.16] transition-all duration-300">
            {/* Subtle radial caustics */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-500/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 tracking-wide uppercase">
                  On-Device Inference
                </span>
                <span className="text-xs font-mono text-slate-600">
                  Total Payload: 5.2 MB
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-medium text-black mb-3 tracking-tight">
                Dual-Track WebGPU Neural Vision
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed max-w-xl mb-6">
                Instead of uploading gigabytes of uncompressed screenshots to remote VLMs, SpideyAgent executes quantified ONNX models directly inside browser GPU memory. BlazeFace localizes identity biometrics, while DBNet segments canvas text regions with 8-connectivity Connected-Component Labeling (CCL).
              </p>
            </div>

            {/* Interactive Model Toggle inside Card */}
            <div className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModel('blazeface')}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                      activeModel === 'blazeface'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-white hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    BlazeFace ONNX (535 KB)
                  </button>
                  <button
                    onClick={() => setActiveModel('dbnet')}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                      activeModel === 'dbnet'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-white hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    DBNet ResNet (4.7 MB)
                  </button>
                </div>
                <span className="text-xs font-mono text-red-700">
                  {activeModel === 'blazeface' ? '2.31 ms Latency' : '6.12 ms Latency'}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-600 grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/[0.04]">
                <div>
                  <span className="text-slate-500 block text-[10px]">TENSOR INPUT</span>
                  <span className="text-slate-800">
                    {activeModel === 'blazeface' ? '[1, 3, 128, 128]' : '[1, 3, 128, 256]'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">EXECUTION PROVIDER</span>
                  <span className="text-slate-800">WebGPU / WASM</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">ALGORITHM</span>
                  <span className="text-slate-800">
                    {activeModel === 'blazeface' ? 'Anchor Decoding' : '8-Way BFS CCL'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (1-col): Mathematical PII Checksums */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 tracking-wide uppercase">
                  Zero Hallucination
                </span>
                <span className="text-xs font-mono text-red-700">100% Precision</span>
              </div>

              <h3 className="text-lg font-display font-medium text-black mb-2 tracking-tight">
                Mathematical Checksum Engines
              </h3>

              <p className="text-xs text-slate-700 leading-relaxed mb-6">
                Generic LLMs hallucinate regex patterns on arbitrary 12-digit numbers. SpideyAgent executes authentic Verhoeff dihedral permutation tables for Aadhaar, Luhn mod 10 for payment cards, and 10-char syntax verification for PAN and GSTIN.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06] font-mono text-xs text-slate-700 space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-600">Verhoeff D-Table:</span>
                <span className="text-red-700">Validated</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-600">Luhn Modulo 10:</span>
                <span className="text-red-700">Active</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-600">PAN 4th-Char Status:</span>
                <span className="text-red-700">Enforced</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3 (1-col): Local Inversion Vault */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 tracking-wide uppercase">
                  Memory Isolation
                </span>
                <span className="text-xs font-mono text-slate-600">Client-Side Vault</span>
              </div>

              <h3 className="text-lg font-display font-medium text-black mb-2 tracking-tight">
                Local Inversion Vault
              </h3>

              <p className="text-xs text-slate-700 leading-relaxed mb-6">
                Extracted private identifiers are tokenized into opaque keys like <code className="text-red-600 bg-white/[0.05] px-1 py-0.5 rounded">&lt;AADHAAR_ID_1&gt;</code>. Real values stay encrypted in local heap memory, rehydrating only at deterministic click-time.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="font-mono text-slate-600">SHA-256 Egress Seal</span>
              <span className="font-mono text-slate-800">Fail-Closed</span>
            </div>
          </div>

          {/* Bento Card 4 (2-col): 4-Tier Risk Policy Gate */}
          <div className="lg:col-span-2 rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/[0.16] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 tracking-wide uppercase">
                  Safety Boundary
                </span>
                <span className="text-xs font-mono text-red-600">
                  Human-in-the-Loop
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-medium text-black mb-3 tracking-tight">
                4-Tier Local Risk Policy Gate
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed max-w-xl mb-6">
                Never grant unconstrained autonomy to browser agents. Laya is our local System-1 action-risk classifier. It receives the action proposed by the remote AI and quickly classifies it into 4 explicit risk tiers. While routine queries execute without friction, critical actions halt for local cryptographic user authorization.
              </p>
            </div>

            {/* 4-Tier Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-500 uppercase">TIER 1</div>
                <div className="text-xs font-medium text-slate-800 mt-0.5">Read &amp; Scroll</div>
                <div className="text-[10px] text-red-700 mt-1">Autonomous</div>
              </div>

              <div className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-500 uppercase">TIER 2</div>
                <div className="text-xs font-medium text-slate-800 mt-0.5">Form Fill / Query</div>
                <div className="text-[10px] text-red-700 mt-1">Autonomous</div>
              </div>

              <div className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-500 uppercase">TIER 3</div>
                <div className="text-xs font-medium text-slate-800 mt-0.5">Navigation Out</div>
                <div className="text-[10px] text-red-600 mt-1">Audited Log</div>
              </div>

              <div className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-red-400/30">
                <div className="text-[10px] font-mono text-red-700 uppercase">TIER 4</div>
                <div className="text-xs font-medium text-black mt-0.5">Tender / Transfer</div>
                <div className="text-[10px] text-red-600 mt-1">Modal Approval</div>
              </div>
            </div>
          </div>

          {/* Bento Card 5 (1-col): Model Context Protocol (MCP) Standard */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.16] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 tracking-wide uppercase">
                  Interoperability
                </span>
                <span className="text-xs font-mono text-slate-600">JSON-RPC</span>
              </div>

              <h3 className="text-lg font-display font-medium text-black mb-2 tracking-tight">
                Model Context Protocol (MCP)
              </h3>

              <p className="text-xs text-slate-700 leading-relaxed mb-6">
                Native JSON-RPC bridge allowing external reasoning agents like Anthropic Claude Desktop, Cursor, or local Ollama servers to automate browser tasks without exposing raw credentials.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/40 backdrop-blur-md border border-white/[0.06] text-xs font-mono text-slate-600 flex items-center justify-between">
              <span>Standard: Anthropic MCP</span>
              <span className="text-slate-800">v1.2 Wire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
