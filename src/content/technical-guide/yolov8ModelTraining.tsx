import { useState } from 'react';

// Extracted exactly from your model_training_content.jsx
const tutorialData = {
  annotate: [
    { image: '/model-training/tutorial_1.jpg', title: 'Find Your Uploads', desc: 'Under the Unassigned column, click Annotate Images to begin labeling your newly uploaded dataset.' },
    { image: '/model-training/tutorial_2.jpg', title: 'Choose Labeling Method', desc: 'When prompted, select Label Myself to manually annotate your dataset using the built-in tools.' },
    { image: '/model-training/tutorial_3.jpg', title: 'Start the Job', desc: 'Under the Annotating column, click Start Annotating -> to open the image editor.' },
    { image: '/model-training/tutorial_4.jpg', title: 'Draw Bounding Boxes', desc: 'Select the Bounding Box tool from the right toolbar to start drawing tight rectangles around the objects.' },
    { image: '/model-training/tutorial_5.jpg', title: 'Assign Classes', desc: 'Type the correct class name (e.g., Takure) into the Annotation Editor and click Save (Enter).' },
    { image: '/model-training/tutorial_6.jpg', title: 'Add to Dataset', desc: 'Click Add to Dataset, review your Train/Valid/Test split, and confirm to add the images to your pipeline.' }
  ],
  train: [
    { image: '/model-training/tutorial_1.1.jpg', title: 'Enable GPU Acceleration', desc: 'Navigate to Settings > Accelerator and select a GPU (e.g., GPU T4 x2) to speed up training in Kaggle.' },
    { image: '/model-training/tutorial_2.1.jpg', title: 'Hardware Check', desc: 'Run the !nvidia-smi cell to confirm your Kaggle notebook is successfully connected to the GPU.' },
    { image: '/model-training/tutorial_3.1.jpg', title: 'Install Dependencies', desc: 'Execute this cell to configure your working directory and install the Ultralytics framework.' },
    { image: '/model-training/tutorial_4.1.jpg', title: 'Download Custom Dataset', desc: 'Securely pull your augmented images and format them perfectly for YOLOv8 using Roboflow.' },
    { image: '/model-training/tutorial_5.1.jpg', title: 'Custom Training', desc: 'Execute this cell to begin the official training loop for the YOLOv8 Nano model.' },
    { image: '/model-training/tutorial_6.1.jpg', title: 'Visualize Confusion Matrix', desc: 'Evaluate misclassifications and see exactly what your model is getting right or confused about.' },
    { image: '/model-training/tutorial_7.1.jpg', title: 'Review Training Metrics', desc: 'Check the Loss and Accuracy graphs. Downward loss and upward mAP indicate active learning.' },
    { image: '/model-training/tutorial_8.1.jpg', title: 'Validation Predictions', desc: 'A visual sanity check to manually confirm bounding boxes and confidence scores.' },
    { image: '/model-training/tutorial_9.1.jpg', title: 'Print Overall Metrics', desc: 'Run a final definitive evaluation against your validation dataset to check Total mAP@50.' },
    { image: '/model-training/tutorial_10.1.jpg', title: 'Export to TFLite', desc: 'Convert the model into a lightweight format with INT8 quantization for seamless mobile integration.' }
  ],
  deploy: [
    { image: '/model-training/deploy_1.png', title: 'Prepare Your Files', desc: 'Locate the exported best_int8.tflite model and your labels.txt file from the Kaggle working directory.' },
    { image: '/model-training/deploy_2.png', title: 'Select for Deployment', desc: 'Click the upload zone or drag and drop your files. Both files are required for the mobile app to function.' },
    { image: '/model-training/deploy_3.png', title: 'Deploy to Drive', desc: 'Click Deploy to securely upload the quantized models to your connected Google Drive storage.' }
  ]
};

export default function Yolov8ModelTraining() {
  const [activeTab, setActiveTab] = useState<'annotate' | 'train' | 'deploy'>('annotate');

  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Technical Guide / Model Training</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">YOLOv8 Model Pipeline</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          A comprehensive guide for MSWD Administrators to annotate custom datasets, train the YOLOv8 Nano models on Kaggle GPUs, and deploy the quantized weights to the cloud.
        </p>
      </section>

      {/* Interactive Step-by-Step Gallery */}
      <section id="step-by-step" className="space-y-6 mt-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Step-by-Step Execution</h2>
          <p className="text-sm text-slate-600 mt-2">
            Select a phase below to browse the detailed image guides extracted from the ML Dashboard.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button 
            onClick={() => setActiveTab('annotate')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'annotate' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Step 1: Annotate (Roboflow)
          </button>
          <button 
            onClick={() => setActiveTab('train')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'train' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Step 2: Train (Kaggle)
          </button>
          <button 
            onClick={() => setActiveTab('deploy')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'deploy' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Step 3: Deploy (Google Drive)
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {tutorialData[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
              
              {/* Image Container - Updated to Solid White */}
              <div className="bg-white border-b border-slate-100 flex items-center justify-center h-56 p-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full w-auto object-contain rounded-md shadow-sm border border-slate-200/50"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/ffffff/94a3b8?text=Image+Not+Found' }}
                />
              </div>
              
              {/* Text Container */}
              <div className="p-5 flex-1 flex flex-col bg-white">
                <span className="text-xs font-bold text-[#8B5CF6] mb-1 tracking-wide uppercase">Step {index + 1}</span>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}