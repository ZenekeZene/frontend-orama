import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBqcjH-LRya-PRjCurQ09dGu-V-c8nC6pg",
  authDomain: "techiwall.firebaseapp.com",
  databaseURL: "https://techiwall.firebaseio.com",
  projectId: "techiwall",
  storageBucket: "techiwall.appspot.com",
  messagingSenderId: "713533972018",
  appId: "1:713533972018:web:5738967796d7b554e7e62b",
  measurementId: "G-VCSR05EQ9N"
};

// Initialize Firebase
const defaultProject = firebase.initializeApp(firebaseConfig);
const database = defaultProject.firestore();
const auth = defaultProject.auth();

export { defaultProject, database, auth };
