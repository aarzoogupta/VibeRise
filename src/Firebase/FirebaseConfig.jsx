import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDGBWdJ_aRh9W-44fj4Ql9afq8BkG9CDxQ",
  authDomain: "viberisewithouttest.firebaseapp.com",
  projectId: "viberisewithouttest",
  storageBucket: "viberisewithouttest.firebasestorage.app",
  messagingSenderId: "651979665303",
  appId: "1:651979665303:web:f7a6171cc0fe28d163ded2"
};

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
