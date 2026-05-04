"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import PriceRange from "../FilterSidebar/subcomponents/PriceRange";
import FilterGroups from "../FilterSidebar/subcomponents/FilterGroups";
import StarRatingsFilter from "../FilterSidebar/subcomponents/StarRatingsFilter";
import AmenitiesFilter from "../FilterSidebar/subcomponents/AmenitiesFilter";
import useModalScrollLock from "@/hooks/useModalScrollLock";

const MobileFilterModal = ({
  isOpen,
  onClose,
  selectedFilters = [],
  onToggleFilter,
  onClearFilters,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { modalRef } = useModalScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }

    setIsVisible(false);
    return undefined;
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleResetAll = () => {
    onClearFilters();
    handleClose();
  };

  const isChecked = (id) => selectedFilters.some((filter) => filter.id === id);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[11000] flex lg:hidden">
      <button
        type="button"
        className={`absolute inset-0 bg-black border-none transition-opacity duration-300 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-label="Close filter modal"
      />

      <div
        ref={modalRef}
        className={`absolute bottom-0 left-0 right-0 w-full bg-white transition-transform duration-300 rounded-tl-[12px] rounded-tr-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-h-[88dvh] flex flex-col ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#ECECEC] flex-shrink-0">
          <h2 className="text-[18px] font-[700] text-[#333333]">Filters</h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-[#666666] border-none bg-transparent"
            aria-label="Close filter modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <PriceRange isChecked={isChecked} onToggleFilter={onToggleFilter} />
          <div className="pb-4 border-b border-gray-100">
            <FilterGroups isChecked={isChecked} onToggleFilter={onToggleFilter} />
          </div>
          <StarRatingsFilter isChecked={isChecked} onToggleFilter={onToggleFilter} />
          <AmenitiesFilter isChecked={isChecked} onToggleFilter={onToggleFilter} />
        </div>

        <div className="p-4 flex gap-3 border-t border-[#ECECEC] flex-shrink-0">
          <button
            type="button"
            onClick={handleResetAll}
            className="flex-1 p-3.5 border border-[#F34F4F] text-[#F34F4F] bg-white rounded-[8px] font-medium"
            aria-label="Reset all filters"
          >
            Reset All
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 p-3.5 bg-[#F34F4F] text-white rounded-[8px] font-medium border-none"
            aria-label="Apply filters"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterModal;
