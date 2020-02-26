import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import firebase from "../services/firebase";

const Board = () => {
	const [tasks] = useContext(TaskContext);
	let increment;

	const checkZero = value => {
		return value < 10 ? `0${value}` : value;
	};

	const triggerTimer = task => {
		let timer = task.timer;
		increment = setInterval(() => {
			if (task.is_started === true) {
				let is_started = false;
				firebase
					.firestore()
					.collection("task")
					.doc(task.id)
					.set({ ...task, is_started });
				stopTimer();
			} else {

				timer[2] = timer[2] + 1;
				if (timer[2] === 60) {
					timer[1] = timer[1] + 1;
					timer[2] = 0;
				}

				if (timer[1] === 60) {
					timer[0] = timer[0] + 1;
					timer[1] = 0;
				}

				if (timer[0] === 24) {
					timer[0] = 0;
				}
				let is_started = true;
				firebase
					.firestore()
					.collection("task")
					.doc(task.id)
					.set({ ...task, timer, is_started });
			}
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(increment);
	};

	const Line = () => {
		let count = 1;

		return tasks.map(task => {
			let i = 0;
			return (
				<tr key={task.id}>
					<th scope="row">{count++}</th>
					<td>{task.project_title}</td>
					<td>{task.title}</td>
					<td>
						{task.timer.map(function(time) {
							i++;
							let separator = i < 3 ? ":" : "";
							return (
								<span key={i}>
									{checkZero(time)}
									{separator}
								</span>
							);
						})}
					</td>
					<td>
						<button
							type="button"
							className="btn btn-info"
							onClick={() => triggerTimer(task)}
						>
							{task.is_started ? "Stop" : "Start"}
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
