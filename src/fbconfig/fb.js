import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import config from "../apiKeys";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const Firebase = firebase;
export const auth = firebase.auth();
export const db = firebase.database();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
