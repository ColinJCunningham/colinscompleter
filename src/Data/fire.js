import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBhaqdgo-TItm3anTOGlbTQB5DsgkNriXg",
  authDomain: "colins-file-completer.firebaseapp.com",
  projectId: "colins-file-completer",
  storageBucket: "colins-file-completer.appspot.com",
  messagingSenderId: "540830332594",
  appId: "1:540830332594:web:74a3075a5c48d081087bab",
  measurementId: "G-6TTHGNXE9Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
