import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between gap-x-8 text-xl items-center">
        <div className="flex justify-center gap-x-8 text-xl my-4 items-center">
          <button
            className="bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-600"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-600"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
        <div>
          <div>
            <Link to={`/users/signup`} className="border-2 bg-sky-300 px-4 py-1 rounded-lg hover:bg-sky-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mr-2 ml-2">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
