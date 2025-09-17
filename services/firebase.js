import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "chefgrocer.firebaseapp.com",
	projectId: "chefgrocer",
	storageBucket: "chefgrocer.appspot.com",
	messagingSenderId: "YOUR_SENDER_ID",
	appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
