import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signInAnonymously,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';
// create a new context to track whether user is authenticated throughout the app
const userAuthContext = createContext();
// this function provides the rest of the app with all the necessary functions for user auth management (e.g. login, logout etc.)
export function UserAuth({ children }) {
	const [user, setUser] = useState({});
	const currentUser = auth.currentUser;

	// displays info of current user open log in (w/ email, or google, or anon)
	// if (currentUser) {
	// 	console.log(currentUser.uid, currentUser.email)
	// }

	// This allows user to log in with the email pw combo they created
	async function logIn(email, password) {
		return await signInWithEmailAndPassword(auth, email, password);
	}
	// This allows the user to sign up assuming sign up with email / password
	async function signUp(email, password) {
		return await createUserWithEmailAndPassword(auth, email, password);
	}
	// This allows the user to log out whether signed in anonymously or via email/pw creation
	async function logOut() {
		signOut(auth);
	}

	async function logInAnonymously() {
		return signInAnonymously(auth);
	}

	async function googleSignIn () {
		const googleAuthProvider = new GoogleAuthProvider();
		return await signInWithPopup(auth, googleAuthProvider);
	}
	// this useEffect is to set the current user to whoever is logged in when auth state changes (either logged in as email/pw or anonymously)
	// returns a function that allows the db auth state listener to unsubscribe when component dismounts
	// onAuthStateChanged returns the current user logged in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
		});
		// remove db auth state change listener when component dismounts
		return () => {
			unsubscribe();
		};
		// empty dependency array as we want the listener to mount on page load (will persist until dismount)
	}, []);

	return (
		// this provider allows us to use all the auth functions and access user value anywhere across the app
		// everything in app.js is wrapped inside <UserAuthContextProvider></userAuthContext.Provider> so that all the children components can access the auth properties
		<userAuthContext.Provider
			value={{ user, currentUser, logIn, signUp, logOut, googleSignIn, logInAnonymously }}
		>
			{children}
		</userAuthContext.Provider>
	);
}
export function useAuth() {
	return useContext(userAuthContext);
}