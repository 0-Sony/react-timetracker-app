import React, { useState, useContext } from "react";
import ProjectSelector from "./form/projectSelector";
import { ProjectContext } from "../../context/projectContext";
import firebase from "../../services/firebase";

const TaskForm = () => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [errorProject, setErrorProject] = useState("");
	const [projectId, setProjectId] = useState("");
	const [projects] = useContext(ProjectContext);

	const updateValue = e => {
		setError(false);
		setValue(e.currentTarget.value);
	};

	const handleChange = e => {
		setErrorProject(false);
		setProjectId(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let projectTitle = "";

		projects.forEach(project => {
			if (project.id === projectId) {
				projectTitle = project.title;
			}
		});

		if (value === "") {
			setError(true);
		} else if (projectTitle === "") {
			setErrorProject(true);
		} else {
			setErrorProject(false);
			let newTask = {
				title: value,
				project_id: projectId,
				project_title: projectTitle,
				is_started: false,
				timer: [0, 0, 0]
			};
			firebase
				.firestore()
				.collection("task")
				.add(newTask);
			setValue("");
		}
	};

	return (
		<form className="taskForm" onSubmit={handleSubmit}>
			<h3>Create a Task</h3>
			<span>Select an existing project</span>
			<div className="form-group">
				<select
					className="form-control form-control-lg"
					onChange={handleChange}
				>
					<option value="">---</option>
					<ProjectSelector />
				</select>
				{errorProject ? (
					<span className="text-danger">Please select a project</span>
				) : (
					""
				)}
			</div>
			<div className="form-group">
				<label>Task name</label>
				<input
					type="text"
					className="form-control form-control-lg"
					placeholder="Task Name"
					onChange={updateValue}
					value={value}
				/>
				{error ? (
					<span className="text-danger">No Task Name Given</span>
				) : (
					""
				)}
			</div>
			<button type="submit" className="btn btn-primary task-btn">
				Add Task
			</button>
		</form>
	);
};

export default TaskForm;
