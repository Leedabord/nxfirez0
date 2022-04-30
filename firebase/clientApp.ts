import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyAvB4R09YDHtfxOW7C3OQNLUGi9ce4qrws",
  authDomain: "todo-firebase-17b28.firebaseapp.com",
  databaseURL: "https://todo-firebase-17b28.firebaseio.com",
  projectId: "todo-firebase-17b28"
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
