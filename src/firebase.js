import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZq5ONofrzhRAU1lYYbpe3byIAzl-efFE",
    authDomain: "netflix-clone-d05f5.firebaseapp.com",
    projectId: "netflix-clone-d05f5",
    storageBucket: "netflix-clone-d05f5.appspot.com",
    messagingSenderId: "873143549039",
    appId: "1:873143549039:web:a90bcf8169d473090d219a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };