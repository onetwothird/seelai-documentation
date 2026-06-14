import Callout from '../../assets/components/ui/Callout';
import CodeBlock from '../../assets/components/ui/CodeBlock';

export default function FirebaseIntegration() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Technical Guide / Firebase</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Firebase Integration</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Understanding the database structure, security rules, and real-time services that power SEELAI's communication and tracking features.
        </p>
      </section>

      {/* Database Schema */}
      <section id="schema" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Database Schema</h2>
        <p className="text-slate-600 mb-4">
          The Realtime Database is strictly segregated by user roles to optimize read/write speeds and enforce strict access controls.
        </p>
        
        <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-slate-800 shadow-lg">
          <CodeBlock 
            language="json"
            code={`{
  "user_info": {
    "partially_sighted": { "$uid": { "name": "...", "assignedCaretakers": {} } },
    "caretaker": { "$uid": { "name": "...", "assignedPatients": {} } },
    "mswd": { "$uid": { "role": "admin" } }
  },
  "user_locations": { ... },
  "assistance_requests": { ... },
  "mswd_communication": { ... },
  "activity_logs": { ... }
}`}
          />
        </div>
      </section>

      {/* Key Services */}
      <section id="services" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Core Firebase Services (Dart)</h2>
        <p className="text-slate-600 mb-4">
          SEELAI abstracts Firebase logic into modular singletons to handle complex operations cleanly.
        </p>

        <ul className="space-y-4">
          <li className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900">1. DatabaseService</h3>
            <p className="text-sm text-slate-600 mt-1">Handles core CRUD operations for User Profiles. It safely navigates paths based on the `role` (e.g., `user_info/mswd/$userId`).</p>
          </li>
          <li className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900">2. LocationTrackingService</h3>
            <p className="text-sm text-slate-600 mt-1">Pushes raw GPS coordinates to the `user_locations` node and pulls real-time streams to render markers on the MSWD Live Map.</p>
          </li>
          <li className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900">3. RequestTransactionService</h3>
            <p className="text-sm text-slate-600 mt-1">A highly critical logging service. Every time an Assistance Request changes status (Pending &gt; Accepted &gt; Completed), an immutable ledger entry is written here for accountability.</p>
          </li>
        </ul>
      </section>

      {/* Security */}
      <section id="security" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Security & Access Control</h2>
        <Callout type="warning" title="Strict Path Validation">
          The `.rules` file strictly enforces privacy. For example, a Caretaker can only read a Partially Sighted user's medical info IF their UID exists inside the `assignedPatients` node.
        </Callout>
      </section>

    </div>
  );
}