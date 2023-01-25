import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTDMszlSxGvWHezYOnsHppy9mtSMXM0rw",
  authDomain: "giphysentiment.firebaseapp.com",
  projectId: "giphysentiment",
  storageBucket: "giphysentiment.appspot.com",
  messagingSenderId: "669033236943",
  appId: "1:669033236943:web:27f5ccd6906032829d6aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;