const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. penceString.length: returns the length of the string variable penceString, which is 4
// 3. penceString.substring(0, penceString.length - 1): returns a substring of the string variable penceString, starting from index 0 and ending at index 3 (the length of the string minus 1). Which results in penceString.substring(0, 3). This effectively removes the last character "p" from the string (which is the 3rd character in the string), resulting in "399"
// 4. penceStringWithoutTrailingP.padStart(3, "0"): pads the string variable penceStringWithoutTrailingP with leading zeros until it reaches a length of 3. In this case, the string is already 3 characters long, so no padding is added and the result is still "399". but other cases such as let's say 5p, it will result in 005.
// 5. for const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): returns a substring of the string variable paddedPenceNumberString, starting from index 0 and ending at index 1 (the length of the string minus 2). This effectively removes the last two characters "99" from the string (which are the 1st and 2nd characters in the string), resulting in "3". This is the pounds value.
// 6. for const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): returns a substring of the string variable paddedPenceNumberString, starting from index 1 (the length of the string minus 2) and ending at the end of the string. This effectively removes the first character "3" from the string (which is the 0th character in the string), resulting in "99". This is the pence value. The padEnd method is then used to pad the string with trailing zeros until it reaches a length of 2. In this case, the string is already 2 characters long, so no padding is added and the result is still "99". but other cases such as let's say 5p, it will result in 50.
// 7. console.log(`£${pounds}.${pence}`): logs a string to the console that represents the price in pounds and pence, using the values of the pounds and pence variables. The output will be "£3.99" for the input "399p".