// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk5wKuBjW1rpXS384wn2JvNZfEhtFG5gY",
  authDomain: "hello-learner-c9a16.firebaseapp.com",
  projectId: "hello-learner-c9a16",
  storageBucket: "hello-learner-c9a16.appspot.com",
  messagingSenderId: "790478839451",
  appId: "1:790478839451:web:52063c6d32eda94c3cf03e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
