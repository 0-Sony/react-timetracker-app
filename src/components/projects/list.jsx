import React, { useContext } from "react";
import { ProjectContext } from "../../context/projectContext";
import Item from "./list/item";

const List = () => {
	const [projects] = useContext(ProjectContext);
	return (
		<ul className="list-group">
			{projects.map(project => (
				<Item project={project} />
			))}
		</ul>
	);
};

export default List;
