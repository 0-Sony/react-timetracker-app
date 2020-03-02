import React, { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

import logo from "./logo.png";

const Home = () => {
	const [user] = useContext(AuthContext);
	if (user === null) {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>TimeTracker</h1>
					<Login />
				</header>
			</div>
		);
	} else if (typeof user === "undefined") {
		return (
			<div className="d-flex justify-content-center App-header">
				<div className="align-self-center  text-light mb-5">LOADING</div>
				<div
					className="spinner-border align-self-center  text-light"
					style={{ width: "8rem", height: "8rem"}}
					role="status"
				>
				</div>
			</div>
		);
	} else {
		return <Dashboard />;
	}
};

export default Home;
