import Callout from '../../assets/components/ui/Callout';

export default function ObjectDetection() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Core Features / Object Detection</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Object Detection (YOLO)</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Learn how to use SEELAI's core detection features to navigate your surroundings using the YOLO engine for real-time frame processing.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">YOLOv8</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Real-Time Processing</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Computer Vision</span>
        </div>
      </section>

      {/* Scanning Tips Section */}
      <section id="scanning-tips" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Scanning Tips</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          The YOLO engine processes frames in real-time. Follow these best practices to get the most accurate audio feedback from your device.
        </p>
        
        <Callout title="Best Practices for Detection" type="info">
          For optimal results, ensure adequate lighting and hold the phone steadily at chest level. Sudden movements can cause motion blur, which lowers the confidence score of the detection model.
        </Callout>
      </section>

      {/* Custom Objects Section */}
      <section id="custom-objects" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Adding Custom Objects</h2>
        <p className="text-slate-600 leading-relaxed mb-2">
          Users can add new custom objects for smarter, personalized detection. 
        </p>
        
        <ol className="list-decimal list-inside space-y-3 text-slate-600 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm marker:text-[#9167b4] marker:font-semibold">
          <li>Navigate to the Dashboard.</li>
          <li>Click the <strong className="text-slate-900">Add Face or Object</strong> button.</li>
          <li>Choose <em className="text-slate-800 font-medium">New Object</em>.</li>
          <li>Follow the camera prompts to capture the required angles.</li>
        </ol>
      </section>

    </div>
  );
}