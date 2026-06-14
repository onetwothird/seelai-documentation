interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <div className="w-full overflow-x-auto my-6 border border-slate-200/70 rounded-xl bg-white/50 backdrop-blur-sm">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-200/80 bg-slate-50/70">
            {headers.map((header, i) => (
              <th 
                key={i} 
                className="px-5 py-3 text-xs font-semibold text-slate-600 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className="hover:bg-slate-50/40 transition-colors duration-150 text-slate-700"
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-5 py-3.5 font-normal">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}