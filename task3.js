/* You are tasked with writing a function that takes an array of numbers as input 
and returns a new array containing only the prime numbers from the original array. 
How would you implement this function efficiently, ensuring that it accurately identifies prime numbers 
and returns them in the same order they appear in the input array?
For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7]. */

// Declare an arrow function thet takes 2 parameters
function primeNumbers(beginning, end) {
  // initialize an empty array
  let prime = [];
  // for ... of - used to iterate through an array
  for (let i = beginning; i <= end; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

// Declare another function
function isPrime(num) {
    if (num <= 1) {
        return false
    }
    // The Math. sqrt() method returns the square root of a number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// Execution
console.log(primeNumbers(1, 10));
console.log(primeNumbers(11, 20));