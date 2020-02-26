import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

import logo from "./logo.png";

const Home = () => {
	const [user] = useContext(AuthContext);
	return user ? (
		<Dashboard />
	) : (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>TimeTracker</h1>
				<Login />
			</header>
		</div>
	);
};

export default Home;
