"use client";

import Image from "next/image";
import { useState } from "react";
import MobileSortModal from "./MobileSortModal";
import MobileFilterModal from "./MobileFilterModal";

const MobileSortFilterBar = ({
    selectedFilters = [],
    onToggleFilter = () => { },
    onClearFilters = () => { },
}) => {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Price (Low to High)");

    return (
        <>
            <div className="block bg-[#fff] rounded-[8px] p-[4px] shadow-sm mt-[10px] lg:hidden">
                <div className="flex items-center justify-between">
                    <button
                        className="flex items-center justify-center gap-[6px] flex-1 bg-transparent border-none"
                        aria-label="Sort hotels"
                        onClick={() => setIsSortModalOpen(true)}
                    >
                        <Image src={'/assets/images/sort-icon.svg'} alt='sort-icon' width={20} height={20} quality={75} />
                        <span className="text-sm font-medium text-[#333333]">Sort</span>
                    </button>

                    <div className='h-[20px] w-[1px] border border-[#00000026]'></div>

                    <button
                        className="flex items-center justify-center gap-[6px] flex-1 bg-transparent border-none"
                        aria-label="Filter hotels"
                        onClick={() => setIsFilterModalOpen(true)}
                    >
                        <Image src={'/assets/images/filter-icon.svg'} alt='filter-icon' width={20} height={20} quality={75} />
                        <span className="text-sm font-medium text-[#333333]"> Filter</span>
                    </button>
                </div>
            </div>

            <MobileSortModal
                isOpen={isSortModalOpen}
                onClose={() => setIsSortModalOpen(false)}
                selectedSort={selectedSort}
                onSortChange={setSelectedSort}
            />

            <MobileFilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                selectedFilters={selectedFilters}
                onToggleFilter={onToggleFilter}
                onClearFilters={onClearFilters}
            />
        </>
    );
};

export default MobileSortFilterBar;