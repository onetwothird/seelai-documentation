import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-xl border border-slate-200/80 bg-[#0f1117] overflow-hidden group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161922] border-b border-slate-800/60">
        <span className="text-xs font-mono font-medium text-slate-400">
          {language.toLowerCase()}
        </span>
        <button
          onClick={copyToClipboard}
          className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      
      {/* Code contents */}
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-200 leading-relaxed selection:bg-seelai-500/30">
        <code>{code}</code>
      </pre>
    </div>
  );
}