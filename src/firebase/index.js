import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCQzsVMfcIO1MHIxdCU0JxxXZLuwIQXyts",
  authDomain: "resumi.firebaseapp.com",
  databaseURL: "https://resumi.firebaseio.com",
  projectId: "resumi",
  storageBucket: "resumi.appspot.com",
  messagingSenderId: "688034897396",
  appId: "1:688034897396:web:290fbf1f7b84a415a86da1",
  measurementId: "G-FQR18L97VG"
};

firebase.initializeApp(config);

export default firebase;