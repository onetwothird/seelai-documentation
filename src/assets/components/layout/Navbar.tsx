import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── Search Index ─────────────────────────────────────────────────────────────
// route   – exact React Router path from App.tsx
// section – the id="" anchor on that page to scroll to
// ─────────────────────────────────────────────────────────────────────────────
const SEARCH_INDEX = [
  // ── Introduction ─────────────────────────────────────────────────
  {
    route: '/',
    section: 'welcome',
    breadcrumb: 'Getting Started / Introduction',
    title: 'Welcome to Seelai',
    body: 'AI-powered mobile assistant partially sighted users navigate surroundings recognize objects scan text identify familiar faces setup features everyday usage.',
    icon: '👋',
  },
  {
    route: '/',
    section: 'user-roles',
    breadcrumb: 'Getting Started / Introduction',
    title: 'User Roles & App Walkthrough',
    body: 'Partially Sighted caretaker MSWD admin role selection login register home screen voice call video call announcements detection features location tracking.',
    icon: '👋',
  },
  {
    route: '/',
    section: 'user-roles',
    breadcrumb: 'Getting Started / Introduction → Partially Sighted',
    title: 'Partially Sighted User Guide',
    body: 'Role selection login register home screen voice call video call announcements request caretaker emergency hotlines contacts detection features recent detections location tracking add custom detections.',
    icon: '👋',
  },
  {
    route: '/',
    section: 'user-roles',
    breadcrumb: 'Getting Started / Introduction → Caretaker',
    title: 'Caretaker & Family Guide',
    body: 'Dashboard statistics total registered patients pending in-progress completed tasks assistance announcements my patients patient profile location tracking route distance requests.',
    icon: '👋',
  },
  {
    route: '/',
    section: 'user-roles',
    breadcrumb: 'Getting Started / Introduction → MSWD Admin',
    title: 'MSWD Admin Guide',
    body: 'Dashboard command center announcements create announcement add new registry directory location tracker live map system requests request details.',
    icon: '👋',
  },

  // ── Installation ──────────────────────────────────────────────────
  {
    route: '/installation',
    section: 'installation',
    breadcrumb: 'Getting Started / Installation',
    title: 'Installation & Setup',
    body: 'Developer guide Flutter application locally bind Firebase configure backend rules Flutter SDK Dart Firebase CLI Realtime Database.',
    icon: '⚙️',
  },
  {
    route: '/installation',
    section: 'prerequisites',
    breadcrumb: 'Getting Started / Installation',
    title: 'Prerequisites',
    body: 'Flutter SDK latest stable release Firebase CLI database auth linking physical device TFLite camera features emulators Android iOS.',
    icon: '⚙️',
  },
  {
    route: '/installation',
    section: 'environment-setup',
    breadcrumb: 'Getting Started / Installation',
    title: 'Environment Setup',
    body: 'Clone repository HTTPS git clone Seelai-App flutter pub get install dependencies.',
    icon: '⚙️',
  },
  {
    route: '/installation',
    section: 'firebase-config',
    breadcrumb: 'Getting Started / Installation',
    title: 'Firebase Configuration',
    body: 'Project name seelai project ID seelai-4b026 Firebase Authentication Realtime Database Storage flutterfire configure CLI Google account.',
    icon: '⚙️',
  },
  {
    route: '/installation',
    section: 'database-rules',
    breadcrumb: 'Getting Started / Installation',
    title: 'Realtime Database Rules',
    body: 'Security rules segregate access partially sighted caretakers MSWD admins superadmins Firebase Console publish JSON rules.',
    icon: '⚙️',
  },

  // ── Object Detection ──────────────────────────────────────────────
  {
    route: '/features/ObjectDetection',
    section: 'overview',
    breadcrumb: 'Core Features / Object Detection',
    title: 'Object Detection (YOLO)',
    body: 'SEELAI core detection features navigate surroundings YOLO engine real-time frame processing YOLOv8 computer vision.',
    icon: '🔍',
  },
  {
    route: '/features/ObjectDetection',
    section: 'scanning-tips',
    breadcrumb: 'Core Features / Object Detection',
    title: 'Scanning Tips',
    body: 'YOLO engine processes frames real-time best practices adequate lighting hold phone chest level motion blur confidence score detection model.',
    icon: '🔍',
  },
  {
    route: '/features/ObjectDetection',
    section: 'custom-objects',
    breadcrumb: 'Core Features / Object Detection',
    title: 'Adding Custom Objects',
    body: 'Custom objects smarter personalized detection dashboard add face or object new object camera prompts capture required angles.',
    icon: '🔍',
  },

  // ── Face Recognition ──────────────────────────────────────────────
  {
    route: '/features/FaceRecognition',
    section: 'overview',
    breadcrumb: 'Core Features / Face Recognition',
    title: 'Face Recognition',
    body: 'Partially sighted users register caretakers loved ones camera pans registered face text-to-speech voice announce person name TensorFlow Lite on-device processing.',
    icon: '👤',
  },
  {
    route: '/features/FaceRecognition',
    section: 'adding-faces',
    breadcrumb: 'Core Features / Face Recognition',
    title: 'Adding New Faces',
    body: 'Add face or object caretaker face hold camera scan face multiple angles input caretaker name save register.',
    icon: '👤',
  },

  // ── Text Scanning ─────────────────────────────────────────────────
  {
    route: '/features/ocr',
    section: 'overview',
    breadcrumb: 'Core Features / Text Scanner',
    title: 'Text Scanner (OCR)',
    body: 'Optical Character Recognition OCR scanner partially sighted users continuously scans documents labels signs reads aloud no shutter press Google ML Kit continuous scan text-to-speech auto-flashlight.',
    icon: '📄',
  },
  {
    route: '/features/ocr',
    section: 'scanning-guide',
    breadcrumb: 'Core Features / Text Scanner',
    title: 'How to Use the Scanner',
    body: 'Read document dashboard hold document camera text reading mode activated bounding box reads aloud background process saving.',
    icon: '📄',
  },
  {
    route: '/features/ocr',
    section: 'smart-features',
    breadcrumb: 'Core Features / Text Scanner',
    title: 'Smart Assistive Features',
    body: 'Low light auto-flash torch flashlight brightness threshold announce user full text modal view full extracted text copy clipboard text-to-speech read aloud again.',
    icon: '📄',
  },

  // ── Real-time Location ────────────────────────────────────────────
  {
    route: '/features/tracking',
    section: 'overview',
    breadcrumb: 'Caretaker & MSWD / Real-time Location',
    title: 'Real-time Location Tracking',
    body: 'Accurate real-time location monitoring safety partially sighted users caretakers MSWD admins live map exact distances historical movement Firebase Realtime DB Haversine formula 24-hour history.',
    icon: '📍',
  },
  {
    route: '/features/tracking',
    section: 'validation',
    breadcrumb: 'Caretaker & MSWD / Real-time Location',
    title: 'Data Accuracy & Validation',
    body: 'False alarms correct location recency check live 5 minutes coordinate data accuracy threshold GPS hardware 50 meters reliable.',
    icon: '📍',
  },
  {
    route: '/features/tracking',
    section: 'distance',
    breadcrumb: 'Caretaker & MSWD / Real-time Location',
    title: 'Distance Calculation',
    body: 'Exact distance caretaker admin partially sighted user Haversine Formula spherical Earth point-to-point meters kilometers location history 24-hour off-grid lastUpdateMillis trajectory.',
    icon: '📍',
  },

  // ── Assistance Requests ───────────────────────────────────────────
  {
    route: '/features/requests',
    section: 'overview',
    breadcrumb: 'Caretaker & MSWD / Assistance Requests',
    title: 'Assistance Requests System',
    body: 'Digital lifeline partially sighted users dispatch structured help requests priority levels messages GPS coordinates caretakers MSWD office.',
    icon: '🆘',
  },
  {
    route: '/features/requests',
    section: 'lifecycle',
    breadcrumb: 'Caretaker & MSWD / Assistance Requests',
    title: 'Request Lifecycle',
    body: 'Status pipeline pending dispatched caretaker queue accepted declined reason flagged escalated in-progress actively assisting traveling completed closing notes saved.',
    icon: '🆘',
  },
  {
    route: '/features/requests',
    section: 'escalation',
    breadcrumb: 'Caretaker & MSWD / Assistance Requests',
    title: 'Auto-Escalation & Accountability',
    body: 'No assigned caretaker caretaker declines escalatedToMSWD flag MSWD admin command center intervention transaction logging immutable audit trail timestamps decline reasons completion notes high priority emergency alerts.',
    icon: '🆘',
  },

  // ── Announcements & Directory ─────────────────────────────────────
  {
    route: '/features/admin-tools',
    section: 'overview',
    breadcrumb: 'Caretaker & MSWD / Communications',
    title: 'Announcements & Directory',
    body: 'MSWD admin panel broadcasting tool centralized directory push critical alerts user segments tracked calling system connect users securely.',
    icon: '📢',
  },
  {
    route: '/features/admin-tools',
    section: 'announcements',
    breadcrumb: 'Caretaker & MSWD / Communications',
    title: 'Targeted Announcements',
    body: 'Global broadcasts all users weather warnings role-specific caretakers partially sighted customized instructions specific users private alerts UID matching.',
    icon: '📢',
  },
  {
    route: '/features/admin-tools',
    section: 'directory-calling',
    breadcrumb: 'Caretaker & MSWD / Communications',
    title: 'Smart Directory Calling',
    body: 'Admin phone call user directory cleanup tracking protocols device dialer MswdCallService strip illegal characters +63 63 09 format call auditing activity logs mswd_communication calls call_logs fallback modal.',
    icon: '📢',
  },

  // ── Architecture ──────────────────────────────────────────────────
  {
    route: '/technical/architecture',
    section: 'overview',
    breadcrumb: 'Technical Guide / Architecture',
    title: 'System Architecture',
    body: 'High-level technical stack mobile frontend cloud backend machine learning pipelines real-time assistance Flutter Firebase YOLOv8 TensorFlow Lite.',
    icon: '🏗️',
  },
  {
    route: '/technical/architecture',
    section: 'frontend',
    breadcrumb: 'Technical Guide / Architecture',
    title: 'Mobile Frontend (Flutter)',
    body: 'Cross-platform Flutter SDK Dart device hardware interactions UI rendering offline edge computing camera processing flutter_vision TFLite on-device ML text-to-speech flutter_tts background GPS location services.',
    icon: '🏗️',
  },
  {
    route: '/technical/architecture',
    section: 'backend',
    breadcrumb: 'Technical Guide / Architecture',
    title: 'Backend & Cloud Infrastructure',
    body: 'Distributed cloud architecture real-time synchronization heavy media storage Firebase Realtime Database GPS coordinates assistance requests user profiles chat messages Cloudinary API image storage.',
    icon: '🏗️',
  },
  {
    route: '/technical/architecture',
    section: 'ml-pipeline',
    breadcrumb: 'Technical Guide / Architecture',
    title: 'Machine Learning Pipeline',
    body: 'Edge computing quantized tflite models on-device zero-latency inference object detection face detection no internet Roboflow annotations Kaggle GPU Ultralytics YOLOv8 INT8 TFLite binaries Google Drive.',
    icon: '🏗️',
  },

  // ── Firebase Integration ──────────────────────────────────────────
  {
    route: '/technical/firebase',
    section: 'overview',
    breadcrumb: 'Technical Guide / Firebase',
    title: 'Firebase Integration',
    body: 'Database structure security rules real-time services communication tracking features.',
    icon: '🔥',
  },
  {
    route: '/technical/firebase',
    section: 'schema',
    breadcrumb: 'Technical Guide / Firebase',
    title: 'Database Schema',
    body: 'Realtime Database user roles read write speeds strict access controls user_info partially_sighted caretaker mswd user_locations assistance_requests mswd_communication activity_logs.',
    icon: '🔥',
  },
  {
    route: '/technical/firebase',
    section: 'services',
    breadcrumb: 'Technical Guide / Firebase',
    title: 'Core Firebase Services (Dart)',
    body: 'DatabaseService CRUD operations user profiles role paths LocationTrackingService GPS coordinates user_locations node MSWD live map RequestTransactionService immutable ledger assistance request status pending accepted completed audit.',
    icon: '🔥',
  },
  {
    route: '/technical/firebase',
    section: 'security',
    breadcrumb: 'Technical Guide / Firebase',
    title: 'Security & Access Control',
    body: 'Rules file strict path validation privacy caretaker partially sighted user medical info assignedPatients UID Firebase security.',
    icon: '🔥',
  },

  // ── YOLOv8 Model Training ─────────────────────────────────────────
  {
    route: '/technical/yolov8',
    section: 'overview',
    breadcrumb: 'Technical Guide / Model Training',
    title: 'YOLOv8 Model Pipeline',
    body: 'MSWD administrators annotate custom datasets train YOLOv8 Nano models Kaggle GPUs deploy quantized weights cloud.',
    icon: '🧠',
  },
  {
    route: '/technical/yolov8',
    section: 'step-by-step',
    breadcrumb: 'Technical Guide / Model Training → Annotate',
    title: 'Step 1: Annotate with Roboflow',
    body: 'Unassigned column annotate images labeling dataset label myself bounding box draw rectangles assign classes Takure add to dataset train valid test split.',
    icon: '🧠',
  },
  {
    route: '/technical/yolov8',
    section: 'step-by-step',
    breadcrumb: 'Technical Guide / Model Training → Train',
    title: 'Step 2: Train on Kaggle',
    body: 'Enable GPU acceleration T4 nvidia-smi hardware check install dependencies Ultralytics download custom dataset Roboflow YOLOv8 Nano training confusion matrix loss accuracy mAP validation predictions export TFLite INT8 quantization.',
    icon: '🧠',
  },
  {
    route: '/technical/yolov8',
    section: 'step-by-step',
    breadcrumb: 'Technical Guide / Model Training → Deploy',
    title: 'Step 3: Deploy to Google Drive',
    body: 'Prepare files best_int8.tflite labels.txt select upload zone drag drop deploy Google Drive quantized models mobile app.',
    icon: '🧠',
  },
];

