/*function getCardValue(card) {
    // replace with your code from key-implement
    return 11;
}*/

function getCardValue(card) {
    const rank = card.substring(0,card.length -1);
    const rankNum = Number(rank)
    if (rank === "A") return 11;
    if (rank >= "2" && rank <="9") return rankNum
    if (rank === "10" || rank === "J" || rank === "K" || rank === "Q") return 10;
    return `Invalid card rank`
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

module.exports = getCardValue;