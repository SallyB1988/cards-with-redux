var utils = require('./cardActions.js');
var createDeck = utils.createDeck;
var drawOne = utils.drawOne;
var shuffleDeck = utils.shuffleDeck;

describe("CreateDeck", () => {
  const deck = createDeck();
  test("should create an array of 52 cards", function() {
    expect(deck.length).toEqual(52);
  });
});

describe("DrawOne ", () => {
  const cardData = ['A', 'B', 'C', 'D'];
  describe(" -- given an array of 4 strings", () => {
    test("should return an array of length 3", function() {
      const sampleCards = [...cardData];
      const data = drawOne(sampleCards);
      expect(data.newStack.length).toEqual(cardData.length-1);
    });
    test("should return the first element in the card variable", function() {
      const sampleCards = [...cardData];
      const data = drawOne(sampleCards);
      expect(data.card).toEqual(cardData[0]);
    });
  });
  describe(" -- given an empty array", () => {
    test("should return null", function() {
      const sampleCards =[];
      expect(drawOne(sampleCards)).toBeNull();
    })
  })

});

describe("Shuffle", () => {
  const cardData = ['A', 'B', 'C', 'D'];
  describe(" -- given an array of 4 strings", () => {
    test("should return an array of length 4", function() {
      const sampleCards = [...cardData];
      const data = shuffleDeck(sampleCards);
      expect(data.length).toEqual(cardData.length);
    });
    test("should return an array containing each element included in the original array", function() {
      const sampleCards = [...cardData];
      const data = shuffleDeck(sampleCards);
      expect(data).toContain(cardData[0]);
      expect(data).toContain(cardData[1]);
      expect(data).toContain(cardData[2]);
      expect(data).toContain(cardData[3]);
    });
  });

  describe(" -- given an empty array", () => {
    test("should return an empty array", function() {
      const sampleCards = [];
      const data = shuffleDeck(sampleCards);
      expect(data.length).toEqual(0);
    });
  });

  describe(" -- given an array with 1 element", () => {
    const cards = ['1'];
    test("should return the same array", function() {
      const sampleCards = [...cards];
      const data = shuffleDeck(sampleCards);
      expect(data).toEqual(cards);
    });
  });



});
