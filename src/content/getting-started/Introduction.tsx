import { useState } from 'react';

// Organized data mapping to your public folder structure
const guideData = {
  users: [
    { image: '/users/pic_1.png', title: 'Role Selection', description: 'Select the Partially Sighted category to get started.' },
    { image: '/users/pic_2.1.png', title: 'Login', description: 'Log in to your existing Seelai account.' },
    { image: '/users/pic_2.2.png', title: 'Register', description: 'Fill out your details to create a new account.' },
    { image: '/users/pic_3.png', title: 'Home Screen', description: 'View your current location and easily access Voice and Video calls.' },
    { image: '/users/pic_4.png', title: 'Voice Call', description: 'Initiate a quick voice call directly with your assigned caretaker.' },
    { image: '/users/pic_5.png', title: 'Video Call', description: 'Connect face-to-face with your caretaker using the video call feature.' },
    { image: '/users/pic_6.png', title: 'Announcements', description: 'Check MSWD announcements, request a caretaker, and see emergency hotlines.' },
    { image: '/users/pic_7.png', title: 'Request Caretaker', description: 'Fill out the form specifying assistance type, priority level, and an optional message.' },
    { image: '/users/pic_8.png', title: 'Emergency Hotlines', description: 'Access local Cavite emergency hotlines. You can add, edit, or remove them as needed.' },
    { image: '/users/pic_9.png', title: 'Add a Hotline', description: 'Create a new hotline with a custom icon, theme color, department name, number, and address.' },
    { image: '/users/pic_10.png', title: 'Contacts', description: 'View your assigned caretakers. You can instantly message or call them from here.' },
    { image: '/users/pic_11.png', title: 'Detection Features', description: 'Choose Object Detection, Caretaker\'s Face Detection, or Text Document Images with audio playback.' },
    { image: '/users/pic_12.png', title: 'Recent Detections', description: 'Review a complete history of the items or documents you\'ve recently scanned.' },
    { image: '/users/pic_13.png', title: 'Location Tracking', description: 'Track the partially sighted user\'s recent locations for safety and assistance.' },
    { image: '/users/pic_14.png', title: 'Add Custom Detections', description: 'Add custom objects or caretaker faces. These automatically sync to Roboflow for the MSWD tech team.' },
  ],
  caretaker: [
    { image: '/caretaker/pic1.png', title: 'Role Selection', description: 'Select the Caretaker category to get started.' },
    { image: '/caretaker/pic2.png', title: 'Login', description: 'Log in to your existing Seelai account.' },
    { image: '/caretaker/pic3.png', title: 'Register', description: 'Fill out your details to create a new account.' },
    { image: '/caretaker/pic4.png', title: 'Dashboard', description: 'View statistics for Total Registered patients, Pending, In Progress, and Completed tasks.' },
    { image: '/caretaker/pic5.png', title: 'Assistance & Announcements', description: 'View the partially sighted users you handle and check announcements created by MSWD.' },
    { image: '/caretaker/pic6.png', title: 'Voice Call', description: 'Initiate or receive clear voice calls with your patients.' },
    { image: '/caretaker/pic7.png', title: 'Video Call', description: 'Connect face-to-face with your patients using the video call feature.' },
    { image: '/caretaker/pic8.png', title: 'My Patients', description: 'View your patients\' age, category, and address. Easily phone call or message them.' },
    { image: '/caretaker/pic9.png', title: 'Patient Profile', description: 'View the complete profile information that was listed when the patient registered.' },
    { image: '/caretaker/pic10.png', title: 'Location Tracking', description: 'Select a specific patient from your list to view their real-time location.' },
    { image: '/caretaker/pic11.png', title: 'Route & Distance', description: 'View the profiles of both users and see the exact route or distance between you.' },
    { image: '/caretaker/pic12.png', title: 'Assistance Requests', description: 'Track Pending, Active, History, and Deleted requests along with dashboard statistics.' },
    { image: '/caretaker/pic13.png', title: 'Manage Requests', description: 'Review pending requests to decline, accept, or update their status to in-progress or done.' },
  ],
  mswd: [
    { image: '/mswd/pic1.png', title: 'Role Selection', description: 'Select the MSWD category to begin your admin session.' },
    { image: '/mswd/pic2.png', title: 'Login', description: 'Securely log in to your existing Seelai MSWD account.' },
    { image: '/mswd/pic3.png', title: 'Register', description: 'Fill out official details to register a new MSWD staff account.' },
    { image: '/mswd/pic4.png', title: 'Dashboard', description: 'View overall statistics including Total Users, Active Now, Partially Sighted, and Caretakers.' },
    { image: '/mswd/pic5.png', title: 'Command Center', description: 'Monitor activity trends, urgent alerts, and access shortcuts like Live Map, Broadcast, and Requests.' },
    { image: '/mswd/pic6.png', title: 'Announcements', description: 'Review all active announcements broadcasted across the entire system.' },
    { image: '/mswd/pic7.png', title: 'Create Announcement', description: 'Publish new alerts and control visibility targeting Partially Sighted, Caretakers, or All Users.' },
    { image: '/mswd/pic8.png', title: 'Add New Registry', description: 'Capture and manage custom object detection and caretaker face recognition data.' },
    { image: '/mswd/pic9.png', title: 'Directory', description: 'Manage registered patients, caretakers, and approve or decline pending account requests.' },
    { image: '/mswd/pic10.png', title: 'Location Tracker', description: 'Select any Partially Sighted user or Caretaker from the active directory to track them.' },
    { image: '/mswd/pic11.png', title: 'Live Map', description: 'View the exact real-time location and distance of the selected user relative to you.' },
    { image: '/mswd/pic12.png', title: 'System Requests', description: 'Monitor all assistance requests. As an MSWD Admin, you can intervene and assist directly.' },
    { image: '/mswd/pic13.png', title: 'Request Details', description: 'Review complete request logs, including user info, messages, assigned responders, and timeline events.' },
  ]
};

