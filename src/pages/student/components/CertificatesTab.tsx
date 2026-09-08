/**
 * Student Dashboard Certificates Component
 * Displays verified course completion certificates with download and preview options.
 */

import React from 'react';
import { Award, Download, Eye, CheckCircle2 } from 'lucide-react';

interface CertificatesTabProps {
  userName: string;
  onOpenCertificateShowcase: () => void;
}

export const CertificatesTab: React.FC<CertificatesTabProps> = ({ userName, onOpenCertificateShowcase }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white border border-slate-800 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" /> Verified Achievements & Certificates
          </h3>
          <p className="text-xs text-slate-400">
            Earn shareable certificates verified by MASTERMIND AIDIT upon completing course curricula.
          </p>
        </div>
        <button
          onClick={onOpenCertificateShowcase}
          className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Eye className="w-4 h-4" /> Preview Sample Certificate
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-4">
        <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
          <Award className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">Certificate Verification Node</h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Complete 100% of your course modules to automatically generate a tamper-proof digital certificate registered under <span className="font-bold text-slate-800">{userName}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
