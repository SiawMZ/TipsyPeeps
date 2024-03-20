// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "minimal-bnw.firebaseapp.com",
  projectId: "minimal-bnw",
  storageBucket: "minimal-bnw.appspot.com",
  messagingSenderId: "568644711067",
  appId: "1:568644711067:web:ea29f93be7253ea4bc4c3e",
  measurementId: "G-95KSMT6HKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
