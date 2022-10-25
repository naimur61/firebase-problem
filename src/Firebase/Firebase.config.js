// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC5e65Z4SLlNmet5XfmK3mfg3TArJBv6xQ",
   authDomain: "assignment-10-94224.firebaseapp.com",
   projectId: "assignment-10-94224",
   storageBucket: "assignment-10-94224.appspot.com",
   messagingSenderId: "940408408426",
   appId: "1:940408408426:web:c91acb90c8b2c97904fd13"
   // apiKey: process.env.REACT_APP_apiKey,
   // authDomain: process.env.REACT_APP_authDomain,
   // projectId: process.env.REACT_APP_projectId,
   // storageBucket: process.env.REACT_APP_storageBucket,
   // messagingSenderId: process.env.REACT_APP_messagingSenderId,
   // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
