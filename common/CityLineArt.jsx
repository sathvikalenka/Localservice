import React from 'react';

export const CityLineArt = ({ className = "", opacity = 0.08 }) => {
  return (
    <div 
      className={`pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-auto stroke-[#8B1020]"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Buildings & Houses Line Art */}
        <path d="M0 220 H1440" strokeWidth="2" />
        
        {/* Left Town Houses */}
        <path d="M40 220 V160 L70 130 L100 160 V220" />
        <rect x="55" y="175" width="12" height="18" />
        <rect x="73" y="175" width="12" height="18" />
        
        <path d="M110 220 V120 H160 V220" />
        <rect x="122" y="135" width="12" height="15" />
        <rect x="140" y="135" width="12" height="15" />
        <rect x="122" y="165" width="12" height="15" />
        <rect x="140" y="165" width="12" height="15" />
        
        {/* Clock Tower / Landmark */}
        <path d="M190 220 V80 L210 50 L230 80 V220" />
        <circle cx="210" cy="100" r="8" />
        <rect x="202" y="130" width="16" height="25" />

        {/* Center City Skyline */}
        <path d="M300 220 V110 H360 V220" />
        <path d="M370 220 V70 H430 V220" />
        <line x1="385" y1="90" x2="415" y2="90" />
        <line x1="385" y1="120" x2="415" y2="120" />
        <line x1="385" y1="150" x2="415" y2="150" />
        
        {/* Small Suburban Cottages */}
        <path d="M480 220 V170 L515 140 L550 170 V220" />
        <circle cx="515" cy="155" r="5" />
        <rect x="505" y="185" width="20" height="35" />

        {/* Centerpiece Dome / Store Front */}
        <path d="M600 220 V130 Q650 90 700 130 V220" />
        <path d="M620 220 V160 H680 V220" />
        <path d="M640 160 V220" />

        {/* Right Skyline & Service Shops */}
        <path d="M760 220 V100 H810 L830 80 H880 V220" />
        <rect x="780" y="120" width="15" height="20" />
        <rect x="840" y="100" width="20" height="25" />
        
        <path d="M920 220 V140 L960 110 L1000 140 V220" />
        <rect x="945" y="165" width="30" height="55" />

        {/* Far Right High Rise */}
        <path d="M1060 220 V60 H1120 V220" />
        <line x1="1075" y1="85" x2="1105" y2="85" />
        <line x1="1075" y1="115" x2="1105" y2="115" />
        <line x1="1075" y1="145" x2="1105" y2="145" />

        <path d="M1160 220 V130 L1200 95 L1240 130 V220" />
        <path d="M1280 220 V150 H1340 V220" />
        <path d="M1360 220 V110 L1400 80 L1440 110 V220" />

        {/* Faint Abstract Waves */}
        <path d="M0 190 Q360 160 720 195 T1440 190" strokeDasharray="4 4" strokeWidth="0.8" />
      </svg>
    </div>
  );
};
