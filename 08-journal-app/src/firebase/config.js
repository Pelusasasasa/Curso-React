// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzkCyfPSgQ0LiJHTXTkZOVSx5E0XwSgAM",
  authDomain: "react-cursos-b18e0.firebaseapp.com",
  projectId: "react-cursos-b18e0",
  storageBucket: "react-cursos-b18e0.appspot.com",
  messagingSenderId: "806317794978",
  appId: "1:806317794978:web:9bac70d5655c2a41c619fb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );