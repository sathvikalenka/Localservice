import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu, Bell, User, MapPin } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export const DashboardLayout = ({ children, title = "Dashboard" }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, switchRole } = useAuth();

  return (
    <div className="min-h-screen flex bg-[#FFF9F7]">
      
      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={mobileSidebarOpen} 
        onCloseMobile={() => setMobileSidebarOpen(false)} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Dashboard Header */}
        <header className="bg-white border-b border-[#8B1020]/10 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#21191A] hover:bg-[#FFF4F2] border border-[#8B1020]/15"
            >
              <Menu className="w-5 h-5 text-[#8B1020]" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-[#21191A] tracking-tight">{title}</h1>
          </div>

          <div className="flex items-center gap-3">
            

            <Link to="/" className="p-2 text-xs font-bold text-[#8B1020] bg-[#FFF4F2] hover:bg-[#FCEDEA] border border-[#8B1020]/15 rounded-xl">
              Main Site
            </Link>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Overlay backdrop for mobile sidebar */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-[#21191A]/50 z-40 lg:hidden backdrop-blur-xs"
        />
      )}
    </div>
  );
};
