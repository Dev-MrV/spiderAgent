export interface PipelineNode {
  id: string;
  number: string;
  title: string;
  subtext: string;
  zone: 'trusted' | 'untrusted';
  metrics: string;
  details: string;
  tech: string[];
}

export const PIPELINE_NODES: PipelineNode[] = [
  {
    id: 'dom_canvas',
    number: '01',
    title: 'Interactive Web Canvas',
    subtext: 'Target page DOM tree & HTML5 Canvas layers',
    zone: 'trusted',
    metrics: '< 1.2 ms DOM traversal',
    details: 'Monitors DOM mutations and extracts canvas pixel buffers via getImageData without intercepting or slowing native page render cycles.',
    tech: ['HTML5 Canvas API', 'MutationObserver', 'Chrome MV3 Content Scripts']
  },
  {
    id: 'neural_vision',
    number: '02',
    title: 'Dual-Track Neural Vision',
    subtext: 'On-device BlazeFace & DBNet WebGPU inference',
    zone: 'trusted',
    metrics: '9.01 ms total perception pass',
    details: 'BlazeFace (535 KB) localizes face biometrics while DBNet (4.7 MB) detects text bounding polygons via Connected-Component Labeling (CCL).',
    tech: ['ONNX Runtime Web', 'WebGPU / WASM', 'BlazeFace (535KB)', 'DBNet (4.7MB)']
  },
  {
    id: 'checksum_engine',
    number: '03',
    title: 'Mathematical PII Engine',
    subtext: 'Cryptographic & algorithmic verification',
    zone: 'trusted',
    metrics: '100% precision on test corpus',
    details: 'Validates Aadhaar numbers via the Verhoeff algorithm and payment cards via Luhn checksums. Eliminates LLM hallucination and false positives.',
    tech: ['Verhoeff Algorithm', 'Luhn Checksum', 'PAN/GSTIN Syntax Validator']
  },
  {
    id: 'privacy_gate',
    number: '04',
    title: 'Privacy Gate & Vault',
    subtext: 'In-memory tokenization & canvas pixel blackout',
    zone: 'trusted',
    metrics: 'Zero-Egress local redaction',
    details: 'Sensitive values are replaced with opaque semantic tokens (<AADHAAR_ID_1>). Raw values are isolated in an in-memory client vault.',
    tech: ['Local Inversion Vault', 'Pixel Redaction Burning', 'BFS Cluster Flood-Fill']
  },
  {
    id: 'egress_boundary',
    number: '05',
    title: 'Fail-Closed Egress Boundary',
    subtext: 'Cryptographic SHA-256 seal',
    zone: 'trusted',
    metrics: '100% unhashed PII blocked',
    details: 'Guarantees that untrusted remote servers only receive opaque node IDs and sanitized scene graphs sealed with a local cryptographic hash.',
    tech: ['SHA-256 Digest', 'Strict Opaque Schema', 'Zero Raw Pixels']
  },
  {
    id: 'remote_reasoning',
    number: '06',
    title: 'Remote AI Reasoning',
    subtext: 'Cloud LLM or local Ollama / MCP Server',
    zone: 'untrusted',
    metrics: '73.5 ms round-trip E2E wire latency',
    details: 'The reasoning model evaluates the user objective against sanitized opaque tokens and outputs a structured action plan with assigned risk tiers.',
    tech: ['Model Context Protocol (MCP)', 'Ollama / Groq / OpenAI', 'System-1 Laya Engine']
  },
  {
    id: 'risk_gate',
    number: '07',
    title: '4-Tier Risk Policy Gate',
    subtext: 'Local validation of remote actions',
    zone: 'trusted',
    metrics: 'Human-in-the-loop for TIER_4',
    details: 'Intercepts remote commands before execution. Low-risk actions (scroll, wait) execute autonomously; high-risk actions halt for user approval.',
    tech: ['Deterministic Policy Engine', 'Local Approval Modal', 'Origin Sandbox']
  },
  {
    id: 'dom_execution',
    number: '08',
    title: 'Deterministic Execution',
    subtext: 'Token rehydration & DOM interaction',
    zone: 'trusted',
    metrics: 'Sub-5ms action dispatch',
    details: 'Upon local authorization, tokens are rehydrated from the Local Inversion Vault and dispatched to target DOM nodes via trusted browser APIs.',
    tech: ['Token Rehydration', 'Trusted Event Dispatch', 'Chrome Debugger API']
  }
];

