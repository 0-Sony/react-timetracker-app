import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import Form from "./form";
import List from "./list";

const TaskContainer = () => {
	const [task] = useContext(TaskContext);
	return (
		<div className="row">
			<div className="col">
				<Form />
			</div>
			<div className="col">
				<h3>Number Tasks : {task.length}</h3>
				<List />
			</div>
		</div>
	);
};

export default TaskContainer;
