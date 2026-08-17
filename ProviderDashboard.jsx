import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Calendar, Star, Briefcase, PlusCircle, CheckCircle, XCircle } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { BookingCard } from '../../components/booking/BookingCard';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

export const ProviderDashboard = () => {
  const { user } = useAuth();
  const { bookings, services } = useApp();

  const pendingRequests = bookings.filter(b => b.status === 'Pending');

  return (
    <DashboardLayout title="Provider Dashboard">
      <div className="space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-[#7A0D1A] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#E7A51A] uppercase tracking-wider block">Service Provider Hub</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Hello, {user?.name || "Provider"}!</h2>
            <p className="text-xs text-[#FFF4F2]/80 mt-1">You have {pendingRequests.length} pending service request(s) awaiting response.</p>
          </div>
          <Link to="/provider/services/add">
            <Button variant="secondary" size="md" icon={PlusCircle}>
              Add New Service Listing
            </Button>
          </Link>
        </div>

        {/* Dashboard Cards matching Section 20 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Monthly Earnings</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">₹28,450</span>
              <span className="text-[10px] text-[#2F9B68] font-semibold">+14% vs last month</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Active Services</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">{services.length}</span>
              <span className="text-[10px] text-[#2F9B68] font-semibold">Published</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Pending Requests</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">{pendingRequests.length}</span>
              <span className="text-[10px] text-[#B87C0D] font-semibold">Action required</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Average Rating</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">4.9 ★</span>
              <span className="text-[10px] text-[#E7A51A] font-semibold">142 reviews</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Star className="w-6 h-6 text-[#E7A51A]" />
            </div>
          </div>

        </div>

        {/* Incoming Service Requests */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#21191A]">Incoming Customer Booking Requests</h3>
            <Link to="/provider/requests" className="text-xs font-bold text-[#8B1020] hover:underline">
              View All Requests
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.slice(0, 2).map((bk) => (
              <BookingCard key={bk.id} booking={bk} isProviderView={true} />
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
