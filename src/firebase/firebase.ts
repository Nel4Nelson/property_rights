import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "private-properties-2501c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: "private-properties-2501c.appspot.com",
  messagingSenderId: "1063276948464",
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: "G-1GG20TERXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};

