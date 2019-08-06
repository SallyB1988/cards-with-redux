import { createDeck, drawOne, shuffleDeck } from "../utils/cardActions";

const initialState = {
  stack: [],
  drawn: [],
  disableDrawOne: false,
  disableDealAll: false
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "CREATE_DECK") {
    const deck = createDeck();
    newState.stack = deck;
  }

  if (action.type === "DRAW_ONE") {
    if (newState.stack.length !== 0) {
      const { card, newStack } = drawOne(newState.stack);
      newState.drawn = [...newState.drawn, card];
      newState.stack = newStack;
      if (newStack.length === 0) {
        newState.disableDrawOne = true;
        newState.disableDealAll = true;
      }
    }
  }

  if (action.type === "DEAL_ALL") {
    const drawn = [...newState.drawn, ...newState.stack];
    newState.stack = [];
    newState.drawn = drawn;
    newState.disableDrawOne = true;
    newState.disableDealAll = true;
  }

  if (action.type === "SHUFFLE") {
    const deck = shuffleDeck(createDeck());
    newState.stack = deck;
    newState.drawn = [];
    newState.disableDrawOne = false;
    newState.disableDealAll = false;
  }

  return newState;
};

export default reducer;
