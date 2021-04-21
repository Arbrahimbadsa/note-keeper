import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAZhvmZYFIEwZxtqf6E_vmGmNkZF_oUJAE",
  authDomain: "note-keeper-f1de8.firebaseapp.com",
  databaseURL: "https://note-keeper-f1de8-default-rtdb.firebaseio.com",
  projectId: "note-keeper-f1de8",
  storageBucket: "note-keeper-f1de8.appspot.com",
  messagingSenderId: "722421639421",
  appId: "1:722421639421:web:c68fc9ec78af8a360c7694",
};
firebase.initializeApp(config);
export default firebase;
