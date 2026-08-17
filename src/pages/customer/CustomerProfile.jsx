import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save, CheckCircle2 } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

export const CustomerProfile = () => {
  const { user } = useAuth();

  const [name, setName] = useState(user?.name || 'Vikram Malhotra');
  const [email, setEmail] = useState(user?.email || 'vikram@example.com');
  const [phone, setPhone] = useState(user?.phone || '+91 98765 43210');
  const [city, setCity] = useState(user?.city || 'Bengaluru');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <DashboardLayout title="Customer Profile">
      <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border border-[#8B1020]/15 shadow-sm space-y-6">
        <div className="flex items-center gap-4 border-b border-[#8B1020]/10 pb-6">
          <img 
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"} 
            alt={name} 
            className="w-20 h-20 rounded-2xl object-cover border-2 border-[#8B1020]/20"
          />
          <div>
            <h3 className="font-bold text-xl text-[#21191A]">{name}</h3>
            <span className="text-xs text-[#8B1020] font-bold uppercase tracking-wider bg-[#FFF4F2] px-2.5 py-0.5 rounded-full border border-[#8B1020]/10">
              Customer Account
            </span>
          </div>
        </div>

        {saved && (
          <div className="p-3 bg-[#E6F4ED] text-[#2F9B68] text-xs font-bold rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Profile details saved successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" icon={User} value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="Email Address" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} required />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Phone Number" icon={Phone} value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Input label="City" icon={MapPin} value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <Button type="submit" variant="primary" icon={Save}>
            Save Changes
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
};
