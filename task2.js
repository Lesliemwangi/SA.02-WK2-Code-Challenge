/* Write a JavaScript function that accepts two numbers to generate an array between them. 
For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 
should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]. */

/* concat - The concat function combines the text from multiple ranges and/or strings, 
but it doesn't ignore empty arguments.
The concat method returns a new array containing elements from both arrays without modifying the original arrays.
*/

// Declare a function with 2 parameters
function valueRange(beginning, end) {
  // find the difference between beginning and end
  if (beginning - end == 0) {
    return [beginning];
  } else {
    let num = valueRange(beginning, end - 1);
    // .push - is used to add one or more elements to the end of an array and returns the new length of the array.
    num.push(end);
    return num;
  }
}

console.log(valueRange(4, 7));
console.log(valueRange(-4, 7));
