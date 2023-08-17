// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

import {
  getDatabase,
  ref,
  set,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBLQ0a_JC4787AOzqgw_o2PeEJPbNkymzw',
  authDomain: 'fir-38205.firebaseapp.com',
  databaseURL: 'https://fir-38205-default-rtdb.firebaseio.com',
  projectId: 'fir-38205',
  storageBucket: 'fir-38205.appspot.com',
  messagingSenderId: '623480920331',
  appId: '1:623480920331:web:4cc3b52e98ed9d82dd6a0e',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// const submitButton = document.querySelector('#submitButton');
// submitButton.addEventListener('click', e => {
  //   e.preventDefault();
//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
  //       console.log(email + ' ' + password);
//       const user = userCredential.user;
//     })
//     .catch(error => {
  //       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// // });

const submitButton = document.querySelector('#submitButton');


export default signinWithEmail = (email, password) => {

    const auth = getAuth(app);
    e.preventDefault();
    var user;
    
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        console.log(email + ' ' + password);
        user = userCredential.user;
        
      })
      .then(() => {
        const reference = ref(db, 'users/' + user.UserImpl.uid);
        set(reference, {
          email: email,
          password: password,
        });
      })
      .catch(error => {
        createUserWithEmailAndPassword(auth, email, password);
      //   window.location = '.././personal.html';
        console.log(`created: ${email}  ${password}`);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
};



