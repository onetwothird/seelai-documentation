import Callout from '../../assets/components/ui/Callout';

export default function AnnouncementDirectory() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Caretaker & MSWD / Communications</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Announcements & Directory</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          The MSWD Admin panel features a robust broadcasting tool and a centralized directory. Admins can push critical alerts to specific user segments and utilize the tracked calling system to connect with any user securely.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Targeted Broadcasts</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Call Tracking</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Activity Audit</span>
        </div>
      </section>

      {/* Broadcast System */}
      <section id="announcements" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Targeted Announcements</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          Not all information is relevant to everyone. The announcement engine allows MSWD staff to selectively route messages based on user type.
        </p>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
          <div className="flex items-start gap-3 border-b border-slate-200 pb-4">
            <div className="w-8 h-8 rounded-full bg-[#9167b4]/10 flex items-center justify-center shrink-0">
              <span className="text-[#9167b4] font-bold">1</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Global Broadcasts</h4>
              <p className="text-sm text-slate-600">Select "All Users" to push updates like weather warnings to everyone simultaneously.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-b border-slate-200 pb-4">
            <div className="w-8 h-8 rounded-full bg-[#9167b4]/10 flex items-center justify-center shrink-0">
              <span className="text-[#9167b4] font-bold">2</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Role-Specific</h4>
              <p className="text-sm text-slate-600">Target only "Caretakers" or only "Partially Sighted" users for customized instructions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#9167b4]/10 flex items-center justify-center shrink-0">
              <span className="text-[#9167b4] font-bold">3</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Specific Users</h4>
              <p className="text-sm text-slate-600">Send private alerts to a single individual or a manually selected group of users via UID matching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MSWD Directory & Call Tracking */}
      <section id="directory-calling" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Smart Directory Calling</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          When an Admin initiates a phone call from the user directory, the system automatically runs cleanup and tracking protocols before opening the device dialer.
        </p>

        <Callout type="info" title="Automatic Number Formatting">
          The `MswdCallService` strips illegal characters, spaces, and brackets. It instantly converts numbers prefixed with "+63" or "63" into the standard local "09" format to ensure the phone dialer does not fail.
        </Callout>

        <h3 className="font-bold text-slate-900 mt-6 mb-2">Call Auditing</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-600 marker:text-[#9167b4]">
          <li>Every dial attempt creates an entry in the global <strong>Activity Logs</strong>.</li>
          <li>A unique communication record is stored in <code>mswd_communication/calls</code>.</li>
          <li>A tracking log is generated in <code>mswd_communication/call_logs</code> to monitor outgoing metrics.</li>
          <li>If the native dialer fails, the UI presents a fallback modal allowing the Admin to easily copy the formatted number.</li>
        </ul>
      </section>

    </div>
  );
}