const express = require("express");
const mongoose = require("mongoose");
const Book = require("./model");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const DB =
  "mongodb+srv://cse18107:cse18107@cluster0.7byir.mongodb.net/books_application?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then((con) => {
    console.log("DB connection is successful!");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/GET/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: "getting all books",
      data: {
        books,
      },
    });
  } catch (error) {}
});

app.get("/GET/book/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json({
        message: "getting  book",
        data: {
          book,
        },
      });
    } catch (error) {}
  });

app.post("/POST/book", async (req, res) => {
  try {
    console.log(req.body);
    const newBook = await Book.create(req.body);
    res.status(200).json({
      message: "Sending the data of a book",
      data: {
        newBook,
      },
    });
  } catch (error) {}
});

app.patch("/PATCH/book/:id", async(req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
          message: "Updating the data of a book",
          data: {
            updatedBook,
          },
        });
      } catch (error) {}
});

app.delete("/DELETE/book/:id", async(req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
          message: "Deleting a book",
          data: {
            deletedBook,
          },
        });
      } catch (error) {}
});

app.listen(4000, () => {
  console.log("Listening from port 4000");
});
