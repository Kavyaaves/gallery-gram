import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiPLUCb7OWx-Vtgu97BLvf9pGU-r6qq5k",
  authDomain: "gallery-store-c165f.firebaseapp.com",
  projectId: "gallery-store-c165f",
  storageBucket: "gallery-store-c165f.appspot.com",
  messagingSenderId: "508525758387",
  appId: "1:508525758387:web:68276645f2a003f029adc6",
  measurementId: "G-W67HCQD434"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp };