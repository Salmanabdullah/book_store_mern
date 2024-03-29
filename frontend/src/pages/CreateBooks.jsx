import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  //to save users input
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book has been created successfully", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error has occured", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-xl p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-sky-400 m-8 w-[200px] max-w-full mx-auto rounded-xl text-xl"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
