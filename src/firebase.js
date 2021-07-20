import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAUUEW_WXrVkhebolL1Zn2kFyUF6ZxSQHY",
  authDomain: "slack-clone-20e56.firebaseapp.com",
  projectId: "slack-clone-20e56",
  storageBucket: "slack-clone-20e56.appspot.com",
  messagingSenderId: "909022605389",
  appId: "1:909022605389:web:7df229c39931b9777eac04",
  measurementId: "G-7FJTYN0P5F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
