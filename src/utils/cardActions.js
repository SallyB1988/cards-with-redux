/**
 * Creates an array containing a deck of cards
 */
const createDeck = () => {
  let deck = [];
  const suits = ["H", "C", "D", "S"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(suits[i] + values[j]);
    }
  }
  return deck;
};

/**
 * Removes first card from array. Returns an object containing the card and the remaining array
 * @param {*} arr : array of strings representing playing cards
 */
const drawOne = arr => {
  if (arr.length === 0) {
    return null;
  }
  const card = arr.shift();
  return { card: card, newStack: arr };
};

/**
 * Shuffles elements in an array. Returns shuffled array.
 * @param {*} arr
 */
const shuffleDeck = arr => {
  let shuffled = [];
  while (arr.length > 0) {
    const index = Math.floor(Math.random() * arr.length);
    shuffled.push(arr[index]);
    arr.splice(index, 1);
  }
  return shuffled;
};

module.exports = {
  createDeck,
  drawOne,
  shuffleDeck
};
