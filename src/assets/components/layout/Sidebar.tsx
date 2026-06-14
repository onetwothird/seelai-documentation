import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  const navGroups = [
    {
      title: "GETTING STARTED",
      links: [
        { name: "Introduction to Seelai", path: "/" },
        { name: "Installation & Setup", path: "/installation" },
      ]
    },
    {
      title: "CORE FEATURES",
      links: [
        { name: "Object Detection (YOLO)", path: "/features/ObjectDetection" },
        { name: "Face Recognition", path: "/features/FaceRecognition" },
        { name: "Text Scanner (OCR)", path: "/features/ocr" },
      ]
    },
    {
      title: "CARETAKER & MSWD",
      links: [
        { name: "Real-time Location Tracking", path: "/features/tracking" },
        { name: "Assistance Requests", path: "/features/requests" },
        { name: "Announcements & Directory", path: "/features/admin-tools" },
      ]
    },
    {
      title: "TECHNICAL GUIDE",
      links: [
        { name: "System Architecture", path: "/technical/architecture" },
        { name: "Firebase Integration", path: "/technical/firebase" },
        { name: "YOLOv8 Model Training", path: "/technical/yolov8" },
      ]
    }
  ];

  const navContent = (
    <div className="px-8">

      {/* Logo Section */}
      <div className="mb-8 flex h-16 items-center gap-3">
        <img src="/logo/seelai_app_logo.png" alt="SEELAI Logo" className="h-8 w-8 object-contain rounded-lg" />
        <span className="text-2xl font-semibold tracking-tight text-slate-900">SEELAI</span>
      </div>

      {/* Dynamic Navigation Groups */}
      {navGroups.map((group, idx) => (
        <div key={idx} className="mb-8 mt-8">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            {group.title}
          </h4>
          <ul className="space-y-3 border-l border-slate-100 ml-1 pl-3">
            {group.links.map((link, linkIdx) => (
              <li key={linkIdx}>
                <NavLink
                  to={link.path}
                  onClick={close}
                  className={({ isActive }) =>
                    `block text-sm transition-colors duration-200 ${
                      isActive
                        ? 'font-semibold text-[#9167b4]'
                        : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────────────────────── */}
      <aside className="fixed bottom-0 top-0 left-[max(0px,calc(50%-45rem))] hidden w-78 overflow-y-auto pb-10 lg:block border-r border-transparent">
        {navContent}
      </aside>

      {/* ── Mobile Backdrop ─────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ───────────────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] overflow-y-auto bg-white pb-10 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <div className="flex h-16 items-center justify-end px-4">
          <button
            onClick={close}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="-mt-16">
          {navContent}
        </div>
      </aside>
    </>
  );
}