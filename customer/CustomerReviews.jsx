import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { RatingStars } from '../../components/common/RatingStars';
import { Button } from '../../components/common/Button';
import { useApp } from '../../context/AppContext';

export const CustomerReviews = () => {
  const { reviews, addReview } = useApp();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ comment, rating });
    setComment('');
    setSubmitted(true);
  };

  return (
    <DashboardLayout title="My Reviews & Feedback">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Write Review Form */}
        <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/15 shadow-sm space-y-4">
          <h3 className="font-bold text-lg text-[#21191A]">Leave A Service Review</h3>
          
          {submitted ? (
            <div className="p-4 bg-[#E6F4ED] text-[#2F9B68] rounded-2xl text-center space-y-1">
              <p className="font-bold text-sm">Review Submitted!</p>
              <p className="text-xs">Thank you for rating your service provider.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#21191A] block mb-1.5">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1.5 rounded-lg ${star <= rating ? 'text-[#E7A51A]' : 'text-[#8A7779]/30'}`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#21191A] block mb-1.5">Feedback Comment</label>
                <textarea 
                  rows={3} 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details of your experience with the service specialist..."
                  className="w-full p-3 bg-[#FFF9F7] text-xs text-[#21191A] rounded-xl border border-[#8B1020]/15 outline-none focus:border-[#8B1020]"
                  required
                />
              </div>

              <Button type="submit" variant="primary" fullWidth size="md" icon={Send}>
                Submit Review
              </Button>
            </form>
          )}
        </div>

        {/* Existing Reviews List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
          <h3 className="font-bold text-lg text-[#21191A]">Recent Platform Reviews</h3>
          <div className="divide-y divide-[#8B1020]/10">
            {reviews.map((rev) => (
              <div key={rev.id} className="py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#21191A]">{rev.userName}</span>
                  <RatingStars rating={rev.rating} showCount={false} size="xs" />
                </div>
                <p className="text-xs text-[#625557]">{rev.comment}</p>
                <span className="text-[10px] text-[#8A7779] block">{rev.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
