import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAKE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} from '@env';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  Firestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAKE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

type FirebaseObject = {
  auth?: Auth;
  firestore?: Firestore;
};

export const firebaseObject: FirebaseObject = {};

try {
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth();

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099/');
  }

  firebaseObject.firestore = firestore;
  firebaseObject.auth = auth;
} catch (error) {
  console.error(error);
}
