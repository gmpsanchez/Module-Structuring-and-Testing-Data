// Predict and explain first...

// =============> write your prediction here: there will be an error because there was no variable created to do the mathematical function of multiplying a*b and it went straight to console.log without completing any formula. 

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here: after running the code, it says that the result of ${multiply(10,32)} is undefined. It was undefined because there was no value that was returned.  

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  const output=a*b
  return output
}

const finalOutput=multiply(10,32)
console.log(`The result of multiplying 10 and 32 is ${finalOutput}`);
