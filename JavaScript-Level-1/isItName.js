// Write a function called "isItName" that accepts one argument
// of type String named "name" and returns either "Ola Universe" if the name
// is empty string eg. "" or not provided at all or "Ola <name>"


// *** YOUR CODE HERE *** //
  /* declare variables to be used
     in the program */



  /* define function isItName */
function isItName(name) {
  let empty = "";
  if (name == empty || name == null || name == undefined) {
     return "Ola Universe";
  }
  else (name == greating) {
    return "Ola " + name;
  } // end if/else statement

} // end function isItName


module.exports = isItName;
