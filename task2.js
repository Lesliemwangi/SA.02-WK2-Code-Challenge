/* Write a JavaScript function that accepts two numbers to generate an array between them. 
For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 
should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]. */

/* concat - The concat function combines the text from multiple ranges and/or strings, 
but it doesn't ignore empty arguments.
The concat method returns a new array containing elements from both arrays without modifying the original arrays.
*/

// Declare an arrow function thet takes 2 parameters
const myArray = (beginning, end) => {
  // This line concatenates the beginning array to the end array
  return beginning.concat(end);
};

// Function calls
console.log(myArray([4, 5, 6], [7]));
console.log(myArray([-4, -3, -2, -1, 0, 1, 2, 3, 4], [5, 6, 7]));
