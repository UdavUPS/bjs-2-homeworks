function getArrayParams(...arr) {
  let min=arr[0];
  let max=arr[0];
  let avg=arr[0];

  for (let i=1; i<arr.length; i++) {
    if (arr[i] < min) {
      min=arr[i];
    }
  }

  for (let i=1; i<arr.length; i++) {
    if (arr[i] > max) {
      max=arr[i];
    }
  }

  for (let i=1; i<arr.length; i++) {
    avg = avg + arr[i];
    }

    avg = avg / arr.length * 100;
    avg = Math.round(avg) / 100;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
