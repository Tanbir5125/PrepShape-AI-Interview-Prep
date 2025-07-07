// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXFxZ2pIvLjbxwkryOZ8ZfDnJbNknoV9M",
  authDomain: "prepshape-e47ce.firebaseapp.com",
  projectId: "prepshape-e47ce",
  storageBucket: "prepshape-e47ce.firebasestorage.app",
  messagingSenderId: "552388968021",
  appId: "1:552388968021:web:a0237b26b7ad486572dedc",
  measurementId: "G-JVXS1S9HSV",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);