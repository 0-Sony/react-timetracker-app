import React, { useState } from "react";
import useInterval from "../../tools/useInterval";
import checkZero from "../../tools/checkZero";

const TaskTimer = ({ task }) => {
	const handleInterval = timer => {
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
		const newTimer = [...timer]
		setTimer(newTimer);
	};

	const [timer, setTimer] = useState(task.timer);
	useInterval(handleInterval, 1000, timer);
	let i = 0;
	return timer.map((time, index) => {
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
