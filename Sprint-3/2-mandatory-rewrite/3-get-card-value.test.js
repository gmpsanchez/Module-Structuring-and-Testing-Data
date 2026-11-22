const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

test("should return 9 for 9 of Spades", () => {
    const nineofSpades = getCardValue("9♠");
    expect(nineofSpades).toEqual(9);
    });

// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for 10 of Hearts", () => {
    const TenofHearts = getCardValue("10♥");
    expect(TenofHearts).toEqual(10);
    });

test("should return 10 for Jack of Hearts", () => {
    const JofHearts = getCardValue("J♥");
    expect(JofHearts).toEqual(10);
    });

test("should return 10 for Queen of Hearts", () => {
    const QofHearts = getCardValue("Q♥");
    expect(QofHearts).toEqual(10);
    });

test("should return 10 for King of Hearts", () => {
    const KofHearts = getCardValue("K♥");
    expect(KofHearts).toEqual(10);
    });

// Case 4: Handle Ace (A): I didn't do this anymore since it 
// was already mentioned in the first test case above
// Case 5: Handle Invalid Cards:

test("should return Invalid for Eleven of Hearts", () => {
    const invalidCard1 = getCardValue("11♥");
    expect(invalidCard1).toEqual('Invalid card rank');
    });

test("should return Invalid for One of Hearts", () => {
    const invalidCard2 = getCardValue("1♥");
    expect(invalidCard2).toEqual('Invalid card rank');
    });