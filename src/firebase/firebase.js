import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

var firebaseConfig = {
  apiKey: "AIzaSyAcBS5cHFdZQWVEvT6w7RiWFQW5FJpSQhg",
  authDomain: "antiki.firebaseapp.com",
  databaseURL: "https://antiki.firebaseio.com",
  projectId: "antiki",
  storageBucket: "",
  messagingSenderId: "331965403118",
  appId: "1:331965403118:web:7b926256cc8719566b48ff",
  measurementId: "G-634CE9NNWN"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
