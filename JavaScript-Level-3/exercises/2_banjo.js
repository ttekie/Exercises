// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r",
// you are playing banjo!
//
// The function takes a name as its only argument,
// and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"



// ** CODE HERE ** //
// name of the function --> banjo
// number of arguments  --> 1
// argument type        --> string
// argument name/s      --> name
// return type          --> string

// define function
function banjo(name){
  if(name[0] == "R" || name[0] == "r"){
    return name + " plays banjo";
  }
  else{
    return name + " does not paly banjo";
  }  // end if/else statement
}  // end funtion banjo

module.exports = banjo;
