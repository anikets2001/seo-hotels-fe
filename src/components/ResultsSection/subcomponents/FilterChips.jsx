"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const FilterChips = ({ filterChips, onRemoveFilter }) => {
    const chipsContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = () => {
        if (!chipsContainerRef.current) {
            setCanScrollLeft(false);
            setCanScrollRight(false);
            return;
        }
        const container = chipsContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft < maxScrollLeft - 1);
    };

    useEffect(() => {
        updateScrollState();
    }, [filterChips]);

    useEffect(() => {
        window.addEventListener("resize", updateScrollState);
        return () => window.removeEventListener("resize", updateScrollState);
    }, []);

    const handleScrollLeft = () => {
        if (!chipsContainerRef.current) return;
        chipsContainerRef.current.scrollBy({ left: -220, behavior: "smooth" });
    };

    const handleScrollRight = () => {
        if (!chipsContainerRef.current) return;
        chipsContainerRef.current.scrollBy({ left: 220, behavior: "smooth" });
    };

    return (
        <>
            {filterChips.length ? (
                <div className="mb-4 lg:mb-2 flex items-center gap-2">
                    {canScrollLeft ? (
                        <button
                            onClick={handleScrollLeft}
                            className="h-8 w-8 shrink-0 rounded-full bg-white shadow-md flex items-center justify-center"
                            aria-label="Scroll filter chips left"
                        >
                            <ChevronLeft size={16} />
                        </button>
                    ) : null}

                    <div
                        ref={chipsContainerRef}
                        className="flex-1 min-w-0 flex gap-1.5 overflow-x-auto scrollbar-hide"
                        onScroll={updateScrollState}
                    >
                        {filterChips.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => onRemoveFilter?.(filter.id)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-primary/20 bg-primary/8 text-primary text-xs font-semibold leading-none hover:bg-primary/12 transition-colors whitespace-nowrap shrink-0"
                            >
                                {filter.label}
                                <X className="text-[8px]" />
                            </button>
                        ))}
                    </div>

                    {canScrollRight ? (
                        <button
                            onClick={handleScrollRight}
                            className="h-8 w-8 shrink-0 rounded-full bg-white shadow-md flex items-center justify-center"
                            aria-label="Scroll filter chips right"
                        >
                            <ChevronRight size={16} />
                        </button>
                    ) : null}
                </div>
            ) : null}
        </>
    );
};

export default FilterChips;