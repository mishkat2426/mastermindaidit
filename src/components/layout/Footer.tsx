import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube, 
  Linkedin, 
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  X,
  FileText
} from 'lucide-react';
import { CATEGORIES } from '../../data/coursesData';

interface FooterProps {
  onSelectCategory: (catId: string | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const getPolicyContent = () => {
    switch (activeModal) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: 'At Mastermind AidIT, we value your privacy. We collect personal information solely for providing course access, processing certificates, and improving user experience. We never sell or share your data with third parties. All transaction details are secured using 256-bit encryption.',
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: 'By enrolling in Mastermind AidIT courses, you agree to access course videos and materials strictly for personal learning. Course contents may not be redistributed, recorded, or resold without explicit authorization. Accounts found violating IP terms will be permanently suspended.',
        };
      case 'refund':
        return {
          title: 'Refund Policy',
          content: 'We offer a 3-day money-back guarantee for premium course enrollments if less than 20% of the course content has been consumed. To request a refund, contact support@mastermindaidit.com with your transaction ID.',
        };
      default:
        return null;
    }
  };

  const modalData = getPolicyContent();

  return (
    <footer className="bg-[#0A192F] text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter CTA Banner */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-black/20 px-3.5 py-1 rounded-full inline-block">
              Stay Ahead in Tech & Skill Career
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Subscribe for Free Masterclass Updates & Discounts!
            </h3>
            <p className="text-slate-100 text-xs sm:text-sm">
              Join 25,000+ learners receiving weekly WordPress, Digital Marketing & Freelancing guides.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="px-5 py-3.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl text-xs sm:text-sm font-bold focus:outline-none focus:ring-4 focus:ring-amber-400/50 w-full sm:w-80"
              required
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-[#0A192F] hover:bg-slate-900 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <span>Subscribe Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <span className="text-base sm:text-xl font-black tracking-tight leading-none">
                Mastermind <span className="text-brand-400">AidIT</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Mastermind AidIT is Bangladesh's premier skill development platform, delivering high-impact online courses in Web Development, WordPress, Digital Marketing, SEO, and Freelancing.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-500 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-500 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-500 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link to="/courses" className="hover:text-brand-400 transition">Course Catalog</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-400 transition">Student Portal</Link></li>
              <li><Link to="/transactions" className="hover:text-brand-400 transition">Transactions Ledger</Link></li>
              <li><Link to="/teacher/login" className="hover:text-brand-400 transition">Instructor Login</Link></li>
              <li><Link to="/admin/login" className="hover:text-brand-400 transition">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">Popular Categories</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-brand-400 transition text-left"
                  >
                    {cat.name} ({cat.bengaliName})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">Contact & Support</h4>
            <ul className="space-y-3 text-xs text-slate-300 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+8801712949410" className="hover:text-white transition">+880 1712-949410</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:support@mastermindaidit.com" className="hover:text-white transition">support@mastermindaidit.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong className="text-white">MASTERMIND AIDIT</strong>. All Rights Reserved. Built with Excellence.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition cursor-pointer">Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="hover:text-white transition cursor-pointer">Terms of Service</button>
            <button onClick={() => setActiveModal('refund')} className="hover:text-white transition cursor-pointer">Refund Policy</button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {activeModal && modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0B1B33] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-brand-400" />
                <h3 className="text-lg font-black text-white">{modalData.title}</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {modalData.content}
            </p>
            <div className="pt-4 flex justify-end border-t border-slate-800">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-lg transition"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
