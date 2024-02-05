import PropTypes from "prop-types";
import React from "react";
import BookAsSingleCard from "./BookAsSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookAsSingleCard book={book} key={book._id} />
      ))}
    </div>
  );
};

//PropType
BooksCard.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksCard;
