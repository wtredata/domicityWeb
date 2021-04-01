import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA0sxZTDajgnWredjniNyg2HtNL2GQWQmA",
  authDomain: "prueba22-3ad45.firebaseapp.com",
  databaseURL: "https://prueba22-3ad45.firebaseio.com",
  projectId: "prueba22-3ad45",
  storageBucket: "prueba22-3ad45.appspot.com",
  messagingSenderId: "388112643953",
  appId: "1:388112643953:web:ccb3d689ad72a84c3428d0",
};

firebase.initializeApp(config);

export default {
  messaging: firebase.messaging(),
};
