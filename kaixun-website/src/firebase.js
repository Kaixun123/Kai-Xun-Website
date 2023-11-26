// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrgM8FXiz4qcmLZkS0QeLtP6_9AY7S9os",
  authDomain: "juaykaixun99.firebaseapp.com",
  projectId: "juaykaixun99",
  storageBucket: "juaykaixun99.appspot.com",
  messagingSenderId: "727459083708",
  appId: "1:727459083708:web:aa3f7b4f3d8fd745a427b9",
  measurementId: "G-DDKRVP4NNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);