"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {arr[0] = -b/(2*a)}
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
             }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 12 / 100;
  let creditBody = amount - contribution;
  let answer =creditBody * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  answer = answer * countMonths * 100;
  return Math.round(answer) / 100;
}