import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightTOC from './RightTOC';

interface LayoutProps {
  children: React.ReactNode;
  toc?: { id: string; title: string }[];
}

export default function Layout({ children, toc }: LayoutProps) {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <div className="mx-auto w-full max-w-360">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area - lg:pl-[19.5rem] offsets the 312px sidebar */}
        <div className="lg:pl-78">
          <Navbar />

          {/* Content and TOC Wrapper */}
          <main className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 md:px-8 xl:px-12 xl:flex xl:gap-8">
            {/* Center Content Area */}
            <div className="min-w-0 flex-auto xl:max-w-3xl">
              <article className="prose prose-slate max-w-none">
                {children}
              </article>
            </div>

            {/* Right Table of Contents */}
            {toc && (
              <div className="hidden xl:block xl:w-64 xl:shrink-0 xl:-mt-32 relative z-50">
                <RightTOC items={toc} />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}