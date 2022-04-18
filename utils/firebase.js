// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEagUodXKam5r54TTY8PQWZz2YFuBhUVs",
  authDomain: "personal-site-5175d.firebaseapp.com",
  projectId: "personal-site-5175d",
  storageBucket: "personal-site-5175d.appspot.com",
  messagingSenderId: "604680288921",
  appId: "1:604680288921:web:b34c56c39beaf431f39608",
  measurementId: "G-3H3D0QTL35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== "undefined") {
  const analytics = getAnalytics(app);
  console.log(analytics);
}
