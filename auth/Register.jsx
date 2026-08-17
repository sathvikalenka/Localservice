import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Lock, User, Phone, UserCheck, Briefcase, CheckCircle2 } from 'lucide-react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { CityLineArt } from '../../components/common/CityLineArt';
import { useAuth } from '../../context/AuthContext';

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState('customer'); // 'customer' | 'provider'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = register({ fullName, email, phone, city, role });
    if (newUser.role === 'provider') {
      navigate('/provider/dashboard');
    } else {
      navigate('/customer/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex text-[#21191A] bg-[#FFF9F7]">
      
      {/* LEFT PANEL (#7A0D1A background + subtle city line-art) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#7A0D1A] text-white flex-col justify-between p-12 relative overflow-hidden">
        
        <CityLineArt opacity={0.12} className="text-[#A91D2D]" />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 text-white flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Work<span className="text-[#E7A51A]">sy</span>
            </span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            Join Worksy Service Marketplace
          </h2>
          <p className="text-sm text-[#FFF4F2]/80 leading-relaxed">
            Create an account to book trusted local services or offer your professional skills to local customers.
          </p>

          <div className="space-y-3 pt-2 text-xs text-[#FFF4F2]/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E7A51A]" />
              <span>Fast 1-minute registration process</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E7A51A]" />
              <span>Verified customer ratings & trust portfolio</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-xs text-[#FFF4F2]/60">
          © {new Date().getFullYear()} Worksy Platform.
        </div>
      </div>

      {/* RIGHT PANEL (Warm ivory background + elevated form card) */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 bg-[#FFF9F7]">
        <div className="max-w-md w-full mx-auto space-y-6">
          
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#21191A] tracking-tight">Create Account</h2>
            <p className="text-xs text-[#625557] mt-1">Select your account type to get started.</p>
          </div>

          {/* VISUAL ROLE CARDS matching Section 18 */}
          <div className="grid grid-cols-2 gap-3">
            <div 
              onClick={() => setRole('customer')}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                role === 'customer' 
                  ? 'border-[#8B1020] bg-[#FFF4F2] shadow-sm' 
                  : 'border-[#8B1020]/15 bg-white hover:border-[#8B1020]/40'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                role === 'customer' ? 'bg-[#8B1020] text-white' : 'bg-[#FFF4F2] text-[#8B1020]'
              }`}>
                <UserCheck className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-[#21191A]">I Need A Service</h4>
              <p className="text-[10px] text-[#625557] mt-0.5">Book local plumbers, cleaners & handymen</p>
            </div>

            <div 
              onClick={() => setRole('provider')}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                role === 'provider' 
                  ? 'border-[#8B1020] bg-[#FFF4F2] shadow-sm' 
                  : 'border-[#8B1020]/15 bg-white hover:border-[#8B1020]/40'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                role === 'provider' ? 'bg-[#8B1020] text-white' : 'bg-[#FFF4F2] text-[#8B1020]'
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs text-[#21191A]">I Provide Services</h4>
              <p className="text-[10px] text-[#625557] mt-0.5">Offer skills & get local service requests</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#8B1020]/15 shadow-xl space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                icon={User}
                placeholder="e.g. Vikram Malhotra"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <Input
                label="Email Address"
                type="email"
                icon={Mail}
                placeholder="e.g. vikram@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Phone Number"
                  icon={Phone}
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <div>
                  <label className="text-xs font-semibold text-[#21191A] block mb-1.5">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full py-2.5 px-3 bg-white text-xs text-[#21191A] rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020]"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
              </div>

              <Input
                label="Password"
                type="password"
                icon={Lock}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button type="submit" variant="primary" fullWidth size="lg">
                Register as {role === 'provider' ? 'Service Provider' : 'Customer'}
              </Button>
            </form>

            <div className="text-center pt-2 border-t border-[#8B1020]/10 text-xs text-[#625557]">
              Already registered?{' '}
              <Link to="/login" className="text-[#8B1020] font-bold hover:underline">
                Login Here
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