// ─── Scoring ──────────────────────────────────────────────────────────────────
function scoreEntry(entry: typeof SEARCH_INDEX[number], query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const words = q.split(/\s+/);
  const titleLower = entry.title.toLowerCase();
  const bodyLower = entry.body.toLowerCase();
  const breadcrumbLower = entry.breadcrumb.toLowerCase();
  let score = 0;
  for (const word of words) {
    if (titleLower.includes(word)) score += 10;
    if (breadcrumbLower.includes(word)) score += 4;
    if (bodyLower.includes(word)) score += 2;
  }
  if (titleLower.includes(q)) score += 20;
  return score;
}

// ─── Highlight ────────────────────────────────────────────────────────────────
function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(
    `(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
    'gi'
  );
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[#9167b4]/15 text-[#6d4a8c] rounded px-0.5 font-semibold">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// ─── Quick-browse shortcuts (shown when no query typed) ───────────────────────
const BROWSE_SHORTCUTS = [
  { label: 'Introduction',        route: '/',                         icon: '👋' },
  { label: 'Installation',        route: '/installation',             icon: '⚙️' },
  { label: 'Object Detection',    route: '/features/ObjectDetection', icon: '🔍' },
  { label: 'Face Recognition',    route: '/features/FaceRecognition', icon: '👤' },
  { label: 'Text Scanner',        route: '/features/ocr',             icon: '📄' },
  { label: 'Location Tracking',   route: '/features/tracking',        icon: '📍' },
  { label: 'Assistance Requests', route: '/features/requests',        icon: '🆘' },
  { label: 'Announcements',       route: '/features/admin-tools',     icon: '📢' },
  { label: 'Architecture',        route: '/technical/architecture',   icon: '🏗️' },
  { label: 'Firebase',            route: '/technical/firebase',       icon: '🔥' },
  { label: 'Model Training',      route: '/technical/yolov8',         icon: '🧠' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen]   = useState(false);
  const [query,  setQuery]    = useState('');
  const inputRef  = useRef<HTMLInputElement>(null);
  const modalRef  = useRef<HTMLDivElement>(null);

  // Ranked results
  const results = query.trim()
    ? SEARCH_INDEX
        .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(({ entry }) => entry)
    : [];

  // ── Navigation helper ──────────────────────────────────────────────────────
  // Goes to the correct route, then scrolls to the section anchor once the
  // new page has rendered (using a short rAF + setTimeout chain).
  const goTo = useCallback(
    (route: string, section: string) => {
      closeSearch();
      navigate(route);
      // Wait for the new page to paint before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigate]
  );

  // ── Open / close ──────────────────────────────────────────────────────────
  const openSearch = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
  }, []);

  // Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, openSearch, closeSearch]);

  // Click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, closeSearch]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-white/90 backdrop-blur border-b border-slate-200/60 px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex w-full items-center justify-between">

          {/* Search trigger */}
          <button
            onClick={openSearch}
            className="group flex w-full max-w-md items-center gap-3 rounded-md bg-slate-50 px-3 py-1.5 text-sm text-slate-400 ring-1 ring-slate-200 transition-all hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-[#9167b4]"
          >
            <svg width="24" height="24" fill="none" aria-hidden="true" className="h-5 w-5 flex-none group-hover:text-slate-500">
              <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="flex-1 text-left">Quick search for anything</span>
            <span className="hidden rounded-md bg-white px-1.5 py-0.5 text-xs font-semibold text-slate-400 ring-1 ring-slate-200 sm:block">
              Ctrl K
            </span>
          </button>

          {/* Right actions */}
          <div className="ml-6 flex items-center gap-6 text-sm font-medium text-slate-500">
            <div className="hidden items-center gap-1 hover:text-slate-900 md:flex cursor-pointer">
              v1.0.0
              <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="hidden h-5 w-px bg-slate-200 md:block" />
            {/* GitHub link → your repo */}
            <a
              href="https://github.com/onetwothird"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ── Search Modal ────────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" aria-hidden="true" />

          {/* Panel */}
          <div
            ref={modalRef}
            className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <svg className="h-5 w-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24">
                <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, features, guides…"
                className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Clear"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <kbd
                onClick={closeSearch}
                className="hidden sm:inline-flex cursor-pointer items-center rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs font-semibold text-slate-400 hover:bg-slate-100 transition-colors"
              >
                Esc
              </kbd>
            </div>

            {/* Body */}
            <div className="max-h-[60vh] overflow-y-auto">

              {/* No query → quick-browse grid */}
              {!query.trim() && (
                <div className="px-4 py-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Browse sections
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {BROWSE_SHORTCUTS.map((item) => (
                      <button
                        key={item.route + item.label}
                        onClick={() => goTo(item.route, '')}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-left text-slate-700 hover:bg-slate-50 transition-colors border border-slate-100"
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results list */}
              {query.trim() && results.length > 0 && (
                <ul className="py-2">
                  {results.map((entry, i) => (
                    <li key={i}>
                      <button
                        onClick={() => goTo(entry.route, entry.section)}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group text-left"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-base group-hover:bg-[#9167b4]/10 transition-colors">
                          {entry.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-slate-400 mb-0.5 truncate">{entry.breadcrumb}</p>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-[#9167b4] transition-colors">
                            {highlight(entry.title, query)}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                            {highlight(
                              entry.body.slice(0, 100) + (entry.body.length > 100 ? '…' : ''),
                              query
                            )}
                          </p>
                        </div>
                        <svg
                          className="mt-1 h-4 w-4 shrink-0 text-slate-300 group-hover:text-[#9167b4] transition-colors"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* No results */}
              {query.trim() && results.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center px-4">
                  <span className="text-3xl mb-3">🔎</span>
                  <p className="text-sm font-semibold text-slate-900">No results for "{query}"</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Try a different keyword — e.g. "firebase", "YOLO", or "caretaker".
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 px-4 py-2.5 flex items-center justify-between">
              <p className="text-xs text-slate-400">
                {query.trim()
                  ? results.length > 0
                    ? `${results.length} result${results.length !== 1 ? 's' : ''}`
                    : 'No results'
                  : `${SEARCH_INDEX.length} indexed entries`}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-[10px]">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-[10px]">Esc</kbd>
                  to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}