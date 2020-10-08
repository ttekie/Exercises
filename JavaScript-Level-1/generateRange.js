// Write a function called "generateRange" that takes in
// three arguments "min", "max", "step" if type Number
// and returns a range of integers of type array
// starting at min and ending with max
// so generateRange(2, 10, 2) would return [2,4,6,8,10]

// *** YOUR CODE HERE *** //
function generateRange(min, max, step) {
    // make sure step is not less than 1
  if(step < 1) {
    return [];
  }
  let returnArray = [];
  // for loop
  for (let i = min; i <= max; i += step) {
    returnArray.push(i);
  }
  returnArray;
}

module.exports = generateRange;
