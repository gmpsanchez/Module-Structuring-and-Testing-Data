const $12HourClockTime = "20:53";
const $24hourClockTime = "08:53";

//tested initially with this but got an error. console.log(`The 12 hour clock time is ${12HourClockTime} and the 24 hour clock time is ${24hourClockTime}`);
console.log(`The 12 hour clock time is ${$12HourClockTime} and the 24 hour clock time is ${$24hourClockTime}`);
//realized variables cannot start with a number directly. it should start with a $ sign in order to be valid. so i added a $ sign in front of the variable names and it worked.