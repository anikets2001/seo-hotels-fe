"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useClickAwayListener } from "../../../hooks/useClickAwayListener";

const RoomAndGuest = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [appliedSelection, setAppliedSelection] = useState({
    rooms: 1,
    adults: 2,
    children: 0,
    pets: false,
  });
  const [draftSelection, setDraftSelection] = useState(appliedSelection);

  const dropdownRef = useClickAwayListener(() => {
    setIsDropdownOpen(false);
    setDraftSelection(appliedSelection);
  }, isDropdownOpen);

  const totalGuests = appliedSelection.adults + appliedSelection.children;

  const summaryText = useMemo(
    () =>
      `${appliedSelection.rooms} Room${appliedSelection.rooms > 1 ? "s" : ""}, ${totalGuests} Guest${
        totalGuests > 1 ? "s" : ""
      }`,
    [appliedSelection.rooms, totalGuests]
  );

  const updateCount = (key, change, min, max) => {
    setDraftSelection((current) => {
      const nextValue = Math.min(max, Math.max(min, current[key] + change));

      if (key === "rooms") {
        const minAdultsForRooms = nextValue;
        const nextAdults = Math.max(current.adults, minAdultsForRooms);
        return {
          ...current,
          rooms: nextValue,
          adults: nextAdults,
        };
      }

      return {
        ...current,
        [key]: nextValue,
      };
    });
  };

  const handleToggleDropdown = () => {
    if (!isDropdownOpen) {
      setDraftSelection(appliedSelection);
      setIsDropdownOpen(true);
      return;
    }

    setIsDropdownOpen(false);
    setDraftSelection(appliedSelection);
  };

  const handleApply = () => {
    setAppliedSelection(draftSelection);
    setIsDropdownOpen(false);
  };

  return (
    <div ref={dropdownRef} className="flex flex-col gap-[5px] min-w-[220px] relative z-[1005]">
      <label className="text-[14px] text-[#fff] font-medium leading-[100%]">
        Rooms & Guests
      </label>
      <div
        className="cursor-pointer flex items-center justify-between border-b pb-3 transition-colors duration-200 border-[#B55165] cursor-pointer"
        onClick={handleToggleDropdown}
      >
        <p className="bg-transparent border-none outline-none text-[16px] font-bold leading-[100%] tracking-[0px] text-white cursor-pointer w-full">
          {summaryText}
        </p>
      </div>

      {isDropdownOpen ? (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-[8px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] z-[1006] p-3 lg:p-5 w-[calc(100vw-32px)] max-w-[420px] lg:left-[-70px] lg:min-w-[420px] lg:w-auto">
          <h4 className="mb-4 text-base text-[#333] font-semibold">Rooms & Guests</h4>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-[8px] border border-[#E5E7EB] p-3">
              <div>
                <p className="text-sm text-[#222] font-semibold">Rooms</p>
                <p className="text-xs text-[#6B7280]">Max 6 rooms per booking</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("rooms", -1, 1, 6)}
                  disabled={draftSelection.rooms <= 1}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-primary text-center text-sm font-semibold">{draftSelection.rooms}</span>
                <button
                  type="button"
                  onClick={() => updateCount("rooms", 1, 1, 6)}
                  disabled={draftSelection.rooms >= 6}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-[8px] border border-[#E5E7EB] p-3">
              <div>
                <p className="text-sm text-[#222] font-semibold">Adults</p>
                <p className="text-xs text-[#6B7280]">Age 13+ years</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("adults", -1, draftSelection.rooms, 12)}
                  disabled={draftSelection.adults <= draftSelection.rooms}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-primary text-center text-sm font-semibold">{draftSelection.adults}</span>
                <button
                  type="button"
                  onClick={() => updateCount("adults", 1, draftSelection.rooms, 12)}
                  disabled={draftSelection.adults >= 12}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-[8px] border border-[#E5E7EB] p-3">
              <div>
                <p className="text-sm text-[#222] font-semibold">Children</p>
                <p className="text-xs text-[#6B7280]">Age 0-12 years</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => updateCount("children", -1, 0, 8)}
                  disabled={draftSelection.children <= 0}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-primary text-center text-sm font-semibold">{draftSelection.children}</span>
                <button
                  type="button"
                  onClick={() => updateCount("children", 1, 0, 8)}
                  disabled={draftSelection.children >= 8}
                  className="h-8 w-8 rounded-md border border-[#D1D5DB] flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:text-gray-300 disabled:opacity-100 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-[8px] border border-[#E5E7EB] p-3">
              <div>
                <p className="text-sm text-[#222] font-semibold">Travelling with pets</p>
                <p className="text-xs text-[#6B7280]">Let us show pet-friendly stays</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setDraftSelection((current) => ({ ...current, pets: !current.pets }))
                }
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  draftSelection.pets ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label="Toggle travelling with pets"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    draftSelection.pets ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={handleApply}
              className="bg-[#F34F4F] text-white border-none px-6 py-2.5 rounded-[5px] cursor-pointer text-sm font-medium w-full sm:w-auto"
            >
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RoomAndGuest;
