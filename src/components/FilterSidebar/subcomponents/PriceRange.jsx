"use client";

import { priceRanges } from "./config";

const PriceRange = ({ isChecked, onToggleFilter }) => {
    return (
        <div className="mb-6 bg-gradient-to-b from-white to-gray-50 rounded-xl p-3.5 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-[24px] text-gray-900 mb-3">Quick Price Filters</h3>
            <div className="space-y-2.5 mb-4">
              {priceRanges.map((range) => {
                const filterId = `price:${range.label}`;
                return (
                  <label key={range.label} className="flex items-center justify-between gap-3 cursor-pointer">
                    <span className="flex items-center gap-2.5 text-[16px] text-gray-500 font-medium">
                      <input
                        type="checkbox"
                        checked={isChecked(filterId)}
                        onChange={() => onToggleFilter({ id: filterId, label: range.label })}
                        className="checkbox"
                      />
                      <span className="checkmark"></span>
                      {range.label}
                    </span>
                    <span className="text-[14px] text-gray-400">({range.count})</span>
                  </label>
                );
              })}
            </div>
  
            <h4 className="font-semibold text-[18px] text-gray-900 mb-2">Your Budget</h4>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="text"
                placeholder="Min"
                className="w-full h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:border-primary"
              />
              <span className="text-sm text-gray-500">to</span>
              <input
                type="text"
                placeholder="Max"
                className="w-full h-9 px-3 rounded-md border border-gray-300 text-sm bg-white focus:outline-none focus:border-primary"
              />
            </div>
            <button className="bg-primary w-full hover:bg-[#B80D0D] border-none text-[#F8FAFC] font-semibold text-sm px-4 py-3 rounded-md cursor-pointer transition-colors duration-200 ease-in-out">
              Apply
            </button>
          </div>
    );
};

export default PriceRange;