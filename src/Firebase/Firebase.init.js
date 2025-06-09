// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATlm857G9IHLvcpGsYXK3EjU4uh_c-HQs",
  authDomain: "athletic-event.firebaseapp.com",
  projectId: "athletic-event",
  storageBucket: "athletic-event.firebasestorage.app",
  messagingSenderId: "985410348247",
  appId: "1:985410348247:web:f2186efbb85a403758fc92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);