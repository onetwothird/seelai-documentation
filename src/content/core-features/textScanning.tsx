import Callout from '../../assets/components/ui/Callout';

export default function TextScanning() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Core Features / Text Scanner</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Text Scanner (OCR)</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          SEELAI features a powerful Optical Character Recognition (OCR) scanner designed specifically for partially sighted users. It continuously scans the environment for text, automatically reading documents, labels, and signs aloud without requiring manual shutter presses.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Google ML Kit</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Continuous Scan</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Text-to-Speech</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Auto-Flashlight</span>
        </div>
      </section>

      {/* Callout */}
      <section className="space-y-4 mt-8">
        <Callout type="info" title="Automatic Cloud Backup">
          Whenever text is successfully scanned and read, the app securely syncs the extracted text to Firebase and backs up the original document image to Cloudinary in the background. This ensures MSWD admins and caretakers can review the history if the user needs further assistance.
        </Callout>
      </section>

      {/* Using the Scanner Section */}
      <section id="scanning-guide" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">How to Use the Scanner</h2>
        <p className="text-slate-600 mb-2">The OCR scanner operates automatically. Follow these steps for the best results:</p>
        
        <ol className="list-decimal list-inside space-y-3 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm marker:text-[#9167b4] marker:font-semibold">
          <li>Select the <strong className="text-slate-900">Read Document</strong> option from the dashboard.</li>
          <li>Hold the document steadily in front of the camera. The app will announce: <em className="text-slate-800 font-medium">"Text reading mode activated."</em></li>
          <li>Once text is detected within the dynamic bounding box, the app instantly reads it aloud.</li>
          <li>Keep the camera pointed at the text to allow the background process to complete saving.</li>
        </ol>
      </section>

      {/* Smart Features Section */}
      <section id="smart-features" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Smart Assistive Features</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Because SEELAI is built for visually impaired users, the text scanner includes automated environment adjustments and accessible review tools.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Feature 1 */}
          <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Low Light Auto-Flash</h3>
            <p className="text-sm text-slate-600">
              The camera continuously samples brightness. If the environment drops below the required threshold, the app automatically enables the torch (flashlight) and announces it to the user.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-5 border border-slate-200 rounded-xl bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Full Text Modal</h3>
            <p className="text-sm text-slate-600">
              By tapping "View Full", users can open a modal to see the complete extracted text, copy it to their device clipboard, or force the Text-to-Speech engine to read it aloud again.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}