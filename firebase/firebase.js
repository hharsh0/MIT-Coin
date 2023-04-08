import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ_jAs3HQ1BEALrJCCM1LucJUG8O7Ce6A",
  authDomain: "mit-coin.firebaseapp.com",
  projectId: "mit-coin",
  storageBucket: "mit-coin.appspot.com",
  messagingSenderId: "568924532628",
  appId: "1:568924532628:web:cb447267400a7548d1a981",
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

export { projectFirestore, projectAuth };
