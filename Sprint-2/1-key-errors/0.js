// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> My prediction is that the code will throw an error because the variable str is being redeclared inside the function, which is not allowed in JavaScript. The parameter str is already defined, so trying to declare it again with let will cause a syntax error.
// =============> write your new code here

function capitalise(str) {
  let capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitaliseStr;
}

console.log (capitalise ('hello'));