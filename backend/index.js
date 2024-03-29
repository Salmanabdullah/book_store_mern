import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import signUpRoute from "./routes/signUpRoute.js";

dotenv.config();

const app = express();

// Middleware to parse request body
app.use(express.json());

// Middleware to handle cors policy
app.use(cors());
//app.use(
//  cors({
//    origin: "http://localhost:3000",
//    methods: ["GET", "POST", "PUT", "DELETE"],
//    allowedHeaders: ["Content-Type"],
//  })
//);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome");
});

//routes
app.use("/books", booksRoute);
app.use("/users", signUpRoute);

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
