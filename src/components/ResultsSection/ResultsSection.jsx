"use client";
import { useState } from "react";
import HotelsListCard from "../HotelCard/HotelsListCard";
import HotelsGridCard from "../HotelCard/HotelsGridCard";
import FilterChips from "./subcomponents/FilterChips";
import SortComponent from "./subcomponents/SortComponent";
import { GridIcon, ListIcon } from "lucide-react";

const ResultsSection = ({ hotels, filterChips = [], onRemoveFilter, tripNights = 1 }) => {
  const [view, setView] = useState("grid");
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  return (
    <main className="w-full">
      <FilterChips filterChips={filterChips} onRemoveFilter={onRemoveFilter} />
      <SortComponent />

      <div className="flex items-center justify-between mb-5 gap-4 lg:border-none border border-gray-200 rounded-xl p-2">
        <h2 className="lg:hidden block text-base lg:text-2xl leading-[1.2] font-extrabold text-primary">245 Hotels Found <span>in Mumbai</span></h2>
        <button
          onClick={() => setShowTotalPrice((current) => !current)}
          className="inline-flex items-center gap-2 text-sm text-gray-700 font-medium shrink-0"
        >
          <span>Show total price</span>
          <span
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${showTotalPrice ? "bg-primary" : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${showTotalPrice ? "translate-x-6" : "translate-x-1"
                }`}
            />
          </span>
        </button>
        <div className="hidden lg:inline-flex items-center  gap-1 p-1 rounded-xl border border-gray-200 bg-gray-50 w-fit">
          <button
            onClick={() => setView("grid")}
            className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${view === "grid" ? "bg-white text-primary shadow-md" : "text-gray-600 hover:text-primary"
              }`}
          >
            <GridIcon className="text-[18px]" />
            Grid View
          </button>
          <button
            onClick={() => setView("list")}
            className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${view === "list" ? "bg-white text-primary shadow-m" : "text-gray-600 hover:text-primary"
              }`}
          >
            <ListIcon className="text-[18px]" />
            List View
          </button>

        </div>
      </div>

      {view === "list" ? (
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelsListCard key={hotel.id} hotel={hotel} showTotalPrice={showTotalPrice} tripNights={tripNights} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {hotels.map((hotel) => (
            <HotelsGridCard key={hotel.id} hotel={hotel} showTotalPrice={showTotalPrice} tripNights={tripNights} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ResultsSection;