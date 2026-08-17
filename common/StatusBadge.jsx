import React from 'react';

export const StatusBadge = ({ status, className = "" }) => {
  const normalized = status?.toLowerCase() || 'pending';

  const badgeStyles = {
    pending: "bg-[#FFF4F2] text-[#B87C0D] border-[#E7A51A]/30",
    confirmed: "bg-[#E6F4ED] text-[#2F9B68] border-[#2F9B68]/30",
    accepted: "bg-[#E6F4ED] text-[#2F9B68] border-[#2F9B68]/30",
    "in progress": "bg-[#FCEDEA] text-[#8B1020] border-[#8B1020]/25",
    completed: "bg-[#E6F4ED] text-[#2F9B68] border-[#2F9B68]/30",
    cancelled: "bg-[#FCEDEA] text-[#C94B55] border-[#C94B55]/30",
    rejected: "bg-[#FCEDEA] text-[#C94B55] border-[#C94B55]/30"
  };

  const style = badgeStyles[normalized] || badgeStyles.pending;

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${style} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
      {status}
    </span>
  );
};
