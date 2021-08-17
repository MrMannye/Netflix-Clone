import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDfmDAyagZrEjQuRaOZ2pg2OusQvQvwDEw",
    authDomain: "netflix-clone-331dd.firebaseapp.com",
    projectId: "netflix-clone-331dd",
    storageBucket: "netflix-clone-331dd.appspot.com",
    messagingSenderId: "482217543214",
    appId: "1:482217543214:web:d8a6f02a8a7bb47d6541bf",
    measurementId: "G-SH1DX0WVXP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};


