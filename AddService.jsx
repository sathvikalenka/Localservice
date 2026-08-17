import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { useApp } from '../../context/AppContext';

export const AddService = () => {
  const { addService, categories } = useApp();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0]?.id || 'home-cleaning');
  const [price, setPrice] = useState('699');
  const [duration, setDuration] = useState('1 - 2 Hours');
  const [location, setLocation] = useState('Bengaluru Wide');
  const [description, setDescription] = useState('');
  const [featureInput, setFeatureInput] = useState('');
  const [whatsIncluded, setWhatsIncluded] = useState([
    'Professional background-checked specialist',
    'Standard quality assurance warranty'
  ]);

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setWhatsIncluded([...whatsIncluded, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCatObj = categories.find(c => c.id === categoryId);
    addService({
      title,
      categoryId,
      categoryName: selectedCatObj ? selectedCatObj.name : 'General',
      price: Number(price),
      duration,
      location,
      description,
      whatsIncluded
    });

    navigate('/provider/services');
  };

  return (
    <DashboardLayout title="Publish New Service Listing">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#8B1020]/15 shadow-sm space-y-6">
        
        <div>
          <h2 className="text-xl font-extrabold text-[#21191A]">Add New Service</h2>
          <p className="text-xs text-[#625557] mt-0.5">Fill in the details below to offer your professional services on Worksy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Service Info */}
          <div className="space-y-4">
            <Input
              label="Service Title"
              placeholder="e.g. Kitchen Deep Cleaning & Chimney Degreasing"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div>
              <label className="text-xs font-bold text-[#21191A] block mb-1.5">Select Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full py-2.5 px-3 bg-[#FFF9F7] text-xs text-[#21191A] font-medium rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020]"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Pricing & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Input
              label="Starting Price (₹)"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Input
              label="Duration (Hours)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            <Input
              label="Service Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-bold text-[#21191A] block mb-1.5">Detailed Description</label>
            <textarea
              rows={3}
              placeholder="Describe what the customer can expect from this service..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-[#FFF9F7] text-xs text-[#21191A] rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020]"
              required
            />
          </div>

          {/* Included Features */}
          <div>
            <label className="text-xs font-bold text-[#21191A] block mb-1.5">What's Included</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Add package feature (e.g. Eco-certified materials)"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#FFF9F7] text-xs rounded-xl border border-[#8B1020]/15 outline-none"
              />
              <Button type="button" variant="secondary" size="sm" onClick={handleAddFeature}>
                Add
              </Button>
            </div>

            <div className="space-y-1.5">
              {whatsIncluded.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#21191A] bg-[#FFF4F2] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2F9B68]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <Button type="submit" variant="primary" fullWidth size="lg" icon={PlusCircle}>
              Publish Service Listing
            </Button>
          </div>

        </form>

      </div>
    </DashboardLayout>
  );
};
