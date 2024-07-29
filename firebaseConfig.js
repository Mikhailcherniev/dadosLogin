// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy0Je2NyAKUQaLE2TfNqmuHti5y2pPJUw",
    authDomain: "meu-projeto-c730e.firebaseapp.com",
    projectId: "meu-projeto-c730e",
    storageBucket: "meu-projeto-c730e.appspot.com",
    messagingSenderId: "373764019173",
    appId: "1:373764019173:web:d42def768191b99598950c"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore };