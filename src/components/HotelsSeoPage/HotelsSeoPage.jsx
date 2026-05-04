"use client";
import { useState } from "react";
import Header from "../Header/Header";
import BookingEngine from "../BokingEngine/BookingEngine";
import { breadCrumbs, hotels } from "@/utils/config";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import PrimaryContent from "../PrimaryContent/PrimaryContent";
import ResultsSection from "../ResultsSection/ResultsSection";
import SecondaryContent from "../SecondaryContent/SecondaryContent";
import Footer from "../Footer/Footer";
import FiltersSidebar from "../FilterSidebar/FilterSidebar";
import MobileSearchCard from "../MobileComponents/MobileSearchCard";
import MobileSortFilterBar from "../MobileComponents/MobileSortFilterBar";

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
  return (
    <div>
      <div className='bg-[#F2F2F2] py-[17px] px-[12px] block fixed w-full z-[9999] lg:hidden'>
        <MobileSearchCard />
        <MobileSortFilterBar
          selectedFilters={selectedFilters}
          onToggleFilter={handleFilterToggle}
          onClearFilters={handleClearFilters}
        />
      </div>

      <Header />
      <BookingEngine />

      <div className="bg-gray-50 pt-28 lg:pt-40 px-4 lg:px-0">
        <div className="pt-5 lg:max-w-[1530px] lg:mx-auto">
          <BreadCrumbs breadcrumbItems={breadCrumbs} />
          <PrimaryContent />
          <div className="flex gap-6 mt-4 lg:mt-12">
            <FiltersSidebar
              selectedFilters={selectedFilters}
              onToggleFilter={handleFilterToggle}
              onClearFilters={handleClearFilters}
            />
            <div className="w-full lg:w-[75%]">
              <ResultsSection
                hotels={hotels}
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