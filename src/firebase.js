import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwuiZjxhCjq-DQ9RdpwtMQMu4UzVELDdA",
  authDomain: "disneyplus-clone-14e8e.firebaseapp.com",
  projectId: "disneyplus-clone-14e8e",
  storageBucket: "disneyplus-clone-14e8e.appspot.com",
  messagingSenderId: "189446864947",
  appId: "1:189446864947:web:c662b16375713b307fe346",
  measurementId: "G-S9VGKYB9TF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); // Authentication
const storage = firebase.storage();

// when we try to login, Google provides differnet accounts of ours.
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
