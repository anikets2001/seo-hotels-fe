"use client";

import { useState } from "react";
import { HeartIcon } from "lucide-react";

const WishlistButton = ({
  hotelName = "this hotel",
  defaultActive = false,
  className = "",
  onChange,
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  // Stop propagation so the card-wide Link on grid cards doesn't navigate when
  // a guest taps the heart. preventDefault keeps the wrapping anchor inert too.
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsActive((current) => {
      const next = !current;
      onChange?.(next);
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label={isActive ? `Remove ${hotelName} from wishlist` : `Add ${hotelName} to wishlist`}
      className={`relative z-[2] w-9 h-9 rounded-full bg-white/95 backdrop-blur border border-gray-200 shadow-sm flex items-center justify-center transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${className}`}
    >
      <HeartIcon
        size={18}
        className={`transition-colors ${isActive ? "text-primary" : "text-gray-500"}`}
        fill={isActive ? "currentColor" : "none"}
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
};

export default WishlistButton;
