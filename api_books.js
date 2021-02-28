const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
dotenv.config();

const app = express();

const Books = require("./backend/book");
const initial = require("./backend/dummy");
const { findById } = require("./backend/book");
// initial.forEach(item=>{
//     var id=uuidv4();
//     var book=new Books({
//         id,
//       author:item.author,
//       title:item.title,
//       category:item.category,
//       year:item.year,
//       pages:item.pages,
//       cover:item.cover
//     })
//     book.save()
// })

app.use(cors());
app.use(express.json());
// Books.insertMany(initial)

mongoose.connect(
  process.env.BOOK_ENV,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error while connecting to DB");
    } else {
      console.log("Database Connected");
    }
  }
);

app.get("/api/library", (req, res) => {
  Books.find()
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ message: "Error" }));
});

app.get("/api/library/sort", (req, res) => {
  const sorting = req.query.query;
  if (sorting === "new") {
    Books.find()
      .sort({ year: 1 })
      .then((book) => res.json(book));
  } else if (sorting === "old") {
    Books.find()
      .sort({ year: -1 })
      .then((book) => res.json(book));
  } else if (sorting === "all") {
    Books.find().then((book) => res.json(book));
  }
});

app.get("/api/library/filter", (req, res) => {
  var filtering = req.query.query;
  if (filtering === "all") {
    Books.find().then((book) => res.json(book));
  } else {
    Books.find({ category: filtering })
      .then((book) => res.json(book))
      .catch((err) => res.status(404).json({ message: "Filter not applied" }));
  }
});
app.get("/api/library/search", (req, res) => {
    var searching= req.query.query;
    console.log("."+searching+".")
    if(searching ===" " || searching ==="" ){
        Books.find()
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ message: "Error" }));
    }
      else {
          Books.find({title:{$regex:`/^${searching}/`}})
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ message: "Filter not applied" }));
      }
    
});

app.get("/api/library/details", (req, res) => { 
  Books.findById(req.query.id).then(book => res.json([book]) ).catch(err => res.json({message:"Error"}))
});


app.listen(5000, () => {
  console.log("Data base running");
});
