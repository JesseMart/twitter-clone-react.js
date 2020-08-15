import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCiVIywKtf9nWOf4FyYFASv49Xyb2rOojw",
    authDomain: "twitter-clone-55274.firebaseapp.com",
    databaseURL: "https://twitter-clone-55274.firebaseio.com",
    projectId: "twitter-clone-55274",
    storageBucket: "twitter-clone-55274.appspot.com",
    messagingSenderId: "258656156220",
    appId: "1:258656156220:web:8402f5cd89725a469d2139",
    measurementId: "G-LXBMFX6MGW"
  };
    // connected firebase to the backend
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;