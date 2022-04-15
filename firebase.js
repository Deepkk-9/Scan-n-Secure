// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from 'firebase/auth/react-native';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgPz1oqU31agFwb2YuEXh7iUQwWVZpqbU",
    authDomain: "scan-n.firebaseapp.com",
    projectId: "scan-n",
    storageBucket: "scan-n.appspot.com",
    messagingSenderId: "637474944988",
    appId: "1:637474944988:web:648e7b6645cd2783444119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
