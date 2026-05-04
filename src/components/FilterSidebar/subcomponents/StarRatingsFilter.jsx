"use client";

import { starRatings } from "./config";

const StarRatingsFilter = ({ isChecked, onToggleFilter }) => {
    return (
        <div className="pb-4 border-b border-gray-100">
            <h3 className="font-bold text-[17px] text-gray-900 mb-3">Star Rating</h3>
            <div className="space-y-2">
                {starRatings.map((stars) => {
                    const filterId = `star:${stars}`;
                    return (
                        <label key={stars} className="flex items-center gap-2.5 text-[16px] cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isChecked(filterId)}
                                onChange={() => onToggleFilter({ id: filterId, label: `${stars} Star` })}
                                className="checkbox"
                            />
                            <span className="checkmark"></span>
                            <span className="tracking-[1px] text-primary text-[16px] leading-none">{"★".repeat(stars)}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default StarRatingsFilter;