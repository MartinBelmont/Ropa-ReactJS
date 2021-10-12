import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0Wt-5czTwEPTX_xAA2GgDNIdPtET-LFM",
  authDomain: "ropa-ecommerce-react.firebaseapp.com",
  projectId: "ropa-ecommerce-react",
  storageBucket: "ropa-ecommerce-react.appspot.com",
  messagingSenderId: "717204193125",
  appId: "1:717204193125:web:dda2b3246066016b78ab8c",

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

// Servicios
export const getFirestore = () => firebase.firestore(app);