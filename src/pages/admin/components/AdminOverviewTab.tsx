/**
 * Admin Overview Tab Component
 * Displays system metrics, platform statistics, revenue counters, and system health status.
 */

import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { User, Course, Transaction, AuditLog } from '../../../types/platform';

interface AdminOverviewTabProps {
  stats: {
    totalStudents: number;
    totalTeachers: number;
    totalCourses: number;
    totalRevenue: number;
    activeEnrollments: number;
  };
  users: User[];
  courses: Course[];
  transactions: Transaction[];
  auditLogs: AuditLog[];
  onNavigateTab: (tab: any) => void;
}

export const AdminOverviewTab: React.FC<AdminOverviewTabProps> = ({
  stats,
  users,
  courses,
  transactions,
  auditLogs,
  onNavigateTab,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome & Platform Health Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Platform Operations Engine
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              System Overview & Control Panel
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl">
              Monitor key enrollment metrics, course performance, real-time revenue, security logs, and platform configurations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateTab('domain-hosting')}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" /> Domain & Hosting Setup
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Students</span>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black text-slate-900">{stats.totalStudents}</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> Active
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Instructors</span>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black text-slate-900">{stats.totalTeachers}</span>
            <span className="text-xs font-medium text-slate-500">Verified</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Published Courses</span>
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black text-slate-900">{stats.totalCourses}</span>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Catalog</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gross Platform Revenue</span>
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl font-black text-slate-900">৳{stats.totalRevenue.toLocaleString()}</span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Completed</span>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center justify-between">
            <span>Recent System Events</span>
            <button onClick={() => onNavigateTab('audit')} className="text-indigo-600 text-xs font-semibold hover:underline">
              View All
            </button>
          </h3>
          <div className="space-y-3">
            {auditLogs.slice(0, 4).map((log) => (
              <div key={log.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                <div className="flex items-center justify-between font-semibold text-slate-800">
                  <span>{log.adminName}</span>
                  <span className="text-slate-400 font-normal text-[10px]">{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <p className="text-slate-600">{log.action}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-sm md:col-span-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center justify-between">
            <span>Course Catalog Overview</span>
            <button onClick={() => onNavigateTab('courses')} className="text-indigo-600 text-xs font-semibold hover:underline flex items-center gap-1">
              Manage Courses <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </h3>
          <div className="divide-y divide-slate-100">
            {courses.slice(0, 5).map((course) => (
              <div key={course.id} className="py-3 flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <img src={course.thumbnail} alt={course.title} className="w-10 h-8 rounded-lg object-cover bg-slate-100" />
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 truncate">{course.title}</p>
                    <p className="text-slate-500 text-[11px]">{course.instructor?.name || course.teacherName} • {course.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-bold text-slate-900">৳{course.price}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${course.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
