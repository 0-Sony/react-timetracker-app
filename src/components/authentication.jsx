import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import "firebase/auth";

function Authentication({ isSignedIn }) {
	const uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.GithubAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false
		}
	};

	return isSignedIn ? (
		<div>
			<button onClick={() => firebase.auth().signOut()}>Sign out!</button>
		</div>
	) : (
		<StyledFirebaseAuth
			uiConfig={uiConfig}
			firebaseAuth={firebase.auth()}
		/>
	);
}

export default Authentication;
