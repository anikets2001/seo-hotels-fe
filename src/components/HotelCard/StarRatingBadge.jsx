import { StarIcon } from "lucide-react";

const StarRatingBadge = ({ stars, max = 5, size = 14 }) => {
  if (!stars) return null;

  const safeStars = Math.max(0, Math.min(stars, max));

  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${safeStars} out of ${max} star hotel`}
      role="img"
    >
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < safeStars;
        return (
          <StarIcon
            key={index}
            size={size}
            strokeWidth={1.5}
            fill={isFilled ? "currentColor" : "none"}
            className={isFilled ? "text-amber-400" : "text-gray-300"}
          />
        );
      })}
    </span>
  );
};

export default StarRatingBadge;
