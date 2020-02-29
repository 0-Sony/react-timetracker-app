import React, { useState, useEffect, useContext, createContext } from "react";
import { AuthContext } from "./authContext";
import firebase from "../services/firebase";

export const ProjectContext = createContext();

export const ProjectProvider = props => {
	const [user] = useContext(AuthContext);

	const [project, setProject] = useState([]);
	useEffect(() => {
		firebase
			.firestore()
			.collection("project")
			.where("user_id", "==", user.uid)
			.onSnapshot(snapshot => {
				const newProject = snapshot.docs.map(doc => ({
					id: doc.id,
					isSelected: false,
					...doc.data()
				}));
				setProject(newProject);
			});
	}, []);

	return (
		<ProjectContext.Provider value={[project]}>
			{props.children}
		</ProjectContext.Provider>
	);
};
