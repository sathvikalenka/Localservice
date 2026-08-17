import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  Bell, 
  User, 
  Menu, 
  X, 
  ShieldAlert, 
  Briefcase, 
  LogOut,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import { Button } from '../common/Button';

export const Navbar = () => {
  const { user, logout, switchRole } = useAuth();
  const { notifications, markNotificationRead } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getDashboardPath = () => {
    if (!user) return '/login';
    if (user.role === 'provider') return '/provider/dashboard';
    if (user.role === 'admin') return '/admin/dashboard';
    return '/customer/dashboard';
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav-scrolled py-3 shadow-sm' 
          : 'bg-[#FFF9F7]/80 backdrop-blur-md py-4 border-b border-[#8B1020]/05'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#8B1020] text-white flex items-center justify-center shadow-md shadow-[#8B1020]/20 group-hover:bg-[#6F0B18] transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#21191A] font-sans flex items-center gap-0.5">
                Work<span className="text-[#8B1020]">sy</span>
              </span>
              <span className="text-[10px] text-[#8A7779] font-medium tracking-wider uppercase -mt-1">Local Service Exchange</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-[#8B1020]' : 'text-[#21191A] hover:text-[#8B1020]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/services') ? 'text-[#8B1020]' : 'text-[#21191A] hover:text-[#8B1020]'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-[#8B1020]' : 'text-[#21191A] hover:text-[#8B1020]'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-[#8B1020]' : 'text-[#21191A] hover:text-[#8B1020]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                {/* Notifications Dropdown Trigger */}
                <div className="relative">
                  <button 
                    onClick={() => { setNotifDropdownOpen(!notifDropdownOpen); setUserDropdownOpen(false); }}
                    className="p-2.5 rounded-xl bg-white border border-[#8B1020]/15 text-[#21191A] hover:bg-[#FFF4F2] relative transition-colors"
                  >
                    <Bell className="w-4 h-4 text-[#8B1020]" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8B1020] text-white text-[10px] font-bold flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {/* Dropdown panel */}
                  {notifDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#8B1020]/15 py-2 z-50">
                      <div className="px-4 py-2 border-b border-[#8B1020]/10 flex items-center justify-between">
                        <span className="text-sm font-bold text-[#21191A]">Notifications</span>
                        <span className="text-xs text-[#8B1020] font-semibold">{unreadCount} new</span>
                      </div>
                      <div className="max-h-64 overflow-y-auto divide-y divide-[#8B1020]/05">
                        {notifications.map((n) => (
                          <div 
                            key={n.id} 
                            onClick={() => markNotificationRead(n.id)}
                            className={`p-3 text-xs cursor-pointer hover:bg-[#FFF4F2] transition-colors ${!n.read ? 'bg-[#FFF9F7]' : ''}`}
                          >
                            <p className="font-semibold text-[#21191A]">{n.title}</p>
                            <p className="text-[#625557] mt-0.5">{n.body}</p>
                            <span className="text-[10px] text-[#8A7779] mt-1 block">{n.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Profile Badge */}
                <Link 
                  to={getDashboardPath()}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#8B1020]/15 rounded-xl hover:bg-[#FFF4F2] transition-colors"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-7 h-7 rounded-full object-cover border border-[#8B1020]"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#21191A] block leading-tight">{user.name.split(' ')[0]}</span>
                    <span className="text-[9px] font-bold text-[#8B1020] uppercase tracking-wider block">{user.role}</span>
                  </div>
                </Link>

                {/* Logout Button */}
                <button 
                  onClick={logout}
                  className="p-2 text-[#8A7779] hover:text-[#8B1020] hover:bg-[#FFF4F2] rounded-xl transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button variant="secondary" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            {user ? (
              <Link to={getDashboardPath()} className="flex items-center gap-1.5 p-1.5 bg-white border border-[#8B1020]/15 rounded-xl text-xs font-bold text-[#8B1020]">
                <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover" />
                <span>Account</span>
              </Link>
            ) : (
              <Link to="/login" className="px-3 py-1.5 bg-[#8B1020] text-white rounded-xl text-xs font-bold">
                Login
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#8B1020]/15 text-[#21191A]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#8B1020]" /> : <Menu className="w-5 h-5 text-[#8B1020]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#8B1020]/10 bg-[#FFF9F7] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#21191A] hover:bg-[#FFF4F2]"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#21191A] hover:bg-[#FFF4F2]"
            >
              Services
            </Link>

            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#21191A] hover:bg-[#FFF4F2]"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#21191A] hover:bg-[#FFF4F2]"
            >
              Contact
            </Link>
          </div>


          {!user && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="secondary" fullWidth>Login</Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" fullWidth>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