export const BENCHMARK_METRICS = [
  {
    label: 'BlazeFace Biometrics',
    value: '2.31',
    unit: 'ms',
    description: 'Measured via WebGPU inference provider on [1, 3, 128, 128] tensors',
    modelSize: '535 KB'
  },
  {
    label: 'DBNet Text Localization',
    value: '6.12',
    unit: 'ms',
    description: 'Probability map generation over ImageNet-normalized canvas buffers',
    modelSize: '4.7 MB'
  },
  {
    label: 'CCL Cluster Flood-Fill',
    value: '0.58',
    unit: 'ms',
    description: '8-connectivity BFS segmentation isolating tight text bounds',
    modelSize: 'Algorithm'
  },
  {
    label: 'Total Perception Pass',
    value: '9.01',
    unit: 'ms',
    description: 'Full canvas extraction, neural pass, and client-side NMS filtering',
    modelSize: '5.2 MB Total'
  },
  {
    label: 'End-to-End Latency',
    value: '73.5',
    unit: 'ms',
    description: 'Measured round-trip wire contract validation with remote reasoning',
    modelSize: 'Wire Overhead'
  },
  {
    label: 'Laya System-1 Classifier',
    value: '< 2',
    unit: 'ms',
    description: 'Classifies actions proposed by remote AI as low-risk or high-risk before execution',
    modelSize: 'Prototype'
  }
];

export const COMPARISON_DATA = [
  {
    dimension: 'Visual Data Handling',
    traditional: 'Transmits uncompressed raw screen captures to third-party vision model servers',
    silk: 'Zero visual egress. Neural perception runs 100% on-device in WebGPU / WASM'
  },
  {
    dimension: 'PII Identification',
    traditional: 'Unreliable LLM regex or text prompt guesses with high hallucination rates',
    silk: 'Mathematical Verhoeff (Aadhaar), Luhn (Cards), & structural PAN/GSTIN checksums'
  },
  {
    dimension: 'Canvas & Signature Redaction',
    traditional: 'Blunt black-box rectangular overlays that obscure surrounding valid UI',
    silk: 'Connected-Component Labeling (CCL) segmentation preserving 100% of safe whitespace'
  },
  {
    dimension: 'Sensitive Entity Protection',
    traditional: 'Stored in plain text or transmitted directly across third-party LLM APIs',
    silk: 'Cryptographic Local Inversion Vault; remote models see only opaque tokens'
  },
  {
    dimension: 'Execution Safety',
    traditional: 'Unbounded autonomy; agent can initiate financial transfers or irreversible actions',
    silk: '4-Tier Local Risk Policy Gate requiring explicit user sign-off for TIER_4 actions'
  },
  {
    dimension: 'Client Resource Footprint',
    traditional: 'Heavy multi-gigabyte browser automation containers running in headless clouds',
    silk: 'Sub-6MB total model payload (535KB + 4.7MB) running selectively via disclosure gating'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'SpideyAgent’s dual-track architecture finally made AI browser agents permissible in our secure procurement pipelines. Having Verhoeff mathematical validation and local pixel blackout guarantees that no vendor credentials escape to the cloud.',
    author: 'Dr. Vikramaditya S.',
    role: 'Principal Systems Auditor',
    org: 'Public Sector e-Procurement Systems',
    metric: '100% Compliance'
  },
  {
    quote: 'Sending full 4K screen captures to multi-modal cloud models was costing us 8 seconds per step and failing our data protection audits. SpideyAgent delivers under 10ms perception directly in WebGPU with zero raw pixel leakage.',
    author: 'Elena Rostova',
    role: 'Head of Enterprise Security Architecture',
    org: 'Vanguard Aerospace Labs',
    metric: '9.01ms Inference'
  },
  {
    quote: 'The 4-Tier Risk Policy Gate is brilliant. Low-risk navigational queries fly through autonomously, but high-stakes submissions halt for our cryptographic local approval. It is the gold standard for zero-trust browser automation.',
    author: 'Marc Chen',
    role: 'Staff Automation Engineer',
    org: 'Distributed Ledger Operations',
    metric: 'Tier-4 Guarded'
  }
];
