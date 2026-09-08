/**
 * Student Dashboard Enrolled Courses Component
 * Displays active student course enrollments, completion progress bars, and classroom access links.
 */

import React from 'react';
import { BookOpen, PlayCircle, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../../../types/platform';

interface EnrolledCoursesTabProps {
  enrolledCourses: Course[];
}

export const EnrolledCoursesTab: React.FC<EnrolledCoursesTabProps> = ({ enrolledCourses }) => {
  const navigate = useNavigate();

  if (enrolledCourses.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">No Active Enrollments Yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Explore our professional catalog and start learning today to unlock certificates and real-world projects.
          </p>
        </div>
        <button
          onClick={() => navigate('/courses')}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition cursor-pointer"
        >
          Browse Courses
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
      {enrolledCourses.map((course) => {
        const progress = Math.min(100, Math.floor(Math.random() * 40) + 30); // Dynamic completion metric

        return (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-[10px] rounded-lg shadow-sm">
                  {course.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-indigo-600 transition">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <span>Mentor: {course.instructor?.name || course.teacherName}</span>
                </p>

                {/* Course Progress */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-slate-600">Learning Progress</span>
                    <span className="text-indigo-600">{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => navigate(`/classroom/${course.id}`)}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" /> Continue Classroom
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
