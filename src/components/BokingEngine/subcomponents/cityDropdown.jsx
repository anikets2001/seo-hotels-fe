"use client";

import { useCallback, useMemo, useState } from "react";
import { MapPinIcon, Search } from "lucide-react";
import { useClickAwayListener } from "../../../hooks/useClickAwayListener";
import { POPULAR_CITIES, RECENTLY_VIEWED } from "@/utils/config";

const CityDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);
  const dropdownRef = useClickAwayListener(closeDropdown, isDropdownOpen);

  const filteredCities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return POPULAR_CITIES;
    return POPULAR_CITIES.filter(
      (city) => city.name.toLowerCase().includes(query) || city.region.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city.name);
    setSearchQuery(city.name);
  };

  return (
    <div ref={dropdownRef} className="flex flex-col gap-[5px] min-w-[110px] relative z-[1008]">
      <label className="text-[14px] text-[#fff] font-medium leading-[100%]">Select City, Location or Hotel Name</label>
      <div
        className={`border-b pb-2 transition-colors duration-200 border-[#B55165]`}
        onClick={openDropdown}
      >
        <input
          type="text"
          placeholder={"Select City, Location or Hotel Name"}
          className={`cursor-pointer bg-transparent border-none outline-none text-[16px] font-bold leading-[100%] tracking-[0px] text-white placeholder:text-white/50 capitalize transition-colors duration-200`}
          value={selectedCity}
          readOnly
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.16)] border border-gray-200 z-[11000] w-[calc(100vw-32px)] max-w-[870px] lg:min-w-[870px] lg:w-auto">
          <div className="p-3 lg:p-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5 px-3.5 py-3 border border-gray-300 rounded-xl focus-within:border-primary transition-colors">
              <Search className="text-gray-500 text-[18px]" />
              <input
                type="text"
                placeholder="Select City, Location or Hotel Name"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full text-[17px] font-medium outline-none text-gray-800 border-none placeholder:text-gray-500"
                autoFocus
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.65fr] min-h-[360px]">
            <div className="p-3 lg:p-4 lg:border-r border-gray-100">
              <h4 className="text-[20px] lg:text-[18px] font-extrabold text-gray-800 mb-3">Popular Cities</h4>
              <div className="max-h-[260px] lg:h-[300px] overflow-y-auto pr-1 lg:pr-2 space-y-1.5">
                {filteredCities.length ? (
                  filteredCities.map((city) => (
                    <button
                      key={city.name}
                      className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => handleCitySelect(city)}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <MapPinIcon className="text-primary text-[16px] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[15px] leading-[1.15] font-bold text-gray-900">{city.name},</p>
                            <p className="text-[15px] text-gray-600 font-semibold leading-[1.2]">{city.region}</p>
                          </div>
                        </div>
                        <span className="text-[14px] text-gray-500 whitespace-nowrap">{city.hotels} Hotels</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-2.5 py-6 text-sm text-gray-500">No cities found for this search.</div>
                )}
              </div>
            </div>

            <div className="p-3 lg:p-4 border-t lg:border-t-0 border-gray-100">
              <h4 className="text-[20px] lg:text-[32px] leading-[1.2] font-extrabold text-gray-800 mb-3">Recently Viewed</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[520px]">
                {RECENTLY_VIEWED.map((item, index) => (
                  <div
                    key={`${item.dates}-${index}`}
                    className="border border-gray-300 rounded-lg px-3 py-2.5 bg-white hover:border-gray-400 transition-colors"
                  >
                    <p className="text-[14px] text-gray-700">{item.dates}, {item.details}</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <MapPinIcon className="text-primary text-[16px]" />
                      <span className="text-[15px] font-bold text-gray-800">{item.city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;