function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let avg = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		avg = avg + arr[i];
	}

	avg = avg / arr.length * 100;
	avg = Math.round(avg) / 100;

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sumEl = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		sumEl = sumEl + arr[i];
	}
	return sumEl;
}

function differenceMaxMinWorker(...arr) {
	let min = arr[0];
	let max = arr[0];

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else {
			sumOddElement = sumOddElement + arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	//let masElement;

	for (let i = 0; i < arrOfArr.length; i++) {
		let masElement = func(...arrOfArr[i]);
		if (masElement > maxWorkerResult) {
			maxWorkerResult = func(...arrOfArr[i]);
		}
	}
	return maxWorkerResult;
}