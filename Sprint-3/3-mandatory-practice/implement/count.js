/*function countChar(stringOfCharacters, findCharacter) {
    
    return 5
}
*/

function countChar(stringOfCharacters, findCharacter) {
    return stringOfCharacters.split(findCharacter).length - 1; // will need more explaining of this part :D 
}

console.log(countChar("hello world", "l")); 
console.log(countChar("aaaaa", "a")); 
console.log(countChar("aaaaa", "b")); 

module.exports = countChar;

//found the solution here https://stackoverflow.com/questions/50138532/command-not-found-jest 