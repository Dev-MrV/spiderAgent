import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Check, RefreshCw, Terminal, CheckCircle2, Play, X, Key } from 'lucide-react';

export const LiveSandbox: React.FC = () => {
  const [panNumber, setPanNumber] = useState('AAAPA4321K');
  const [aadhaarNumber, setAadhaarNumber] = useState('548912048921');
  const [isPerceiving, setIsPerceiving] = useState(false);
  const [isRedacted, setIsRedacted] = useState(true);
  const [measuredLatency, setMeasuredLatency] = useState('9.01 ms');
  const [showRiskModal, setShowRiskModal] = useState(false);
  const [actionExecuted, setActionExecuted] = useState(false);
  const [egressTab, setEgressTab] = useState<'egress' | 'vault' | 'mcp'>('egress');

  // Canvas drawing ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw initial sample signature
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(30, 45);
    ctx.bezierCurveTo(60, 15, 90, 65, 120, 35);
    ctx.bezierCurveTo(150, 10, 170, 50, 210, 30);
    ctx.stroke();
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasDrawn(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const triggerPerception = () => {
    setIsPerceiving(true);
    setTimeout(() => {
      setIsPerceiving(false);
      setMeasuredLatency((8.4 + Math.random() * 0.9).toFixed(2) + ' ms');
      setIsRedacted(true);
    }, 550);
  };

  const handleExecuteTier4 = () => {
    setShowRiskModal(true);
  };

  const confirmAuthorization = () => {
    setShowRiskModal(false);
    setActionExecuted(true);
    setTimeout(() => {
      setActionExecuted(false);
    }, 4000);
  };

  return (
    <section id="sandbox" className="py-24 px-6 border-t border-white/[0.06] bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-normal text-red-600 tracking-wide uppercase mb-2">
            03. Interactive Verification
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            Live Perception Sandbox
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Test SpideyAgent&apos;s dual-track perception against real government portal fields. See cryptographic checksum validation, in-memory tokenization, and human-in-the-loop risk gating in real time.
          </p>
        </div>

        {/* Sandbox Frame */}
        <div className="rounded-2xl bg-white/40 backdrop-blur-md border border-white/[0.08] overflow-hidden shadow-2xl">
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-white/40 backdrop-blur-md border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="text-xs font-medium text-slate-800">
                Target: eproc.isro.gov.in/bid-tender-sih
              </span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="text-xs font-mono text-slate-600 hidden sm:inline">
                Pipeline: BlazeFace + DBNet + Verhoeff
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={triggerPerception}
                disabled={isPerceiving}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 rounded-lg border border-white/10 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isPerceiving ? 'animate-spin text-red-700' : ''}`} />
                <span className="text-white">Re-run Perception Pass</span>
              </button>

              <span className="text-xs font-mono text-red-700 px-2.5 py-1 rounded bg-white/40 border border-white/[0.04]">
                Latency: {measuredLatency}
              </span>
            </div>
          </div>

          {/* Sandbox Body: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Interactive Simulated Portal Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-medium text-black">
                    Government e-Procurement Portal
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    High-stakes tender submission requiring identity credentials
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRedacted(!isRedacted)}
                    className="text-xs text-red-600 hover:text-black underline underline-offset-4"
                  >
                    {isRedacted ? 'Reveal Raw Local Data' : 'Apply Local Redaction'}
                  </button>
                </div>
              </div>

              {/* Form Input 1: PAN Number */}
              <div className="space-y-5 text-xs">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-slate-700 font-medium">Bidder Entity PAN</label>
                    <span className="font-mono text-[11px] text-red-700">
                      10-Char Syntax: Valid
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={isRedacted ? '<CONFIDENTIAL_VAL_1>' : panNumber}
                      onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2.5 bg-white/40 backdrop-blur-md border border-white/[0.08] rounded-lg font-mono text-slate-800 focus:outline-none focus:border-red-400/50"
                    />
                    <span className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-500">
                      {isRedacted ? 'Opaque Node ID' : 'Client Memory'}
                    </span>
                  </div>
                </div>

                {/* Form Input 2: Aadhaar ID */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-slate-700 font-medium">
                      Signatory Aadhaar Identification
                    </label>
                    <span className="font-mono text-[11px] text-red-700">
                      Verhoeff Checksum: Pass
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={isRedacted ? '<AADHAAR_ID_1>' : aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white/40 backdrop-blur-md border border-white/[0.08] rounded-lg font-mono text-slate-800 focus:outline-none focus:border-red-400/50"
                    />
                    <span className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-500">
                      {isRedacted ? 'Opaque Node ID' : 'Client Memory'}
                    </span>
                  </div>
                </div>

                {/* Form Input 3: Canvas Signature Pad */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-slate-700 font-medium">
                      Digital Signature Canvas
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-red-600">
                        DBNet CCL Localization
                      </span>
                      <button
                        onClick={clearCanvas}
                        className="text-[11px] text-slate-600 hover:text-slate-800 underline"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  <div className="relative rounded-lg border border-white/[0.08] bg-white/40 backdrop-blur-md overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      width={380}
                      height={90}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      className="w-full h-24 cursor-crosshair block"
                    />

                    {/* Redaction Overlay Preview */}
                    {isRedacted && hasDrawn && (
                      <div className="absolute inset-0 bg-white/85 flex items-center justify-center p-2 text-center pointer-events-none">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-white/20 text-slate-800 text-[10px] font-mono">
                            <Lock className="w-2.5 h-2.5 text-red-700" />
                            ZERO-EGRESS LOCAL REDACTION
                          </span>
                          <p className="text-[10px] text-slate-500 mt-1">
                            Canvas buffers burned in WebGPU before sending scene graph
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* High Stakes Action Trigger */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-600">Agent Recommendation:</span>
                    <span className="text-[11px] font-mono text-red-700">
                      Risk Tier: TIER_4
                    </span>
                  </div>

                  <button
                    onClick={handleExecuteTier4}
                    className="w-full py-3 px-4 text-xs font-medium text-black bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Dispatch Action: node_btn_submit_tender</span>
                  </button>

                  {actionExecuted && (
                    <div className="mt-3 p-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-600 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0" />
                      <span>
                        Success: Action executed locally. Tokens rehydrated inside DOM.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Real-Time Wire & Vault Inspector */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-white/40 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-red-700" />
                    <h4 className="text-xs font-mono font-medium text-slate-800 uppercase tracking-wider">
                      Wire Payload Inspector
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600">
                    Egress Boundary: Sealed
                  </span>
                </div>

                {/* Inspector Sub-Tabs */}
                <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/[0.05] mb-4">
                  <button
                    onClick={() => setEgressTab('egress')}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                      egressTab === 'egress'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-white hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    Remote Wire Context
                  </button>
                  <button
                    onClick={() => setEgressTab('vault')}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                      egressTab === 'vault'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-white hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    Local Inversion Vault
                  </button>
                  <button
                    onClick={() => setEgressTab('mcp')}
                    className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
                      egressTab === 'mcp'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-white hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    MCP Action Plan
                  </button>
                </div>

                {/* Code Terminal View */}
                <div className="p-4 bg-white/40 backdrop-blur-md rounded-xl border border-white/[0.06] font-mono text-xs text-slate-700 overflow-x-auto min-h-[220px]">
                  {egressTab === 'egress' && (
                    <pre className="text-red-600/90 leading-relaxed">
{`// SENT TO UNTRUSTED LLM SERVER (0 RAW BYTES LEAKED)
{
  "disclosureLevel": "L2_LOCAL_SANITIZED",
  "digestSha256": "4b227777d4dd1fc61c6f884f...",
  "nodes": [
    {
      "opaqueId": "node_pan_input",
      "token": "<CONFIDENTIAL_VAL_1>",
      "sanitizedLabel": "tax_identifier_field"
    },
    {
      "opaqueId": "node_aadhaar_input",
      "token": "<AADHAAR_ID_1>",
      "sanitizedLabel": "signatory_id_field"
    },
    {
      "opaqueId": "node_sig_canvas",
      "redacted": true,
      "pixelBytes": 0
    }
  ],
  "allowedActions": ["CLICK", "TYPE", "SCROLL"]
}`}
                    </pre>
                  )}

                  {egressTab === 'vault' && (
                    <pre className="text-red-600/90 leading-relaxed">
{`// STRICTLY MAINTAINED IN LOCAL BROWSER HEAP
{
  "vaultId": "vault_session_8819",
  "mappings": {
    "<CONFIDENTIAL_VAL_1>": "${panNumber}",
    "<AADHAAR_ID_1>": "${aadhaarNumber}",
    "<SIG_HASH>": "sha256_client_local_signature"
  },
  "egressAllowed": false,
  "rehydrationTrigger": "LOCAL_TIER4_AUTHORIZATION"
}`}
                    </pre>
                  )}

                  {egressTab === 'mcp' && (
                    <pre className="text-red-600/90 leading-relaxed">
{`// REASONING ENGINE ACTION PLAN (MCP JSON-RPC)
{
  "jsonrpc": "2.0",
  "method": "execute_action_proposal",
  "params": {
    "goal": "Submit official tender bid",
    "targetOpaqueId": "node_btn_submit_tender",
    "action": "CLICK",
    "riskTier": "TIER_4",
    "explanation": "Finalizes binding vendor procurement bid"
  }
}`}
                    </pre>
                  )}
                </div>
              </div>

              {/* Status explanation footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-600 flex items-center justify-between">
                <span>Algorithmic Validation: Verhoeff &amp; Luhn</span>
                <span className="text-red-700 font-mono">Status: SECURE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Tier Local Risk Policy Gate Modal Simulation */}
        {showRiskModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md">
            <div className="w-full max-w-md rounded-2xl bg-white/40 backdrop-blur-md border border-red-500/40 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-red-500/10 text-red-700">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Risk Gate: Tier 4 Authorization Required
                    </h3>
                    <p className="text-[11px] text-red-600/80 font-mono">
                      Policy Rule: HIGH_STAKES_EXTERNAL_ACTION
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRiskModal(false)}
                  className="text-slate-600 hover:text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <p>
                  The remote reasoning agent has requested execution of an irreversible high-stakes command:
                </p>
                <div className="p-3 rounded-lg bg-white/40 backdrop-blur-md border border-white/[0.05] font-mono text-[11px] space-y-1">
                  <div>Target: <span className="text-black">node_btn_submit_tender</span></div>
                  <div>Action: <span className="text-red-700">CLICK (Submit Binding Bid)</span></div>
                  <div>Origin: <span className="text-slate-600">eproc.isro.gov.in</span></div>
                </div>
                <p className="text-slate-600 text-[11px]">
                  Upon authorization, tokens <code className="text-red-600">&lt;AADHAAR_ID_1&gt;</code> and <code className="text-red-600">&lt;CONFIDENTIAL_VAL_1&gt;</code> will rehydrate strictly in DOM memory.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => setShowRiskModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-black bg-slate-800 rounded-lg transition-colors"
                >
                  Reject &amp; Abort
                </button>
                <button
                  onClick={confirmAuthorization}
                  className="px-4 py-2 text-xs font-medium text-slate-900 bg-red-400 hover:bg-red-300 rounded-lg transition-colors font-semibold"
                >
                  Authorize Execution
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
