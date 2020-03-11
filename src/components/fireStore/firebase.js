import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyD8C47eTaRcexc3_NQ41MLKVNfwjkkYB8Y",
  authDomain: "recept-65be8.firebaseapp.com",
  databaseURL: "https://recept-65be8.firebaseio.com",
  projectId: "recept-65be8",
  storageBucket: "recept-65be8.appspot.com",
  messagingSenderId: "606404202569",
  appId: "1:606404202569:web:eca4efe2ecb85db0efef98"
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
