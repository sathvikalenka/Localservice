import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 5, reviewsCount, showCount = true, size = "sm", darkTheme = false }) => {
  const starSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const currentSize = starSizes[size] || starSizes.sm;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-[#E7A51A]">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${currentSize} ${
              star <= Math.floor(rating)
                ? 'fill-[#E7A51A] text-[#E7A51A]'
                : star - 0.5 <= rating
                ? 'fill-[#E7A51A]/50 text-[#E7A51A]'
                : 'text-white/20'
            }`}
          />
        ))}
      </div>
      <span className={`font-bold text-xs sm:text-sm ${darkTheme ? 'text-white' : 'text-[#21191A]'}`}>
        {rating?.toFixed(1)}
      </span>
      {showCount && reviewsCount !== undefined && (
        <span className={`text-xs ${darkTheme ? 'text-[#FFF4F2]/70' : 'text-[#8A7779]'}`}>
          ({reviewsCount})
        </span>
      )}
    </div>
  );
};
