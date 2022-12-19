// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import 'firebase/storage'
// import 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX6x0bmIEyzv8fyZKEQdOt4_5d_Yhj6ZI",
  authDomain: "image-c9638.firebaseapp.com",
  projectId: "image-c9638",
  storageBucket: "image-c9638.appspot.com",
  messagingSenderId: "853968468685",
  appId: "1:853968468685:web:d6d0fe3ffc22127152c784",
  measurementId: "G-1S2SKM7MJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


console.log('fart')
const projectStorage = getStorage(app)
const db = getFirestore(app)
const storageRef = ref(projectStorage)

export {projectStorage}
export {db}
export {storageRef}