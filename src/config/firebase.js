// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY6hIFhRjQkYWEzU4Strb7xayIo-mPOFQ",
  authDomain: "continentalhost-71577.firebaseapp.com",
  projectId: "continentalhost-71577",
  storageBucket: "continentalhost-71577.appspot.com",
  messagingSenderId: "531773768761",
  appId: "1:531773768761:web:a6454b25433f2d272a39e8",
  measurementId: "G-R842BRV67S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
