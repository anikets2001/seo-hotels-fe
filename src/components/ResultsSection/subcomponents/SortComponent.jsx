import React from 'react';
import Image from 'next/image';
import { sortConfig } from './config';

const SortComponent = ({ activeSort, sortDirection, onSortChange }) => {
  const handleSortClick = (sortType) => {
    if (activeSort === sortType) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      onSortChange(sortType, newDirection);
    } else {
      onSortChange(sortType, 'asc');
    }
  };

  const handleArrowClick = (e, sortType) => {
    e.stopPropagation(); 
    if (activeSort === sortType) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      onSortChange(sortType, newDirection);
    }
  };

  return (
    <section className="hidden lg:block bg-gray-100 px-[24px] pt-[10px] rounded-[8px]">
      <section className="flex justify-between items-center">
        <span className="text-[#666666] text-xs font-medium mb-[8px] lg:text-base">Sort By :</span>
        
        {sortConfig.map((sort) => (
          <div
            key={sort.key}
            className={`sortColumn ${activeSort === sort.key ? "active" : ''}`}
            onClick={() => handleSortClick(sort.key)}
          >
            <div className={"contentWrapper"}>
              <span className="text-xs lg:text-base">{sort.label}</span>
              {activeSort === sort.key && (
                <Image
                  src={'/assets/images/arrow-down.svg'}
                  alt='arrow-down-icon'
                  height={16}
                  width={16}
                  className={`sortArrow ${sortDirection === 'desc' ? "rotated" : ''}`}
                  onClick={(e) => handleArrowClick(e, sort.key)}
                  priority={true}
                  quality={75}
                />
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default SortComponent; 