/* Write a function that accepts a string as input and swaps the case of each character. 
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

//  Declare a function(caseChange)
function caseChange(phrase) {
  return (
    phrase
      // split("") - split the phrase into a array of charecters
      .split("")
      // The map method is used to loop over each character in the array and apply a transformation.
      .map((term) => {
        if (term === term.toUpperCase()) {
          return term.toLowerCase();
        } else if (term === term.toLowerCase()) {
          return term.toUpperCase();
        } else {
          return term;
        }
      })
      // join("") - joins the characters into a single string
      .join("")
  );
}

// Function call
console.log(caseChange("The Quick Brown Fox "));
