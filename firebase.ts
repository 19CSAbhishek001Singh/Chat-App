import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHXp_fNcFKr3_oo8PFND7ji5REtWQYh78",
  authDomain: "realtime-chat-app-1eea7.firebaseapp.com",
  projectId: "realtime-chat-app-1eea7",
  storageBucket: "realtime-chat-app-1eea7.appspot.com",
  messagingSenderId: "1090506012775",
  appId: "1:1090506012775:web:eeaeb6dcbf78d6187b7cc2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
