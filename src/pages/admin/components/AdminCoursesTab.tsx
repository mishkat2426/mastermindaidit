/**
 * Admin Courses Management Tab Component
 * Provides course listing, searching, category filtering, approval controls, and new course addition.
 */

import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Eye, 
  Check, 
  XCircle, 
  BookOpen, 
  Tag, 
  Star 
} from 'lucide-react';
import { Course, CourseLevel, CourseStatus } from '../../../types/platform';

interface AdminCoursesTabProps {
  courses: Course[];
  courseSearch: string;
  setCourseSearch: (val: string) => void;
  courseFilterCategory: string;
  setCourseFilterCategory: (val: string) => void;
  courseFilterStatus: 'ALL' | 'PUBLISHED' | 'DRAFT' | 'UNPUBLISHED';
  setCourseFilterStatus: (val: 'ALL' | 'PUBLISHED' | 'DRAFT' | 'UNPUBLISHED') => void;
  onOpenAddModal: () => void;
  onToggleCourseStatus: (courseId: string, newStatus: CourseStatus) => void;
  onDeleteCourse: (courseId: string) => void;
}

export const AdminCoursesTab: React.FC<AdminCoursesTabProps> = ({
  courses,
  courseSearch,
  setCourseSearch,
  courseFilterCategory,
  setCourseFilterCategory,
  courseFilterStatus,
  setCourseFilterStatus,
  onOpenAddModal,
  onToggleCourseStatus,
  onDeleteCourse,
}) => {
  const filteredCourses = courses.filter((c) => {
    const instructorName = c.instructor?.name || c.teacherName || '';
    const matchesSearch = c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
                          instructorName.toLowerCase().includes(courseSearch.toLowerCase());
    const matchesCat = courseFilterCategory === 'ALL' || c.category === courseFilterCategory;
    const matchesStatus = courseFilterStatus === 'ALL' || c.status === courseFilterStatus;
    return matchesSearch && matchesCat && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" /> Course Catalog & Approvals
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage published courses, review pending submissions, and publish new courses.
          </p>
        </div>
        <button
          onClick={onOpenAddModal}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" /> Add New Course
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search courses or instructor..."
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <select
          value={courseFilterCategory}
          onChange={(e) => setCourseFilterCategory(e.target.value)}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
        >
          <option value="ALL">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="Graphic & UI/UX Design">Graphic & UI/UX Design</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <select
          value={courseFilterStatus}
          onChange={(e) => setCourseFilterStatus(e.target.value as any)}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
        >
          <option value="ALL">All Statuses</option>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="UNPUBLISHED">Unpublished</option>
        </select>
      </div>

      {/* Courses Grid Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Course Info</th>
                <th className="py-3.5 px-4">Category & Level</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Students</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredCourses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img src={course.thumbnail} alt={course.title} className="w-12 h-9 rounded-lg object-cover bg-slate-100" />
                      <div>
                        <p className="font-bold text-slate-900 line-clamp-1">{course.title}</p>
                        <p className="text-slate-500 text-[11px]">{course.instructor?.name || course.teacherName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-block bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      {course.category}
                    </span>
                    <p className="text-slate-400 text-[10px] mt-1">{course.level}</p>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    ৳{course.price}
                    {course.discountPrice && (
                      <span className="block text-[10px] text-slate-400 line-through">৳{course.discountPrice}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-800">
                    {course.studentsCount || 0}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      course.status === 'PUBLISHED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {course.status !== 'PUBLISHED' ? (
                        <button
                          onClick={() => onToggleCourseStatus(course.id, 'PUBLISHED')}
                          title="Publish Course"
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition cursor-pointer"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onToggleCourseStatus(course.id, 'UNPUBLISHED')}
                          title="Unpublish Course"
                          className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition cursor-pointer"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => onDeleteCourse(course.id)}
                        title="Delete Course"
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
