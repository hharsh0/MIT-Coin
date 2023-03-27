import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZ_jAs3HQ1BEALrJCCM1LucJUG8O7Ce6A",
  authDomain: "mit-coin.firebaseapp.com",
  projectId: "mit-coin",
  storageBucket: "mit-coin.appspot.com",
  messagingSenderId: "568924532628",
  appId: "1:568924532628:web:cb447267400a7548d1a981",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const projectFirestore = firebase.firestore();

export { projectFirestore };