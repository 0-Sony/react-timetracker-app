import React, {useContext } from "react";
import { TaskContext } from "../../../context/taskContext";
import countTask from "../../../tools/countTask";

const ProjectListItem = ({ project }) => {
	const [tasks] = useContext(TaskContext);

	return (
		<li
			className="list-group-item d-flex justify-content-between align-items-center"
			key={project.id}
		>
			{project.title}
			{/* @TODO render dynamic , should display the number of task related */}
			<span className="badge badge-primary badge-pill">
				{countTask(project, tasks)}
			</span>
		</li>
	);
};

export default ProjectListItem;
