import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAWKdhWEQASLEJpI385gFFBa9dXbvmuTAQ",
  authDomain: "askanswer-a53dd.firebaseapp.com",
  projectId: "askanswer-a53dd",
  storageBucket: "askanswer-a53dd.appspot.com",
  messagingSenderId: "618571757862",
  appId: "1:618571757862:web:7a6457ca796c92949269e7",
  measurementId: "G-463RBZLB4B"
};
const app = initializeApp(firebaseConfig);
export const  firestoreFriends=getFirestore(app)