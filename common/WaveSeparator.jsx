import React from 'react';

export const WaveSeparator = ({ fillColor = "#7A0D1A", flip = false, className = "" }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg 
        className="relative block w-full h-12 md:h-20 lg:h-24" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z" 
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
