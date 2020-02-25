import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";

const TaskList = () => {
    const [tasks] = useContext(TaskContext);
	return tasks.map(function(task) {
		return (
			<li
				className="list-group-item d-flex justify-content-between align-items-center"
				key={task.id}
			>
				{task.title}
                {/* @TODO render dynamic - should display the timer */}
				<span className="badge badge-primary badge-pill">14</span>
			</li>
		);
	});
};

export default TaskList;
