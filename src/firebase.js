// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCzj_BeKUbztGaINhH8Ko_VwG3CQdoIi9A",
    authDomain: "timetracker-mic.firebaseapp.com",
    databaseURL: "https://timetracker-mic.firebaseio.com",
    projectId: "timetracker-mic",
    storageBucket: "timetracker-mic.appspot.com",
    messagingSenderId: "445190969876",
    appId: "1:445190969876:web:f0b425aa3f21011dfa2501",
    measurementId: "G-BM7CCQRPBX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;