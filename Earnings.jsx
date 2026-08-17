import React from 'react';
import { DollarSign, ArrowUpRight, CheckCircle2, Download } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/common/Button';

export const Earnings = () => {
  const payoutHistory = [
    { id: "PO-941", date: "2026-08-14", amount: "₹8,450", status: "Paid to Bank", method: "HDFC Bank (•••• 4102)" },
    { id: "PO-830", date: "2026-08-07", amount: "₹11,200", status: "Paid to Bank", method: "HDFC Bank (•••• 4102)" },
    { id: "PO-721", date: "2026-07-31", amount: "₹9,800", status: "Paid to Bank", method: "HDFC Bank (•••• 4102)" }
  ];

  return (
    <DashboardLayout title="Provider Earnings & Payouts">
      <div className="space-y-8">
        
        {/* Earnings Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/15 shadow-sm">
            <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Total Balance</span>
            <span className="text-3xl font-extrabold text-[#8B1020] mt-1 block">₹28,450</span>
            <span className="text-[10px] text-[#2F9B68] font-semibold flex items-center gap-1 mt-1">
              <ArrowUpRight className="w-3 h-3" /> Ready for weekly transfer
            </span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/15 shadow-sm">
            <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">This Month</span>
            <span className="text-3xl font-extrabold text-[#21191A] mt-1 block">₹19,650</span>
            <span className="text-[10px] text-[#625557] mt-1 block">18 jobs completed</span>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/15 shadow-sm">
            <span className="text-xs text-[#8A7779] font-bold uppercase tracking-wider block">Next Scheduled Payout</span>
            <span className="text-3xl font-extrabold text-[#21191A] mt-1 block">Aug 21</span>
            <span className="text-[10px] text-[#2F9B68] font-semibold mt-1 block">Auto-transfer enabled</span>
          </div>
        </div>

        {/* Payout History Table */}
        <div className="bg-white p-6 rounded-3xl border border-[#8B1020]/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-[#21191A]">Payout History</h3>
            <Button variant="secondary" size="sm" icon={Download}>
              Download Statement
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#21191A]">
              <thead className="bg-[#FFF4F2] text-[#8B1020] uppercase text-[10px] font-bold">
                <tr>
                  <th className="p-3 rounded-l-xl">Payout ID</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8B1020]/05">
                {payoutHistory.map((po) => (
                  <tr key={po.id}>
                    <td className="p-3 font-bold">{po.id}</td>
                    <td className="p-3 text-[#625557]">{po.date}</td>
                    <td className="p-3 font-extrabold text-[#8B1020]">{po.amount}</td>
                    <td className="p-3 text-[#625557]">{po.method}</td>
                    <td className="p-3">
                      <span className="bg-[#E6F4ED] text-[#2F9B68] font-bold px-2 py-0.5 rounded text-[10px]">
                        ✓ {po.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
