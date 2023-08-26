import { mergeSort } from "./mergeSort";

function animator(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const secondArray = array.slice();
	mergeSort(array, 0, array.length - 1, secondArray, animations);
	return animations;
}


export { animator };