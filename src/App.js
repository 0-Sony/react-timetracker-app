import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import "./App.css";
import firebase from "./services/firebase";

import Authentication from "./components/authentication";
import Dashboard from "./components/dashboard";

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(
		() =>
			firebase.auth().onAuthStateChanged(user => {
				setIsSignedIn(!!user);
			}),
		[]
	);

	return isSignedIn ? (
		<Dashboard user={firebase.auth().currentUser} />
	) : (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>TimeTracker</h1>
				<Authentication isSignedIn={isSignedIn} />
			</header>
		</div>
	);
}

export default App;
