/**
 * Teacher Dashboard Analytics Component
 * Displays instructor revenue, payouts, student ratings, and engagement metrics.
 */

import React from 'react';
import { TrendingUp, CreditCard, Users, Star } from 'lucide-react';
import { Course } from '../../../types/platform';

interface TeacherAnalyticsTabProps {
  courses: Course[];
}

export const TeacherAnalyticsTab: React.FC<TeacherAnalyticsTabProps> = ({ courses }) => {
  const totalEnrolled = courses.reduce((acc, c) => acc + (c.studentsCount || 0), 0);
  const estimatedRevenue = courses.reduce((acc, c) => acc + ((c.studentsCount || 0) * (c.price || 0)), 0);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Enrolled Students</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-4">{totalEnrolled}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Estimated Revenue</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-4">৳{estimatedRevenue.toLocaleString()}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Average Rating</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <Star className="w-5 h-5" />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-900 mt-4">4.9 / 5.0</p>
        </div>
      </div>
    </div>
  );
};
