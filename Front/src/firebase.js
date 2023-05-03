// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6qODctz_r-TUBNLlRbGVfS9QbHZZu-KA",
  authDomain: "fenix-9fcb5.firebaseapp.com",
  projectId: "fenix-9fcb5",
  storageBucket: "fenix-9fcb5.appspot.com",
  messagingSenderId: "605294499324",
  appId: "1:605294499324:web:e4ecd23419781d9d5c0e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

