// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw5aD3zPu7N6ChE4Cez4cSCrT4886tUug",
  authDomain: "livemeteranalytics.firebaseapp.com",
  projectId: "livemeteranalytics",
  storageBucket: "livemeteranalytics.appspot.com",
  messagingSenderId: "419699626349",
  appId: "1:419699626349:web:376cefc3caba8495734a64",
  measurementId: "G-D0TCDBNK1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
