import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTGBdR5fcNr4KYd2mPY4pN0DcCvc0ubzw",

  authDomain: "ask-and-answer-subjects.firebaseapp.com",

  projectId: "ask-and-answer-subjects",

  storageBucket: "ask-and-answer-subjects.appspot.com",

  messagingSenderId: "851885257468",

  appId: "1:851885257468:web:ac14714f80efc34eccdd79",

  measurementId: "G-PD3L89TNZL"

};
const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app)
export const fireauth=getAuth(app)
