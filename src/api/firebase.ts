import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAKE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} from '@env';
import { initializeApp, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAKE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();

// TODO: Remove for production use
connectFirestoreEmulator(firestore, 'localhost', 8080);
connectAuthEmulator(auth, 'http://localhost:9099/');

async function getParams(database: Firestore) {
  const paramCol = collection(database, 'params');
  const paramSnapshot = await getDocs(paramCol);
  const paramList = paramSnapshot.docs.map((doc) => doc.data());

  return paramList;
}

export { auth, getParams, firestore };
