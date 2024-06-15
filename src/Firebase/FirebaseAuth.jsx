import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFHsuXBzgIIpd5S0avGgvGdp5Bei-MAhg",
    authDomain: "kkmart-bc3e5.firebaseapp.com",
    projectId: "kkmart-bc3e5",
    storageBucket: "kkmart-bc3e5.appspot.com",
    messagingSenderId: "1017101028394",
    appId: "1:1017101028394:web:f8b6b009ddf86247b20753",
    measurementId: "G-8425YS3QN2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const db = getFirestore(app);

  export  { app, auth, db } ;