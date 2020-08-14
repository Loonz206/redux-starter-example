import React from "react";
import { connect } from "react-redux";

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Select a book...</div>;
  } else {
    return (
      <div>
        <h1>Details for:</h1>
        <h3>{book.title}</h3>
      </div>
    );
  }
};

const mapStateToProps = ({ activeBook }) => {
  return { book: activeBook };
};

export default connect(mapStateToProps)(BookDetail);
