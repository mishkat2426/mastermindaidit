/**
 * Firebase Client SDK Service
 * Standardized Firebase configuration and auth service export for MASTERMIND AIDIT.
 * Includes defensive fallback handling for local development when env keys are unpopulated.
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key-mastermind",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "mastermindaidit.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "mastermindaidit",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "mastermindaidit.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef"
};

// Safely initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let authInstance: Auth;

try {
  authInstance = getAuth(app);
} catch (error) {
  console.warn("Firebase Auth initialized in local fallback mode:", error);
  authInstance = {
    onAuthStateChanged: (callback: any) => {
      callback(null);
      return () => {};
    },
  } as unknown as Auth;
}

/** Firebase Authentication Instance */
export const auth = authInstance;

export default app;
