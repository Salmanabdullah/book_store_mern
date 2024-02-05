import PropTypes from "prop-types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="flex justify-center items-center z-50 fixed bg-black bg-opacity-60 top-0 right-0 left-0 bottom-0"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-red-600 text-3xl cursor-pointer transition ease-in-out delay-50 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 rounded-md"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-sky-200 rounded-lg">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
          ducimus dolorum nobis architecto molestias necessitatibus itaque non
          hic veritatis, quibusdam asperiores, aperiam dolorem? Quo animi
          aliquid sed aperiam laudantium fugiat beatae quia impedit delectus
          omnis laboriosam consectetur ea nesciunt, optio error. Enim incidunt
          magnam voluptatem nam voluptates ipsum sequi non et dolorem sed
          molestias deleniti qui itaque voluptatum distinctio, quae tempora illo
          ipsa? Quo non alias, sint maxime eveniet, aut illo rem ut, eaque harum
          quidem vero ea sit minus ducimus reiciendis commodi temporibus
          consectetur placeat veritatis labore? Laudantium iure officia quos,
          illum nihil non necessitatibus soluta inventore nulla.
        </p>
      </div>
    </div>
  );
};

//PropType
BookModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default BookModal;
