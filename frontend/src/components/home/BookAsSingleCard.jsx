import PropTypes from "prop-types";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const BookAsSingleCard = ({ book }) => {
  return (
    <div
      key={book._id}
      className="border-2 border-gray-400 rounded-lg py-2 px-4 m-4 relative hover:shadow-2xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-sky-200 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-900 text-2xl hover:text-black" />
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

BookAsSingleCard.propTypes = {
  book: PropTypes.array.isRequired,
};

export default BookAsSingleCard;
