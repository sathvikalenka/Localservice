import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';

export const BookingModal = ({ isOpen, onClose, service }) => {
  const { addBooking } = useApp();
  
  const [date, setDate] = useState('2026-08-20');
  const [time, setTime] = useState('10:00 AM');
  const [address, setAddress] = useState('Flat 301, Sunshine Heights, HSR Layout, Bengaluru');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pay on Service Delivery');
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState(null);

  if (!service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBk = addBooking({
      serviceTitle: service.title,
      serviceImage: service.image,
      providerName: service.providerName,
      providerAvatar: service.providerAvatar,
      price: service.price,
      date,
      time,
      address,
      notes,
      paymentMethod
    });

    setCreatedBooking(newBk);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handleCloseAll = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseAll} title={isSuccess ? "Booking Confirmed!" : `Book ${service.title}`}>
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 bg-[#E6F4ED] text-[#2F9B68] rounded-full flex items-center justify-center mx-auto border border-[#2F9B68]/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-extrabold text-[#21191A]">Your Service is Scheduled!</h3>
          <p className="text-sm text-[#625557] max-w-sm mx-auto">
            Booking ID <strong className="text-[#8B1020]">{createdBooking?.id}</strong> has been sent to <strong>{service.providerName}</strong>. You can monitor the live status in your Customer Dashboard.
          </p>

          <div className="bg-[#FFF4F2] p-4 rounded-xl border border-[#8B1020]/15 text-left text-xs space-y-2 text-[#21191A]">
            <div className="flex justify-between">
              <span className="text-[#625557]">Scheduled Date:</span>
              <span className="font-bold">{date} ({time})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#625557]">Total Payable:</span>
              <span className="font-extrabold text-[#8B1020]">₹{service.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#625557]">Location:</span>
              <span className="font-semibold truncate max-w-[200px]">{address}</span>
            </div>
          </div>

          <Button variant="primary" fullWidth onClick={handleCloseAll}>
            View My Dashboard
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Summary Header */}
          <div className="flex items-center gap-3 p-3 bg-[#FFF4F2] rounded-xl border border-[#8B1020]/10">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-12 h-12 rounded-lg object-cover" 
            />
            <div className="flex-1">
              <h4 className="text-sm font-bold text-[#21191A] line-clamp-1">{service.title}</h4>
              <p className="text-xs text-[#625557]">Provider: {service.providerName}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#8A7779] block">Total</span>
              <span className="text-base font-extrabold text-[#8B1020]">₹{service.price}</span>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Select Preferred Date"
              type="date"
              icon={Calendar}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <div>
              <label className="text-xs font-semibold text-[#21191A] block mb-1.5">Preferred Time Slot</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full py-2.5 px-3 bg-white text-[#21191A] text-sm rounded-xl border border-[#8B1020]/15 focus:border-[#8B1020] outline-none"
              >
                <option>09:00 AM - 11:00 AM</option>
                <option>11:00 AM - 01:00 PM</option>
                <option>02:00 PM - 04:00 PM</option>
                <option>04:00 PM - 06:00 PM</option>
                <option>06:00 PM - 08:00 PM</option>
              </select>
            </div>
          </div>

          {/* Service Address */}
          <Input
            label="Service Address"
            placeholder="Flat / Building Name, Street, City"
            icon={MapPin}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          {/* Special Notes */}
          <div>
            <label className="text-xs font-semibold text-[#21191A] block mb-1.5">Special Instructions (Optional)</label>
            <textarea
              rows={2}
              placeholder="E.g., Please call before arrival, focus on kitchen balcony, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 bg-white text-[#21191A] text-sm rounded-xl border border-[#8B1020]/15 focus:border-[#8B1020] outline-none"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="text-xs font-semibold text-[#21191A] block mb-1.5">Payment Option</label>
            <div className="grid grid-cols-2 gap-2">
              <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                paymentMethod === 'Pay on Service Delivery' ? 'border-[#8B1020] bg-[#FFF4F2]' : 'border-[#8B1020]/15 bg-white'
              }`}>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'Pay on Service Delivery'} 
                  onChange={() => setPaymentMethod('Pay on Service Delivery')}
                  className="accent-[#8B1020]"
                />
                <span className="text-xs font-semibold text-[#21191A]">Cash/UPI on Service</span>
              </label>

              <label className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                paymentMethod === 'Paid Online' ? 'border-[#8B1020] bg-[#FFF4F2]' : 'border-[#8B1020]/15 bg-white'
              }`}>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'Paid Online'} 
                  onChange={() => setPaymentMethod('Paid Online')}
                  className="accent-[#8B1020]"
                />
                <span className="text-xs font-semibold text-[#21191A]">Online Prepaid</span>
              </label>
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" fullWidth size="lg">
              Confirm & Request Booking (₹{service.price})
            </Button>
          </div>

          <p className="text-[11px] text-[#8A7779] text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2F9B68]" />
            Worksy Guarantee • Free Cancellation Up To 2 Hours Before
          </p>
        </form>
      )}
    </Modal>
  );
};
