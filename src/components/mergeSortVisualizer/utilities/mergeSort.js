function mergeSort(mainArray, startIdx, endIdx, secondArray, animations) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSort(secondArray, startIdx, middleIdx, mainArray, animations);
	mergeSort(secondArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, secondArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, secondArray, animations) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;

	for (; i <= middleIdx && j <= endIdx; ) {
		animations.push([i, j]);

		animations.push([i, j]);
		if (secondArray[i] <= secondArray[j]) {
			animations.push([k, secondArray[i]]);
			mainArray[k++] = secondArray[i++];
		} else {
			animations.push([k, secondArray[j]]);
			mainArray[k++] = secondArray[j++];
		}
	}

	for (; i <= middleIdx; ) {
		animations.push([i, i]);

		animations.push([i, i]);

		animations.push([k, secondArray[i]]);
		mainArray[k++] = secondArray[i++];
	}

	for (; j <= endIdx; ) {
		animations.push([j, j]);

		animations.push([j, j]);

		animations.push([k, secondArray[j]]);
		mainArray[k++] = secondArray[j++];
	}
}

export { mergeSort };
