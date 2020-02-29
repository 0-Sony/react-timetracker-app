import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import Row from "./board/row";

const Board = () => {
	const [tasks] = useContext(TaskContext);
	let row = 1;
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Project</th>
					<th scope="col">Task</th>
					<th scope="col">Time Spent</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map(task => (
					<Row key={`row-${task.id}`} task={task} rowNumber={row++} />
				))}
			</tbody>
		</table>
	);
};

export default Board;
