import React from "react";
import Projects from "./projects";
import { ProjectProvider, ProjectContext } from "../context/projectContext";
import Task from "./task";
import { TaskProvider, TaskContext } from "../context/taskContext";
import ProjectForm from "./projectForm";
import TaskForm from "./taskForm";
import Board from "./board";
import firebase from "../firebase";

const Dashboard = ({ user }) => {
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
					<div className="row">
						<ProjectProvider>
							<TaskProvider>
								<Board />
								<ProjectForm />
								<div className="projects col">
									<div>
										<ProjectContext.Consumer>
											{context => (
												<h3>
													Number Projects :{" "}
													{context[0].length}
												</h3>
											)}
										</ProjectContext.Consumer>
									</div>
									<ul className="list-group">
										<Projects />
									</ul>
								</div>
								<TaskForm />
								<div className="projects col">
									<div>
										<TaskContext.Consumer>
											{context => (
												<h3>
													Number Tasks :{" "}
													{context[0].length}
												</h3>
											)}
										</TaskContext.Consumer>
									</div>
									<ul className="list-group">
										<Task />
									</ul>
								</div>
							</TaskProvider>
						</ProjectProvider>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Dashboard;
