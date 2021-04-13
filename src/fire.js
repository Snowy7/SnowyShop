import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCFuf4vB3dfSu67pXchjfAtRrOmOoRgW6k",
  authDomain: "snowyshopreact.firebaseapp.com",
  projectId: "snowyshopreact",
  storageBucket: "snowyshopreact.appspot.com",
  messagingSenderId: "755215910357",
  appId: "1:755215910357:web:9cf4a3a3b2dba5dfe4a95c",
  measurementId: "G-GDBJVBKCZQ"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;