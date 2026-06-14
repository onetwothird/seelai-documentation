import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success';
  title: string;
  children: React.ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: 'bg-seelai-50/50 border-seelai-500/30 text-slate-800',
    warning: 'bg-amber-50/50 border-amber-500/30 text-slate-800',
    success: 'bg-emerald-50/50 border-emerald-500/30 text-slate-800'
  };

  const icons = {
    info: <Info className="w-4 h-4 text-seelai-500 shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
  };

  return (
    <div className={`flex gap-3 border rounded-xl p-4 my-6 text-sm leading-relaxed ${styles[type]}`}>
      {icons[type]}
      <div className="space-y-1">
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  );
}