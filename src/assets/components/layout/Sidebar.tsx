import { NavLink } from 'react-router-dom';

export default function Sidebar() {
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

  return (
    <aside className="fixed bottom-0 top-0 left-[max(0px,calc(50%-45rem))] hidden w-78 overflow-y-auto pb-10 lg:block border-r border-transparent">
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
    </aside>
  );
}