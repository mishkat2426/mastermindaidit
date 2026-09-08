/**
 * Student Dashboard Wishlist Component
 * Displays bookmarked courses saved by the student.
 */

import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../../../types/platform';

interface WishlistTabProps {
  wishlistCourses: Course[];
  onRemoveWishlist: (courseId: string) => void;
}

export const WishlistTab: React.FC<WishlistTabProps> = ({ wishlistCourses, onRemoveWishlist }) => {
  const navigate = useNavigate();

  if (wishlistCourses.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto">
          <Heart className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900">Your Wishlist is Empty</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Save courses you are interested in to purchase or review later.
          </p>
        </div>
        <button
          onClick={() => navigate('/courses')}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition cursor-pointer"
        >
          Explore Courses
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
      {wishlistCourses.map((course) => (
        <div key={course.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              <button
                onClick={() => onRemoveWishlist(course.id)}
                title="Remove from wishlist"
                className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md text-rose-600 hover:bg-rose-600 hover:text-white rounded-full shadow-sm transition cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current" />
              </button>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{course.title}</h3>
              <p className="text-xs text-slate-500">{course.instructor?.name || course.teacherName}</p>
              <div className="pt-2 text-base font-black text-slate-900">৳{course.price}</div>
            </div>
          </div>

          <div className="p-5 pt-0">
            <button
              onClick={() => navigate(`/course/${course.id}`)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" /> View Details & Enroll
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
