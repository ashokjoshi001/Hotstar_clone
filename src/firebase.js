import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCBU5Nb9S3GSGXm5XoohJ-TY9lTDPdz0Zk",
  authDomain: "hotstart-d03a2.firebaseapp.com",
  projectId: "hotstart-d03a2",
  storageBucket: "hotstart-d03a2.appspot.com",
  messagingSenderId: "739265230737",
  appId: "1:739265230737:web:a0f8420d69819ec5d0cc30",
  measurementId: "G-Y813XJHTDW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
