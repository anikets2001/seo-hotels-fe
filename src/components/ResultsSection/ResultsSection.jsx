"use client";
import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import HotelsListCard from "../HotelCard/HotelsListCard";
import HotelsGridCard from "../HotelCard/HotelsGridCard";
import FilterChips from "./subcomponents/FilterChips";
import SortComponent from "./subcomponents/SortComponent";
import { GridIcon, ListIcon } from "lucide-react";
import HotelSearchBar from "../HotelSearchBar/HotelSearchBar";
import { parseInrToNumber } from "../HotelCard/helpers";

const PROMO_BANNER_SRC = "https://ns.yatracdn.com/strapi/qa/1129x113_f70a3a15c3.jpg";

// 1-indexed row numbers after which the promo banner should be shown.
const BANNER_ROWS = [2, 4, 6];

const PromoBanner = ({ className = "" }) => (
  <a
    href="#"
    aria-label="Zero Convenience Fee on hotels — limited period offer"
    className={`block w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    <Image
      src={PROMO_BANNER_SRC}
      alt="Zero Convenience Fee on Hotels - Limited Period Offer"
      width={1129}
      height={113}
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 1129px"
      className="w-full h-auto"
    />
  </a>
);

// For a given sort key, return a comparable numeric value from a hotel.
const getSortValue = (hotel, sortKey) => {
  switch (sortKey) {
    case "price":
      return parseInrToNumber(hotel.price);
    case "userRating":
      return hotel.ratingValue ?? 0;
    case "starRating":
      return hotel.stars ?? 0;
    default:
      return 0;
  }
};

const ResultsSection = ({ hotels, filterChips = [], onRemoveFilter, tripNights = 1 }) => {
  const [view, setView] = useState("grid");
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [activeSort, setActiveSort] = useState("recommended");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSortChange = (sortKey, direction) => {
    setActiveSort(sortKey);
    setSortDirection(direction);
  };

  const sortedHotels = useMemo(() => {
    if (activeSort === "recommended") return hotels;

    const copy = [...hotels];
    copy.sort((a, b) => {
      const aValue = getSortValue(a, activeSort);
      const bValue = getSortValue(b, activeSort);
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    });
    return copy;
  }, [hotels, activeSort, sortDirection]);

  // For each viewport in grid view we want the banner after every 2 rows.
  // Row count = ceil((cardIndex + 1) / colsPerRow), so the banner appears
  // after the card at index (rowsCompleted * colsPerRow - 1).
  const gridBannerIndices = {
    mobile: BANNER_ROWS.map((row) => row * 1 - 1), // 1 col → after cards 2, 4, 6
    md: BANNER_ROWS.map((row) => row * 2 - 1),     // 2 cols → after cards 4, 8, 12
    xl: BANNER_ROWS.map((row) => row * 3 - 1),     // 3 cols → after cards 6, 12, 18
  };

  return (
    <main className="w-full">
      <FilterChips filterChips={filterChips} onRemoveFilter={onRemoveFilter} />
      <SortComponent
        activeSort={activeSort}
        sortDirection={sortDirection}
        onSortChange={handleSortChange}
      />

      <div className="flex items-center justify-between my-4 gap-4 lg:border-none border border-gray-200 rounded-xl p-2">
        <h2 className="lg:hidden block text-base lg:text-2xl leading-[1.2] font-extrabold text-primary">245 Hotels Found <span className="hidden lg:inline">in Mumbai</span></h2>
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
            className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${view === "list" ? "bg-white text-primary shadow-md" : "text-gray-600 hover:text-primary"
              }`}
          >
            <ListIcon className="text-[18px]" />
            List View
          </button>

        </div>
      </div>

      <div className="hidden lg:flex mb-5 px-2 items-center justify-between">
        <h2 className="text-lg font-bold text-primary">245 hotels Found in Mumbai</h2>
        <HotelSearchBar />
      </div>

      {view === "list" ? (
        <div className="space-y-4">
          {sortedHotels.map((hotel, index) => (
            <Fragment key={hotel.id}>
              <HotelsListCard hotel={hotel} showTotalPrice={showTotalPrice} tripNights={tripNights} />
              {BANNER_ROWS.includes(index + 1) ? <PromoBanner /> : null}
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {sortedHotels.map((hotel, index) => (
            <Fragment key={hotel.id}>
              <HotelsGridCard hotel={hotel} showTotalPrice={showTotalPrice} tripNights={tripNights} />
              {gridBannerIndices.mobile.includes(index) ? (
                <PromoBanner className="col-span-full md:hidden" />
              ) : null}
              {gridBannerIndices.md.includes(index) ? (
                <PromoBanner className="hidden md:block xl:hidden col-span-full" />
              ) : null}
              {gridBannerIndices.xl.includes(index) ? (
                <PromoBanner className="hidden xl:block col-span-full" />
              ) : null}
            </Fragment>
          ))}
        </div>
      )}
    </main>
  );
}

export default ResultsSection;
