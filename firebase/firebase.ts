// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHr2jc4U1zyK5dEOY6pY345874BVJFkZg",
  authDomain: "nextauth-username-passwo-bdeed.firebaseapp.com",
  projectId: "nextauth-username-passwo-bdeed",
  storageBucket: "nextauth-username-passwo-bdeed.appspot.com",
  messagingSenderId: "1060393032382",
  appId: "1:1060393032382:web:795ee819eddc739a509cef",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
 const auth = getAuth()

 export { app, auth }