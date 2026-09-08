# 🚀 Mastermind AidIT - Premier E-Learning & Skill Development Platform 2026

![Mastermind AidIT Banner](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80)

**Mastermind AidIT (মাস্টারমাইন্ড এইডআইটি)** is a premier, full-featured e-learning web application built for high-impact IT skill development in Bangladesh. Developed using **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Key Features

- **🎓 Comprehensive Course Catalog**: 9 Categories (WordPress Plugin Dev, Digital Marketing, SEO, Freelancing, Web Design, Affiliate Marketing).
- **🏆 Live Verifiable E-Certificate Generator**: Interactive student certificate widget with real-time name entry, QR code security seal, and PDF download.
- **🖥️ In-Browser Live Code Sandbox**: Virtual HTML/CSS code editor sandbox to run and test code in real-time.
- **📊 Student LMS Learning Dashboard Demo**: Video playlist player, source code `.ZIP` downloads, progress tracking, and mentor group link.
- **🌐 Admin Custom Domain & Hosting Manager**: Integrated admin dashboard tab for custom domain connection, DNS inspection, Firebase Auth domain whitelisting, and 1-click config exporter.
- **💳 Local Mobile Payment Gateway**: Integrated checkout supporting **bKash (বিকাশ)**, **Nagad (নগদ)**, **Rocket (রকেট)**, and Credit/Debit Cards.
- **🔊 Web Audio API Click Feedback**: Haptic sound feedback on buttons and toggles.
- **💬 Floating Support Chat Advisor**: Live assistant with quick Bangla FAQ chips.

---

## 🌐 Custom Domain & Hosting Setup Guide

Mastermind AidIT is fully configured for zero-downtime deployment on all major hosting providers with built-in Single Page Application (SPA) fallback routing.

### 1. Vercel Deployment (Recommended)
1. Push project to GitHub/GitLab.
2. Import project into Vercel dashboard.
3. Vercel automatically detects `vercel.json` and configures single-page app routes.
4. Under **Settings → Domains**, add your custom domain (e.g. `mastermindaidit.com`).
5. Set DNS Records:
   - `A` Record `@` → `76.76.21.21`
   - `CNAME` Record `www` → `cname.vercel-dns.com`

### 2. Netlify Deployment
1. Connect repository in Netlify.
2. Build command: `npm run build`, Publish directory: `dist`.
3. Netlify automatically reads `netlify.toml` and `public/_redirects`.

### 3. Hostinger / cPanel / Shared Apache Hosting
1. Build the production output: `npm run build`.
2. Upload contents of the `dist/` folder to `public_html/`.
3. Ensure `public/.htaccess` is present in `public_html/` so that route refreshes serve `index.html`.

### 4. Firebase Hosting
1. Run `firebase deploy`.
2. `firebase.json` automatically handles single-page rewriting.
3. In **Firebase Console → Authentication → Settings → Authorized domains**, add your custom domain.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling**: Vanilla Tailwind CSS + Custom Design System tokens
- **Animations**: Framer Motion 11
- **Icons**: Lucide React Icons
- **Audio Engine**: Web Audio API

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mishkat2426/mastermind-aid.git

# Navigate into project directory
cd mastermind-aid

# Install dependencies
npm install

# Build for production
npm run build

# Start local preview
npm run preview
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Made with ❤️ by [Mishkat Abedin](https://github.com/mishkat2426) & Mastermind AidIT Team.
