import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome");
});

//route to save a new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to get all books from databse
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
        count: books.length,
        data: books
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to get a book from databse by id
app.get("/books/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to update a book
app.put("/books/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id,req.body);

    if(!result){
        return res.status(404).json({message: "Book not found"})
    }
    return res.status(200).send({message:'Updated successfully'});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to delete a book from database
app.delete("/books/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book is deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening....`);
    });
  })
  .catch(() => console.log("no connection"));
