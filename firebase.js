// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLtS7yK0QEo31Fm9zDziwqnXWOuivaBBE",
  authDomain: "twitter-clone-e2316.firebaseapp.com",
  projectId: "twitter-clone-e2316",
  storageBucket: "twitter-clone-e2316.appspot.com",
  messagingSenderId: "402864815561",
  appId: "1:402864815561:web:c568a323d887a86142fc18",
  measurementId: "G-TK59SDX6VB",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
