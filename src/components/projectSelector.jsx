import React, { useContext } from "react";
import { ProjectContext } from "../context/projectContext";

const ProjectSelector = () => {
	const [projects] = useContext(ProjectContext);
	return projects.map(project => (
		<option key={project.id} value={project.id}>
			{project.title}
		</option>
	));
};

export default ProjectSelector;
