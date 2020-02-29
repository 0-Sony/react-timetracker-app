import React, { useState } from "react";
import firebase from "firebase";

const ProjectForm = () => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const updateValue = e => {
		setError(false);
		setValue(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (value !== "") {
			setError(false);
			let newProject = {
				title: value
			};
			firebase
				.firestore()
				.collection("project")
				.add(newProject);
			setValue("");
		} else {
			setError(true);
		}
	};

	return (
		<form className=" projectForm" onSubmit={handleSubmit}>
			<h3>Create a Project</h3>
			<div className="form-group">
				<label>Project name</label>
				<input
					type="text"
					className="form-control form-control-lg"
					placeholder="Project Name"
					onChange={updateValue}
					value={value}
				/>
				{error === true ? (
					<span className="text-danger">No Project Name Given</span>
				) : (
					<span></span>
				)}
				<button
					onSubmit={handleSubmit}
					className="btn btn-primary project-btn"
				>
					Add Project
				</button>
			</div>
		</form>
	);
};
export default ProjectForm;
