import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcqWDF2OrvkYfC98okapTsMp1Yn7GfS8o",
  authDomain: "factadmin-6b2ac.firebaseapp.com",
  databaseURL: "https://factadmin-6b2ac-default-rtdb.firebaseio.com",
  projectId: "factadmin-6b2ac",
  storageBucket: "factadmin-6b2ac.appspot.com",
  messagingSenderId: "946653782982",
  appId: "1:946653782982:web:a079c2c56ee22f995e08c7",
  measurementId: "G-K3JH3QCWZJ",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
