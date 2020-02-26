import React from "react";

const ProjectListItem = ({project}) => {
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
};

export default ProjectListItem;
