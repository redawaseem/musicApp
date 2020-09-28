import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyBuAvHVa1GLPTJqANtRFZsk5casPB6GMvY",
    authDomain: "music-app-project-five.firebaseapp.com",
    databaseURL: "https://music-app-project-five.firebaseio.com",
    projectId: "music-app-project-five",
    storageBucket: "music-app-project-five.appspot.com",
    messagingSenderId: "1053875605858",
    appId: "1:1053875605858:web:4c937357c1c5bdd7fc9c3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 