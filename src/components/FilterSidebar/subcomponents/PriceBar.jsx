"use client";

import { useState } from "react";

const MIN_PRICE = 1000;
const MAX_PRICE = 50000;
const STEP = 100;
const INITIAL_MIN = 6496;
const INITIAL_MAX = 19844;

const formatInr = (value) => `₹${value.toLocaleString("en-IN")}`;

const PriceBar = () => {
  const [minValue, setMinValue] = useState(INITIAL_MIN);
  const [maxValue, setMaxValue] = useState(INITIAL_MAX);

  const minPercent = ((minValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((maxValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - STEP);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + STEP);
    setMaxValue(value);
  };

  return (
    <div className="mb-4 p-3.5 bg-white rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-[18px] text-gray-900 mb-4">Price</h3>

      <div className="relative h-6 mb-2">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={minValue}
          onChange={handleMinChange}
          aria-label="Minimum price"
          className="price-range-thumb absolute top-1/2 -translate-y-1/2 left-0 w-full"
        />
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={maxValue}
          onChange={handleMaxChange}
          aria-label="Maximum price"
          className="price-range-thumb absolute top-1/2 -translate-y-1/2 left-0 w-full"
        />
      </div>

      <div className="flex justify-between text-sm font-semibold text-gray-700 mt-2">
        <span>{formatInr(minValue)}</span>
        <span>{formatInr(maxValue)}</span>
      </div>
    </div>
  );
};

export default PriceBar;
