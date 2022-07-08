// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZIm3OKZLqsFwoIXMQTjWHs0L8EDPbm5I",
  authDomain: "mummy-s-website.firebaseapp.com",
  projectId: "mummy-s-website",
  storageBucket: "mummy-s-website.appspot.com",
  messagingSenderId: "595087213209",
  appId: "1:595087213209:web:87f0e77de28beafe8a2e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();