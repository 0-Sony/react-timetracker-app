import React, { useState, useEffect, createContext } from "react";
import firebase from "../services/firebase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
	const [user, setUser] = useState(false);
	useEffect(
		() =>
			firebase.auth().onAuthStateChanged(user => {
				setUser(user)
			}),
		[]
	);

	return (
		<AuthContext.Provider
			value={([user, setUser])}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
