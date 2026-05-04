"use client";

import { filterGroups } from "./config";

const FilterGroups = ({ isChecked, onToggleFilter }) => {
  return (
    <>
      {filterGroups.map((group) => (
        <div key={group.title} className="pb-4 border-b border-gray-100 last:border-b-0">
          <h3 className="font-bold text-[17px] text-gray-900 mb-3">{group.title}</h3>
          <div className="space-y-2.5">
            {group.options.map((option) => {
              const filterId = `group:${group.title}:${option}`;
              return (
                <label
                  key={option}
                  className="flex items-center gap-3 text-[16px] text-gray-500 cursor-pointer hover:text-gray-900 transition-colors"
                >
                  <input
                    checked={isChecked(filterId)}
                    onChange={() => onToggleFilter({ id: filterId, label: option })}
                    className="checkbox"
                    type="checkbox"
                  />
                  <span className="checkmark"></span>
                  {option}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default FilterGroups;