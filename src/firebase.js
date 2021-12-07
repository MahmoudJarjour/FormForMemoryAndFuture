// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyATQv5A5IH3jykhV0U2bpimIwlB2CMS9Xc',
	authDomain: 'forum-for-memory-and-future.firebaseapp.com',
	projectId: 'forum-for-memory-and-future',
	storageBucket: 'forum-for-memory-and-future.appspot.com',
	messagingSenderId: '292651714190',
	appId: '1:292651714190:web:d121a09c6d9264e108ebdf',
	measurementId: 'G-WR9MSGVNZ9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
	const [user, setUser] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
		return () => unsubscribe();
	}, []);
	return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
	const auth = useContext(AuthContext);
	return { ...auth, isAuthenticated: auth.user !== null };
};
