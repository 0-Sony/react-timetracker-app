import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/taskContext";
import firebase from "../services/firebase";

const Board = () => {
	const [state, setState] = useState("Start");
	const [tasks, setTask] = useContext(TaskContext);

	const checkZero = value => {
		return value < 10 ? `0${value}` : value;
	};

	const triggerTimer = task => {
		console.log("start/stop timer");
	};

	const Line = () => {
		let count = 1;
		
		return tasks.map(task => {
            let i = 0;
			task.state = "start";

			return (
				<tr key={task.id}>
					<th scope="row">{count++}</th>
					<td>{task.project_title}</td>
					<td>{task.title}</td>
					<td>
						{task.timer.map(function(time) {
                            i++
                            let separator = i < 3 ? ':' : ''
							return <span>{checkZero(time)}{separator}</span>
						})}
					</td>
					<td>
						<button
							type="button"
							className="btn btn-info"
							onClick={() => triggerTimer(task)}
						>
							{task.state}
						</button>
					</td>
				</tr>
			);
		});
	};

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
				<Line />
			</tbody>
		</table>
	);
};

export default Board;
