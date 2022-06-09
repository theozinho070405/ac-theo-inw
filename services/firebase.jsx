// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsPYE7pHgDxMxzwx483HG2LdBgpzc8U4M",
    authDomain: "crud-simples-3ea16.firebaseapp.com",
    projectId: "crud-simples-3ea16",
    storageBucket: "crud-simples-3ea16.appspot.com",
    messagingSenderId: "841429494908",
    appId: "1:841429494908:web:5c3bf7e7c40ba73a15edf9"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)