import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  icon: Icon, 
  disabled = false,
  onClick, 
  className = "",
  type = "button",
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B1020]/30 active:scale-[0.98]";

  const variants = {
    primary: "bg-[#8B1020] text-white hover:bg-[#6F0B18] shadow-md shadow-[#8B1020]/20 border border-transparent",
    secondary: "bg-white text-[#8B1020] border border-[#8B1020]/25 hover:bg-[#FFF4F2] hover:border-[#8B1020]",
    dark: "bg-[#7A0D1A] text-white hover:bg-[#5C0713] border border-white/10",
    outline: "bg-transparent text-[#21191A] border border-[#8B1020]/20 hover:border-[#8B1020] hover:bg-[#FFF4F2]/50",
    ghost: "bg-transparent text-[#8B1020] hover:bg-[#FFF4F2] border border-transparent"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
};
