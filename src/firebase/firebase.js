// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvmionVCBsBPy9TO9xXXpMeH9UeGBH_cI",
  authDomain: "craftora-a37bb.firebaseapp.com",
  projectId: "craftora-a37bb",
  storageBucket: "craftora-a37bb.firebasestorage.app",
  messagingSenderId: "1067395963511",
  appId: "1:1067395963511:web:6518acff42a628d8dd0472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Firestore Database
export const db = getFirestore(app);