export default function Introduction() {
  // State to track which role is currently being viewed
  const [activeTab, setActiveTab] = useState<'users' | 'caretaker' | 'mswd'>('users');
  const [isPlaying, setIsPlaying] = useState(false); 

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10 animate-in fade-in duration-500 pb-16">
      
     {/* Intro Header */}
      <section id="welcome" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">
          Getting Started / Introduction to Seelai
        </div>

        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Welcome to Seelai
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Seelai is an AI-powered mobile assistant designed to help partially sighted users
          navigate their surroundings, recognize objects, scan text, and identify familiar faces.
          This guide will walk you through setup, features, and everyday usage.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Mobile App</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">TensorFlow Lite</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">YOLOv8</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Object Detection</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Face Recognition</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Text Scanning</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Text-to-Speech</span>
        </div>
      </section>

      {/* Video Section */}
      <section className="space-y-4">
        <div className="mb-6">
          <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-1">Video Tutorial</p>
          <h2 className="text-2xl font-bold text-slate-900">How to use SEELAI</h2>
          <p className="text-slate-600 mt-1 text-sm">Watch this short tutorial to learn how to set up your account and scan your surroundings step by step.</p>
        </div>
        
        {/* Main Video Card Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-slate-900 group">
          {/* If playing, render the embedded iframe player */}
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/wsJBIeHQZdc?autoplay=1&rel=0"
              title="SEELAI App Tutorial"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            /* Otherwise, show the highly professional interactive preview card */
            <>
              {/* Clickable Background Image */}
              <div 
                className="absolute inset-0 cursor-pointer" 
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/wsJBIeHQZdc/maxresdefault.jpg" 
                  alt="SEELAI App Tutorial Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Smooth Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Large Center Play Button */}
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(139,92,246,0.3)] transition-all duration-300 hover:scale-110 hover:bg-[#7c4dff] z-10 focus:outline-none focus:ring-4 focus:ring-[#8B5CF6]/50"
                aria-label="Play Video"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Bottom Left Pill: Status Indicator (Glassmorphism) */}
              <div className="absolute bottom-16 left-3 sm:bottom-5 sm:left-5 flex items-center gap-2 sm:gap-2.5 bg-[#1e1b4b]/60 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg pointer-events-none z-10">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide whitespace-nowrap">Click to Play Inline</span>
              </div>

              {/* Bottom Right Pill: YouTube Link (Glassmorphism) */}
              <a 
                href="https://youtu.be/wsJBIeHQZdc?si=pOHxYymRt_WU5Nez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-3 left-3 sm:bottom-5 sm:left-auto sm:right-5 flex items-center gap-2 bg-[#1e1b4b]/60 hover:bg-[#1e1b4b]/80 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-10"
              >
                <span className="tracking-wide whitespace-nowrap">Watch on YouTube</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </>
          )}
        </div>
        
        <p className="text-center text-sm text-slate-500 mt-4">
          Can't follow along? Continue reading the guide below.
        </p>
      </section>

      {/* Action Card */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-slate-900">Get the Seelai Application (APK)</h3>
          <p className="text-sm text-slate-500 mt-1">Download the mobile app and start testing immediately.</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1ZY-9j2P0hzhOPtKtAkgi-cD9Sgi6Y2oo/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-5 py-2.5 bg-[#9167b4] hover:bg-[#7f5a9e] text-white text-sm font-medium rounded-lg transition-colors shadow-sm cursor-pointer">
          Download APK
        </a>
      </div>

      {/* --- NEW INTERACTIVE USER ROLES GALLERY --- */}
      <section id="user-roles" className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">User Roles & App Walkthrough</h2>
          <p className="text-sm text-slate-600 mt-2">
            Select a role below to explore the interfaces and features available to each user type.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'users' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Partially Sighted
          </button>
          <button 
            onClick={() => setActiveTab('caretaker')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'caretaker' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Caretaker / Family
          </button>
          <button 
            onClick={() => setActiveTab('mswd')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeTab === 'mswd' ? 'bg-[#9167b4] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            MSWD Admin
          </button>
        </div>

        {/* Gallery Grid (Horizontal Scrollable on Mobile, Grid on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {guideData[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
              
              {/* Image Container - Updated to white background with softer border */}
              <div className="bg-white border-b border-slate-100 flex items-center justify-center h-72 p-6">
                <img 
                src={item.image} 
                alt={item.title} 
                className="max-h-full w-auto object-contain"
                loading="lazy"
              />
              </div>
              
              {/* Text Container */}
              <div className="p-5 flex-1 flex flex-col bg-white">
                <span className="text-xs font-bold text-[#8B5CF6] mb-1 tracking-wide uppercase">Step {index + 1}</span>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}