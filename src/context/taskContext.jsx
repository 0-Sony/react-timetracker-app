import React, { useState, useEffect, createContext } from "react";
import firebase from "../services/firebase";

export const TaskContext = createContext();

export const TaskProvider = props => {
	const [task, setTask] = useState([]);
	useEffect(() => {
		firebase
			.firestore()
			.collection("task")
			.onSnapshot(snapshot => {
				const newTask = snapshot.docs.map(doc => ({
					id: doc.id,
					isStarted : false,
					...doc.data()
                }));

				setTask(newTask);
			});
	}, []); 

	return (
		<TaskContext.Provider value={[task, setTask]}>
			{props.children}
		</TaskContext.Provider>
	);
};
