import * as firebase from 'firebase';





if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig, "RandomApp");
} else {
    firebase.app("RandomApp");
}

import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { RANDOM_APP } from "./values";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCe6p-etvEmSyLYHdme37W2mEZkldF6YMM',
  authDomain: 'random-generator-f0a1b.firebaseapp.com',
  databaseURL: 'https://random-generator-f0a1b.firebaseio.com',
  projectId: 'random-generator-f0a1b',
  storageBucket: 'random-generator-f0a1b.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:160300842833:ios:f61dc6321962c774455d70',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig, RANDOM_APP);
} else {
  firebase.app(RANDOM_APP);
}