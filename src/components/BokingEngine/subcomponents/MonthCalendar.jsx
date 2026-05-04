"use client";

import { useMemo } from "react";
import { buildMonthMatrix, isDateBefore, isSameDate } from "./helpers";
import { DAYS } from "@/utils/config";

const MonthCalendar = ({
  monthDate,
  today,
  checkInDate,
  checkOutDate,
  onPickDate,
}) => {
  const cells = useMemo(() => buildMonthMatrix(monthDate), [monthDate]);

  return (
    <div className="w-full lg:w-[340px]">
      <h3 className="text-center text-base font-semibold text-gray-800 mb-4">
        {monthDate.toLocaleDateString("en-GB", {
          month: "long",
          year: "numeric",
        })}
      </h3>
      <div className="grid grid-cols-7 gap-0.5 mb-2">
        {DAYS.map((day) => (
          <span
            key={day}
            className={`text-center text-sm font-medium py-1 ${
              day === "Su" || day === "Sa" ? "text-primary" : "text-[#6E6E6E]"
            }`}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 min-h-[248px] lg:min-h-[292px]">
        {cells.map((dayDate, index) => {
          if (!dayDate) {
            return (
              <span
                key={`empty-${index}`}
                className="h-10 w-full rounded-md"
              />
            );
          }

          const isDisabled = isDateBefore(dayDate, today);
          const isStart = isSameDate(dayDate, checkInDate);
          const isEnd = isSameDate(dayDate, checkOutDate);
          const isInSelectedRange =
            checkInDate &&
            checkOutDate &&
            !isDisabled &&
            dayDate > checkInDate &&
            dayDate < checkOutDate;

          return (
            <button
              key={`${dayDate.toISOString()}-${index}`}
              type="button"
              disabled={isDisabled}
              onClick={() => onPickDate(dayDate)}
              className={`h-10 w-full rounded-md text-base font-medium transition-colors ${
                isDisabled
                  ? "text-[#BDBDBD] cursor-not-allowed"
                  : isStart || isEnd
                  ? "bg-primary text-white"
                  : isInSelectedRange
                  ? "bg-red-50 text-gray-900"
                  : "text-[#111827] hover:bg-[#FDECEC]"
              }`}
            >
              {dayDate.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MonthCalendar;
