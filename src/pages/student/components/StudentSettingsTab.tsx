/**
 * Student Settings & Profile Update Component
 * Allows students to update profile details, avatar, and account password.
 */

import React, { useState } from 'react';
import { User as UserIcon, Lock, Save, CheckCircle2 } from 'lucide-react';
import { User } from '../../../types/platform';

interface StudentSettingsTabProps {
  currentUser: User | null;
  onUpdateProfile: (name: string, phone: string, avatar: string, bio: string) => Promise<boolean>;
  onChangePassword: (oldPass: string, newPass: string) => Promise<boolean>;
}

export const StudentSettingsTab: React.FC<StudentSettingsTabProps> = ({
  currentUser,
  onUpdateProfile,
  onChangePassword,
}) => {
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [avatar, setAvatar] = useState(currentUser?.avatar || '');
  const [bio, setBio] = useState(currentUser?.bio || '');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [profileMessage, setProfileMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onUpdateProfile(name, phone, avatar, bio);
    if (success) {
      setProfileMessage('Profile updated successfully!');
      setTimeout(() => setProfileMessage(''), 3000);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMessage('New password and confirmation do not match.');
      return;
    }
    const success = await onChangePassword(oldPassword, newPassword);
    if (success) {
      setPasswordMessage('Password changed successfully!');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordMessage(''), 3000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
      {/* Profile Form */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <UserIcon className="w-4 h-4 text-indigo-600" /> Account Profile Settings
        </h3>

        {profileMessage && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> {profileMessage}
          </div>
        )}

        <form onSubmit={handleProfileSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Avatar Image URL</label>
            <input
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Short Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-md shadow-indigo-600/30 transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Profile Details
          </button>
        </form>
      </div>

      {/* Password Change Form */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-4 h-4 text-indigo-600" /> Security & Password
        </h3>

        {passwordMessage && (
          <div className="p-3 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs rounded-xl flex items-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> {passwordMessage}
          </div>
        )}

        <form onSubmit={handlePasswordSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Current Password</label>
            <input
              type="password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">New Password</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" /> Update Security Password
          </button>
        </form>
      </div>
    </div>
  );
};
