"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useClickAwayListener } from "../../../hooks/useClickAwayListener";
import MonthCalendar from "./MonthCalendar";
import {
  addDays,
  formatLabelDate,
  getDateStart,
  isDateBefore,
  isSameDate,
} from "./helpers";

const CheckInCheckOut = () => {
  const today = useMemo(() => getDateStart(new Date()), []);
  const tomorrow = useMemo(() => addDays(today, 1), [today]);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(tomorrow);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [leftMonthDate, setLeftMonthDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const wrapperRef = useClickAwayListener(() => setIsCalendarOpen(false), isCalendarOpen);
  const rightMonthDate = new Date(leftMonthDate.getFullYear(), leftMonthDate.getMonth() + 1, 1);

  const canGoPrevMonth = !isDateBefore(
    new Date(leftMonthDate.getFullYear(), leftMonthDate.getMonth(), 1),
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const handleDateSelect = (pickedDate) => {
    if (isDateBefore(pickedDate, today)) {
      return;
    }

    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(pickedDate);
      setCheckOutDate(null);
      return;
    }

    if (isDateBefore(pickedDate, checkInDate) || isSameDate(pickedDate, checkInDate)) {
      setCheckInDate(pickedDate);
      setCheckOutDate(null);
      return;
    }

    setCheckOutDate(pickedDate);
    setIsCalendarVisible(false);
    setTimeout(() => setIsCalendarOpen(false), 300);
  };

  const handleOpenCalendar = () => {
    if (isCalendarOpen) {
      setIsCalendarVisible(false);
      setTimeout(() => setIsCalendarOpen(false), 300);
      return;
    }

    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarVisible(false);
    setTimeout(() => setIsCalendarOpen(false), 300);
  };

  useEffect(() => {
    if (!isCalendarOpen) {
      setIsCalendarVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsCalendarVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [isCalendarOpen]);

  return (
    <div ref={wrapperRef} className="relative flex items-end gap-[16px] min-w-[260px]">
      <button
        type="button"
        onClick={handleOpenCalendar}
        className="cursor-pointer text-left flex flex-col justify-center gap-[5px] w-1/2 min-h-[48px]"
        aria-label={`Check-In ${checkInDate ? formatLabelDate(checkInDate) : "Select date"}`}
      >
        <span className="text-[14px] text-[#fff] font-medium leading-[100%] cursor-pointer">
          Check-In
        </span>
        <div className="border-b pb-2 lg:pb-3 transition-colors duration-200 border-[#B55165]">
          <span
            id="check-in-date-display"
            className="block bg-transparent border-none outline-none text-[16px] font-bold leading-[100%] tracking-[0px] text-white cursor-pointer w-full"
          >
            {checkInDate ? formatLabelDate(checkInDate) : "Select date"}
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={handleOpenCalendar}
        className="w-1/2 cursor-pointer text-left flex flex-col justify-center gap-[5px] min-h-[48px]"
        aria-label={`Check-Out ${checkOutDate ? formatLabelDate(checkOutDate) : "Select date"}`}
      >
        <span className="text-[14px] text-[#fff] font-medium leading-[100%] cursor-pointer">
          Check-Out
        </span>
        <div className="border-b pb-2 lg:pb-3  transition-colors duration-200 border-[#B55165]">
          <span
            id="check-out-date-display"
            className="block bg-transparent border-none outline-none text-[16px] font-bold leading-[100%] tracking-[0px] text-white cursor-pointer w-full"
          >
            {checkOutDate ? formatLabelDate(checkOutDate) : "Select date"}
          </span>
        </div>
      </button>

      {isCalendarOpen ? (
        <>
          <div className="fixed inset-0 z-[10000] lg:hidden">
            <button
              type="button"
              className={`absolute inset-0 border-none bg-black transition-opacity duration-300 ${isCalendarVisible ? "opacity-50" : "opacity-0"}`}
              onClick={handleCloseCalendar}
              aria-label="Close calendar"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 w-full bg-white rounded-t-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-300 max-h-[85dvh] flex flex-col ${isCalendarVisible ? "translate-y-0" : "translate-y-full"}`}
            >
              <div className="px-4 py-4 border-b border-[#E5E7EB]">
                <div className="flex items-center justify-between">
                  <p className="text-base leading-none font-semibold text-gray-600">
                    Select check in and check out
                  </p>
                  <button
                    type="button"
                    onClick={handleCloseCalendar}
                    className="bg-transparent border-none p-1 text-gray-600"
                    aria-label="Close calendar"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 px-4">
                <button
                  type="button"
                  onClick={() =>
                    setLeftMonthDate(
                      (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1)
                    )
                  }
                  disabled={!canGoPrevMonth}
                  className={`bg-transparent border p-2 rounded flex items-center justify-center w-full ${
                    canGoPrevMonth
                      ? "border-gray-300 text-slate-500 hover:bg-gray-50"
                      : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                  aria-label="Previous month"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={() =>
                    setLeftMonthDate(
                      (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1)
                    )
                  }
                  className="bg-transparent w-full border border-gray-300 p-2 rounded flex items-center justify-center text-slate-500 hover:bg-gray-50"
                  aria-label="Next month"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="overflow-y-auto p-4 pt-3">
                <MonthCalendar
                  monthDate={leftMonthDate}
                  today={today}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  onPickDate={handleDateSelect}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-full mt-[14px] left-0 z-[10000] bg-white rounded-xl shadow-lg border border-gray-200 w-[calc(100vw-32px)] max-w-[714px] overflow-hidden lg:-left-40 lg:w-full lg:min-w-[714px]">
            <div className="px-4 lg:px-5 py-4 border-b border-[#E5E7EB]">
              <p className="text-base leading-none font-semibold text-gray-600">
                Select check in and check out
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 px-4 lg:px-5">
              <button
                type="button"
                onClick={() =>
                  setLeftMonthDate(
                    (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1)
                  )
                }
                disabled={!canGoPrevMonth}
                className={`bg-transparent border p-2 rounded flex items-center justify-center ${
                  canGoPrevMonth
                    ? "border-gray-300 text-slate-500 hover:bg-gray-50"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex-1" />
              <button
                type="button"
                onClick={() =>
                  setLeftMonthDate(
                    (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1)
                  )
                }
                className="bg-transparent border border-gray-300 p-2 rounded flex items-center justify-center text-slate-500 hover:bg-gray-50"
                aria-label="Next month"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-4 lg:p-5 pt-3">
              <div>
                <MonthCalendar
                  monthDate={leftMonthDate}
                  today={today}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  onPickDate={handleDateSelect}
                />
              </div>
              <div className="hidden lg:block">
                <MonthCalendar
                  monthDate={rightMonthDate}
                  today={today}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  onPickDate={handleDateSelect}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CheckInCheckOut;