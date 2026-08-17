import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Heart, 
  MessageSquare, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  PlusCircle, 
  DollarSign, 
  Users, 
  ShieldCheck, 
  AlertCircle, 
  FileText,
  Briefcase,
  MapPin,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ isMobileOpen, onCloseMobile }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const role = user?.role || 'customer';

  const customerNav = [
    { label: 'Overview', path: '/customer/dashboard', icon: LayoutDashboard },
    { label: 'My Bookings', path: '/customer/bookings', icon: Calendar },
    { label: 'Favorites', path: '/customer/favorites', icon: Heart },
    { label: 'Messages', path: '/customer/messages', icon: MessageSquare },
    { label: 'Reviews', path: '/customer/reviews', icon: Star },
    { label: 'My Profile', path: '/customer/profile', icon: User }
  ];

  const providerNav = [
    { label: 'Overview', path: '/provider/dashboard', icon: LayoutDashboard },
    { label: 'My Services', path: '/provider/services', icon: Briefcase },
    { label: 'Add Service', path: '/provider/services/add', icon: PlusCircle },
    { label: 'Service Requests', path: '/provider/requests', icon: Calendar },
    { label: 'Earnings', path: '/provider/earnings', icon: DollarSign },
    { label: 'Messages', path: '/provider/messages', icon: MessageSquare },
    { label: 'Profile', path: '/provider/profile', icon: User }
  ];

  const adminNav = [
    { label: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Users', path: '/admin/users', icon: Users },
    { label: 'Providers', path: '/admin/providers', icon: ShieldCheck },
    { label: 'Services', path: '/admin/services', icon: Briefcase },
    { label: 'Bookings', path: '/admin/bookings', icon: Calendar },
    { label: 'Complaints', path: '/admin/complaints', icon: AlertCircle },
    { label: 'Reports', path: '/admin/reports', icon: FileText }
  ];

  const navItems = role === 'provider' ? providerNav : (role === 'admin' ? adminNav : customerNav);

  return (
    <aside 
      className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#7A0D1A] text-white flex flex-col justify-between transition-transform duration-300 transform ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } border-r border-white/10 shadow-2xl lg:shadow-none`}
    >
      {/* Top Header */}
      <div>
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/15 text-white flex items-center justify-center border border-white/20">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Local<span className="text-[#E7A51A]">Into</span>
            </span>
          </Link>

          {onCloseMobile && (
            <button onClick={onCloseMobile} className="lg:hidden text-white/80 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* User Role Profile Badge */}
        <div className="p-4 mx-4 mt-4 bg-white/10 rounded-xl border border-white/15 flex items-center gap-3">
          <img 
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"} 
            alt={user?.name || "User"} 
            className="w-10 h-10 rounded-full object-cover border-2 border-[#E7A51A]"
          />
          <div className="overflow-hidden">
            <h4 className="text-sm font-bold text-white truncate">{user?.name || "Member"}</h4>
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#E7A51A] text-[#21191A] inline-block mt-0.5">
              {user?.role || "Customer"}
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onCloseMobile}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-white/15 text-white font-bold border border-white/20 shadow-sm' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#E7A51A]' : 'text-white/70'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Link 
          to="/"
          className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          ← Back to Main Site
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#FF9E9E] hover:bg-white/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};
