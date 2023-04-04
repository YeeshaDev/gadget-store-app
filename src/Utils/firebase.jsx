import { initializeApp } from "firebase/app";
//import firebase from 'firebase'

import {getAuth, GoogleAuthProvider,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import "firebase/compat/auth";
import {getFirestore} from 'firebase/firestore/lite'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRq3ijOarklKlZ1CQWAeMvYu0ItBdNNqs",
  authDomain: "gadgets-3791f.firebaseapp.com",
  projectId: "gadgets-3791f",
  storageBucket: "gadgets-3791f.appspot.com",
  messagingSenderId: "191932745704",
  appId: "1:191932745704:web:c8af9f62096ed2072a465d",
  measurementId: "G-YP1L8VF4TD"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //const db = getFirestore();
//const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });



 const auth = getAuth(app);
 const  db = getFirestore(app);
 const storage = getStorage(app);
 const provider = new GoogleAuthProvider();
 //const navigate = useNavigate();

const onLogin =async (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/")
      console.log(user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });
 
}




export {auth,provider,onLogin,db,storage}
////const analytics = getAnalytics(app);

export default app;


