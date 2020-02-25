import React, { useState } from "react";
import firebase from "../firebase";

const ProjectForm = () => {
	const [value, setValue] = useState("");

	const updateValue = e => {
		setValue(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let newProject = {
			title: value
		};
		firebase
			.firestore()
			.collection("project")
			.add(newProject);
		setValue("");
	};

	return (
		<form className=" projectForm" onSubmit={handleSubmit}>
			<h3>Create a Project</h3>
			<div className="form-group">
				<label>Project name</label>
				<input
					type="text"
					className="form-control"
					placeholder="Project Name"
				/>
				<button
					type="submit"
					className="btn btn-primary project-btn"
					onChange={updateValue}
					value={value}
				>
					Add Project
				</button>
			</div>
		</form>
	);
};
export default ProjectForm;
