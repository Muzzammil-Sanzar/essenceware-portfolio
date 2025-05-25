// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6pU1n0TVGqKSu4i_jl1IjyO4XcLktD-M",
  authDomain: "duseca-459ab.firebaseapp.com",
  projectId: "duseca-459ab",
  storageBucket: "duseca-459ab.appspot.com",
  messagingSenderId: "62785558872",
  appId: "1:62785558872:web:daf08064fb626fe0b0ed2d",
  measurementId: "G-C7GL5FWRMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
export { storage, serverTimestamp }