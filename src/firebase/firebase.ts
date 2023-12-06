// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  //createUserWithEmailAndPassword,
  //signInWithEmailAndPassword,
  //signOut,
  getAuth,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8WOnUC6pRs_wi-b40z264_qWf3fBTXh4',
  authDomain: 'graphiql-reactmaniacs.firebaseapp.com',
  projectId: 'graphiql-reactmaniacs',
  storageBucket: 'graphiql-reactmaniacs.appspot.com',
  messagingSenderId: '295355622156',
  appId: '1:295355622156:web:bf1c5f8c473094b99edf29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
