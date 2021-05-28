import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM7nQiCEjSBVZ76Lg7ahs3p-1JDu8oC7Y",
  authDomain: "disney-f9ad8.firebaseapp.com",
  projectId: "disney-f9ad8",
  storageBucket: "disney-f9ad8.appspot.com",
  messagingSenderId: "721954534501",
  appId: "1:721954534501:web:438086a8466b621ea4028c",
  measurementId: "G-D2KC1PD7Y9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
