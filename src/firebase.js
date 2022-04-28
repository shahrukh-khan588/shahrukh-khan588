import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {getStorage} from 'firebase/storage'
const firebaseConfig = initializeApp({
  apiKey: `AIzaSyDgScbkQJ_78Oe4PrJ3xNrvIChre1aXJc0`,
  authDomain: "travel-recommendation-sy-e9a27.firebaseapp.com",
  projectId: "travel-recommendation-sy-e9a27",
  storageBucket: "travel-recommendation-sy-e9a27.appspot.com",
  messagingSenderId: "214054264888",
  appId: "1:214054264888:web:bb32b2d0f8c6a1907f86cd",
})

export const auth = getAuth(firebaseConfig)
export const firestore = getFirestore(firebaseConfig)
export const firebaseStorage = getStorage(firebaseConfig)