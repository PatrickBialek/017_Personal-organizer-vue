import firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPuJCabJPvUh4C9E1sTxpQDjE8QfZPp28",
  authDomain: "personal-organizer-vue.firebaseapp.com",
  databaseURL: "https://personal-organizer-vue.firebaseio.com",
  projectId: "personal-organizer-vue",
  storageBucket: "personal-organizer-vue.appspot.com",
  messagingSenderId: "821103523957",
  appId: "1:821103523957:web:b248dcce2a4c05d587603c",
  measurementId: "G-Y8CMCNMT9M"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();