// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB_9YcN6ph55NP3yQ9X-t-37y-DJaW3mbM",
  authDomain: "trip-project-7f65b.firebaseapp.com",
  projectId: "trip-project-7f65b",
  storageBucket: "trip-project-7f65b.appspot.com",
  messagingSenderId: "741949545380",
  appId: "1:741949545380:web:7b9ff81ac55b72f5dcbf31",
  measurementId: "G-G3MRQSETL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore( app );
