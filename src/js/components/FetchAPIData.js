import React, { useState, useEffect } from "react";

const RandomUser = () => {
	const [hasError, setErrors] = useState(false);
	const [RandomUser, setRandomUser] = useState({});

	async function fetchData() {
		const res = await fetch("https://randomuser.me/api/");
		res.json()
			.then(res => setRandomUser(res))
			.catch(err => setErrors(err));
	}

	useEffect(() => {
		fetchData();
	});

	return (
		<div>
			<span>{JSON.stringify(RandomUser)}</span>
			<hr />
			<span>Has error: {JSON.stringify(hasError)}</span>
		</div>
	);
};
export default RandomUser;