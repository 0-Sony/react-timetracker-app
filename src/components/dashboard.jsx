import React,{useContext} from "react";
import { ProjectProvider } from "../context/projectContext";
import { TaskProvider } from "../context/taskContext";

import ProjectContainer from "./projects/container";
import TaskContainer from "./tasks/container";

import Board from "./board";
import firebase from "../services/firebase";

import {AuthContext} from "../context/authContext"

const Dashboard = () => {
const [user] = useContext(AuthContext)

	return (
		<div className="dashboard">
			<header>
				<nav className="dashboard-top ui inverted segment">
					<img src={user.photoURL} alt="" className="avatar" />
					<span>Welcome, {user.displayName} !</span>
					<div>
						<button
							className="ui purple inverted button"
							onClick={() => firebase.auth().signOut()}
						>
							Sign out!
						</button>
					</div>
				</nav>
				<div className="container">
						<ProjectProvider>
							<TaskProvider>
								<Board />
								<ProjectContainer/>
								<TaskContainer />
							</TaskProvider>
						</ProjectProvider>
				</div>
			</header>
		</div>
	);
};

export default Dashboard;
