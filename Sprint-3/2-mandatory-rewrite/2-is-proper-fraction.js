/*function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    // add your completed function from key-implement here
}*/

function isProperFraction(numerator, denominator) {
    if (numerator < denominator) return true;
    if (numerator > denominator) return false;
    if (numerator === denominator) return false;
}

// here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}


module.exports = isProperFraction;