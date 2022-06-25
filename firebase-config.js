import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL6mlSsowy7Acq-PMWYm82p8QCkGwyZMY",
    authDomain: "fir-tutorial-e86fd.firebaseapp.com",
    projectId: "fir-tutorial-e86fd",
    storageBucket: "fir-tutorial-e86fd.appspot.com",
    messagingSenderId: "347404213322",
    appId: "1:347404213322:web:f46a155639c5e0641d1ab3",
    measurementId: "G-95NDVQSFS2"
  };


  const app=initializeApp(firebaseConfig);

  export const db=getFirestore(app);