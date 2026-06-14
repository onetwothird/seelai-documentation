import Callout from '../../assets/components/ui/Callout';

export default function AssistanceRequests() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Caretaker & MSWD / Assistance Requests</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Assistance Requests System</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          The Assistance Request system acts as a digital lifeline. It allows partially sighted users to dispatch structured help requests containing priority levels, specific messages, and attached GPS coordinates to their caretakers or the MSWD office.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Task Lifecycle</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Auto-Escalation</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Transaction Logs</span>
        </div>
      </section>

      {/* Request Lifecycle */}
      <section id="lifecycle" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Request Lifecycle</h2>
        <p className="text-slate-600 mb-2">Every request moves through a strict, transparent status pipeline:</p>
        
        <ol className="list-decimal list-inside space-y-3 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm marker:text-[#9167b4] marker:font-semibold">
          <li><strong className="text-slate-900">Pending:</strong> The request is dispatched. It waits in the Caretaker's queue.</li>
          <li><strong className="text-slate-900">Accepted/Declined:</strong> The Caretaker accepts the request. If they decline it and provide a reason, the request is immediately flagged and escalated.</li>
          <li><strong className="text-slate-900">In Progress:</strong> The Caretaker indicates they are actively assisting or traveling to the user.</li>
          <li><strong className="text-slate-900">Completed:</strong> The situation is resolved, and closing notes are saved.</li>
        </ol>
      </section>

      {/* Auto Escalation & Transactions */}
      <section id="escalation" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Auto-Escalation & Accountability</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">MSWD Auto-Escalation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If a partially sighted user does not have an assigned caretaker, or if a caretaker explicitly declines a request, the `escalatedToMSWD` flag is set to true. The ticket is instantly routed to the MSWD Admin Command Center for immediate official intervention.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Transaction Logging</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every status change generates an immutable transaction log (`RequestTransactionService`). This creates an audit trail of exact timestamps, decline reasons, and completion notes for liability and review purposes.
            </p>
          </div>
        </div>

        <Callout type="warning" title="Emergency Priorities">
          Requests flagged with a "High" priority bypass standard UI filters and trigger elevated alerts for both Caretakers and MSWD Admins.
        </Callout>
      </section>

    </div>
  );
}