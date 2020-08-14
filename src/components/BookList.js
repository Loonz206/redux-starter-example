import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

const BookList = ({ books, selectBook }) => {
  const renderList = books.map((book) => {
    return (
      <li
        key={book.title}
        onClick={() => selectBook(book)}
        className="list-group-item"
      >
        {book.title}
      </li>
    );
  });
  return <ul className="list-group col-sm-4">{renderList}</ul>;
};

const mapStateToProps = ({ books }) => {
  return {
    books: books,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook is called the dispatch should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
