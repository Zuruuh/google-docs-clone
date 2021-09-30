import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7-2XExDwu_2xF0pK0YKYhfMDWUYW9s20",
  authDomain: "zuruh--docs-clone.firebaseapp.com",
  projectId: "zuruh--docs-clone",
  storageBucket: "zuruh--docs-clone.appspot.com",
  messagingSenderId: "501146583380",
  appId: "1:501146583380:web:a8cd5f5895fe90581f48c1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
