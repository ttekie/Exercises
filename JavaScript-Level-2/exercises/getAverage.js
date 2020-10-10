// It's the academic year's end, fateful moment of your school report.
// The averages must be calculated.
// All the students come to you and
// entreat you to calculate their average for them. Easy !
// You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
//
// Note: The name of the function will be getAverage.
// It will take in one argument of type array and it will return number.
// You will need to round the number down. Do a google search for
// "round down number javascript"

    // declare variable and array to be used
    // in program
let calculate = [85.32, 96.24, 90, 78.68, 88.25];
    // define function getAverage
function getAverage(getCalculate) {
  let average = 0;
  let sum = 0;
  for(let i = 0; i < getCalculate.length; i++) {
    sum += getCalculate[i];
    average = Math.floor(sum / 5);
  }  // end for-loop
  return average;

}  // end function getAverage

module.exports = getAverage;
