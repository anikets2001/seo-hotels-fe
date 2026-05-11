"use client";

import { hotelChains } from "./config";

const HotelChainFilter = ({ isChecked, onToggleFilter }) => {
  return (
    <>
      <h3 className="font-bold text-[17px] text-gray-900 mb-3">Hotel Chain</h3>
      <div className="space-y-2">
        {hotelChains.map((chain) => {
          const filterId = `chain:${chain.name}`;
          return (
            <label
              key={chain.name}
              className="flex items-center justify-between gap-3 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
            >
              <span className="flex items-center gap-2.5 text-[16px]">
                <input
                  type="checkbox"
                  checked={isChecked(filterId)}
                  onChange={() => onToggleFilter({ id: filterId, label: chain.name })}
                  className="checkbox"
                />
                <span className="checkmark"></span>
                <span>{chain.name}</span>
              </span>
              <span className="text-[14px] text-gray-400">({chain.count})</span>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default HotelChainFilter;
