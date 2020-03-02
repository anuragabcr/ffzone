import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBjyV8q9MC0_JJmJT7-WNf4Z3aiN5veNug",
    authDomain: "ffzone-bd27c.firebaseapp.com",
    databaseURL: "https://ffzone-bd27c.firebaseio.com",
    projectId: "ffzone-bd27c",
    storageBucket: "ffzone-bd27c.appspot.com",
    messagingSenderId: "894369778657",
    appId: "1:894369778657:web:74630ea7e256cd3301a0a0",
    measurementId: "G-9NCM4575S2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const storage  =firebase.storage();

  export default storage;