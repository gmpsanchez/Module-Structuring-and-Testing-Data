const movieLength = -60; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program. The lines where a variable declaration is made are:
// Line 1: const movieLength = 8784;
// Line 3: const remainingSeconds = movieLength % 60;
// Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
// Line 6: const remainingMinutes = totalMinutes % 60;
// Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
// Line 9: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// There is 1 function call in this program. The line where a function call is made is:
// Line 10: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expressin % returns the remainder of a division operation. In this case, the expression movieLength % 60 returns the remainder of dividing the movieLength variable by 60. This is used to calculate the remaining seconds after converting the total length of the movie from seconds to minutes and hours.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is calculating the total number of minutes in the movie length. It does this by subtracting the remaining seconds from the total movie length and then dividing that value by 60 to convert it from seconds to minutes. This gives the total number of whole minutes in the movie length, excluding any remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable represents the total movie duratio converted into hours, minutes, and seconds.
// A better variable name would be formattedMovieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Experiment 1: 3600 (amount of seconds in 1 hour) - The code works and returns 1:0:0 -- formatting could be improved to display 01:00:00 instead of 1:0:0
// Experiment 2: 3661 (amount of seconds in 1 hour, 1 minute, and 1 second) - The code works and returns 1:1:1 -- however formatting could be improved to display 01:01:01 instead of 1:1:1
// Experiment 3: 59 (amount of seconds in less than a minute) - The code works and returns 0:0:59
// Experiment 3: 3599 (amount of seconds in 59 minutes and 59 seconds) - The code works and returns 0:59:59
// Experiment 4: 86400 (amount of seconds in 24 hours) - The code works and returns 24:0:0
// Experiment 5: -60 (negative value) - The code works and returns 0:-1:0 -- however this is not a valid time format and should be handled with an error message or validation to prevent negative values from being processed.