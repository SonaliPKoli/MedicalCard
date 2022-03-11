import   firebase from 'firebase';

import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC2Ijsd_gKDwxBVsvVRFEpI7E4KRzoPO8c",
    authDomain: "finalapp-a3610.firebaseapp.com",
    projectId: "finalapp-a3610",
    storageBucket: "finalapp-a3610.appspot.com",
    messagingSenderId: "410405662678",
    appId: "1:410405662678:web:e96d752ffcbe381ac2be77"
  };

  let app;
  

  if( firebase.apps.length === 0){
      app= firebase.initializeApp(firebaseConfig);
  }
  else{
      app=firebase.app();
  }
const db=app.firestore();
const storageRef = firebase.storage();
const auth =firebase.auth();
export {db,auth,storageRef};