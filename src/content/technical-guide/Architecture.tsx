import Callout from '../../assets/components/ui/Callout';

export default function Architecture() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Technical Guide / Architecture</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">System Architecture</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          A high-level overview of SEELAI's technical stack, detailing how the mobile frontend, cloud backend, and machine learning pipelines interact to deliver real-time assistance.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Flutter</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Firebase</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">YOLOv8</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">TensorFlow Lite</span>
        </div>
      </section>

      {/* Frontend Stack */}
      <section id="frontend" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Mobile Frontend (Flutter)</h2>
        <p className="text-slate-600 mb-4">
          The cross-platform application is built using the Flutter SDK (Dart). It handles device hardware interactions, UI rendering, and offline edge computing.
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 marker:text-[#9167b4]">
          <li><strong>Camera Processing:</strong> Captures high-resolution frames using the native `camera` plugin.</li>
          <li><strong>On-Device ML:</strong> Utilizes `flutter_vision` to run TFLite models completely offline.</li>
          <li><strong>Text-to-Speech:</strong> `flutter_tts` translates visual inferences into spoken audio natively.</li>
          <li><strong>Location Services:</strong> Background GPS tracking for accurate Caretaker and MSWD monitoring.</li>
        </ul>
      </section>

      {/* Backend Stack */}
      <section id="backend" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Backend & Cloud Infrastructure</h2>
        <p className="text-slate-600 mb-4">
          SEELAI relies on a distributed cloud architecture to handle real-time synchronization and heavy media storage.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Firebase Realtime DB</h3>
            <p className="text-sm text-slate-600">Acts as the central nervous system. It syncs live GPS coordinates, assistance requests, user profiles, and chat messages in milliseconds.</p>
          </div>
          <div className="p-5 border border-slate-200 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Cloudinary API</h3>
            <p className="text-sm text-slate-600">Offloads heavy image storage. Background images captured during detections are uploaded here via secure API endpoints.</p>
          </div>
        </div>
      </section>

      {/* Machine Learning Pipeline */}
      <section id="ml-pipeline" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Machine Learning Pipeline</h2>
        <Callout type="info" title="Edge Computing">
          By deploying quantized `.tflite` models directly to the device, SEELAI achieves zero-latency inference for Object and Face detection without requiring an active internet connection.
        </Callout>
        <p className="text-slate-600 mt-4 leading-relaxed">
          The AI engine is trained externally. Annotations are managed in <strong>Roboflow</strong>. Training runs on <strong>Kaggle (GPUs)</strong> using the Ultralytics YOLOv8 architecture. The final models are compressed into INT8 TFLite binaries and deployed securely to Google Drive, ready to be fetched by the app.
        </p>
      </section>

    </div>
  );
}