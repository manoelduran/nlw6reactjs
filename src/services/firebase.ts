import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB6MWfI_zEPtAkpTeYwTkMaaZtj-inI7Fs",
    authDomain: "letmeask-9ffd3.firebaseapp.com",
    databaseURL: "https://letmeask-9ffd3-default-rtdb.firebaseio.com",
    projectId: "letmeask-9ffd3",
    storageBucket: "letmeask-9ffd3.appspot.com",
    messagingSenderId: "416183648555",
    appId: "1:416183648555:web:9287f2e25b5388f046056e"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();
  
  export { firebase, auth, database }