/**
 * MASTERMIND AIDIT Application Router
 * Implements React.lazy dynamic code splitting for high performance and fast initial page load times.
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/layout/ProtectedRoute';
import { Preloader } from '../components/layout/Preloader';

// Dynamic Lazy-Loaded Page Components
const HomePage = lazy(() => import('../pages/public/HomePage').then(m => ({ default: m.HomePage })));
const CoursesPage = lazy(() => import('../pages/public/CoursesPage').then(m => ({ default: m.CoursesPage })));
const CourseDetailPage = lazy(() => import('../pages/public/CourseDetailPage').then(m => ({ default: m.CourseDetailPage })));
const CheckoutPage = lazy(() => import('../pages/checkout/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const ClassroomPage = lazy(() => import('../pages/classroom/ClassroomPage').then(m => ({ default: m.ClassroomPage })));

const LoginPage = lazy(() => import('../pages/auth/LoginPage').then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage').then(m => ({ default: m.RegisterPage })));
const AdminRegisterPage = lazy(() => import('../pages/auth/AdminRegisterPage').then(m => ({ default: m.AdminRegisterPage })));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage').then(m => ({ default: m.ForgotPasswordPage })));
const ResetPasswordPage = lazy(() => import('../pages/auth/ResetPasswordPage').then(m => ({ default: m.ResetPasswordPage })));

const TransactionsPage = lazy(() => import('../pages/student/TransactionsPage').then(m => ({ default: m.TransactionsPage })));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const TeacherDashboard = lazy(() => import('../pages/teacher/TeacherDashboard').then(m => ({ default: m.TeacherDashboard })));
const StudentDashboard = lazy(() => import('../pages/student/StudentDashboard').then(m => ({ default: m.StudentDashboard })));

interface AppRoutesProps {
  onAddToCart: (course: any) => void;
  cartItemIds: string[];
  onOpenPathFinder: () => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  onAddToCart,
  cartItemIds,
  onOpenPathFinder,
}) => {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Preloader onComplete={() => {}} />}>
      <Routes>
        {/* Public Marketing Homepage */}
        <Route
          path="/"
          element={
            <HomePage
              onOpenPathFinder={onOpenPathFinder}
              onAddToCart={onAddToCart}
              cartItemIds={cartItemIds}
            />
          }
        />

        {/* Dedicated Course Catalog Route */}
        <Route
          path="/courses"
          element={
            <CoursesPage
              onAddToCart={onAddToCart}
              cartItemIds={cartItemIds}
            />
          }
        />

        {/* Dedicated Course Details Route */}
        <Route
          path="/courses/:courseId"
          element={
            <CourseDetailPage
              onAddToCart={onAddToCart}
              cartItemIds={cartItemIds}
            />
          }
        />

        {/* Checkout & Payment Gateway Route */}
        <Route path="/checkout/:courseId" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />

        {/* Protected Student Learning Classroom Route */}
        <Route
          path="/courses/:courseId/learn"
          element={
            <ProtectedRoute allowedRoles={['STUDENT', 'TEACHER', 'ADMIN']}>
              <ClassroomPage />
            </ProtectedRoute>
          }
        />

        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<LoginPage presetRole="ADMIN" />} />
        <Route path="/teacher/login" element={<LoginPage presetRole="TEACHER" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/auth/action" element={<ResetPasswordPage />} />
        <Route path="/__/auth/action" element={<ResetPasswordPage />} />

        {/* Transactions Page (Protected) */}
        <Route
          path="/transactions"
          element={
            <ProtectedRoute allowedRoles={['STUDENT', 'ADMIN']}>
              <TransactionsPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Dashboards */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute allowedRoles={['TEACHER', 'ADMIN']}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute allowedRoles={['STUDENT', 'TEACHER', 'ADMIN']}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback 404 Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center space-y-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900">404 - Page Not Found</h2>
                <p className="text-xs text-slate-500 mt-1">The requested route does not exist.</p>
                <button
                  onClick={() => navigate('/')}
                  className="mt-4 px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-indigo-500 transition"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};
