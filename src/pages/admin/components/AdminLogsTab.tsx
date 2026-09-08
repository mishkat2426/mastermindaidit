/**
 * Admin Audit & Security Logs Tab Component
 * Displays system security events, administrator logs, and timestamped actions.
 */

import React from 'react';
import { History, ShieldAlert, Clock } from 'lucide-react';
import { AuditLog } from '../../../types/platform';

interface AdminLogsTabProps {
  logs: AuditLog[];
}

export const AdminLogsTab: React.FC<AdminLogsTabProps> = ({ logs }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <History className="w-5 h-5 text-indigo-600" /> Platform Security & Audit Logs
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Immutable audit records of administrator updates, user role promotions, and domain configurations.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 font-bold text-xs text-slate-700 flex items-center justify-between">
          <span>Audit Event Timeline ({logs.length})</span>
          <span className="text-slate-400 font-normal">Real-Time Event Stream</span>
        </div>

        <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
          {logs.map((log) => (
            <div key={log.id} className="p-4 hover:bg-slate-50/80 transition flex items-start gap-4 text-xs">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl shrink-0 mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{log.adminName}</span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-slate-700 font-medium">{log.action}</p>
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                  <span>Resource: {log.resource}</span>
                  <span>•</span>
                  <span>ID: {log.resourceId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
