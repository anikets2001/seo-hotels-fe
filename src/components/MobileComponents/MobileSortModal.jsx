"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SORT_OPTIONS } from "@/utils/config";
import useModalScrollLock from "@/hooks/useModalScrollLock";

const MobileSortModal = ({ isOpen, onClose, selectedSort = SORT_OPTIONS[0], onSortChange }) => {
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

  const handleSortSelect = (sortOption) => {
    onSortChange(sortOption);
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[11000] flex lg:hidden">
      <button
        type="button"
        className={`absolute inset-0 bg-black border-none transition-opacity duration-300 ${isVisible ? "opacity-50" : "opacity-0"}`}
        onClick={handleClose}
        aria-label="Close sort modal"
      />

      <div
        ref={modalRef}
        className={`absolute bottom-0 left-0 right-0 w-full bg-white transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-b-none rounded-tl-[12px] rounded-tr-[12px] max-h-[85dvh] flex flex-col ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#ECECEC] flex-shrink-0">
          <h2 className="text-[18px] font-[700] text-[#333333]">Sort By</h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close sort modal"
            className="p-2 text-[#666666] border-none bg-transparent"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pb-5 overflow-y-auto">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className="w-full flex items-center justify-between py-4 border-none bg-transparent text-left"
              onClick={() => handleSortSelect(option)}
            >
              <span className="text-[16px] font-[500] text-[#333333]">{option}</span>
              <span className="flex items-center justify-center">
                {selectedSort === option ? (
                  <span className="w-5 h-5 rounded-full border-2 border-[#F34F4F] flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F34F4F]" />
                  </span>
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-[#F34F4F]" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSortModal;