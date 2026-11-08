const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(12,16);

console.log(`The last 4 digits of ${cardNumber} are ${last4Digits}`);
console.log (last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//MY PREDICTION: it will only display "4" which is the -4th character of the cardNumber variable.
//Ran it and apparently it is a different error which is that cardNumber.slice is not a function. I think this is because the slice method is not being used correctly. I will try to fix it by changing the parameters of the slice method to (12,16) which should give me the last 4 digits of the cardNumber variable.
