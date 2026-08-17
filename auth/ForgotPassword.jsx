import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#FFF9F7] text-[#21191A]">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-[#8B1020]/15 shadow-xl space-y-6">
        
        <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1020] hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Login
        </Link>

        <div>
          <h2 className="text-2xl font-extrabold text-[#21191A]">Reset Password</h2>
          <p className="text-xs text-[#625557] mt-1">Enter your registered email address to receive password reset instructions.</p>
        </div>

        {submitted ? (
          <div className="p-4 bg-[#E6F4ED] text-[#2F9B68] rounded-2xl text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto" />
            <p className="text-xs font-bold">Password Reset Link Sent!</p>
            <p className="text-[11px]">We have sent a reset link to {email}. Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="e.g. user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" variant="primary" fullWidth size="lg">
              Send Reset Link
            </Button>
          </form>
        )}

      </div>
    </div>
  );
};
