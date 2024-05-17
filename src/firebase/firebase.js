// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPHRL22eS9-U8lt_zPKgj-c4g-49hCjTI",
  authDomain: "projectdg-beb1c.firebaseapp.com",
  projectId: "projectdg-beb1c",
  storageBucket: "projectdg-beb1c.appspot.com",
  messagingSenderId: "952599964857",
  appId: "1:952599964857:web:76dd6bf477d6f2e1dfff68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { 
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
 };