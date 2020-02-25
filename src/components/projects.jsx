import React, { useContext } from "react";
import { ProjectContext } from "../context/projectContext";

const ProjectList = () => {
	const [projects] = useContext(ProjectContext);
	return projects.map(function(project) {
		return (
			<li
				className="list-group-item d-flex justify-content-between align-items-center"
				key={project.id}
			>
				{project.title}
				{/* @TODO render dynamic , should display the number of task related */}
				<span className="badge badge-primary badge-pill">14</span>
			</li>
		);
	});
};

export default ProjectList;
