import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';
import { CityLineArt } from '../common/CityLineArt';

export const Footer = () => {
  return (
    <footer className="relative bg-[#5C0713] text-[#FFF4F2] pt-16 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Subtle Background City Skyline */}
      <CityLineArt opacity={0.12} className="text-[#A91D2D]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#8B1020] border border-white/20 text-white flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Work<span className="text-[#A91D2D]">sy</span>
              </span>
            </Link>
            <p className="text-sm text-[#FFF4F2]/80 leading-relaxed max-w-sm">
              Discover trusted local professionals, book doorstep services, compare verified service providers, and exchange services with ease.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#FFF4F2]/70">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#E7A51A]" /> +91 (800) 456-7890</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#E7A51A]" /> support@worksy.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-[#FFF4F2]/80">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">For Providers</h4>
            <ul className="space-y-2 text-sm text-[#FFF4F2]/80">
              <li><Link to="/register" className="hover:text-white transition-colors">Become a Provider</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Provider Login</Link></li>
              <li><Link to="/provider/dashboard" className="hover:text-white transition-colors">Provider Dashboard</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Verification System</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support & Help</h4>
            <ul className="space-y-2 text-sm text-[#FFF4F2]/80">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF4F2]/60">
          <p>© {new Date().getFullYear()} Worksy. All rights reserved. Built with Burgundy & Ivory Design System.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors">Privacy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Security</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
