function repeat(word,n) {
    if (n>=0)
    return word.repeat(n)
    else if (n<0)
    return 'negative repetitions are not valid'
}

repeatFinal = repeat('hello',4)
console.log (repeatFinal)
module.exports = repeat;