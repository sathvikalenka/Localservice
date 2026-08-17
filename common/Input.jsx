import React from 'react';

export const Input = ({
  label,
  error,
  icon: Icon,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-xs font-semibold text-[#21191A] flex items-center justify-between">
          <span>{label} {required && <span className="text-[#8B1020]">*</span>}</span>
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-[#8A7779] pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full py-2.5 ${Icon ? 'pl-10' : 'pl-3.5'} pr-3.5 bg-white text-[#21191A] placeholder-[#8A7779] text-sm rounded-xl border ${
            error ? 'border-[#C94B55] focus:ring-[#C94B55]' : 'border-[#8B1020]/15 focus:border-[#8B1020] focus:ring-[#8B1020]/20'
          } outline-none focus:ring-2 transition-all duration-200 shadow-sm`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-[#C94B55] font-medium">{error}</span>}
    </div>
  );
};
