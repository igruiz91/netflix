import Firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'

//import {seedDatabase} from '../seed';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzA2yRn_4LvZuur7W0sdAzPWUv5B50Xh0",
  authDomain: "netflix-3bef7.firebaseapp.com",
  databaseURL: "https://netflix-3bef7.firebaseio.com",
  projectId: "netflix-3bef7",
  storageBucket: "netflix-3bef7.appspot.com",
  messagingSenderId: "318119600861",
  appId: "1:318119600861:web:d8b3da9165f2109c027134",
  measurementId: "G-T00NCG9RDV"
};

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase)

export { firebase }