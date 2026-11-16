// Predict and explain first...
//  =============> write your prediction here: there will be an error reading line 6 because a+b does not really make sense for the code plus "return" is not returning anything. Also, this line "${sum(10, 32)}" in console.log will return as undefined.

/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

*/

// =============> write your explanation here: The result came out to undefined because there was no value that was returned.  
// Finally, correct the code to fix the problem
//  =============> write your new code here

function num(a, b) {
  const sum=a+b
  return sum
}

const output = num(10,32)
console.log(`The sum of 10 and 32 is ${output}`);