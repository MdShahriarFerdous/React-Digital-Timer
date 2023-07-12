import React, { useState } from "react";

const App = () => {
	let time = new Date().toLocaleTimeString();
	const [timer, setTimer] = useState(time);

	let day = new Date().toDateString();

	const getTime = () => {
		setTimer(new Date().toLocaleTimeString());
	};

	setInterval(getTime, 1000);

	return (
		<div>
			<h1>{timer}</h1>
			<span>{day}</span>
			{/* <button onClick={getTime}>Get Time</button> */}
		</div>
	);
};

export default App;
