/**
 * Admin Access Codes & Registration Security Tab Component
 * Manages teacher & administrator registration access code hashes and security parameters.
 */

import React from 'react';
import { Key, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

interface AdminAccessCodesTabProps {
  newTeacherAccessCode: string;
  setNewTeacherAccessCode: (val: string) => void;
  newAdminSecurityCode: string;
  setNewAdminSecurityCode: (val: string) => void;
  onUpdateTeacherCode: (e: React.FormEvent) => void;
  onUpdateAdminCode: (e: React.FormEvent) => void;
}

export const AdminAccessCodesTab: React.FC<AdminAccessCodesTabProps> = ({
  newTeacherAccessCode,
  setNewTeacherAccessCode,
  newAdminSecurityCode,
  setNewAdminSecurityCode,
  onUpdateTeacherCode,
  onUpdateAdminCode,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Key className="w-5 h-5 text-indigo-600" /> System Security Access Codes
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Configure secret security access codes required during Teacher and Administrator registrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Teacher Secret Code Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Teacher Secret Access Code</h3>
              <p className="text-[11px] text-slate-500">Required when registering new Teacher accounts</p>
            </div>
          </div>

          <form onSubmit={onUpdateTeacherCode} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">New Teacher Secret Code</label>
              <input
                type="password"
                required
                placeholder="Enter new secret teacher access code..."
                value={newTeacherAccessCode}
                onChange={(e) => setNewTeacherAccessCode(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Update Teacher Code
            </button>
          </form>
        </div>

        {/* Admin Security Code Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Administrator Master Security Code</h3>
              <p className="text-[11px] text-slate-500">Master code required for direct Admin account creation</p>
            </div>
          </div>

          <form onSubmit={onUpdateAdminCode} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">New Admin Master Code</label>
              <input
                type="password"
                required
                placeholder="Enter new master admin security code..."
                value={newAdminSecurityCode}
                onChange={(e) => setNewAdminSecurityCode(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl shadow-md shadow-rose-600/30 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Update Master Admin Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
