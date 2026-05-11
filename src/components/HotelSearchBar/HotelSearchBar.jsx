import { SearchIcon } from "lucide-react";

const HotelSearchBar = () => {
  return (
    <div className="relative min-w-[242px]">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      <input
        type="text"
        placeholder="Search by hotel name or area"
        aria-label="Search hotels by name or area"
        className="w-full pl-10 pr-5 py-2.5 lg:py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 placeholder:font-bold focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors shadow-md"
      />
    </div>
  );
};

export default HotelSearchBar;
