"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import MobileSearchModal from "./MobileSearchModal";

const MobileSearchCard = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    return (
        <>
            <div className="rounded-[8px] py-[6px] px-[12px] bg-[#E6E6E6] shadow-sm lg:hidden">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div className="text-[16px] font-[600] text-[#333333]">
                            <span className="capitalize">Mumbai</span>
                        </div>
                        <div className="text-[12px] text-[#333333]">
                            1 Room, 2 Guests
                        </div>
                    </div>
                    <button
                        className="mobile-edit-button p-2 bg-transparent text-gray-600 rounded border-none transition-colors duration-200"
                        aria-label="Edit search criteria"
                        onClick={() => setIsSearchModalOpen(true)}
                    >
                        <Pencil size={20} />
                    </button>
                </div>
            </div>

            <MobileSearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
        </>
    );
};

export default MobileSearchCard;