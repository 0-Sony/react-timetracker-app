import React, { useState, useEffect, createContext } from "react";
import firebase from "../services/firebase";

export const ProjectContext = createContext();

export const ProjectProvider = props => {
	const [project, setProject] = useState([]);
	useEffect(() => {
		firebase
			.firestore()
			.collection("project")
			.onSnapshot(snapshot => {
				const newProject = snapshot.docs.map(doc => ({
					id: doc.id,
					isSelected : false,
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
