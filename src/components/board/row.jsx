import React from "react";
import TaskTimer from "./taskTimer";
import checkZero from "../../tools/checkZero";
import TriggerTimerBtn from "./triggerTimerBtn";

const Row = ({ task, rowNumber }) => {
	let i = 0;
	return (
		<tr>
			<th scope="row">{rowNumber}</th>
			<td>{task.project_title}</td>
			<td>{task.title}</td>
			<td>
				{task.is_started === true ? (
					<TaskTimer task={task} />
				) : (
					task.timer.map(time => {
						i++;
						let separator = i < 3 ? ":" : "";
						return (
							<span key={i}>
								{checkZero(time)}
								{separator}
							</span>
						);
					})
				)}
			</td>
			<td>
				<TriggerTimerBtn task={task} />
			</td>
		</tr>
	);
};

export default Row;
