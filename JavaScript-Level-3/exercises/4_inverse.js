// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) ==> [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) ==> [-1,2,-3,4,-5]
// invert([]) ==> []
// You can assume that all values are integers.
// Do not mutate the input array/list.

// ** CODE HERE ** //
// name of the function --> inverse
// number of arguments  --> 1
// argument type        --> Array
// argument name/s      --> arr
// return type
    // define function
function inverse(arr){
  let output = [];
  for(let i = 0; i < arr.length; i++){
     if(arr[i] > 0){
        output[i] = Math.abs(arr[i]) * -1;
     }
     else {
        output[i] = Math.abs(arr[i]);
     }
  }  // end for-loop
  return output;
}  // end function inverse

module.exports = inverse;
