// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8T9ilt1CafUddmoV2F_im6Fo7Mus9aiA",
  authDomain: "instagram-com-173.firebaseapp.com",
  projectId: "instagram-com-173",
  storageBucket: "instagram-com-173.appspot.com",
  messagingSenderId: "1024382554732",
  appId: "1:1024382554732:web:2dc429830ec06ab0977e49",
  measurementId: "G-V7ZHB8T0F2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
