# SA.02: WK2: Code Challenge

#### Date, 2024/03/30

#### By Leslie Wambui Mwangi

## Description
This is a ReadMe file that explains how I solved my week 2 code challenge.

### Prerequisite
1. Create a repository on your GitHub account.
2. Use Javascript to wire down the solution.
NB: Use one folder, with 3 files for each solution. Please note that a single file should only hold one solution.
3. Push the solution to the above repository once done.
4. Submit the repository link for grading.
5. Ensure your repository has a well written README. 

NOTE: You are required to complete ALL the challenges

### Challenge 1: 
Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

### Solution
I declared the caseChange function since I wanted to change the case of the letters in the phrase. If the character is uppercase, it converts it to lowercase using return 'term.toLowerCase()'. If the character is not uppercase, it checks if it is lowercase using the 'term === term.toLowerCase()' condition. If the character is lowercase, it converts it to uppercase using return 'term.toUpperCase()'. If the character is neither uppercase nor lowercase (e.g., punctuation or whitespace), it returns the character as it is.


### Challenge 2: 
Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

### Solution
I declared my function 'myArray' with 2 parameters. The function then concatenates the 2 arrays and returns the resulting array.

### Challenge 3:
You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

### Solution
I declared my function 'primeNumbers' with 2 parameters. I then initialized an empty array. Afterwards, I used 'for...of' to iterate through each number from beginning to end. Using the 'isPrime' function, I checked if the number is a prime number. If the number is prime, it is added to the prime array.

I also declared another function called 'isPrime' which takes 1 parameter. If the number is less than or equal to 1,it returns false since prime numbers start with 2. If the number is divisible by any integer in this range, it returns false as it is not a prime number. If the number is not divisible by any integer in the range, it returns true indicating that it is a prime number.

### Resources
https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_array_iteration.asp
https://www.w3schools.com/js/js_math.asp
https://www.w3schools.com/js/js_if_else.asp
https://www.w3schools.com/js/js_loop_forof.asp

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

### Installation instruction
git@github.com:Lesliemwangi/SA.02-WK2-Code-Challenge.git

# Live Link
https://github.com/Lesliemwangi/SA.02-WK2-Code-Challenge.git

## Technologies used
Github
Javascript

## Support and contact details
(https://github.com/Lesliemwangi)

### License
The content of this site is licensed under the Lesliemwangi
Copyright (c) 2024