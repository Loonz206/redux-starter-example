// State arguement is not application state, only the state
// this reducer is repsonsibile for
const activeBook = (state = null, action) => {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default activeBook;
