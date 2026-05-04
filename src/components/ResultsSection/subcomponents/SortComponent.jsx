"use client";

import { SORT_OPTIONS } from "@/utils/config";
import { useState } from "react";

const SortComponent = () => {
    const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
    return (
        <div className="hidden lg:flex flex-col p-4 rounded-xl gap-4 mb-5 border border-gray-200 mt-6">
            <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-semibold text-gray-600">SORT BY:</span>
                <div className="flex flex-wrap gap-10">
                    {SORT_OPTIONS.map((option) => (
                        <button key={option} className={`cursor-pointer text-sm pb-1 ${ option === selectedSort
                                    ? "text-primary font-bold border-b-2 border-primary"
                                    : "text-gray-600 hover:text-primary"
                                }`}
                            onClick={() => setSelectedSort(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SortComponent;