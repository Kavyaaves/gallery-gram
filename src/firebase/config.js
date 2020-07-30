import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqpefrfAb_wXUiyfBZsNqkqOyTWLPgOYg",
  authDomain: "gallery-gram.firebaseapp.com",
  databaseURL: "https://gallery-gram.firebaseio.com",
  projectId: "gallery-gram",
  storageBucket: "gallery-gram.appspot.com",
  messagingSenderId: "370183385304",
  appId: "1:370183385304:web:180f0640c6edf4ad2767ad",
  measurementId: "G-TW4DVN8N65",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };