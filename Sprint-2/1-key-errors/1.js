// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// I predict that there will be an error because the variable decimalNumber is being redeclared inside the function, which is not allowed


// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const output=convertToPercentage(0.5);
console.log(output);
