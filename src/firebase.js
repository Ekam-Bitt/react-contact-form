// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-tTbsnwUMPecNHaEeBlL1G88XVa9fUg",
  authDomain: "contact-form-react-3cad0.firebaseapp.com",
  projectId: "contact-form-react-3cad0",
  storageBucket: "contact-form-react-3cad0.appspot.com",
  messagingSenderId: "13413306",
  appId: "1:13413306:web:b277f9fc04e3770c97cb83"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();