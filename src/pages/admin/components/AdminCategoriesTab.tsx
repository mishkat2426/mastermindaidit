/**
 * Admin Categories Manager Tab Component
 * Provides creation, modification, and deletion controls for platform course categories.
 */

import React from 'react';
import { Tag, Plus, Trash2, Edit3, Grid } from 'lucide-react';
import { Category } from '../../../types/platform';

interface AdminCategoriesTabProps {
  categories: Category[];
  newCatName: string;
  setNewCatName: (val: string) => void;
  newCatBengali: string;
  setNewCatBengali: (val: string) => void;
  newCatDesc: string;
  setNewCatDesc: (val: string) => void;
  onAddCategory: (e: React.FormEvent) => void;
  onDeleteCategory: (id: string) => void;
}

export const AdminCategoriesTab: React.FC<AdminCategoriesTabProps> = ({
  categories,
  newCatName,
  setNewCatName,
  newCatBengali,
  setNewCatBengali,
  newCatDesc,
  setNewCatDesc,
  onAddCategory,
  onDeleteCategory,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Tag className="w-5 h-5 text-indigo-600" /> Category Architecture Manager
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Organize course listings, set English/Bengali titles, and configure navigation categories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Category Form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Plus className="w-4 h-4 text-indigo-600" /> Add New Category
          </h3>
          <form onSubmit={onAddCategory} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Category Name (English)</label>
              <input
                type="text"
                required
                placeholder="e.g. Artificial Intelligence"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Category Name (Bengali)</label>
              <input
                type="text"
                required
                placeholder="e.g. আর্টিফিশিয়াল ইন্টেলিজেন্স"
                value={newCatBengali}
                onChange={(e) => setNewCatBengali(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Short Description</label>
              <textarea
                rows={3}
                placeholder="Brief category description..."
                value={newCatDesc}
                onChange={(e) => setNewCatDesc(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md shadow-indigo-600/30 transition cursor-pointer"
            >
              Save Category
            </button>
          </form>
        </div>

        {/* Existing Categories Grid */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Grid className="w-4 h-4 text-indigo-600" /> Existing Platform Categories ({categories.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((cat) => (
              <div key={cat.id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">{cat.name}</h4>
                  <p className="text-[11px] text-indigo-600 font-semibold">{cat.bengaliName}</p>
                  {cat.description && <p className="text-[10px] text-slate-500 line-clamp-2">{cat.description}</p>}
                </div>
                <button
                  onClick={() => onDeleteCategory(cat.id)}
                  title="Delete Category"
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
