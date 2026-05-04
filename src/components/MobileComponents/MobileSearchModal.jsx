"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import CityDropdown from "../BokingEngine/subcomponents/cityDropdown";
import CheckInCheckOut from "../BokingEngine/subcomponents/checkInCheckOut";
import RoomAndGuest from "../BokingEngine/subcomponents/RoomAndGuest";
import useModalScrollLock from "@/hooks/useModalScrollLock";

const MobileSearchModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { modalRef } = useModalScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 120);
      return () => clearTimeout(timer);
    }

    setIsVisible(false);
    return undefined;
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 380);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[10050] lg:hidden">
      <button
        type="button"
        className={`absolute inset-0 border-none p-0 bg-black transition-opacity duration-500 ${isVisible ? "opacity-45" : "opacity-0"}`}
        onClick={handleClose}
        aria-label="Close modify search modal"
      />

      <div
        ref={modalRef}
        className={`absolute left-0 right-0 bg-[linear-gradient(135deg,_#AA253D,_#6A2648)] rounded-b-[12px] px-4 pt-5 pb-6 shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-[top] duration-500 ${isVisible ? "top-0" : "-top-full"}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-white leading-none">Modify Search</h2>
          <button
            type="button"
            className="border-none bg-transparent text-white p-1"
            onClick={handleClose}
            aria-label="Close search modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-5">
          <CityDropdown />
          <CheckInCheckOut />
          <RoomAndGuest />
        </div>

        <button
          type="button"
          className="w-full mt-5 rounded-[8px] border-none bg-[#F34F4F] text-white text-[15px] font-semibold py-3"
          aria-label="Apply modified search"
          onClick={handleClose}
        >
          Modify Search
        </button>
      </div>
    </div>
  );
};

export default MobileSearchModal;
