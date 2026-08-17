import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, LogIn, Sparkles, CheckCircle2 } from 'lucide-react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { CityLineArt } from '../../components/common/CityLineArt';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('vikram.m@example.com');
  const [password, setPassword] = useState('password123');
  const [role, setRole] = useState('customer');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = login(email, password, role);
    if (loggedUser.role === 'provider') {
      navigate('/provider/dashboard');
    } else if (loggedUser.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/customer/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex text-[#21191A] bg-[#FFF9F7]">
      
      {/* LEFT PANEL matching Section 18 (#7A0D1A background + subtle city line-art) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#7A0D1A] text-white flex-col justify-between p-12 relative overflow-hidden">
        
        <CityLineArt opacity={0.12} className="text-[#A91D2D]" />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Local<span className="text-[#E7A51A]">Into</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E7A51A] border border-white/15">
            <Sparkles className="w-3.5 h-3.5" /> Welcome Back!
          </div>
          <h2 className="text-4xl font-extrabold leading-tight">
            Connect With Trusted Local Service Specialists
          </h2>
          <p className="text-sm text-[#FFF4F2]/80 leading-relaxed">
            Access your bookings, active service requests, live chat with professionals, and saved favorites seamlessly.
          </p>

          <div className="space-y-3 pt-2 text-xs text-[#FFF4F2]/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E7A51A]" />
              <span>Instant booking confirmation & status updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E7A51A]" />
              <span>Direct end-to-end messaging with providers</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-[#FFF4F2]/60">
          © {new Date().getFullYear()} Worksy Platform. Premium Burgundy Visual System.
        </div>
      </div>

      {/* RIGHT PANEL (Warm ivory background + elevated white card) */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 bg-[#FFF9F7]">
        <div className="max-w-md w-full mx-auto space-y-6">
          
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#21191A] tracking-tight">Login to Worksy</h2>
            <p className="text-xs text-[#625557] mt-1">Enter your credentials to manage your bookings and profile.</p>
          </div>

          {/* Elevated White Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#8B1020]/15 shadow-xl space-y-5">
            
            {/* Select Role for Login */}
            <div>
              <label className="text-xs font-bold text-[#21191A] block mb-1.5">Select Your Role</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('customer')}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${
                    role === 'customer' ? 'bg-[#8B1020] text-white border-[#8B1020]' : 'bg-[#FFF4F2] text-[#625557] border-[#8B1020]/15'
                  }`}
                >
                  Customer
                </button>
                <button
                  type="button"
                  onClick={() => setRole('provider')}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${
                    role === 'provider' ? 'bg-[#8B1020] text-white border-[#8B1020]' : 'bg-[#FFF4F2] text-[#625557] border-[#8B1020]/15'
                  }`}
                >
                  Provider
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors ${
                    role === 'admin' ? 'bg-[#8B1020] text-white border-[#8B1020]' : 'bg-[#FFF4F2] text-[#625557] border-[#8B1020]/15'
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                icon={Mail}
                placeholder="e.g. vikram@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                type="password"
                icon={Lock}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-[#625557] cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#8B1020]" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-[#8B1020] font-semibold hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" variant="primary" fullWidth size="lg" icon={LogIn}>
                Login as {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
            </form>

            <div className="text-center pt-2 border-t border-[#8B1020]/10 text-xs text-[#625557]">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-[#8B1020] font-bold hover:underline">
                Sign Up Now
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
