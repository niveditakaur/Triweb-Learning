// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDpFIwYc7G5KgxLqb1u6XWgzynYACN72z4",
    authDomain: "contact-b6ff6.firebaseapp.com",
    projectId: "contact-b6ff6",
    storageBucket: "contact-b6ff6.appspot.com",
    messagingSenderId: "985151006047",
    appId: "1:985151006047:web:3fac29141f19849ff402ea",
    measurementId: "G-Z44920MTN6",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default startFirebase;