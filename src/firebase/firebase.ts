import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5BllAvyNiBp3xW9mABUQvhI-6rsQHyhY",
  authDomain: "private-properties-2501c.firebaseapp.com",
  projectId: "private-properties-2501c",
  storageBucket: "private-properties-2501c.appspot.com",
  messagingSenderId: "1063276948464",
  appId: "1:1063276948464:web:5928967c3eb78cd2a90b35",
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

