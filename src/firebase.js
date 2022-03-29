/* import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzAyT9UPOM4pgkcMOgGfJ4UrgLMEMj2eA",
  authDomain: "linkedin-clone-e1403.firebaseapp.com",
  projectId: "linkedin-clone-e1403",
  storageBucket: "linkedin-clone-e1403.appspot.com",
  messagingSenderId: "975904219005",
  appId: "1:975904219005:web:3ee446570849fa250eb614",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; */

import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBzAyT9UPOM4pgkcMOgGfJ4UrgLMEMj2eA",
  authDomain: "linkedin-clone-e1403.firebaseapp.com",
  projectId: "linkedin-clone-e1403",
  storageBucket: "linkedin-clone-e1403.appspot.com",
  messagingSenderId: "975904219005",
  appId: "1:975904219005:web:3ee446570849fa250eb614",
};
const firebaseApp = firebase.initializeApp(config);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
