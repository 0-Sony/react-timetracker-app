import React, { useContext } from "react";
import { ProjectContext } from "../../context/projectContext";
import Form from "./form";
import ProjectList from "./list";

const ProjectContainer = () => {
	const [projects] = useContext(ProjectContext);
	return (
		<div className="row">
			<div className="col">
				<Form />
			</div>
			<div className="col">
				<div>
					<h3>Number Projects : {projects.length}</h3>
				</div>
				<ProjectList />
			</div>
		</div>
	);
};

export default ProjectContainer;
