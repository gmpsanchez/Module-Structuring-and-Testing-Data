let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

function getInitials(firstName, middleName, lastName) {
    let initials = firstName[0] + middleName[0] + lastName[0];
    return initials;
    }

    console.log(getInitials(firstName, middleName, lastName)); // Output: CKJ

// https://www.google.com/search?q=get+first+character+of+string+mdn

