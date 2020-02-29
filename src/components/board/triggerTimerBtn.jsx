import React from "react";
import firebase from "../../services/firebase";

const TriggerTimerBtn = ({ task }) => {
	const startTimer = task => {
		firebase
			.firestore()
			.collection("task")
			.doc(task.id)
			.set({ ...task, is_started: true });
	};

	const stopTimer = task => {
		firebase
			.firestore()
			.collection("task")
			.doc(task.id)
			.set({ ...task, is_started: false });
	};
	return (
		<button
			type="button"
			className="btn btn-info"
			onClick={
				task.is_started ? () => stopTimer(task) : () => startTimer(task)
			}
		>
			{task.is_started ? "Stop" : "Start"}
		</button>
	);
};

export default TriggerTimerBtn;
