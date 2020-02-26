import React, { useState, useContext } from "react";
import { TaskContext } from "../context/taskContext";
import firebase from "../services/firebase";

const Board = () => {
	const [start, setStart] = useState(false);
	const [tasks, setTask] = useContext(TaskContext);

	const checkZero = value => {
		return value < 10 ? `0${value}` : value;
	};

	const triggerTimer = task => {
		setStart(!start)
		let hrs = task.timer[0];
		let min = task.timer[1];
		let sec = task.timer[2];

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
							return <span key={i}>{checkZero(time)}{separator}</span>
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
