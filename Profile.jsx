import React, { useState } from 'react';
import { User, ShieldCheck, Save, CheckCircle2 } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

export const ProviderProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || 'Amit Sharma');
  const [profession, setProfession] = useState('Master Plumbing Specialist');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [location, setLocation] = useState('Koramangala, Bengaluru');
  const [experience, setExperience] = useState('6+ Years');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <DashboardLayout title="Provider Business Profile">
      <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border border-[#8B1020]/15 shadow-sm space-y-6">
        
        <div className="flex items-center gap-4 border-b border-[#8B1020]/10 pb-6">
          <img 
            src={user?.avatar || "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=200&q=80"} 
            alt={name} 
            className="w-20 h-20 rounded-2xl object-cover border-2 border-[#8B1020]/20"
          />
          <div>
            <h3 className="font-bold text-xl text-[#21191A] flex items-center gap-1.5">
              {name} <ShieldCheck className="w-4 h-4 text-[#2F9B68]" />
            </h3>
            <span className="text-xs text-[#2F9B68] font-bold uppercase tracking-wider bg-[#E6F4ED] px-2.5 py-0.5 rounded-full border border-[#2F9B68]/30 inline-block mt-1">
              ✓ Verified Service Provider
            </span>
          </div>
        </div>

        {saved && (
          <div className="p-3 bg-[#E6F4ED] text-[#2F9B68] text-xs font-bold rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Provider business profile updated!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name / Brand Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="Profession / Service Expertise" value={profession} onChange={(e) => setProfession(e.target.value)} required />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <Input label="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <Input label="Years of Experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
          <Button type="submit" variant="primary" icon={Save}>
            Update Business Profile
          </Button>
        </form>

      </div>
    </DashboardLayout>
  );
};
