// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "rn-email-pass.firebaseapp.com",
  projectId: "rn-email-pass",
  storageBucket: "rn-email-pass.appspot.com",
  messagingSenderId: "786919648116",
  appId: "1:786919648116:web:7391594e809cfa6cb4da21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app