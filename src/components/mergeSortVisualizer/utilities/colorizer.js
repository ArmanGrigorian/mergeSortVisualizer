import { animator } from "./animator.js";

function colorizer(FIRST_COLOR, SECOND_COLOR, ANIMATION_SPEED, state) {
	const animations = animator(state);

	for (let i = 0; i < animations.length; i++) {
 
		const bars = document.getElementsByClassName("bar");
	
		const isColorChanged = i % 3 !== 2;

		if (isColorChanged) {
			const [barOneIdx, barTwoIdx] = animations[i];
			const barOneStyle = bars[barOneIdx].style;
			const barTwoStyle = bars[barTwoIdx].style;
			const color = i % 3 === 0 ? SECOND_COLOR : FIRST_COLOR;

			setTimeout(() => {
				barOneStyle.backgroundColor = color;
				barTwoStyle.backgroundColor = color;
			}, i * ANIMATION_SPEED);
		} else {
			setTimeout(() => {
				const [barOneIdx, newHeight] = animations[i];
				const barOneStyle = bars[barOneIdx].style;
				barOneStyle.height = `calc(${newHeight}px / 2)`;
			}, i * ANIMATION_SPEED);
		}
	}
}

export { colorizer };
