import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCu3EH0-2fEurIGlhLEg_UZFHXdsOXcOGM",
    authDomain: "personal-portfolio-f1e9f.firebaseapp.com",
    projectId: "personal-portfolio-f1e9f",
    storageBucket: "personal-portfolio-f1e9f.appspot.com",
    messagingSenderId: "1068907648967",
    appId: "1:1068907648967:web:fca687a1963fc9ab276be2",
    measurementId: "G-RKBW4FMZ16"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);