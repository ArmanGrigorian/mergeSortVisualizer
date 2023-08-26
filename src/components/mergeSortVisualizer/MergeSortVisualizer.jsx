import { useState, useEffect } from "react";
import { colorizer } from "./utilities/colorizer.js";
import "./MergeSortVisualizer.scss";

export default function MergSortVisualizer() {
	const [state, setState] = useState([]);

	const ANIMATION_SPEED = 5;
	const BARS_COUNT = 40;
	const FIRST_COLOR = "red";
	const SECOND_COLOR = "green";

	function resetArray() {
		const array = [];
		for (let i = 0; i < BARS_COUNT; i++) {
			array.push(randomValues(1, 400));
		}
		setState(array);
	}

	function randomValues(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	useEffect(() => {
		resetArray();
	}, []);

	return (
		<div className="container">
			<div className="bars">
				{state.map((value, idx) => (
					<div
						className="bar"
						key={idx}
						style={{
							backgroundColor: FIRST_COLOR,
							height: `calc(${value}px / 2)`,
						}}></div>
				))}
			</div>
			<div className="buttons">
				<button onClick={() => resetArray()}>GENERATE AN ARRAY</button>
				<button onClick={() => colorizer(FIRST_COLOR, SECOND_COLOR, ANIMATION_SPEED, state)}>
					SORT
				</button>
			</div>
		</div>
	);
}
