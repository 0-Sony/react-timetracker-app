import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "../services/firebase";
import { AuthContext } from "./authContext";

export const TaskContext = createContext();

export const TaskProvider = props => {
	const [task, setTask] = useState([]);
	const [user] = useContext(AuthContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection("task")
			.where("user_id", "==", user.uid)
			.onSnapshot(snapshot => {
				const newTask = snapshot.docs.map(doc => ({
					id: doc.id,
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
