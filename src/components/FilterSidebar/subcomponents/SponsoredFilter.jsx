"use client";

import { SparklesIcon } from "lucide-react";

// Stable filter id consumed by HotelsSeoPage to actually filter the list.
export const SPONSORED_FILTER_ID = "sponsored:only";
const SPONSORED_FILTER_LABEL = "Sponsored only";

const SponsoredFilter = ({ isChecked, onToggleFilter }) => {
  const checked = isChecked(SPONSORED_FILTER_ID);

  return (
    <div className="pb-4 border-b border-gray-100">
      <h3 className="font-bold text-[17px] text-gray-900 mb-3 flex items-center gap-1.5">
        <SparklesIcon className="text-amber-500" size={16} aria-hidden="true" />
        Sponsored
      </h3>
      <label className="flex items-center justify-between gap-3 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors">
        <span className="flex items-center gap-2.5 text-[16px]">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              onToggleFilter({ id: SPONSORED_FILTER_ID, label: SPONSORED_FILTER_LABEL })
            }
            className="checkbox"
          />
          <span className="checkmark"></span>
          <span>Show sponsored hotels only</span>
        </span>
      </label>
    </div>
  );
};

export default SponsoredFilter;
