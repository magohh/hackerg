// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9iu3pa13GObng4AjFwt_8qm7VFPsHjqM",
  authDomain: "hackergift-61512.firebaseapp.com",
  projectId: "hackergift-61512",
  storageBucket: "hackergift-61512.appspot.com",
  messagingSenderId: "974369037943",
  appId: "1:974369037943:web:c167bc13de892f0120b072",
  measurementId: "G-BCK1RFHSBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;