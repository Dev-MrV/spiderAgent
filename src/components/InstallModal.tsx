import React, { useState } from 'react';
import { X, Download, Chrome, ChevronRight, CheckCircle2 } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-white/[0.08] p-8 shadow-2xl overflow-hidden">
        
        {/* Decorative background glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-display font-medium text-white mb-2">Install SpideyAgent</h3>
        <p className="text-sm text-slate-300 mb-6">
          Download the latest zero-egress browser agent extension (Developer Build).
        </p>

        {/* Download Action */}
        <div className="mb-8">
          <a
            href="/spideyagent-latest.zip"
            download="spideyagent-latest.zip"
            onClick={() => setDownloaded(true)}
            className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                  Download Extension ZIP
                </div>
                <div className="text-xs text-slate-400">spideyagent-latest.zip (Developer Build)</div>
              </div>
            </div>
            {downloaded ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            )}
          </a>
        </div>

        {/* Installation Steps */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-white flex items-center gap-2">
            <Chrome className="w-4 h-4" />
            How to Install in Chrome
          </h4>
          
          <ol className="relative border-l border-white/10 ml-2 space-y-4">
            <li className="pl-4">
              <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[5px] top-1.5 ring-4 ring-slate-900" />
              <p className="text-xs text-white font-medium">Extract the ZIP</p>
              <p className="text-xs text-slate-400 mt-0.5">Unzip the downloaded file to a folder on your computer.</p>
            </li>
            <li className="pl-4">
              <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[5px] top-1.5 ring-4 ring-slate-900" />
              <p className="text-xs text-white font-medium">Open Extensions</p>
              <p className="text-xs text-slate-400 mt-0.5">Go to <code className="bg-black/30 px-1 py-0.5 rounded text-red-300">chrome://extensions</code> in your browser.</p>
            </li>
            <li className="pl-4">
              <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[5px] top-1.5 ring-4 ring-slate-900" />
              <p className="text-xs text-white font-medium">Enable Developer Mode</p>
              <p className="text-xs text-slate-400 mt-0.5">Toggle "Developer mode" on in the top right corner.</p>
            </li>
            <li className="pl-4">
              <div className="absolute w-2 h-2 bg-red-600 rounded-full -left-[5px] top-1.5 ring-4 ring-slate-900" />
              <p className="text-xs text-white font-medium">Load Unpacked</p>
              <p className="text-xs text-slate-400 mt-0.5">Click "Load unpacked" and select the folder you extracted.</p>
            </li>
          </ol>
        </div>

        <div className="mt-8 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
