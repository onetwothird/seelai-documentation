import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './assets/context/SidebarContext';

// Layout & UI
import Layout from './assets/components/layout/Layout';

// Content Pages
import Introduction from './content/getting-started/Introduction';
import Installation from './content/getting-started/Installation';
import ObjectDetection from './content/core-features/ObjectDetection';
import FaceRecognition from './content/core-features/FaceRecognition';
import TextScanning from './content/core-features/textScanning';
import RealtimeLocation from './content/caretaker&mswd/realtimeLocation';
import AssistanceRequests from './content/caretaker&mswd/assistanceRequests';
import AnnouncementDirectory from './content/caretaker&mswd/announcementDirectory';
import Architecture from './content/technical-guide/Architecture';
import FirebaseIntegration from './content/technical-guide/firebaseIntegration';
import Yolov8ModelTraining from './content/technical-guide/yolov8ModelTraining';

function App() {
  // Table of Contents Definitions
  const introToc = [
    { id: 'welcome', title: 'Welcome to Seelai' },
    { id: 'user-roles', title: 'User Roles & Access' }
  ];

  const installationToc = [
    { id: 'installation', title: 'Installation' },
    { id: 'prerequisites', title: 'Prerequisites' },
    { id: 'environment-setup', title: 'Environment Setup' },
    { id: 'firebase-config', title: 'Firebase Configuration' },
    { id: 'database-rules', title: 'Database Rules' }
  ];

  const objectDetectionToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'scanning-tips', title: 'Scanning Tips' },
    { id: 'custom-objects', title: 'Adding Custom Objects' }
  ];

  const faceRecognitionToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'adding-faces', title: 'Adding New Faces' }
  ];
  
  const textScanningToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'scanning-guide', title: 'How to Use the Scanner' },
    { id: 'smart-features', title: 'Smart Assistive Features' }
  ];
  const trackingToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'validation', title: 'Data Accuracy & Validation' },
    { id: 'distance', title: 'Distance Calculation' }
  ];

  const requestsToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'lifecycle', title: 'Request Lifecycle' },
    { id: 'escalation', title: 'Auto-Escalation & Accountability' }
  ];

  const announcementsToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'announcements', title: 'Targeted Announcements' },
    { id: 'directory-calling', title: 'Smart Directory Calling' }
  ];

     const architectureToc = [
    { id: 'overview', title: 'System Architecture' },
    { id: 'frontend', title: 'Mobile Frontend' },
    { id: 'backend', title: 'Backend Stack' },
    { id: 'ml-pipeline', title: 'ML Pipeline' }
  ];

  const firebaseToc = [
    { id: 'overview', title: 'Overview' },
    { id: 'schema', title: 'Database Schema' },
    { id: 'services', title: 'Core Services' },
    { id: 'security', title: 'Security Rules' }
  ];

  const yolov8Toc = [
    { id: 'overview', title: 'Overview' },
    { id: 'step-by-step', title: 'Step-by-Step Execution' }
  ];

  return (
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
        {/* Getting Started */}
        <Route path="/" element={<Layout toc={introToc}><Introduction /></Layout>} />
        <Route path="/installation" element={<Layout toc={installationToc}><Installation /></Layout>} />
        
        {/* Features */}
        <Route path="/features/ObjectDetection" element={<Layout toc={objectDetectionToc}><ObjectDetection /></Layout>} />
        <Route path="/features/FaceRecognition" element={<Layout toc={faceRecognitionToc}><FaceRecognition /></Layout>} />
        <Route path="/features/ocr" element={<Layout toc={textScanningToc}><TextScanning /></Layout>} />
        
        
        {/* Caretaker & MSWD */}
        <Route path="/features/tracking" element={<Layout toc={trackingToc}><RealtimeLocation /></Layout>} />
        <Route path="/features/requests" element={<Layout toc={requestsToc}><AssistanceRequests /></Layout>} />
        <Route path="/features/admin-tools" element={<Layout toc={announcementsToc}><AnnouncementDirectory /></Layout>} />

        {/* Technical Guide */}
        <Route path="/technical/architecture" element={<Layout toc={architectureToc}><Architecture /></Layout>} />
        <Route path="/technical/firebase" element={<Layout toc={firebaseToc}><FirebaseIntegration /></Layout>} />
        <Route path="/technical/yolov8" element={<Layout toc={yolov8Toc}><Yolov8ModelTraining /></Layout>} />
      </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;