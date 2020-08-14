const selectBook = (book) => {
  // selectBook is an action creator, it needs to return an action
  // an object with an type property
  console.log("a book has been selected:", book.title);
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
};

export { selectBook };
