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
    // If the number is prime, it is added to the prime array.
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

// Declare another function
function isPrime(num) {
  // If the number is less than or equal to 1,it returns false since prime numbers start with 2.
  if (num <= 1) {
    return false;
  }
  // The Math. sqrt() - method returns the square root of a number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by any integer in this range, it returns false as it is not a prime number.
    if (num % i === 0) {
      return false;
    }
  }
  // If the number is not divisible by any integer in the range, it returns true indicating that it is a prime number.
  return true;
}

// Execution
console.log(primeNumbers(2, 5));
console.log(primeNumbers(1, 10));
console.log(primeNumbers(11, 20));