import { tableRows } from "@/utils/config";

const SeoTable = () => {
  return (
    <div className="mb-8">
      <h2 className="lg:text-3xl text-2xl font-semibold leading-7 tracking-normal text-gray-900">Mumbai Hotels Comparison Snapshot</h2>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mt-4 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
        <table className="w-full min-w-[860px] text-left">
          <thead>
            <tr className="bg-[#f7f9fc]">
              <th className="px-5 py-3.5 text-[12px] uppercase tracking-[0.06em] font-bold text-gray-600 border-b border-gray-200">
                Area
              </th>
              <th className="px-5 py-3.5 text-[12px] uppercase tracking-[0.06em] font-bold text-gray-600 border-b border-gray-200">
                Ideal For
              </th>
              <th className="px-5 py-3.5 text-[12px] uppercase tracking-[0.06em] font-bold text-gray-600 border-b border-gray-200">
                Popular Hotel Type
              </th>
              <th className="px-5 py-3.5 text-[12px] uppercase tracking-[0.06em] font-bold text-gray-600 border-b border-gray-200">
                Avg. Price/Night
              </th>
              <th className="px-5 py-3.5 text-[12px] uppercase tracking-[0.06em] font-bold text-gray-600 border-b border-gray-200">
                Distance to Airport
              </th>
            </tr>
          </thead>

          <tbody className="text-[14px] text-gray-700">
            {tableRows.map((row) => (
              <tr key={row.area} className="border-b border-gray-100 last:border-0 hover:bg-[#fbfcff] transition-colors">
                <td className="px-5 py-4 font-semibold text-gray-900">{row.area}</td>
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {row.idealFor}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-600">{row.type}</td>
                <td className="px-5 py-4">
                  <span className="font-bold text-primary">{row.price}</span>
                </td>
                <td className="px-5 py-4 text-gray-600">{row.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeoTable;