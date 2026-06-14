import { useScrollSpy } from '../../../hooks/useScrollSpy';

interface RightTOCProps {
  items: { id: string; title: string }[];
}

export default function RightTOC({ items }: RightTOCProps) {
  const activeId = useScrollSpy(items.map(i => i.id), 120);

  return (
    <aside className="sticky top-20 h-[calc(100vh-120px)] overflow-y-auto pb-10">
      <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
        On this page
      </h4>
      <ul className="space-y-3 text-sm text-slate-500">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block transition-all duration-200 hover:text-slate-900 ${
                activeId === item.id
                  ? 'font-medium text-[#9167b4]'
                  : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}