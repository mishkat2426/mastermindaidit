/**
 * Teacher Dashboard Courses List Component
 * Displays instructor's authored courses, enrollment numbers, revenue stats, and edit triggers.
 */

import React from 'react';
import { BookOpen, Plus, Users, CreditCard, Edit3, Trash2, Eye } from 'lucide-react';
import { Course } from '../../../types/platform';

interface TeacherCoursesTabProps {
  courses: Course[];
  onOpenCreateModal: () => void;
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (courseId: string) => void;
}

export const TeacherCoursesTab: React.FC<TeacherCoursesTabProps> = ({
  courses,
  onOpenCreateModal,
  onEditCourse,
  onDeleteCourse,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" /> Instructor Course Studio
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Author and edit course curricula, manage video modules, and monitor student engagement.
          </p>
        </div>
        <button
          onClick={onOpenCreateModal}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" /> Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                  course.status === 'PUBLISHED' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {course.status}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{course.title}</h3>
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold pt-1">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-indigo-600" /> {course.studentsCount || 0} Students</span>
                  <span className="font-bold text-slate-900">৳{course.price}</span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between gap-2">
              <button
                onClick={() => onEditCourse(course)}
                className="flex-1 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" /> Edit Curriculum
              </button>
              <button
                onClick={() => onDeleteCourse(course.id)}
                title="Delete Course"
                className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
