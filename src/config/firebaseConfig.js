// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOFbiin9Nz_z5TyL9-kU_G0K2i8d20gwc",
  authDomain: "irctc-clone-1a24a.firebaseapp.com",
  projectId: "irctc-clone-1a24a",
  storageBucket: "irctc-clone-1a24a.firebasestorage.app",
  messagingSenderId: "915397424596",
  appId: "1:915397424596:web:a73ccac5ecbc7414c65241",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
