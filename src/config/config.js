// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyADv4h1Y54hj3GvW8U3CzI94QX7et2ARUM",
  authDomain: "shoppingcartlist-227f9.firebaseapp.com",
  projectId: "shoppingcartlist-227f9",
  storageBucket: "shoppingcartlist-227f9.appspot.com",
  messagingSenderId: "291605989916",
  appId: "1:291605989916:web:e0c53bde1c3e4554f96dd9",
  measurementId: "G-L6XGPSMXJF"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 const db=firebase.firestore();
 const storage=firebase.storage()

 export {auth,db,storage}