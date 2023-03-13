import { initializeApp } from "firebase/app";
//import firebase from 'firebase'

import {getAuth, GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth'
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

const onLogin =async (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //navigate("/")
      console.log(user);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });
 
}

const signIn = () => {
  //auth.signInWithPopup(provider).catch((error) => alert(error.message));
signInWithPopup(auth,provider)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
//
navigate('/')
console.log(user)

//console.log(token)

// IdP data available using getAdditionalUserInfo(result)
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...

});
};

const onRegister = async() => {
  await createUserWithEmailAndPassword(auth, email, password,confirmPassword)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //navigate("/login")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });

  }
  


export {auth,signIn,onLogin,onRegister}
////const analytics = getAnalytics(app);

export default app;


