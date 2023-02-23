// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-a4209.firebaseapp.com",
  projectId: "auth-a4209",
  storageBucket: "auth-a4209.appspot.com",
  messagingSenderId: "305052171359",
  appId: "1:305052171359:web:28da9bc86fa85c1f5f2fea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);