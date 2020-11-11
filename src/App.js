import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
	const url = 'https://course-api.com/react-tours-project';
	const [ loading, setLoading ] = useState(true);
	const [ tours, setTours ] = useState([]);

	const constFilterItems = (id) => {
		const newTours = tours.filter((item) => {
			return item.id !== id;
		});
		setTours(newTours);
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();

			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>no tours left</h2>
					<button className="btn" onClick={() => fetchTours()}>
						refresh
					</button>
				</div>
			</main>
		);
	} else {
		return (
			<div>
				<h2 className="main-title">
					O<span className="underline">ur Tou</span>rs
				</h2>
				<Tours tours={tours} filterItems={constFilterItems} />
			</div>
		);
	}
}
export default App;
