import React from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({ 
  title = "No results found", 
  description = "We couldn't find anything matching your criteria. Try resetting your search filters.", 
  actionText, 
  onAction,
  icon: Icon = SearchX 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white border border-[#8B1020]/10 rounded-2xl shadow-sm">
      <div className="w-16 h-16 mb-4 rounded-full bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/15">
        <Icon className="w-8 h-8" />
      </div>
      <h4 className="text-lg font-bold text-[#21191A] mb-1">{title}</h4>
      <p className="text-sm text-[#625557] max-w-md mb-6">{description}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
