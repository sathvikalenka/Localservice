import React from 'react';
import { Calendar, Clock, MapPin, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { Button } from '../common/Button';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

export const BookingCard = ({ booking, isProviderView = false }) => {
  const { updateBookingStatus } = useApp();

  return (
    <div className="bg-white border border-[#8B1020]/10 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#8B1020]/10">
        
        {/* Booking ID & Title */}
        <div className="flex items-center gap-3">
          <img 
            src={booking.serviceImage} 
            alt={booking.serviceTitle} 
            className="w-14 h-14 rounded-xl object-cover border border-[#8B1020]/10"
          />
          <div>
            <span className="text-[10px] font-bold text-[#8A7779] uppercase tracking-wider block">
              Booking ID: {booking.id}
            </span>
            <h4 className="text-base font-bold text-[#21191A]">{booking.serviceTitle}</h4>
            <p className="text-xs text-[#625557] mt-0.5">
              {isProviderView ? `Customer: ${booking.customerName}` : `Provider: ${booking.providerName}`}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div>
          <StatusBadge status={booking.status} />
        </div>
      </div>

      {/* Booking Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 text-xs text-[#625557]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#8B1020]" />
          <span><strong className="text-[#21191A]">Date:</strong> {booking.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#8B1020]" />
          <span><strong className="text-[#21191A]">Time:</strong> {booking.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#8B1020] text-sm">₹{booking.price}</span>
          <span className="text-[10px] bg-[#FFF4F2] px-2 py-0.5 rounded text-[#8B1020] font-semibold">{booking.paymentStatus}</span>
        </div>
      </div>

      {booking.address && (
        <div className="text-xs text-[#625557] flex items-start gap-2 bg-[#FFF9F7] p-2.5 rounded-xl mb-4 border border-[#8B1020]/05">
          <MapPin className="w-4 h-4 text-[#8B1020] shrink-0 mt-0.5" />
          <span className="line-clamp-2">{booking.address}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <Link to="/customer/messages">
          <Button variant="outline" size="sm" icon={MessageSquare}>
            Message
          </Button>
        </Link>

        {isProviderView && booking.status === 'Pending' && (
          <div className="flex items-center gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              icon={XCircle}
              onClick={() => updateBookingStatus(booking.id, 'Cancelled')}
            >
              Reject
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              icon={CheckCircle}
              onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
            >
              Accept Request
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
