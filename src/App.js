import React from "react";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import Home from "./Home";

const App = () => (
	<AuthProvider>
		<Home />
	</AuthProvider>
);

export default App;
