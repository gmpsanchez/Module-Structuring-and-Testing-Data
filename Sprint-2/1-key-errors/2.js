
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here:

//there will be an error because the return value doesn't return anything because nothing was declared in the first place. 

/*
function square(3) {
    return num * num;
}
 */

// =============> write the error message here: line 10: SyntaxError: Unexpected number

// =============> explain this error message here: the formula wasn't expressed correctly and the error is due a numeral being improperly positioned.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(originalNum) {
    const squareNum=originalNum*originalNum
    return squareNum;
}

const output=square(3);
console.log(output);

const output2=square(2);
console.log(output2);

