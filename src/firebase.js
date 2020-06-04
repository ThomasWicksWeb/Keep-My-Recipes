import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBU_wMuhdT9-v4DTBw1e1ijZWBX9OpME7Y",
  authDomain: "keepmyrecipes-7843a.firebaseapp.com",
  databaseURL: "https://keepmyrecipes-7843a.firebaseio.com",
  projectId: "keepmyrecipes-7843a",
  storageBucket: "keepmyrecipes-7843a.appspot.com",
  messagingSenderId: "914159830666",
  appId: "1:914159830666:web:64c305465e102f3e240f73",
  measurementId: "G-XFMZMQ56VM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
