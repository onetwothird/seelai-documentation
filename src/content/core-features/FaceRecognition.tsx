import Callout from '../../assets/components/ui/Callout';

export default function FaceRecognition() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Core Features / Face Recognition</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Face Recognition</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          SEELAI allows partially sighted users to register their caretakers and loved ones. When the camera pans across a registered face, the app translates the visual data into a clear-sounding voice via text-to-speech, instantly announcing the person's name.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">TensorFlow Lite</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">On-Device Processing</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Text-to-Speech</span>
        </div>
      </section>

      {/* Callout */}
      <section className="space-y-4 mt-8">
        <Callout type="info" title="Privacy & Speed">
          Face embeddings are processed securely using TensorFlow Lite directly on the mobile device, ensuring rapid recognition without relying on a constant internet connection.
        </Callout>
      </section>

      {/* Adding Faces Section */}
      <section id="adding-faces" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Adding New Faces</h2>
        <p className="text-slate-600 mb-2">Users can add new faces for smarter detection by following these steps:</p>
        
        <ol className="list-decimal list-inside space-y-3 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm marker:text-[#9167b4] marker:font-semibold">
          <li>Tap the <strong className="text-slate-900">Add Face or Object</strong> button on the home screen.</li>
          <li>Choose <em className="text-slate-800 font-medium">Caretaker Face</em>.</li>
          <li>Hold the camera steadily so it can scan the face from multiple angles.</li>
          <li>Input the Caretaker's name and save.</li>
        </ol>
      </section>

    </div>
  );
}