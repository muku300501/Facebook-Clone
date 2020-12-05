import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKLiFL1CnA1gWdWdw9c-x3hV1wTi2f4Oo",
  authDomain: "facebook-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://facebook-by-mukund-chamariya.firebaseio.com",
  projectId: "facebook-by-mukund-chamariya",
  storageBucket: "facebook-by-mukund-chamariya.appspot.com",
  messagingSenderId: "392554403379",
  appId: "1:392554403379:web:b186ec87c94b6aa8793546",
  measurementId: "G-HC2R1K8WP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
