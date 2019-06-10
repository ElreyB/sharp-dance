import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { fb } from './apiKeys';

const config = {
  apiKey: `${fb}`,
  authDomain: 'sharp-dance.firebaseapp.com',
  databaseURL: 'https://sharp-dance.firebaseio.com',
  projectId: 'sharp-dance',
  storageBucket: 'sharp-dance.appspot.com',
  messagingSenderId: '1095908484212',
  appId: '1:1095908484212:web:dff6c5b9eef8929f'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
