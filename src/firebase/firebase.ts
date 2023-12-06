import { FirebaseError, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8WOnUC6pRs_wi-b40z264_qWf3fBTXh4',
  authDomain: 'graphiql-reactmaniacs.firebaseapp.com',
  projectId: 'graphiql-reactmaniacs',
  storageBucket: 'graphiql-reactmaniacs.appspot.com',
  messagingSenderId: '295355622156',
  appId: '1:295355622156:web:bf1c5f8c473094b99edf29',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.error(err.code);
    }
  }
};
const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof FirebaseError) {
      console.error(err.code);
    }
  }
};

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
