// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9U3doMYsJcblo8PCdqEVgmdTOuPtB_M",
  authDomain: "omfnusmtqu.firebaseapp.com",
  projectId: "omfnusmtqu",
  storageBucket: "omfnusmtqu.appspot.com",
  messagingSenderId: "906308868665",
  appId: "1:906308868665:web:b03b2c9ef700d3a85e8be8",
  measurementId: "G-LJNXKRP5CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
