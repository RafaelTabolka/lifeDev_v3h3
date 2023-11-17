import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWJ5Mr0FqJMONo9JUUAmQkgUzEM5MXahI",
  authDomain: "lifedev-rafael-priscila.firebaseapp.com",
  projectId: "lifedev-rafael-priscila",
  storageBucket: "lifedev-rafael-priscila.appspot.com",
  messagingSenderId: "407382441048",
  appId: "1:407382441048:web:688d1a5b091438d98a9e2d",
  measurementId: "G-PSW0E8QCDG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};