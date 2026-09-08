/**
 * Admin Website Content & Banners Tab Component
 * Manages promotional top-bar announcements, marketing copy, and marketplace banners.
 */

import React, { useState } from 'react';
import { Globe, Save, CheckCircle2, Megaphone } from 'lucide-react';
import { DBService } from '../../../services/db';

export const AdminWebsiteContentTab: React.FC = () => {
  const currentBanner = DBService.getWebsiteContent('marketplace_banner') || {
    id: 'marketplace_banner',
    title: 'স্পেশাল স্কলারশিপ অফার! সকল প্রিমিয়াম কোর্সে ৫০% পর্যন্ত ছাড়',
    buttonText: 'এনরোল করুন এখনই',
    buttonUrl: '/courses',
  };

  const [title, setTitle] = useState(currentBanner.title || '');
  const [buttonText, setButtonText] = useState(currentBanner.buttonText || '');
  const [buttonUrl, setButtonUrl] = useState(currentBanner.buttonUrl || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    DBService.updateWebsiteContent('marketplace_banner', {
      sectionName: 'Top Marketplace Banner',
      title,
      buttonText,
      buttonUrl,
      mediaType: 'TEXT',
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" /> Website Content & Announcement Banners
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Customize site-wide notice banners, discount promotions, and top marketing text.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm max-w-2xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
            <Megaphone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Top Announcement Banner</h3>
            <p className="text-[11px] text-slate-500">Displayed at the very top of public landing pages</p>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Announcement banner content saved successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Banner Announcement Text (Bengali/English)</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Call-To-Action Button Label</label>
              <input
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">CTA Redirect URL / Path</label>
              <input
                type="text"
                value={buttonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Banner Settings
          </button>
        </form>
      </div>
    </div>
  );
};
