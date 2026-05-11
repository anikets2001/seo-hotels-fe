"use client";
import { useMemo, useState } from "react";
import Header from "../Header/Header";
import BookingEngine from "../BokingEngine/BookingEngine";
import { breadCrumbs, hotels } from "@/utils/config";
import { SPONSORED_FILTER_ID } from "../FilterSidebar/subcomponents/SponsoredFilter";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import PrimaryContent from "../PrimaryContent/PrimaryContent";
import BankOffersCarousel from "../BankOffersCarousel/BankOffersCarousel";
import ResultsSection from "../ResultsSection/ResultsSection";
import SecondaryContent from "../SecondaryContent/SecondaryContent";
import Footer from "../Footer/Footer";
import FiltersSidebar from "../FilterSidebar/FilterSidebar";
import MobileSearchCard from "../MobileComponents/MobileSearchCard";
import MobileSortFilterBar from "../MobileComponents/MobileSortFilterBar";
import MobileTopBar from "../MobileComponents/MobileTopBar";

export default function HotelsSeoPage() {
  const tripNights = 3;
  const [selectedFilters, setSelectedFilters] = useState([
    { id: "group:Popular Filter:Swimming Pool", label: "Swimming Pool" },
    { id: "star:4", label: "4 Star" },
    { id: "amenity:Free WiFi", label: "Free WiFi" },
  ]);

  const handleFilterToggle = (filter) => {
    setSelectedFilters((currentFilters) => {
      const alreadySelected = currentFilters.some((currentFilter) => currentFilter.id === filter.id);
      if (alreadySelected) {
        return currentFilters.filter((currentFilter) => currentFilter.id !== filter.id);
      }
      return [...currentFilters, filter];
    });
  };

  const handleFilterRemove = (filterId) => {
    setSelectedFilters((currentFilters) => currentFilters.filter((filter) => filter.id !== filterId));
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  // Currently only the Sponsored filter is wired to actually filter the list.
  // Other filters remain display-only chips until backend filtering lands.
  const isSponsoredOnly = selectedFilters.some((filter) => filter.id === SPONSORED_FILTER_ID);
  const visibleHotels = useMemo(
    () => (isSponsoredOnly ? hotels.filter((hotel) => hotel.sponsored) : hotels),
    [isSponsoredOnly],
  );

  return (
    <div>
      <div className='bg-[#F2F2F2] py-[12px] px-[12px] block fixed w-full z-[9999] lg:hidden'>
        <MobileTopBar />
        <MobileSearchCard />
        <MobileSortFilterBar
          selectedFilters={selectedFilters}
          onToggleFilter={handleFilterToggle}
          onClearFilters={handleClearFilters}
        />
      </div>

      <Header />
      <BookingEngine />

      <div className="bg-gray-50 pt-44 lg:pt-40 px-4 lg:px-0">
        <div className="pt-5 lg:px-[200px]">
          <BreadCrumbs breadcrumbItems={breadCrumbs} />
          <PrimaryContent />
          <BankOffersCarousel />
          <div className="flex gap-6 mt-4 lg:mt-12">
            <FiltersSidebar
              selectedFilters={selectedFilters}
              onToggleFilter={handleFilterToggle}
              onClearFilters={handleClearFilters}
            />
            <div className="w-full lg:w-[75%]">
              <ResultsSection
                hotels={visibleHotels}
                filterChips={selectedFilters}
                onRemoveFilter={handleFilterRemove}
                tripNights={tripNights}
              />
              <SecondaryContent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}