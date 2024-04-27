// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedylT66Bv0-BrnLyNgjaf_0z9KMwmjzk",
  authDomain: "tomas-react.firebaseapp.com",
  projectId: "tomas-react",
  storageBucket: "tomas-react.appspot.com",
  messagingSenderId: "103561022435",
  appId: "1:103561022435:web:a1ff7685e59a748d1aeed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)