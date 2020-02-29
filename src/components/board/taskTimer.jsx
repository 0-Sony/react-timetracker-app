import React from "react";
import firebase from "../../services/firebase";
import useInterval from "../useInterval";
import checkZero from "../../tools/checkZero";

function handleInterval(task) {
	let timer = task.timer;
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
	firebase
		.firestore()
		.collection("task")
		.doc(task.id)
		.set({ ...task, timer });
}

const TaskTimer = ({ task }) => {
	useInterval(handleInterval, 1000, task);
	let i = 0;
	return task.timer.map((time, index) => {
		i++;
		let separator = i < 3 ? ":" : "";
		return (
			<span key={`${task.id}-time${index}`}>
				{checkZero(time)}
				{separator}
			</span>
		);
	});
};

export default TaskTimer;
