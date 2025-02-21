import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDmv-m7AVZTYaT8kP9Q5dSHJmAdLtJ1hFM",
    authDomain: "viberise-d5f75.firebaseapp.com",
    projectId: "viberise-d5f75",
    storageBucket: "viberise-d5f75.firebasestorage.app",
    messagingSenderId: "885463173700",
    appId: "1:885463173700:web:a2cbd91cc862d692e80a11",
    measurementId: "G-L92VLF7NZQ"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDmv-m7AVZTYaT8kP9Q5dSHJmAdLtJ1hFM",
//   authDomain: "viberise-d5f75.firebaseapp.com",
//   projectId: "viberise-d5f75",
//   storageBucket: "viberise-d5f75.firebasestorage.app",
//   messagingSenderId: "885463173700",
//   appId: "1:885463173700:web:a2cbd91cc862d692e80a11",
// };
// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);
// const auth = getAuth(app)
// export {fireDB,auth } ;
