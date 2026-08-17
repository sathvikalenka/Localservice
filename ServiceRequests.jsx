import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { BookingCard } from '../../components/booking/BookingCard';
import { EmptyState } from '../../components/common/EmptyState';
import { useApp } from '../../context/AppContext';

export const ServiceRequests = () => {
  const { bookings } = useApp();
  const [filter, setFilter] = useState('All');

  const filtered = bookings.filter(b => {
    if (filter === 'All') return true;
    return b.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <DashboardLayout title="Customer Service Requests">
      <div className="space-y-6">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-[#8B1020]/10 pb-4 overflow-x-auto">
          {['All', 'Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                filter === tab 
                  ? 'bg-[#8B1020] text-white shadow-xs' 
                  : 'bg-white text-[#625557] hover:bg-[#FFF4F2] border border-[#8B1020]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((bk) => (
              <BookingCard key={bk.id} booking={bk} isProviderView={true} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No service requests" 
            description={`There are currently no requests with status "${filter}".`}
          />
        )}

      </div>
    </DashboardLayout>
  );
};
