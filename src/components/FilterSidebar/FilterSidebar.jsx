"use client";

import MapView from "../MapView/MapView";
import AmenitiesFilter from "./subcomponents/AmenitiesFilter";
import FilterGroups from "./subcomponents/FilterGroups";
import PriceRange from "./subcomponents/PriceRange";
import StarRatingsFilter from "./subcomponents/StarRatingsFilter";

const FiltersSidebar = ({ selectedFilters, onToggleFilter, onClearFilters }) => {
  const isChecked = (id) => selectedFilters.some((filter) => filter.id === id);

  return (
    <aside className="hidden lg:block lg:w-[25%]">
      <MapView />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_10px_24px_rgba(15,23,42,0.08)] p-5 mb-4">
        <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
          <h2 className="font-extrabold text-[15px] uppercase tracking-wide text-gray-900">Filters</h2>
          <button
            onClick={onClearFilters}
            className="cursor-pointer text-primary text-sm font-bold px-2 py-1 rounded-md hover:bg-primary/10 transition-colors"
          >
            Clear All
          </button>
        </div>

        <PriceRange isChecked={isChecked} onToggleFilter={onToggleFilter} />

        <div className="space-y-4">
          <FilterGroups isChecked={isChecked} onToggleFilter={onToggleFilter} />
          <StarRatingsFilter isChecked={isChecked} onToggleFilter={onToggleFilter} />
          <AmenitiesFilter isChecked={isChecked} onToggleFilter={onToggleFilter} />
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;