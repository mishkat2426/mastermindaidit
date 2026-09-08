/**
 * Admin Users Management Tab Component
 * Handles user account listings, role changes (Student, Teacher, Admin), status toggling, and user edits.
 */

import React from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  UserPlus, 
  Edit3, 
  Lock, 
  Eye, 
  ShieldAlert, 
  CheckCircle2, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';
import { User, UserRole } from '../../../types/platform';

interface AdminUsersTabProps {
  users: User[];
  userSearch: string;
  setUserSearch: (val: string) => void;
  userRoleFilter: 'ALL' | 'STUDENT' | 'TEACHER' | 'ADMIN';
  setUserRoleFilter: (val: 'ALL' | 'STUDENT' | 'TEACHER' | 'ADMIN') => void;
  userStatusFilter: 'ALL' | 'ACTIVE' | 'SUSPENDED';
  setUserStatusFilter: (val: 'ALL' | 'ACTIVE' | 'SUSPENDED') => void;
  onOpenAddUserModal: () => void;
  onEditUser: (user: User) => void;
  onResetPasswordUser: (user: User) => void;
  onViewUser: (user: User) => void;
  onUpdateRole: (userId: string, newRole: UserRole) => void;
  onToggleStatus: (userId: string, newStatus: 'ACTIVE' | 'SUSPENDED') => void;
}

export const AdminUsersTab: React.FC<AdminUsersTabProps> = ({
  users,
  userSearch,
  setUserSearch,
  userRoleFilter,
  setUserRoleFilter,
  userStatusFilter,
  setUserStatusFilter,
  onOpenAddUserModal,
  onEditUser,
  onResetPasswordUser,
  onViewUser,
  onUpdateRole,
  onToggleStatus,
}) => {
  const filteredUsers = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
                          u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
                          (u.phone && u.phone.includes(userSearch));
    const matchesRole = userRoleFilter === 'ALL' || u.role === userRoleFilter;
    const matchesStatus = userStatusFilter === 'ALL' || u.status === userStatusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadge = (role: UserRole) => {
    switch (role) {
      case 'ADMIN':
        return <span className="bg-rose-50 text-rose-700 border border-rose-200/60 px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 w-max"><ShieldCheck className="w-3 h-3" /> ADMIN</span>;
      case 'TEACHER':
        return <span className="bg-indigo-50 text-indigo-700 border border-indigo-200/60 px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 w-max"><GraduationCap className="w-3 h-3" /> TEACHER</span>;
      default:
        return <span className="bg-blue-50 text-blue-700 border border-blue-200/60 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 w-max"><Users className="w-3 h-3" /> STUDENT</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" /> Platform User Management
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage registered accounts, grant teacher/admin privileges, or update security credentials.
          </p>
        </div>
        <button
          onClick={onOpenAddUserModal}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition flex items-center gap-2 cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4" /> Add User Account
        </button>
      </div>

      {/* Filter & Search */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <select
          value={userRoleFilter}
          onChange={(e) => setUserRoleFilter(e.target.value as any)}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
        >
          <option value="ALL">All Roles</option>
          <option value="STUDENT">Student</option>
          <option value="TEACHER">Teacher</option>
          <option value="ADMIN">Admin</option>
        </select>

        <select
          value={userStatusFilter}
          onChange={(e) => setUserStatusFilter(e.target.value as any)}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
        >
          <option value="ALL">All Statuses</option>
          <option value="ACTIVE">Active</option>
          <option value="SUSPENDED">Suspended</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">User Details</th>
                <th className="py-3.5 px-4">Role</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Joined Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                        alt={user.name}
                        className="w-9 h-9 rounded-full bg-slate-100 object-cover border border-slate-200"
                      />
                      <div>
                        <p className="font-bold text-slate-900">{user.name}</p>
                        <p className="text-slate-500 text-[11px]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      user.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {user.status || 'ACTIVE'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => onViewUser(user)}
                        title="View User Details"
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onEditUser(user)}
                        title="Edit User"
                        className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onResetPasswordUser(user)}
                        title="Reset User Password"
                        className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition"
                      >
                        <Lock className="w-4 h-4" />
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
