import { useState, useEffect } from "react";

export default (handler, interval, params) => {
	const [intervalId, setIntervalId] = useState();
	useEffect(() => {
		const id = setInterval(handler, interval, params);
		setIntervalId(id);
		return () => clearInterval(id);
	}, []);
	return () => clearInterval(intervalId);
};
