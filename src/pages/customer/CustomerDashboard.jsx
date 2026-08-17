import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Heart, MessageSquare, Star, ArrowRight, Clock } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { BookingCard } from '../../components/booking/BookingCard';
import { ServiceCard } from '../../components/service/ServiceCard';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';

export const CustomerDashboard = () => {
  const { user } = useAuth();
  const { bookings, services, favorites } = useApp();

  const activeBookings = bookings.filter(b => b.status === 'Confirmed' || b.status === 'Pending' || b.status === 'In Progress');
  const favServices = services.filter(s => favorites.includes(s.id));

  return (
    <DashboardLayout title="Customer Dashboard">
      <div className="space-y-8">
        
        {/* Welcome Header Banner */}
        <div className="bg-gradient-burgundy text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#E7A51A] uppercase tracking-wider block">Customer Overview</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Welcome Back, {user?.name || "Customer"}!</h2>
            <p className="text-xs text-[#FFF4F2]/80 mt-1">You have {activeBookings.length} active service bookings scheduled.</p>
          </div>
          <Link to="/services" className="bg-white text-[#8B1020] hover:bg-[#FFF4F2] px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors">
            Book A New Service
          </Link>
        </div>

        {/* Dashboard Stat Cards matching Section 20 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Total Bookings</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">{bookings.length}</span>
              <span className="text-[10px] text-[#2F9B68] font-semibold">+2 this month</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Calendar className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Active Requests</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">{activeBookings.length}</span>
              <span className="text-[10px] text-[#B87C0D] font-semibold">Scheduled</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Saved Favorites</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">{favorites.length}</span>
              <span className="text-[10px] text-[#8A7779]">Saved providers</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <Heart className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#8B1020]/10 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Unread Messages</span>
              <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">1</span>
              <span className="text-[10px] text-[#8B1020] font-semibold">New reply</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FFF4F2] text-[#8B1020] flex items-center justify-center border border-[#8B1020]/10">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Active & Recent Bookings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#21191A]">Active & Recent Bookings</h3>
            <Link to="/customer/bookings" className="text-xs font-bold text-[#8B1020] hover:underline flex items-center gap-1">
              View All Bookings <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.slice(0, 2).map((bk) => (
              <BookingCard key={bk.id} booking={bk} />
            ))}
          </div>
        </div>

        {/* Saved Favorites Quick View */}
        {favServices.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#21191A]">Your Saved Favorites</h3>
              <Link to="/customer/favorites" className="text-xs font-bold text-[#8B1020] hover:underline">
                View Favorites ({favorites.length})
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favServices.slice(0, 3).map((srv) => (
                <ServiceCard key={srv.id} service={srv} />
              ))}
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};
