import firebase from 'firebase';
// const firebase = require('firebase');
// require('firebase/firestore');

const firebaseconfig = {
  apiKey: 'AIzaSyA5PGnI-V-5894lvvx8PyD714u4AElPyXo',
  authDomain: 'micro-blogging-itc-bootcamp.firebaseapp.com',
  databaseURL: 'https://micro-blogging-itc-bootcamp.firebaseio.com',
  projectId: 'micro-blogging-itc-bootcamp',
  storageBucket: 'micro-blogging-itc-bootcamp.appspot.com',
  messagingSenderId: '727553234741',
  appId: '1:727553234741:web:c0929c39155c3312fb1e7c',
};

firebase.initializeApp(firebaseconfig);
const fireBaseDB = firebase.firestore();

export default fireBaseDB;
