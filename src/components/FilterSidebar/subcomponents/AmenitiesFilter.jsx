"use client";

import { amenityOptions } from "./config";

const AmenitiesFilter = ({ isChecked, onToggleFilter }) => {
    return (
        <>
            <h3 className="font-bold text-[17px] text-gray-900 mb-3">Amenities</h3>
            <div className="space-y-2">
                {amenityOptions.map((amenity) => {
                    const filterId = `amenity:${amenity}`;
                    return (
                        <label
                            key={amenity}
                            className="flex items-center gap-2.5 text-[16px] cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <input
                                type="checkbox"
                                checked={isChecked(filterId)}
                                onChange={() => onToggleFilter({ id: filterId, label: amenity })}
                                className="checkbox"
                            />
                            <span className="checkmark"></span>
                            <span>{amenity}</span>
                        </label>
                    );
                })}
            </div>
        </>
    );
};

export default AmenitiesFilter;