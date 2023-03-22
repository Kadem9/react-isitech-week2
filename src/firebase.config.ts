import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// J'ai importé les variables d'environnement dans le fichier .env.local pour qu'elle ne soit pas visible sur github
const firebaseConfig = {
  apiKey: "AIzaSyA6ChHDrkCaRtQB9CMWZgOd-G9jAyTb1hA",
  authDomain: "react-isitech-d2f39.firebaseapp.com",
  projectId: "react-isitech-d2f39",
  storageBucket: "react-isitech-d2f39.appspot.com",
  messagingSenderId: "117512280945",
  appId: "1:117512280945:web:9142da1b722d398fa5f4d0"
};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const cartCollection = collection(db, "carts");
